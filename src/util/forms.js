const SIGN_UP_URL =
  'https://docs.google.com/forms/d/1KUBUHvLBDR4knT5oSJVGIpLqpr98F4ZF8lIJ2lpjiV0/formResponse'

export async function signUp(email, role) {
  // build form data
  const form = new FormData()
  form.append('emailAddress', email)
  form.append('entry.712260371', role)
  // make POST request to Google Form
  await window.fetch(SIGN_UP_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: form
  })
}