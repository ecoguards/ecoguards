
import { Link } from "react-router-dom";
import pridepreserve from "../../assets/pridepreserve.png";
import Navbar from "../../components/navbar/Navbar";
import Subfooter from "../../components/subfooter/index";
import nftpride from "../../assets/nftpride.png";
import onroar from "../../assets/onroar.png";
import nftspeed from "../../assets/nftspeed.png";


const Pride = () => {
    return (
        <>
            <main className='bg-[#1A1818]'>

                <Navbar />

                <section className='md:flex md:justify-between md:py-2 h-full'>
                    <div className='w-full md:w-[45%] md:h-[60vh] h-full rounded-lg border ml-12'>
                        <img
                            src={pridepreserve}
                            className='object-cover mb-10 h-full w-full object-center rounded-lg'
                            quality={100}
                            alt='m1'
                        />

                        <div className='border rounded-md h-80 ml-8'>
                            <div className='border-b flex items-center justify-between px-3 h-16 bg-gradient-to-r from-zinc-500 to-zinc-600'>
                                <div className='flex'>
                                    <svg className='mr-5' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <h3 className='text-white font-semibold'>Activities</h3>
                                </div>

                                <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g></svg>

                            </div>
                            <div className='border-b flex items-center justify-between px-3 md:h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                                    <p className='text-white font-semibold'>Webb <span className='font-light text-sm'>Changed price</span> <br /> <span className='font-light text-sm'>Today; 8.00am</span></p>
                                </div>
                                <p className='text-white'>1.825CUSD</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                                    <p className='text-white font-semibold'>Webb <span className='font-light text-sm'>Changed price</span> <br /> <span className='font-light text-sm'>Wed; 12:08pm</span></p>
                                </div>
                                <p className='text-white'>2.197CUSD</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                                    <p className='text-white font-semibold'>Webb  <span className='font-light text-sm'>Changed price</span> <br /> <span className='font-light text-sm'>Mon 6:00pm</span></p>
                                </div>
                                <p className='text-white'>1.197CUSD</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                                    <p className='text-white font-semibold'>Webb <span className='font-light text-sm'>Minted</span> <br /> <span className='font-light text-sm'>Sat 10:56pm</span></p>
                                </div>
                                <p className='text-white'>1.825CUSD</p>
                            </div>

                        </div>
                    </div>

                    <div className='md:w-[45%] w-full text-white md:mt-0 mt-5 mr-12'>
                        <div>
                            <h2 className='text-lg md:text-xl font-bold text-white'>PridePreserve</h2>
                            <p className='text-sm mb-3'>Project overview</p>
                            <p className='mb-3'>
                            PridePreserve is a passionate initiative dedicated to safeguarding 
                            Africa's diverse wildlife, with a primary focus on preserving 
                            endangered species like lions. Our two-fold approach combines 
                            rigorous conservation strategies and community engagement to 
                            secure the long-term survival and well-being of these majestic 
                            creatures.
                            </p>

                            <div className='border rounded-md p-5 backdrop-blur-lg bg-gradient-to-r from-zinc-500 to-zinc-600 mr-12'>
                                <div className='flex justify-between mb-3'>

                                    <div>
                                        <h3 className='font-bold'>Sales ends in</h3>
                                        <p>21:15:09</p>
                                    </div>

                                    <div>
                                        <h3 className='font-bold'>Price</h3>
                                        <p>6.8 CUSD</p>
                                    </div>
                                </div>

                                <div className='flex justify-center w-full'>
                                    <Link to='/donate'><button className='text-white font-bold w-full bg-orange-300 rounded-lg py-3 px-10'>Purchase Now</button></Link>
                                </div>

                            </div>
                        </div>
                        <div className='border rounded-md h-80 mr-12 mt-4'>
                            <div className='border-b flex items-center justify-between px-3 h-16 bg-gradient-to-r from-zinc-500 to-zinc-600'>
                                <div className='flex'>

                                    <h3 className='text-white font-semibold'>Details</h3>
                                </div>

                                <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g></svg>

                            </div>
                            <div className='border-b flex items-center justify-between px-3 md:h-16'>
                                <div className='flex w-[60%] items-center '>

                                    <p className='text-white font-semibold'>Current Owner  </p>
                                </div>
                                <p className='text-white'>Webb</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>

                                    <p className='text-white font-semibold'>Current Address </p>
                                </div>
                                <p className='text-white'>0xd932...DTED</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <p className='text-white font-semibold'>Token Standard </p>
                                </div>
                                <p className='text-white'>ERC-114</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-3 h-16'>
                                <div className='flex w-[60%] items-center '>
                                    <p className='text-white font-semibold'>Chain </p>
                                </div>
                                <p className='text-white'>CELO</p>
                            </div>
                            <div className='border-b flex items-center justify-between px-2 h-14'>
                                <div className='flex w-[40%] items-center '>
                                    <p className='text-white font-normal'>NFT Category </p>
                                </div>
                                <p className='text-white'>Others</p>
                            </div>

                            <div className='border-b flex items-center justify-between px-2 h-14'>
                                <div className='flex w-[60%] items-center '>
                                    <p className='text-white font-semibold'>Creator fee </p>
                                </div>
                                <p className='text-white'>40%</p>
                            </div>
                        </div>
                    </div>
                </section>
              
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-md mt-36">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={nftpride} alt="nftpride" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={onroar} alt="onroar" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={nftspeed} alt={nftspeed} />
                    </div>
                </div>
               
                <footer class="bg-[#1A1818] ">
                    <div class="mx-auto w-full max-w-screen-xl">
                        <Subfooter />
                    </div>
                </footer>




            </main>
        </>
    )
};

export default Pride;