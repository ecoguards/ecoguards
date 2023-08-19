import React from "react";
import {
    OngoingParent, 
    OngoingWrapper,
    SummaryContainer,
    Header
} from "./ongoing.bidding";
import onroar from "../../assets/onroar.png";
import onhorn from "../../assets/onhorn.png";
import ontusk from "../../assets/ontusk.png";
import {Link} from "react-router-dom";





const OngoingBidding = () => {


    return (
        <OngoingParent>
            <OngoingWrapper>
                <Header><h2>Ongoing bidding </h2>
                <Link style={{ textDecoration: 'none', color: 'white', marginLeft:'73rem' }} > View All</Link>
                </Header>
                <SummaryContainer>
                 <Link to='/horn-shield'>   <img src={onhorn} alt='onhorn'/></Link> 
                     <img src={onroar} alt='onroar'/>
                     <img src={ontusk} alt='ontusk'/>
                </SummaryContainer>

            </OngoingWrapper>



        </OngoingParent>




    )





}


export default OngoingBidding;