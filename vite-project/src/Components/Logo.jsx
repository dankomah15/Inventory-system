import React from "react";

const Logo = ({image}) =>{
    return(
            
        <div className="bg-blue-700 flex justify-center items-center text-white h-screen  flex-wrap gap-0">
          <div className="text-center flex flex-col items-center space-y-4">
            <div className="">
            <img src={image} alt="logo"/></div>
            <div><h1><b>WELCOME <br /> TO <br />FAADAN INVENTORY <br />MANAGEMENT</b></h1>
            <div className="text-center mt-[200px]"><p>your number1 shopping center</p></div>
            </div>
          </div>
         </div>
            

          
        
    
        
    );

}
 export default Logo;


