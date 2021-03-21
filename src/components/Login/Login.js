import React, { useContext, useState } from 'react';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import header from '../../images/Bg.png';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, SetNewUser] = useState(false);
    const [user, setUser] = useState({
        newUser: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        Photo: '',
        error: '',
        success: false
    })
    const handleSubmit = (e) => {
        // console.log(user.email,user.password)
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // const newUserInfo = { ...user };
                    // newUserInfo.error = '';
                    // newUserInfo.success = true;
                    // setUser(newUserInfo);
                    var { displayName, email } = res.user;
                    const signInUser = { name: displayName, email }
                    setLoggedInUser(signInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // const newUserInfo = { ...user };
                    // newUserInfo.error = '';
                    // newUserInfo.success = true;
                    // setUser(newUserInfo);
                    var { displayName, email } = res.user;
                    const signInUser = { name: displayName, email }
                    setLoggedInUser(signInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const handleBlur = (e) => {
        let isFormValid;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if ((e.target.name === 'Password')===(e.target.name==="confirmPassword")) {
            const isPasswordValid = e.target.value.length > 6;
            isFormValid = isPasswordValid;
        }

        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div style={{ backgroundImage: ` url(${header})` }} className="header img-fluid" className="text-center ">
            <form onSubmit={handleSubmit} className=" text-center pt-4 mt-4  form_control" action="">
                <h2>Create an Account</h2>
                <br></br>
                {newUser && <input className="input_style" type="text" name="name" onBlur={handleBlur} placeholder="Name" required id="" />}
                <br></br>
                <br></br>
                <input className="input_style" type="email" name="email" onBlur={handleBlur} placeholder="Username or Email" required id="" />
                <br></br>
                <br></br>
                <input className="input_style" type="password" name="password" onBlur={handleBlur} placeholder="Password(at least 1 number)" required id="" />
                <br></br>
                <br></br>
                {newUser && <input className="input_style" type="password" name="confirmPassword" onBlur={handleBlur} placeholder="
                Password(at least 1 number)" required id="" />}
                <br></br>
                <br></br>
                <input className="input_style btn btn-primary" type="submit" value={newUser ? 'Create New account' : 'Login'} />
                <br />
                <br />
                <input className="input_style" type="checkbox" onChange={() => SetNewUser(!newUser)} name="newUser" id="" />
                <label className="input_style" htmlFor="">sign up</label>
                <br />
                <br />
                <p className="input_style" style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged in'} Successfully</p>
                }
            </form>
            <button className="button btn btn-primary" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;