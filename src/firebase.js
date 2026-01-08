

// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// IMPORTANT: use your own keys here from your .env
// #region agent log
const envVars = {
  REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_SENDER_ID: process.env.REACT_APP_FIREBASE_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
  REACT_APP_MEASUREMENT_ID: process.env.REACT_APP_MEASUREMENT_ID,
};
fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:10',message:'Environment variables check',data:{envVars,apiKeyType:typeof process.env.REACT_APP_FIREBASE_API_KEY,apiKeyUndefined:process.env.REACT_APP_FIREBASE_API_KEY===undefined,apiKeyEmpty:process.env.REACT_APP_FIREBASE_API_KEY===''},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,E'})}).catch(()=>{});
// #endregion agent log
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// #region agent log
fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:20',message:'Firebase config object before init',data:{config:firebaseConfig,apiKeyLength:firebaseConfig.apiKey?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
// #endregion agent log

// Initialize Firebase once
if (!firebase.apps.length) {

  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:25',message:'About to initialize Firebase',data:{appsLength:firebase.apps.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion agent log
  try {
    firebase.initializeApp(firebaseConfig);
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:28',message:'Firebase initialized successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion agent log
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:31',message:'Firebase init error caught',data:{errorMessage:error.message,errorCode:error.code,errorName:error.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
    // #endregion agent log
    throw error;
  }
}

// Get the initialized app instance
const app = firebase.app();

// Helpers used elsewhere
// #region agent log
fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:35',message:'About to get auth service',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
// #endregion agent log
let auth;
try {
  auth = firebase.auth();
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:40',message:'Auth service obtained successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
  // #endregion agent log
} catch (error) {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/86b6f508-e22f-4355-b9f5-9dd3a051b7eb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'firebase.js:43',message:'Auth service error',data:{errorMessage:error.message,errorCode:error.code,errorName:error.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
  // #endregion agent log
  throw error;
}
const db = firebase.firestore();
const storage = firebase.storage();

export { app, auth, db, storage };
// Default export for ReactReduxFirebaseProvider
export default firebase;