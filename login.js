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

login.addEvenListener('click', (e) =>{
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("Usuario ingresado");
        console.log(cred.user);
    }).catch(error => {        
        const errorCode = error.code;
        
        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya está en uso');        
        else if(errorCode == 'auth/invalid-email')        
            alert('El correo no es válido');
        else if (errorCode == 'auth/weak-password')        
            alert('La contraseña debe tener al menos 6 caracteres');
        else if (errorCode == 'auth/wrong-password')        
            alert('Contraseña Incorrecta');
    })
})

cerrar.addEvenListener('click', (e) => {
    auth.singOut().then(() => {
        alert('Sesion cerrada');
    }).catch((error) => {
        alert('Error al iniciar sesión')
    });
})

auth.onAuthStateChanged(user => {
    if(user){
        console.log("Usuario activo");
        var email = user.emailVerified;
        if(emailVerified){
            window.open("https://www.google.com/")
        }else{
            auth.singOut();
        }
    }else{
        console.log("Usuario inactivo");
    }
});