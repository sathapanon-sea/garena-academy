import fetch from 'node-fetch'

export async function verifyCaptcha(recaptchaToken: string): Promise<boolean> {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  })
  const reponseJson = await response.json()

  return reponseJson.success
}
