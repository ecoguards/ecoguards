import React from "react";
import { Link } from "react-router-dom";
import landingimage from "../../assets/landingimage.svg"
import Projects from "../../components/projects/Projects";
import Latest from "../../components/latest/Latest";
import Theones from "../../components/theones/Theones";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import OngoingBidding from "../../components/ongoingbidding/OngoingBidding";
import Available from "../../components/available/Available";








const Home = () => {



        return (
                <main class='bg-[#1A1818] w-screen'>


                        <Navbar />

                        <section>
                                <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
                                        <div> <img src={landingimage} alt='landingimage' /></div>

                                        <figcaption class="absolute bottom-96 mx-24 flex gap-8">
                                                <Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-10 rounded">Explore</button></Link>


                                                <Link to='/nft-creation' style={{ textDecoration: 'none', color: 'white' }}><button class="bg-[#50561F] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-10 rounded">Mint NFTs</button></Link>


                                        </figcaption>
                                </figure>


                        </section>
                        <div class='mt-20'>
                                <OngoingBidding />
                        </div>
                       <Projects />
                       <Available />
                       <Latest />
                        <div>
                                <Theones />
                        </div>

                        <div>
                                <Footer />
                        </div>
                        <div>
                                <Subfooter />
                        </div>

                </main>




        )



}


export default Home;