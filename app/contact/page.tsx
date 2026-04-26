import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us — Choti Ki Duniya',
  description: 'Get in touch with Choti — feedback, questions, or just to say hi. We read every message.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactForm />;
}
