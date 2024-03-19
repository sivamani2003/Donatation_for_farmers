// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Charity{
    struct Donation{
        address donor;
        uint256 amount;
    }
    
    mapping(address => Donation) public donations;
    address public charity;
    uint256 public totalDonations;

    event DonationMade(address indexed donor, uint256 amount);

    constructor(){
        charity = msg.sender;
        totalDonations = 0;
    }

    function makeDonation() public payable {
        require(msg.value > 0,"Donation amount must be greater than zero");

        Donation memory donation = Donation(msg.sender,msg.value);

        donations[msg.sender] = donation;
        totalDonations += msg.value;

        emit DonationMade(msg.sender,msg.value);
    }

    function withdraw() public {
    require(msg.sender == charity, "Only the owner can withdraw funds");

    payable(msg.sender).transfer(totalDonations);
    totalDonations = 0;
    }

}