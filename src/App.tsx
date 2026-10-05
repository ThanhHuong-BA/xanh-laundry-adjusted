import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { WhyUs } from './sections/WhyUs';
import { FounderLetter } from './sections/FounderLetter';
import { Comparison } from './sections/Comparison';
import { Investment } from './sections/Investment';
import { Equipment } from './sections/Equipment';
import { Process } from './sections/Process';
import { TinyClean } from './sections/TinyClean';
import { TeamBacking } from './sections/TeamBacking';
import { TripleNo } from './sections/TripleNo';
import { WhoIsItFor } from './sections/WhoIsItFor';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';
import { FloatingButtons } from './sections/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <FounderLetter />
        <Comparison />
        <Investment />
        <Equipment />
        <Process />
        <TinyClean />
        <TeamBacking />
        <TripleNo />
        <WhoIsItFor />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
