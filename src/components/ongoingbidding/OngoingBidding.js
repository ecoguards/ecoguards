import React from "react";
import onroar from "../../assets/onroar.png";
import onhorn from "../../assets/onhorn.png";
import ontusk from "../../assets/ontusk.png";
import { Link } from "react-router-dom";





const OngoingBidding = () => {


    return (
        <div className="bg-[#1A1818] ">
            
            <div class='mx-8  text-white text-4xl mb-3 '>
                <h2>Ongoing bidding </h2>
                    <Link to='/ongoing-bidding' style={{ textDecoration: 'none', color: 'white', marginLeft: '70rem', fontSize:'1rem' }} > View All</Link>
                
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                    <Link to='/horn-shield'>   <img src={onhorn} alt='onhorn' /></Link>
                    <img src={onroar} alt='onroar' />
                    <img src={ontusk} alt='ontusk' />
                </div>

            

        </div>


    )





}


export default OngoingBidding;