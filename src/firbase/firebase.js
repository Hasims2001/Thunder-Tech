// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore } from '@firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeicjQkX-urjh_t8leap8yl7L5QAY0CL8",
    authDomain: "thundertech-27.firebaseapp.com",
    projectId: "thundertech-27",
    storageBucket: "thundertech-27.appspot.com",
    messagingSenderId: "1002919593555",
    appId: "1:1002919593555:web:855ebdb9365c3c6f93a8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();
// export default db;

// export const getProductData = async () => {
//     const productData = collection(db, "products");
//     const productSnapshot = await getDocs(productData);
//     const products = productSnapshot.docs.map((doc) => doc.data());
//     return products;
// };