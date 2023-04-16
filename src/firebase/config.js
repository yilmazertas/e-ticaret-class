//// burada google firebase ile etkileşime buradan girilecek.
// firebase ile etkileşime geçildi
import { initializeApp } from "firebase/app";
// authenticaation işlemleri için(kullanıcı kaydı)
import { getAuth } from "firebase/auth;"
// firestore database erişimi için
import {getFirestore} from "firebase/firestore";
// storage erişimi için (resim kayıt yeri)
import { getStorage} from "firebase/storage";


 export const firebaseConfig = {
  apiKey: "AIzaSyDDLdLtkI-_g4NJ8DhdFAWT9Mrz7kPIxEQ",
  authDomain: "e-ticaret-class-fa30c.firebaseapp.com",
  projectId: "e-ticaret-class-fa30c",
  storageBucket: "e-ticaret-class-fa30c.appspot.com",
  messagingSenderId: "470677894478",
  appId: "1:470677894478:web:33a7b156328fa1d0565a1f"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =getFirestore(app);
export const storage=getStorage(app);

export default app;