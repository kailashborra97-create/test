import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Services } from './components/Services';
import { DeliveryProcess } from './components/DeliveryProcess';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { QuickQuotation } from './components/QuickQuotation';
import { FloatingQuotationButton } from './components/FloatingQuotationButton';

export default function App() {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F0F] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <DeliveryProcess />
        <Gallery />
        <Process />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating Quotation Button */}
      <FloatingQuotationButton onClick={() => setIsQuotationOpen(true)} />
      
      {/* Quick Quotation Modal */}
      <QuickQuotation isOpen={isQuotationOpen} onClose={() => setIsQuotationOpen(false)} />
    </div>
  );
}
