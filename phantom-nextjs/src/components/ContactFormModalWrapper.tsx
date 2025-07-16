'use client';

import { useState, useEffect } from 'react';
import ContactFormModal from './ContactFormModal';

export default function ContactFormModalWrapper() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    // Listen for the custom event to open the modal
    const handler = () => setContactModalOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <ContactFormModal 
      isOpen={isContactModalOpen} 
      onClose={() => setContactModalOpen(false)} 
    />
  );
} 