import React, { useState, useEffect } from "react";
import richardImg from "../../assets/richard.svg";
import thompsonImg from "../../assets/thompson.svg";
import morganImg from "../../assets/morgan.svg";
import pateImg from "../../assets/Pate.svg";
import carterImg from "../../assets/carter.svg";
import andersonImg from "../../assets/anderson.svg";
import updateImg from "../../assets/updates.svg";
import Navbar from "../../components/navbar/Navbar";
import onhorn from "../../assets/onhorn.png";
import Subfooter from "../../components/subfooter/index";
import mccoy from "../../assets/mccoy.svg";
import ba from "../../assets/ba.png";
import cart from "../../assets/cart.png";
import charged from "../../assets/charged.png";
import nftbark from "../../assets/nftbark.png";
import availablecanopy from '../../assets/availablecanopy.png';

const teamMemberDatas = [
  {
    image: richardImg,
    fullname: "Dr. Olivia Richards",
    skill: "Conservation Scientist",
    description:
      " Dr. Richards holds a Ph.D. in Conservation Biology and has extensive experience in wildlife research and habitat management. As a key team member, she oversees the scientific aspects of the project, conducts research, and provides valuable insights for effective conservation strategies.",
  },
  {
    image: thompsonImg,
    fullname: "Mark Thompson",
    skill: "Security Specialist",
    description:
      "With a background in law enforcement and wildlife protection, Mark brings his expertise in security operations to HornShield. He designs and implements anti-poaching measures, coordinates surveillance systems, and trains ranger teams to ensure the safety of black rhinos.",
  },
  {
    image: morganImg,
    name: "Sarah Morgan",
    skill: "Community Engagement Coordinator",
    description:
      "Sarah has a background in community development and conservation education. She works closely with local communities, building strong relationships, and implementing outreach programs that foster understanding, support, and collaboration in rhino conservation efforts.",
  },
  {
    image: pateImg,
    fullname: "Dr. Michael Pate",
    skill: "Habitat Restoration Ecologist",
    description:
      "Dr. Patel is an experienced ecologist specializing in habitat restoration. With his expertise in ecosystem management, he leads the habitat restoration efforts for black rhinos. Dr. Patel designs and implements restoration projects, conducts ecological assessments, and monitors the progress of habitat recovery.",
  },
  {
    image: carterImg,
    fullname: "Anna Carter",
    skill: "Project Manager",
    description:
      "Anna is responsible for overall project coordination and management. With a background in project management and conservation initiatives, she ensures smooth operations, oversees budgeting, and facilitates effective communication among team members, stakeholders, and donors.",
  },
  {
    image: andersonImg,
    fullname: "James Anderson",
    skill: "Finance and Fundraising Officer",
    description:
      "James brings financial expertise to the team, managing budget allocations, financial reporting, and fundraising efforts. With experience in non-profit finance management, he ensures transparent and accountable use of funds for the HornShield project.",
  },
];

