export const CONTACT_FORM_ID = 'contact-form';

export function scrollToForm() {
  document.getElementById(CONTACT_FORM_ID)?.scrollIntoView({ behavior: 'smooth' });
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
