import emailjs from '@emailjs/browser';

declare global {
  interface Window {
    emailjs: any;
  }
}

export const sendEmailNotification = async (formData: {
  name: string;
  phone: string;
  email?: string;
  country: string;
  city: string;
  hospital?: string;
  enquiry?: string;
}) => {
  try {
    const response = await emailjs.send(
      "service_x2ysvvr", 
      "template_0qgs9u9", 
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || '',
        country: formData.country,
        city: formData.city,
        hospital: formData.hospital || '',
        enquiry: formData.enquiry || '',
      },
      {
        publicKey: "2kZrD3IVCkNfJsW6w"
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}; 