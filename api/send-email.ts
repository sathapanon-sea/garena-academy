import type { VercelRequest, VercelResponse } from './types'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'
import dotenv from 'dotenv'
import { verifyCaptcha } from './utils/recapcha'

dotenv.config()

export default async function (request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(404).end()
  }

  const {
    email,
    phone,
    name,
    subject,
    address,
    description,
    recaptchaToken,
  } = JSON.parse(request.body)

  if (!email || !name || !subject || !description || !recaptchaToken) {
    return response.status(400).send({
      message: 'email, name, subject, description and recaptchaToken are required',
    })
  }

  const isVerify = await verifyCaptcha(recaptchaToken)

  if (!isVerify) {
    return response.status(400).send({ message: 'recaptchaToken is not verified' })
  }

  try {
    await sendMail({ email, phone, name, subject, address, description })
  } catch (error) {
    console.error(error)

    return response.status(400).send({ success: false })
  }

  return response.status(200).send({ success: true })
}

async function sendMail({
  email,
  phone,
  name,
  subject,
  address,
  description,
}: Record<string, string>) {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.CONTACT_SENDER_EMAIL!,
        pass: process.env.CONTACT_SENDER_EMAIL_PASSWORD!,
      },
    })
  )

  const mailOptions = {
    from: process.env.CONTACT_SENDER_EMAIL!,
    to: process.env.CONTACT_RECEIVER_EMAIL!,
    subject: `[GARENA ACADEMY]: ${subject}`,
    text: `
      name: ${name},
      email: ${email},
      phone: ${phone},
      subject: ${subject},
      address: ${address},
      description: ${description}
    `,
  }

  return transporter.sendMail(mailOptions)
}
