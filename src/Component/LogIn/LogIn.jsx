
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const LogIn = () => {


    const [eyeClicked, setEyeClicked] = useState(false);


    const handleFormClicked = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2 className="text-5xl border-b w-52 mx-auto font-bold"> Login </h2>
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
            </form>

        </div>
    );
};

export default LogIn;

{/* */ }