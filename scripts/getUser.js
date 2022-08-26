const { ethers } = require("hardhat")

async function getsome() {
    const fundCreators = await ethers.getContract("FundCreators")
    const user = await fundCreators.getUser("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    const creator = await fundCreators.getCreators("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    const creatorList = await fundCreators.getCreatorsList()
    //console.log(user.toString())
    //console.log(creator.toString())
    console.log(creatorList.toString())
}

getsome()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
