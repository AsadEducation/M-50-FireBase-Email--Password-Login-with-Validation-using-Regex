import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/firebase.init";
import { useState } from "react";


const Register = () => {


    const [errorMessage, setErrorMessage] = useState('');

    const [success, setSuccess] = useState(false);

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;



    const handleLogInForm = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const terms = event.target.terms.checked;
        console.log(terms);

        if (password.length < 6) {
            setErrorMessage('Password Length Should be 6 character long');
            return;
        }

        if(!terms){ setErrorMessage('Please Accept Our Terms and Condition');return}

        // validating password

        if (!regex.test(password)) {
            setErrorMessage('password should contain at least 1 upper and 1 lower and 1 number and 1 special chars');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                setSuccess(true);
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                </label>
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

                        {
                            errorMessage && <p className="text-sm m-4 text-red-500">{errorMessage}</p>
                        }

                        {
                            success && <p className="text-sm m-4 text-green-500">Log In Successful</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;