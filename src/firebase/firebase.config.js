// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyATcbDLgyOq_XfNRFDKaNQQ5OHzlzchf-g",
	authDomain: "the-dragon-news-912fb.firebaseapp.com",
	projectId: "the-dragon-news-912fb",
	storageBucket: "the-dragon-news-912fb.appspot.com",
	messagingSenderId: "848953560076",
	appId: "1:848953560076:web:c314e821b9beb515983229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;