import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/project_details/ProjectDetails";
import Marketplace from "./pages/marketplace/Marketplace";
import Verification from "./pages/verification/Verification";
import OngoingB from "./pages/ongoing-bidding/OngoingB";
import Nftavailable from "./pages/nft-available/Nftavailable";
import Availablesale from "./pages/available-sale/Availablesale";
import NftMint from "./pages/nft-creation/NftMint";
import NftCreation from "./pages/nft-creation/NftCreation";
import About from "./pages/about/About";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  path="/" element={<Home />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path='/verify' element={<Verification />} />
      <Route  path="/project-details" element={<ProjectDetails />} />
      <Route  path="/nft-creation" element={<NftCreation />} />
      <Route  path='/nft-mint' element={<NftMint/>} />
      <Route  path="/market-place" element={<Marketplace />} />
      <Route  path='/ongoing-bidding' element={<OngoingB />} />
      <Route  path='/nft-available' element={<Nftavailable />} />
      <Route  path="/available-fractionalownership" element={<Availablesale />} />
      <Route  path="/about-us" element={<About />} />
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
