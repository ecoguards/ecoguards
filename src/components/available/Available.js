import React from "react";
import {
    AvailableParent,
    AvailableWrapper,
    Header,
    SummaryContainer1,
    Button,
    ButtonContainer
} from "./available.styles";
import nftbark from "../../assets/nftbark.png";
import nftpride from "../../assets/nftpride.png";
import nftspeed from "../../assets/nftspeed.png";
import { Link } from "react-router-dom";








const Available = () => {


    return (
        <AvailableParent>
            <AvailableWrapper>
                <Header><h2>Available for fractional ownership</h2>
                <Link to='/available-fractionalownership' style={{ textDecoration: 'none', color: 'white', marginLeft:'73rem' }} > View All</Link>  
                </Header>

                <SummaryContainer1>
                    <img src={nftpride} alt="nftpride" />
                    <img src={nftbark} alt="nftbark"/>
                    <img src={nftspeed} alt="nftspeed" />
                </SummaryContainer1>
                
                <ButtonContainer>
                    <Button>
                        <Link to='horn-shield'  style={{ textDecoration: 'none', color: 'white' }}>Explore more Projects</Link>
                    </Button>
                </ButtonContainer>
            </AvailableWrapper>



        </AvailableParent>




    )





}


export default Available;