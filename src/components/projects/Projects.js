import React from "react";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import nftspeed from "../../assets/nftspeed.png";
import {Link} from 'react-router-dom';








const Projects = () => {


    return (
        <div className="bg-[#1A1818] ">
        <div class='mx-8  text-white text-4xl mb-3 '>
                <h2>NFTs available for sale</h2>
                <Link to='/nft-available' style={{ textDecoration: 'none', color: 'white', marginLeft:'70rem' , fontSize:'1rem'  }} > View All</Link> 
                </div>

                <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8">
                    <img src={nftpride} alt="nftpride" />
                    <img src={nftbark} alt="nftbark"/>
                    <img src={nftspeed} alt="nftspeed" />
                
                </div>
                
            
        </div>



    )





}


export default Projects;