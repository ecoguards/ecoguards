import React, { useState } from "react";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
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
                        <label class="block text-white text-sm font-bold mb-2" for="title">
                            NFt Title
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="A catchy and descriptive name for your NFT" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="price">
                            Price
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="price" type="price" placeholder="Enter the price you wish to sell your nft" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="description">
                            NFT description
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Detail explanation of your NFT and how buyers will benefit" required></input>
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-[#1A1818] border border-[#fff] text-[#fff] rounded leading-tight focus:outline-none focus:bg--[#B1B7DD] focus:border-[##1A1818]" id="category">
                            <option>Select the Category of your project</option>
                            <option>Bidding</option>
                            <option>Sale</option>
                            <option>Fractional ownership</option>

                        </select>

                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <br></br>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-[#1A1818] border border-[#fff] text-[#fff] rounded leading-tight focus:outline-none focus:bg--[#B1B7DD] focus:border-[##1A1818]" id="category">
                            <option>Select Duration (this only applies to the bidding category)</option>
                            <option>One month</option>
                            <option>Two months</option>
                            <option>Three months</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="walletAddress">
                            Wallet Address
                        </label>
                        <input class="bg-[#1A1818] border-[#fff] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="walletAddress" type="text" placeholder="e.g 0xd914...ABED" required></input>
                    </div>
                    <div class='mb-1'>
                        <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Add a picture of the NFT </label>
                        <input class="block w-full cursor-pointer bg-[#1A1818] border-[#fff] border-solid border-2  text-[#fff] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' required />
                    </div>
                    <div class='text-white'>
                        <Checkbox
                            id="checkbox"
                            label="Caveat: I agree that 1% of the donation will be allocated to the
                                    Ecoguards platform from the donated funds"
                            value={checked}
                            fontSize={'0.5rem'}
                            onChange={onChange}
                        />
                    </div>
                    <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#DA8450] hover:bg-[#1A1818]'
                        onClick={() => CreateProject('createProject')}>Create Project</button>






                </form>
            </section>


            <Subfooter />

        </main>


    );
};

export default NftMint;