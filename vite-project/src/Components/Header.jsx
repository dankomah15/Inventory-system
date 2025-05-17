import React from "react";

const Header =({image}) => {


  return(
         <div >
            <nav className="flex flex-row justify-between m-0 p-0 text-white bg-blue-700" >
                <div className="flex">
            <img src={image} alt="logo" width="50" height="50"/>
            <h3>FAADAN INVENTORY <br />MANAGEMENT</h3></div>
            

           </nav>
         </div>

  )

}

export default Header;