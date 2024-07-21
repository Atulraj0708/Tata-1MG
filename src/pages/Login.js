import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { myAuth } from "../store/firebase";
import Swal from 'sweetalert2'; // Import SweetAlert2
import classes from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const signInHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        myAuth.signInWithEmailAndPassword(myAuth.auth, email, password)
            .then((auth) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Sign-In Successful',
                    text: 'Welcome back!',
                    confirmButtonText: 'Continue'
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign-In Failed',
                    text: err.message,
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const registerHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        myAuth.createUserWithEmailAndPassword(myAuth.auth, email, password)
            .then((auth) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Account Created',
                    text: 'You can now sign in!',
                    confirmButtonText: 'Login'
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: err.message,
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div className={classes.body}>
            <Link to="/" className={classes.logo}>
                <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="Logo" />
            </Link>
            <div className={classes.card}>
                <h1 className={classes.h1}>Sign-In</h1>
                <form>
                    <label className={classes.label} htmlFor="email">Email</label>
                    <input ref={emailRef} className={classes.input} type="email" name="email" id="email" />
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input ref={passwordRef} className={classes.input} type="password" name="password" id="password" />
                    <button className={classes.button} onClick={signInHandler}>Sign-In</button>
                </form>
            </div>
            <div className={classes.newUser}>
                <button onClick={registerHandler}>Create Your Tata 1mg account</button>
            </div>
        </div>
    );
};

export default Login;
