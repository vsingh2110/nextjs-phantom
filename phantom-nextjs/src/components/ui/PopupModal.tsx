'use client';

import { useState, useEffect } from 'react';
import ContactForm from '../features/ContactForm';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: any;
  showForm?: boolean;
}

export default function PopupModal({ 
  isOpen, 
  onClose, 
  title = "Contact Us",
  children,
  showForm = true 
}: PopupModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Listen for close event from ContactForm
  useEffect(() => {
    const handleCloseEvent = () => {
      handleClose();
    };

    window.addEventListener('closeContactModal', handleCloseEvent);
    return () => {
      window.removeEventListener('closeContactModal', handleCloseEvent);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Allow time for fade out animation
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isVisible ? 'visible' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`modal-content ${isVisible ? 'visible' : ''}`}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button 
            className="close-button"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        
        <div className="modal-body">
          {showForm ? (
            <ContactForm 
              formId="popupContactForm"
            />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}

// Hook for managing popup state
export const usePopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal
  };
}; 