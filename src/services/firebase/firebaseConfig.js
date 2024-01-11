// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// referncia al proyecto que acabo de conectar
const app = initializeApp(firebaseConfig);

//referencia a la base de datos
//obtenida del proyecto conectado
export  const db = getFirestore(app)