
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { auth } from "../FireBase/firebase.init";
import { Link } from "react-router-dom";

const LogIn = () => {

    const [success, setSuccess] = useState(false);

    const [errorMessage, setErrorMessage]= useState('');


    const handleFormClicked = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user);
            setSuccess(true);
        })
        .catch((error)=>{
            console.log(error);
            setErrorMessage('Invalid Email or Password');
        })

    }

    return (
        <div>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleFormClicked} className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {
                                success? <p className="text-green-500">Log in Successful </p>: <p className="text-red-500">{errorMessage}</p>
                            }
                        </form>
                        <p className="text-white m-4">New To This Website? Please <Link to="/register" className="underline text-blue-300"> SignUp</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;

{/* Experimental */ }

{/* <h2 className="text-5xl border-b w-52 mx-auto font-bold"> Login </h2>
            <form onSubmit={handleFormClicked}>

                <label className="relative">

                    <span className="text-white font-bold mx-4">Password:</span>

                    <input type={eyeClicked ? "text" : "password"} className="bg-white m-12 rounded-xl  pl-6 h-12 w-56" name="password" placeholder="Enter Your Password" id="" />

                    <span> <button onClick={() => setEyeClicked(!eyeClicked)} className="absolute text-xl top-0 right-[15%] text-blue-500">
                        {
                            eyeClicked ? <VscEyeClosed /> : <VscEye />
                        }
                    </button>

                    </span>
                </label>
            </form> */}