import React from "react";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";






const NftCreation = () => {

    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/nft-mint")
    };


    return (
        <main className="bg-[#1A1818] w-screen">

            <Navbar />
            <section class='w-[90%] md:w-[80%] mx-auto py-10'>
                <form class='mt-40 w-3/4 mx-28'>
                    <h1 className="text-[30px] md:text-[34px] font-bold text-white mx-40">
                        MINT OR CREATE NFTs{" "}
                    </h1>
                    <img src={arrow} alt="arrow" class='mx-72' />
                    <p class='text-white mx-32'>This form section is to get details about the project creator</p>


                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="contactInformation">
                            Contact Information
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="contactInformation" type="text" placeholder="Add your contact information, email, phone number and social media links" required></input>
                    </div>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="teamBackground">
                            Team background
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="teamBackground" type="text" placeholder="Brief description of the team background, their qualification and experience" required></input>
                    </div>
                    <div class='mb-1'>
                        <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Add a profile picture </label>
                        <input class="block w-full cursor-pointer bg-[#1A1818] border-[#fff] border-solid border-2  text-[#fff] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' required />
                    </div>

                    <div class='mb-1'>
                        <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Add a banner picture </label>
                        <input class="block w-full cursor-pointer bg-[#1A1818] border-[#fff] border-solid border-2  text-[#fff] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' required />
                    </div>

                    <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DA8450] hover:bg-[#1A1818]'
                        handleClick={routeToNextPage}>Proceed</button>





                </form>

            </section>

            <Subfooter />


        </main>

    );
};

export default NftCreation;