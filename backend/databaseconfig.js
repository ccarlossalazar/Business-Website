import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURE_ID
};

const fbapp = initializeApp(firebaseConfig);
const firebase = getDatabase(fbapp);

export default firebase