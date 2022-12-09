import React from "react";
import BlogList from "./BlogList";
import NavBar from "./NavBar";


const Container = () =>{
    return(
        <div className="container ">
            <div className="md:w-9/12 mx-auto">
                <NavBar></NavBar>
                <BlogList></BlogList>
            </div>
        </div>
    );
}


export default Container;