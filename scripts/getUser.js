const { ethers } = require("hardhat")

async function getsome() {
    const fundCreators = await ethers.getContract("FundCreators")
    const entranceFee = await fundCreators.getUser("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    const b = await fundCreators.getCreators("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    console.log(entranceFee.toString())
    console.log(b.toString())
}

getsome()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
