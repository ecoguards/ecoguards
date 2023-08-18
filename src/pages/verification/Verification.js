
import React from "react";
import {
    VerificationParent,
    VerificationWrapper,
    Wrapper,
    FormHeader
} from "./verification.styles";
import { Link } from "react-router-dom";
import signinimage from "../../assets/signinimage.png";
import arrow from "../../assets/arrow.png";
import { Button } from '@chakra-ui/react';







const Verification = () => {


    return (
        <VerificationParent>
            <VerificationWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>VERIFY YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

                        <p>We sent a 4-digit code to devonlane@gmail.com Code expires in 10 minutes</p>


                        <h6>Didn’t get a code?<Link style={{ textDecoration: 'none', color: '#DA8450' }}>Resend Code</Link></h6>



                        <Button
                            size='md'
                            height='48px'
                            width='460px'
                            border='10px'
                            borderRadius='5px'
                            color='#fff'
                            borderColor='#DA8450'
                            background='#DA8450'
                            fontWeight='500'
                            marginTop='20px'
                        >
                            Verify
                        </Button>

                        <p>Already have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#DA8450' }}>Log in</Link></p>


                    </form>
                 
                    <div style={{height:'80rem', width:'45rem', marginRight:"5rem"}}><img src={signinimage} alt="signinimage"/></div>
                </Wrapper>
               
            </VerificationWrapper>
        </VerificationParent>

    );
};

export default Verification;