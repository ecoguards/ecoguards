import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1
   } from "./projects.styles";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import nftspeed from "../../assets/nftspeed.png";
import {Link} from 'react-router-dom';








const Projects = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>NFTs available for sale</h2>
                <Link style={{ textDecoration: 'none', color: 'white', marginLeft:'73rem' }} > View All</Link> 
                </Header>

                <SummaryContainer1>
                    <img src={nftpride} alt="nftpride" />
                    <img src={nftbark} alt="nftbark"/>
                    <img src={nftspeed} alt="nftspeed" />
                </SummaryContainer1>
                
                
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default Projects;