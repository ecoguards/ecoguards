import React from "react";
import {
    AboutParent,
    AboutWrapper,
    SummaryContainer2,
    SubfooterWrapper,
    BarWrapper, 
    SummaryCard,
    SummaryContainer,
    Header
} from "./about.styles";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../nft-creation/nft.creation.styles";
import star from "../../assets/star.png";
import arrow from "../../assets/arrow.png";








const About = () => {


    return (
        <AboutParent>
            <AboutWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                
              
                    <Header><h2>Why Ecoguards?</h2>
                    <img src={arrow} alt="arrow" />
                </Header>
                <SummaryContainer>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star" width={40}/>
                        <h3>Direct Impact</h3>
                        <p>Donating through our platform ensures
                            <br></br>that your contributions directly support
                            <br></br>conservation projects aimed at saving
                            <br></br>endangered animals in Africa, 
                            <br></br>maximizing the impact of your donations.</p>

                    </SummaryCard>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star" width={40} />
                        <h1>Transparency and Accountability</h1>
                        <p>Our platform ensures transparency and
                            <br></br>accountability by enabling donors to track
                            <br></br>and verify the utilization of their funds,
                            <br></br>promoting trust and accountability in
                            <br></br>conservation efforts</p>
                    </SummaryCard>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star"  width={40}/>
                        <h1>Efficiency and Cost-effectiveness</h1>
                        <p>By leveraging blockchain technology and
                            <br></br>cryptocurrency donations, our platform
                            <br></br>minimizes transaction costs, allowing a
                            <br></br>higher proportion of donated funds to
                            <br></br>benefit wildlife conservation projects.</p>
                    </SummaryCard>
                </SummaryContainer>


               
                <SummaryContainer2>
                    <SummaryCard background="110A03" borderColor='110A03'>
                    <img src={star} alt='star' width='40'/>
                    <h1>Global Reach</h1>
                    <p>Our platform enables individuals and 
                    <br></br>organizations from around the world to 
                    <br></br>participate in saving endangered animals, 
                    <br></br>fostering a global community united in 
                    <br></br>their commitment to wildlife conservation.</p>
                    </SummaryCard>

                    <SummaryCard background="110A03" borderColor='110A03'>
                    <img src={star} alt='star' width='40'/>
                    <h1>Cryptocurrency Benefits</h1>
                    <p>Donating in cryptocurrency offers benefits 
                        <br></br>such as faster transactions, enhanced 
                        <br></br>security, and potential tax advantages, 
                        <br></br>making it an efficient method for 
                        <br></br>contributing to wildlife conservation.</p>
                    </SummaryCard>
                    <SummaryCard background="110A03" borderColor='110A03'>
                    <img src={star} alt='star' width='40'/>
                    <h1>Sustainable Future</h1>
                    <p>By donating to save endangered animals, 
                        <br></br>you secure a sustainable future, 
                        <br></br>preserving Africa's biodiversity, ecological 
                        <br></br>balance, and invaluable natural heritage 
                        <br></br>for generations to come.</p>
                    </SummaryCard>
                </SummaryContainer2>
               
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </AboutWrapper>



        </AboutParent>




    )





}


export default About;