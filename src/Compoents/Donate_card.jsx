// Import React
import React from "react";

// Import necessary assets and dependencies
import img10 from "../assets/img10.jpeg";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants.js";

// Define the function to get Ethereum contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

// Define the function to make a donation with a specific value
const makeDonationWithValue = async (amountInEther) => {
  console.log("first");
  // Convert amount from Ether to Wei
  const amountInWei = ethers.utils.parseEther(amountInEther.toString());

  try {
    const transactionContract = getEthereumContract();
    // Make the donation with the specified value
    const tx = await transactionContract.makeDonationWithValue(amountInWei, {
      value: amountInWei,
    });

    // Wait for the transaction to be mined
    await tx.wait();

    console.log(`Donation of ${amountInEther} Ether made successfully.`);
  } catch (error) {
    console.error("Error making donation:", error);
  }
};

// Define the Card component
const Card = ({ imgSrc, title, description, tags }) => {
  // Handler for the donate button click event
  const handleDonateClick = () => {
    makeDonationWithValue(0.0001); // Specify the donation amount here
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mb-9 mr-10">
      <img className="w-full" src={imgSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Donate button */}
      <button
        onClick={handleDonateClick} // Call handleDonateClick when the button is clicked
        className="flex mx-auto mt-6 mb-10 bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt"
      >
        Donate
      </button>
    </div>
  );
};

// Define the DonateCard component
const DonateCard = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {/* Render multiple Card components */}
      {[1, 2, 3, 4].map((item) => (
        <Card
          key={item}
          imgSrc={img10}
          title="The Coldest Sunset"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          tags={["#photography", "#travel", "#winter"]}
        />
      ))}
    </div>
  );
};

export default DonateCard; // Export the DonateCard component
