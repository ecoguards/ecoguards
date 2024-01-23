import React from "react";
import {
    MarketParent,
    MarketWrapper,
    SummaryContainer2,
    SubfooterWrapper,
    BarWrapper, 
    Button,
    NButton,
    OButton,
    ButtonContainer
} from "./nftavailable.styles";
import nftspeed from "../../assets/nftspeed.png";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../nft-creation/nft.creation.styles";
import { Link } from "react-router-dom";








const Nftavailable = () => {


    return (
        <MarketParent>
            <MarketWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                
                <ButtonContainer> <Link to='/market-place'><NButton>All NFTs</NButton></Link> 
                    <Link to='/ongoing-bidding'><OButton>Ongoing Bidding</OButton></Link>
                   <Link to='/nft-available'><OButton>NFts available for sale</OButton></Link> 
                    <Link to='/available-fractionalownership'><Button>Available for Fractional ownership</Button></Link>
                    </ButtonContainer>
                

               
                <SummaryContainer2>
                    <img src={nftpride} alt="nftpride" />
                    <img src={nftbark} alt="nftbark" />
                    <img src={nftspeed} alt="nftspeed" />
                </SummaryContainer2>
               
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </MarketWrapper>



        </MarketParent>




    )





}


export default Nftavailable;