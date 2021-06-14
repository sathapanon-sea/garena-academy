import type { VercelRequest, VercelResponse } from './types'
import querystring from 'querystring'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import { verifyCaptcha } from './utils/recapcha'

dotenv.config()

export default async function (request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(404).end()
  }

  const {
    sex,
    age,
    education,
    status,
    city,
    reason,
    otherReason,
    reference,
    referenceDetails,
    recaptchaToken,
  } = JSON.parse(request.body)

  if (
    !sex ||
    !age ||
    !education ||
    !status ||
    !city ||
    !reason ||
    (reason.includes('__other_option__') && !otherReason) ||
    !reference ||
    !referenceDetails ||
    !recaptchaToken
  ) {
    return response.status(400).send({
      message:
        'sex, age, education, status, city, reason, otherReason, reference, referenceDetails and recaptchaToken are required',
    })
  }

  const isVerify = await verifyCaptcha(recaptchaToken)

  if (!isVerify) {
    return response.status(400).send({ message: 'recaptchaToken is not verified' })
  }

  const referenceDetailsString = Object.entries(referenceDetails)
    .filter(([_, v]) => v)
    .map(([k, v]) => {
      return `${k !== '__other_option__' ? k : 'อื่น ๆ'}: ${v}`
    })
    .join('\n')

  const queryString = querystring.stringify({
    [process.env.GOOGLE_FORM_FIELD_SEX_ID!]: sex,
    [process.env.GOOGLE_FORM_FIELD_AGE_ID!]: age,
    [process.env.GOOGLE_FORM_FIELD_EDUCATION_ID!]: education,
    [process.env.GOOGLE_FORM_FIELD_STATUS_ID!]: status,
    [process.env.GOOGLE_FORM_FIELD_CITY_ID!]: city,
    [process.env.GOOGLE_FORM_FIELD_REASON_ID!]: reason,
    [process.env.GOOGLE_FORM_FIELD_REASON_ID! + '.other_option_response']: otherReason,
    [process.env.GOOGLE_FORM_FIELD_REFERENCE_ID!]: reference,
    [process.env.GOOGLE_FORM_FIELD_REFERENCE_ID! +
    '.other_option_response']: referenceDetails['__other_option__'],
    [process.env.GOOGLE_FORM_FIELD_DETAIL_ID!]: referenceDetailsString,
  })

  try {
    await fetch(
      `https://docs.google.com/forms/d/e/${process.env
        .GOOGLE_FORM_ID!}/formResponse?${queryString}`,
      {
        method: 'POST',
      }
    )
  } catch (error) {
    console.error(error)

    return response.status(400).send({ success: false })
  }

  return response.status(200).send({ success: true })
}
