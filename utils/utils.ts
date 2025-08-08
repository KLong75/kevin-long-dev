export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validateName(name: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(name));
}
export function validateMessage(message: string) {
  return message.trim().length > 0;
}
// export function validatePhone(phone: string) {
//   // Regular expression to match phone number formats
//   const re = /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
//   return phone === "" || re.test(String(phone));
// }
export function validatePhone(phone: string) {
  if (!phone.trim()) {
    return false;
  }
  const re =
    /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return re.test(String(phone));
}
export function validateForm(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  return (
    validateName(name) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateMessage(message)
  );
}
