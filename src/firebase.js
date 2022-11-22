import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
} from "firebase/firestore";
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from "./constants";

const logInWithEmailAndPassword = async (email, password) => {
    try {
        navigator.vibrate([125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600]);
        const data = await signInWithEmailAndPassword(auth, email, password);
        return data;
    } catch (err) {
        navigator.vibrate([500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]);
    }
};

const firebaseConfig = { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    logInWithEmailAndPassword,
    db,
    auth
};