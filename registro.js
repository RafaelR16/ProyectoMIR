import { initializeApp } from 'www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAL9kYWhktwpOLrAIryfKOU3dVZWl-VWkE",
  authDomain: "proyecto-mir-db203.firebaseapp.com",
  projectId: "proyecto-mir-db203",
  storageBucket: "proyecto-mir-db203.firebasestorage.app",
  messagingSenderId: "1013415756822",
  appId: "1:1013415756822:web:6ff4fcf3d9dc0eb7afe137",
  measurementId: "G-GVSMEZW4FK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEvenListener('click', (e) =>{
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("Usuario creado");
        auth.singOut();
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación')
        });
    }).catch(error => {        
        const errorCode = error.code;
        
        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya está en uso');        
        else if(errorCode == 'auth/invalid-email')        
            alert('El correo no es válido');
        else if (errorCode == 'auth/weak-password')        
            alert('La contraseña debe tener al menos 6 caracteres');
    })
})