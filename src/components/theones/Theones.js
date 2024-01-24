import React from "react";
import be from "../../assets/be.png";
import stand from "../../assets/stand.png";
import give from "../../assets/give.png";
import arrow from "../../assets/arrow.png";





const Theones = () => {


    return (
        <div className="bg-[#1A1818] ">
             <div class=' text-white text-4xl mb-3 mx-96 mt-2'>
               <h2>The ones who have no voice, need</h2>
                           <h3 class='mx-40'>you to speak up</h3>
                    <img src={arrow} alt="arrow" class='mx-60' />
                </div>

                <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                   <img src={stand} alt="stand" />
                   <img src={be} alt="be" />
                   <img src={give} alt="give" />
                </div>
                
                </div>




    )





}


export default Theones;