// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNwAOirsH_LHJCjJi2xQAGpRpg-igjc0c",
    authDomain: "anything-helper.firebaseapp.com",
    projectId: "anything-helper",
    storageBucket: "anything-helper.appspot.com",
    messagingSenderId: "385552029091",
    appId: "1:385552029091:web:2e1a83e152bc95b181f616",
    measurementId: "G-C06BC31VM7"
};

// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(firebaseApp);

export type UserInfo = {
    name: string
}

export async function AddUser(userInfo: UserInfo) {
    try {
        const docRef = await addDoc(collection(db, "dev-UserInfo"), {
            name: userInfo.name,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export function OnSnapshot(func: () => void) {

}