const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (selectedTab === "allnfts") {
      setProjects([<AllNfts />]);
    } else if (selectedTab === "activities") {
      setProjects([<Activities />]);
    } else if (selectedTab === "contact") {
      setProjects([<ContactInfo />]);
    } else if (selectedTab === "qualifications") {
      setProjects([<Qualifications />]);
    } else if (selectedTab === "update") {
      setProjects([<Updates />]);
    }
  }, [selectedTab]);

  return (
    <>
      <main className="bg-[#1A1818] ">
        <section className="w-[90%] md:w-[94%] mx-auto py-10">
          <Navbar />
          <div class="flex flex-col md:flex-col justify-center">
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
              McCoy
            </h1>
            <div class="flex items-stretch md:items-center p-10">
              <img src={mccoy} alt="mccoy" marginBottom="2rem" />
            </div>
          </div>
          <div className="py-2 mb-3 border md:text-start text-center w-full md:flex md:justify-between">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("allnfts");
              }}
              class={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
                selectedTab === "overview"
                  ? `py-3 px-5 font-bold text-white`
                  : "border-gray-200"
              } tracking-wider`}
            >
              All NFTs
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("activities");
              }}
              className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
                selectedTab === "team"
                  ? `py-3 px-5 font-bold text-white`
                  : "border-gray-200"
              } tracking-wider`}
            >
              Activities
            </a>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("contact");
              }}
              className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
                selectedTab === "contact"
                  ? `py-3 px-5 font-bold text-white`
                  : "border-gray-200"
              } tracking-wider`}
            >
              Contact Information
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("qualifications");
              }}
              className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
                selectedTab === "community"
                  ? `py-3 px-5 font-bold text-white`
                  : "border-gray-200"
              } tracking-wider`}
            >
              Qualifications
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("update");
              }}
              className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
                selectedTab === "update"
                  ? `py-3 px-5 font-bold text-white`
                  : "border-gray-200"
              } tracking-wider`}
            >
              Updates
            </a>
          </div>

          {projects.map((project, index) => (
            <div key={index} class="w-full mt-2">
              {project}
            </div>
          ))}
          <div class="flex flex-col md:flex-row justify-center w-[120%]">
            <Subfooter />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectDetails;

export const AllNfts = () => {
  return (
    <>
      <section className="md:flex md:justify-center md:py-2 h-full">
        <div>
      <p class="text-2xl text-white text-left">More from this creator</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-lg mt-30">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={onhorn} alt="onhorn" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={nftbark} alt="nftbark" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={availablecanopy} alt={availablecanopy} />
                    </div>
                    </div>
                    </div>
      </section>
    </>
  );
};

export const Activities = () => {
  return (
    <>
      <section className="activities py-14 md:h-[90vh]">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-lg text-left text-white">
          <thead>
            <tr>
              <th>Activities</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
               <div className="flex items-center"><img src={ba} alt="ba" /> 
               Bid</div>
              </td>
              <td>RoarGuardian</td>
              <td>3.478ETH</td>
              <td>1</td>
              <td>Yesterday 7:15pm</td>
            </tr>
            <tr>
              <td>
              <div className="flex items-center"><img src={cart} alt="cart" />
                Purchased</div>
              </td>
              <td>SpeedSavers</td>
              <td>5.9ETH</td>
              <td>1</td>
              <td>9/8/2023 1:34pm</td>
            </tr>
            <tr>
            <td> <div className="flex items-center"><img src={cart} alt="cart" />Minted</div></td>
              <td>HornShield</td>
              <td>On Bid</td>
              <td>1</td>
              <td>8/8/2023 2:03am</td>
            </tr>
            <tr>
              <td>
              <div className="flex items-center"><img src={cart} alt="cart" />
                Fractionally owned</div>
              </td>
              <td>CanopyHaven</td>
              <td>2.934ETH</td>
              <td>1</td>
              <td>2/6/2023 3:12pm</td>
            </tr>
            <tr>
              <td>
              <div className="flex items-center"><img src={charged} alt="charged" />
                Charged price</div>
              </td>
              <td>BarkGuard</td>
              <td>2.8ETH</td>
              <td>1</td>
              <td>9/5/2023 9:09pm</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>
    </>
  );
};

export const Updates = () => {
  return (
    <>
      <section className="md:flex md:justify-between md:py-2 md:h-screen h-full">
        <div className="w-full md:w-[35%] h-[50vh] mb-5 rounded-lg border">
          <img
            src={updateImg}
            className="object-cover h-full w-full object-center rounded-lg"
            quality={100}
            alt="m1"
          />
        </div>
        <div className="md:w-[60%] w-full text-white">
          <h2 className="inter-font text-lg md:text-xl font-bold mb-4">
            The following are the updates donors should take note of
          </h2>
          <ul className="text-gray-300">
            <li className="mb-3 text-base list-disc">
              <span className="font-bold">Project Milestones: </span>We are
              thrilled to share that our wildlife conservation funding project
              has reached significant milestones. With the support of our
              generous donors, we have successfully launched multiple
              initiatives aimed at protecting endangered species, preserving
              habitats, and combating poaching. Stay tuned for updates on the
              progress and impact of these projects.
            </li>
            <li className="mb-3 text-base list-disc">
              <span className="font-bold">Increased Impact: </span>Thanks to the
              continued support from our investors, we have been able to expand
              our reach and make a more substantial impact in the field of
              wildlife conservation. The funds raised have contributed to
              increased anti-poaching efforts, habitat restoration projects, and
              community engagement programs, creating a positive ripple effect
              in protecting vulnerable wildlife populations.
            </li>
            <li className="mb-3 text-base list-disc">
              <span className="font-bold">
                Transparency and Accountability:{" "}
              </span>
              As part of our commitment to transparency, we have implemented
              robust reporting mechanisms that allow investors to track and
              verify the utilization of their funds. Our comprehensive reports
              provide insights into the specific conservation projects
              supported, the resources allocated, and the outcomes achieved. We
              believe in accountability and ensuring that every donation makes a
              tangible difference.
            </li>
            <li className="mb-3 text-base list-disc">
              <span className="font-bold">
                Collaboration and Partnerships:{" "}
              </span>
              We are actively forging partnerships with local communities,
              conservation organizations, and government entities to maximize
              the impact of our projects. By leveraging collective expertise and
              resources, we aim to create sustainable, long-term solutions for
              wildlife conservation. Investors can take pride in being part of a
              collaborative effort that brings together diverse stakeholders for
              a common cause.
            </li>
            <li className="mb-3 text-base list-disc">
              <span className="font-bold">Ongoing Opportunities: </span>Our
              platform continues to offer exciting opportunities for investors
              to contribute and make a difference. From targeted funding
              campaigns for specific endangered species to innovative
              conservation initiatives, we are constantly exploring new avenues
              to address the pressing challenges faced by wildlife. Investors
              can stay engaged by exploring these opportunities and joining us
              in our mission to safeguard biodiversity.
            </li>
          </ul>
          <button className="text-white font-bold bg-orange-300 rounded-lg py-3 px-10">
            Edit or add new update
          </button>
        </div>
      </section>
    </>
  );
};

export const Qualifications = () => {
  return (
    <>
      {/* <section className='w-[90%] md:w-[80%] mx-auto py-10'> */}
      <div className="content-details py-10 flex justify-between flex-wrap">
        {teamMemberDatas.map((teamMemberData, index) => (
          <div
            key={index}
            className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg"
          >
            <div className="w-full rounded-lg md:h-[30vh] h-full border-2">
              <img
                src={teamMemberData.image}
                alt="teamImage"
                className="object-cover h-full w-full object-center rounded-lg"
              />
            </div>
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h3 className="font-bold text-white text-lg">
                Name: {teamMemberData.fullname}
              </h3>
              <h3 className="font-bold text-white text-lg">
                Skill or Role: {teamMemberData.skill}
              </h3>
              <p className="font-bold text-white text-lg">
                Brief Description: <br />
                <p className="font-normal text-base text-justify">
                  {teamMemberData.description}
                </p>
              </p>
            </div>
          </div>
        ))}

        {/* <div className='content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg'>
          <div className='w-full rounded-lg h-[30vh] border-2'>
          <img
            src={richardImg}
            className='object-cover h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />
          </div>
          <div className='w-full h-1/2 pb-5 p-2 shadow-md'>
            <h3 className='font-bold text-white text-lg'>Name:</h3>
            <h3 className='font-bold text-white text-lg'>Skill or Role: </h3>
            <p className='font-bold text-white text-lg'>Brief Description: <br /> 
            <p className='font-normal text-base text-justify'>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Assumenda dolor natus molestiae iste. Quod officia, nam praesentium accusamus nihil, 
            illo recusandae ipsum nemo earum sint ullam voluptatem modi nulla tempore. Hic laudantium sint dolor 
            </p> 
            </p>

          </div>
        </div>
        </div> */}
      </div>

      {/* </section> */}
    </>
  );
};

export const ContactInfo = () => {
  return (
    <>
      <section className="contactus py-5 md:h-[80vh] md:flex md:justify-between">
        <div className="md:w-1/2 pr-8 mb-5 text-gray-200">
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">
            Contact Information
          </h2>

          <p className="mb-5 text-lg">
            Fill up this form and our team will get back to you within 24 hours.
          </p>

          <p className="flex w-full items-center mb-5">
            <span className="mr-1">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                    fill="#FB923C"
                  ></path>
                </g>
              </svg>
            </span>{" "}
            <span className="text-lg"> (217) 555-0113</span>
          </p>

          <p className="flex w-full items-center mb-5">
            <span className="mr-1">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Communication / Mail">
                    {" "}
                    <path
                      id="Vector"
                      d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                      stroke="#FB923C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>{" "}
            <span className="text-lg"> hornshield@gmail.com</span>
          </p>

          <p className="flex w-full items-center mb-5">
            <span className="mr-1">
              <svg
                fill="#FB923C"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                </g>
              </svg>
            </span>{" "}
            <span className="text-lg">
              {" "}
              2464 Royal Ln. Mesa, New Jersey 45463
            </span>
          </p>

          <div className="flex items-center space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-200">
                Contact HornShield Project Administrators
              </h2>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className=" w-full p-2 border rounded-lg bg-transparent focus:outline-none pl-4 "
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="Enter Full Name"
                  className="w-full p-2 border rounded-lg bg-transparent focus:outline-none pl-4"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-white"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  rows={5}
                  cols={10}
                  placeholder="Enter the details of your information here"
                  className="w-full bg-transparent p-2 border rounded-lg focus:outline-none pl-4 resize-none "
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="md:w-[60%] w-full px-8 py-2 font-semibold rounded-lg bg-orange-400 text-white"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
