import React from "react";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import nftspeed from "../../assets/nftspeed.png";
import { Link } from "react-router-dom";








const Available = () => {


    return (
        <div className="bg-[#1A1818] ">
            <div class='mx-8  text-white text-4xl mb-3 mt-2'>
                <h2>Available for fractional ownership</h2>
                <Link to='/available-fractionalownership' style={{ textDecoration: 'none', color: 'white', marginLeft: '70rem' , fontSize:'1rem' }} > View All</Link>
            </div>

            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                <img src={nftpride} alt="nftpride" />
                <img src={nftbark} alt="nftbark" />
                <img src={nftspeed} alt="nftspeed" />

            </div>
            <div class='mx-96 px-40 mt-2'>
                <Link to='horn-shield' style={{ textDecoration: 'none', color: 'white' }}><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-48 h-15 rounded">Explore more Projects</button></Link>
            </div>

        </div>







    )





}


export default Available;