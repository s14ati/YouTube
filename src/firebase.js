import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const getUserData = async (uid) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such user!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        toast.success("Account created successfully 🎉");
    }
    catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully ✅");
    }
    catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const logout = async () => {
    signOut(auth);
}

export { auth, db, login, signup, logout, getUserData }