// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 上記importをFireStoreを利用するために追加

const firebaseConfig = {
  apiKey: "AIzaSyBatrWlOZGqwGFkoxvwf4zhekvW7XXyPGw",
  authDomain: "twitter-clone-udemy-71efb.firebaseapp.com",
  projectId: "twitter-clone-udemy-71efb",
  storageBucket: "twitter-clone-udemy-71efb.appspot.com",
  messagingSenderId: "81292210641",
  appId: "1:81292210641:web:276355fc125fbfda5d70f0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 下記処理をFireStoreを利用するために追加
const db = getFirestore(app);

// ドキュメントには存在しないが、dbの値をプロジェクト全体で利用できるように exportを実装している
export default db;