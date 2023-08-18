import React from "react";
import {
        HomeParent,
        HomeWrapper,
        CentreWrapper,
        TextContainer,
        GButton,
        LButton,
        ButtonContainer,
        ProjectsWrapper,
        LatestWrapper,
        TheonesWrapper,
        FooterWrapper,
        SubfooterWrapper,
        BarWrapper,
        OngoingBiddingWrapper,
        AvailableWrapper
} from "./home.styles";
import { Link } from "react-router-dom";
import landingimage from "../../assets/landingimage.svg"
import Projects from "../../components/projects/Projects";
import Latest from "../../components/latest/Latest";
import Theones from "../../components/theones/Theones";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import OngoingBidding from "../../components/ongoingbidding/OngoingBidding";
import Available from "../../components/available/Available";








const Home = () => {


      



        return (
                <HomeParent>
                        <HomeWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                               <div> <img src={landingimage} alt='landingimage'/></div>
                                        <TextContainer>

                                                <ButtonContainer> <Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }} ><GButton >Explore</GButton></Link>


                                                        <Link to='/nft-creation' style={{ textDecoration: 'none', color: 'white' }}><LButton>Mint NFTs</LButton></Link>

                                                </ButtonContainer>
                                                
                                        </TextContainer>
                                        

                                </CentreWrapper>
                                <OngoingBiddingWrapper>
                                        <OngoingBidding />
                                </OngoingBiddingWrapper>
                                <ProjectsWrapper>
                                        <Projects />
                                </ProjectsWrapper>
                                <AvailableWrapper>
                                <Available/>
                                </AvailableWrapper>
                                <LatestWrapper>
                                        <Latest />
                                </LatestWrapper>
                                <TheonesWrapper>
                                        <Theones />
                                </TheonesWrapper>

                                <FooterWrapper>
                                        <Footer />
                                </FooterWrapper>
                                <SubfooterWrapper>
                                        <Subfooter />
                                </SubfooterWrapper>
                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;