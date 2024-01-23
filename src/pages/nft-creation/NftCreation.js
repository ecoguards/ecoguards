import React from "react";
import {
    CreationParent,
    CreationWrapper,
    SubfooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper
} from "./nft.creation.styles";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import FormTextInput from "../../components/custom-input/FormTextInput";
import { useNavigate } from "react-router-dom";






const NftCreation = () => {
    
    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/nft-mint")
    };


    return (
        <CreationParent>
            <CreationWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                <FormHeader>
                            <h3>MINT OR CREATE NFTs</h3>

                            <img src={arrow} alt="arrow" />
                            <p>This form section is to get details about the project creator</p>
                        </FormHeader>
                    <form>
                        

                      
                        <FormTextInput
                            labelName="Contact Information"
                            placeholder="Add your contact information, email, phone number and social media links"
                            name="contactInformation"

                        />
                        
                        <FormTextInput
                            labelName="Team background"
                            placeholder="Brief description of the team background, their qualification and experience"
                            name="teamBackground"

                        />
                        
                       
                        <FormTextInput
                            labelName="Add a profile picture"
                            placeholder="Drag and drop or Select file from computer, Pictures (in jpeg or png format only)"
                            name="addPicture"
                            height="5rem"

                        />
                       <FormTextInput
                            labelName="Add a banner picture"
                            placeholder="Drag and drop or Select file from computer, Pictures (in jpeg or png format only)"
                            name="addPicture"
                            height="5rem"

                        />

                        <FormButton
                            text="Proceed"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}
                            handleClick={routeToNextPage}
                         
                        />




                    </form>

                    
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </CreationWrapper>
        </CreationParent>

    );
};

export default NftCreation;