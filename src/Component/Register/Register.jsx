import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../FireBase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {


    const [errorMessage, setErrorMessage] = useState('');

    const [success, setSuccess] = useState(false);

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;



    const handleLogInForm = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;

        console.log(name,photo);

        const profile = {
            displayName:name,
            photoURL:photo,
        }

        const terms = event.target.terms.checked;
        // console.log(terms);

        if (password.length < 6) {
            setErrorMessage('Password Length Should be 6 character long');
            return;
        }

        if (!terms) { setErrorMessage('Please Accept Our Terms and Condition'); return }

        // validating password

        // if (!regex.test(password)) {
        //     setErrorMessage('password should contain at least 1 upper and 1 lower and 1 number and 1 special chars');
        //     return;
        // }

        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                setSuccess(true);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // console.log('Verification email sent');
                    })

                updateProfile(auth.currentUser,profile)
                .then(()=>{
                    console.log('current user updated');
                })
                .catch((error)=>{
                    console.log('error happend while updating user');
                })
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })

    }
    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 hover:text-red-500">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogInForm} className="card-body">

                            {/* name for user  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>

                            {/* photo of user  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                            </div>

                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                {/* checkbox from daisy ui  */}

                                <div className="form-control">
                                    <label className="cursor-pointer label justify-start">
                                        <input type="checkbox" name="terms" className="checkbox checkbox-info" />
                                        <span className="label-text ml-2">Accept Our Terms and condition</span>

                                    </label>
                                </div>

                                {/* submit button  */}

                                <input className="btn btn-primary" type="submit" name="submit" value="Register" />

                            </div>
                        </form>

                        <p className="text-white mx-6 mb-2"> Already Have an Account ?  <Link to="/login" className="underline text-blue-300"> Login</Link> </p>

                        {
                            errorMessage && <p className="text-sm m-4 text-red-500">{errorMessage}</p>
                        }

                        {
                            success && <p className="text-sm m-4 text-green-500">Sign Up Successful</p>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;