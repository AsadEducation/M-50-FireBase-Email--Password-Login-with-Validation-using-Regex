import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;