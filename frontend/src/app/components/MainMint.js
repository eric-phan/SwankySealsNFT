import { useState } from "react";
import Image from "next/image";
import Sealy from "../assets/sprites/seal8bit_bgrndremoved.png";
// import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
// import swankySealsNFT from "./SwankySealsNFT.json";

// const swankySealsNFTAddress = ""
// sample NFT address

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        swankySealsNFTAddress,
        swankySealsNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="21rem">
      <Box width="520px">
        <div class="mainBox">
          <Text fontSize="43px" textShadow="0 5px #000000">
            Swanky Seals
          </Text>
          <Image src={Sealy} height={200} alt="sealy"></Image>

          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Can the SwankySeals save humans from destructive rampant NFT
            Speculation? Mint SwankySeals to find out.
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            *This website is for demo purposes only.*
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
                backgroundColor="#008fd4"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="10"
                onClick={handleDecrement}
              >
                {" "}
                -
              </Button>

              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />

              <Button
                backgroundColor="#008fd4"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="10"
                onClick={handleIncrement}
              >
                {" "}
                +
              </Button>
            </Flex>

            <Button
              backgroundColor="#008fd4"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
            marginTop=""
            fontSize="30px"
            letterSpacing="5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#008fd4"
          >
            Connect your wallet to mint.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
