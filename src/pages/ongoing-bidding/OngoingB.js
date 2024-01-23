import React from "react";
import {
    MarketParent,
    MarketWrapper,
    SummaryContainer1,
    SubfooterWrapper,
    BarWrapper, 
    Button,
    OButton,
    NButton,
    ButtonContainer
} from "./ongoingb.styles";
import ontusk from "../../assets/ontusk.png";
import onhorn from "../../assets/onhorn.png";
import onroar from "../../assets/onroar.png";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../nft-creation/nft.creation.styles";
import { Link } from "react-router-dom";








const OngoingB = () => {


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
                <SummaryContainer1>
              <Link to='/horn-shield'> <img src={onhorn} alt="onhorn" /></Link>  
                    <img src={onroar} alt="onroar" />
                    <img src={ontusk} alt="ontusk" />
                </SummaryContainer1>
                
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </MarketWrapper>



        </MarketParent>




    )





}


export default OngoingB;