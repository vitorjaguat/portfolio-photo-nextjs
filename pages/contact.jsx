import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div>
      <Hero heading='Contact' message='Submit the form below for more info' />
      <Contact />
    </div>
  );
}
