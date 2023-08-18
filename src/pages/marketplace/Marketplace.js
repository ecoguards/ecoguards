import React from "react";
import {
    MarketParent,
    MarketWrapper,
    SummaryContainer1,
    SummaryContainer2,
    SummaryContainer3,
    SubfooterWrapper,
    BarWrapper, 
    Button,
    NButton,
    OButton,
    ButtonContainer
} from "./marketplace.styles";
import ontusk from "../../assets/ontusk.png";
import onhorn from "../../assets/onhorn.png";
import nftspeed from "../../assets/nftspeed.png";
import onroar from "../../assets/onroar.png";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import availableroot from "../../assets/availableroot.png";
import availablecanopy from "../../assets/availablecanopy.png";
import availablemist from "../../assets/availablemist.png";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../nft-creation/nft.creation.styles";
import { Link } from "react-router-dom";








const Marketplace = () => {


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
                 <img src={onhorn} alt="onhorn" />
                    <img src={onroar} alt="onroar" />
                    <img src={ontusk} alt="ontusk" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={nftpride} alt="nftpride" />
                    <img src={nftbark} alt="nftbark" />
                    <img src={nftspeed} alt="nftspeed" />
                </SummaryContainer2>
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


export default Marketplace;