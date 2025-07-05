import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_Jl_3FgNT7bHFRY63_e2FkfuqMkUJz5A",
  authDomain: "phantom-test-site-form.firebaseapp.com",
  databaseURL: "https://phantom-test-site-form-default-rtdb.firebaseio.com",
  projectId: "phantom-test-site-form",
  storageBucket: "phantom-test-site-form.appspot.com",
  messagingSenderId: "514732869106",
  appId: "1:514732869106:web:b65039a4f2e1728aeb976b"
};

// Initialize Firebase only if it hasn't been initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);

export interface FormData {
  name: string;
  phone: string;
  email?: string;
  country: string;
  enquiry?: string;
  city: string;
  hospital?: string;
  timestamp: string;
}

export const submitFormToFirebase = async (formData: FormData) => {
  try {
    const docRef = await addDoc(collection(db, "formData"), {
      ...formData,
      timestamp: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting to Firebase:", error);
    throw error;
  }
}; 