import React, { useState } from "react";
import {
    CreationParent,
    CreationWrapper,
    SubfooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper,
    Select
} from "./nft.creation.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import FormTextInput from "../../components/custom-input/FormTextInput";
import Checkbox from "../../components/checkbox/Checkbox"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';





const NftMint = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    const [createProject, setCreateProject] = useState('');

    const CreateProject = (create) => {
        if (!createProject) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                fontWeight: 'bold',
                title: 'Congratulations',
                text: 'Congratulations! You have successfully created the project HornShield😊',
                background: "#110A03",
                confirmButtonColor: '#B98D63',
                confirmButtonText: 'View Project',
                // showConfirmButton: false,
                timer: 2500
            });

            setCreateProject(create);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'danger',
                title: 'You have already Submitted a Project',
                text: 'You can only submit your project once.',
                background: "#110A03",
                confirmButtonColor: '#B98D63',
                confirmButtonText: 'OK',
                timer: 2000
            });
        }
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
                            labelName="NFt Title"
                            placeholder="A catchy and descriptive name for your NFT"
                            name="title"

                        />
                        <FormTextInput
                            labelName="Price"
                            placeholder="Enter the price you wish to sell your nft"
                            name="price"

                        />
                        <FormTextInput
                            labelName="NFT description"
                            placeholder="Detail explanation of your NFT and how buyers will benefit will benefit"
                            name='description'

                        />

                        
                        <Select>
                            <option value="" hidden>Select the Category of your project</option>
                            <option value="1">Bidding</option>
                            <option value="2">Sale</option>
                            <option value="3">Fractional ownership</option>
                            
                        </Select>

                        <Select>
                            <option value="" hidden>Select Duration (this only applies to the bidding category)</option>
                            <option value="1">One month</option>
                            <option value="2">Two months</option>
                            <option value="3">Three months</option>
                            
                        </Select>
                        <br></br>
                        <FormTextInput
                            labelName="Wallet Address"
                            placeholder="e.g 0xd914...ABED"
                            name="walletAddress"
                           

                        />
                        <FormTextInput
                            labelName="Add a picture of the NFT"
                            placeholder="Drag and drop or Select file from computer, Pictures (in jpeg or png format only)"
                            name="addPicture"
                            height="5rem"

                        />
                        <Checkbox
                            id="checkbox"
                            label="Caveat: I agree that 1% of the donation will be allocated to the
                                    NatureDefenders platform from the donated funds"
                            value={checked}
                            fontSize={'0.5rem'}
                            onChange={onChange}
                        />

                        <FormButton
                            text="Mint"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}
                            height='3rem'
                            marginLeft='2rem'
                            onClick={() => CreateProject('createProject')}
                            className={createProject === 'create Project' ? 'bg-gray-300 cursor-not-allowed' : '#B98D63'}

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

export default NftMint;