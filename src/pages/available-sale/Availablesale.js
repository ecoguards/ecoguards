import React from "react";
import {
    MarketParent,
    MarketWrapper,
    SummaryContainer3,
    SubfooterWrapper,
    BarWrapper, 
    Button,
    NButton,
    OButton,
    ButtonContainer
} from "./availablesale.styles";
import availableroot from "../../assets/availableroot.png";
import availablecanopy from "../../assets/availablecanopy.png";
import availablemist from "../../assets/availablemist.png";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../nft-creation/nft.creation.styles";
import { Link } from "react-router-dom";








const Availablesale = () => {


    return (
        <MarketParent>
            <MarketWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
            
                  <ButtonContainer> <Link to='market-place'><NButton>All NFTs</NButton></Link> 
                    <Link><OButton>Ongoing Bidding</OButton></Link>
                   <Link><OButton>NFts available for sale</OButton></Link> 
                    <Link><Button>Available for Fractional ownership</Button></Link>
                    </ButtonContainer>
                

                <SummaryContainer3>
                    <img src={availableroot} alt="availableroot"/>
                    <img src={availablemist} alt="availablemist"/>
                    <img src={availablecanopy} alt="availablecanopy"/>
                </SummaryContainer3>
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </MarketWrapper>



        </MarketParent>




    )





}


export default Availablesale;