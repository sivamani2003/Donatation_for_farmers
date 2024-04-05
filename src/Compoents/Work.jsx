import React from "react";
import { FaDonate } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { LiaDonateSolid } from "react-icons/lia";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants.js";

// Function to get Ethereum contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

// Function to make a donation with a specific value
const makeDonationWithValue = async (amountInEther) => {
  // Convert amount from Ether to Wei
  const amountInWei = ethers.utils.parseEther(amountInEther.toString());

  try {
    const transactionContract = getEthereumContract();
    console.log(transactionContract);
    // Make the donation with the specified value
    const tx = await transactionContract.makeDonation({
      value: amountInWei,
    });

    // Wait for the transaction to be mined
    await tx.wait();

    console.log(`Donation of ${amountInEther} Ether made successfully.`);
  } catch (error) {
    console.error("Error making donation:", error);
  }
};

const Work = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2  border-red-500 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                <FaDonate
                  className="text-9xl mt-4"
                  style={{ color: "#ED4C5A" }}
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Be Regular Donaor
                  </h1>
                  <p class="leading-relaxed mb-3 text-shade-500">
                    Donte likely refers to a person's name, and regular suggests
                    something usual or everyday
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-red-500 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                <CiDeliveryTruck
                  className="text-9xl mt-4"
                  style={{ color: "#ED4C5A" }}
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Goods Pick up
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Excess goods? Donate - help others, declutter yourself.
                    Excess cluttering you? Donate, help others thrive.{" "}
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the same structure for other boxes */}
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-red-500 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                <BsFillChatTextFill
                  className="text-9xl mt-4"
                  style={{ color: "#ED4C5A" }}
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Join community
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Join a giving community donate & connect, make a bigger
                    impact. Together make a difference join, donate, build a
                    cause.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-red-500 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                <IoNewspaperSharp
                  className="text-9xl mt-4"
                  style={{ color: "#ED4C5A" }}
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Help a cause! Donate - share the news! Simple and
                    catchySpread the giving spirit Donate today!{" "}
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 mt-4">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => makeDonationWithValue(0.1)}
          class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          <LiaDonateSolid className="text-2xl mr-2" />{" "}
          {/* Adding mr-2 for margin-right */}
          Donate
        </button>
      </section>
    </div>
  );
};

export default Work;
