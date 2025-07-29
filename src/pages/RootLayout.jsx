import Nav from "../globalComponents/nav";
import {Outlet } from "react-router-dom"
function RootLayout (){
    return(

        <>
        <Nav/>
        <Outlet/>
        </>
    )
}

export default RootLayout