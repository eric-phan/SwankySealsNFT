import React from "react";
import Image from "next/image";
import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import Facebook from "../assets/social-media-icons/facebook_32x32.png";
import Twitter from "../assets/social-media-icons/twitter_32x32.png";
import Email from "../assets/social-media-icons/email_32x32.png";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.etherem) {
      const accounts = await window.etherem.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <Flex
      className={"navbar"}
      justify={"space-between"}
      align={"center"}
      padding={"30px"}
    >
      {/* left side - Social Media Icons */}
      <Flex
        className={"navElementsLeft"}
        justify={"space-around"}
        width={"40%"}
        padding={"0 75px"}
      >
        <Link href="https://www.facebook.com">
          <Image
            src={Facebook}
            alt={"facebook"}
            boxsize={"42px"}
            margin={"0 15px"}
          />
        </Link>
        <Link href="https://www.twitter.com">
          <Image
            src={Twitter}
            alt={"twitter"}
            boxsize={"42px"}
            margin={"0 15px"}
          />
        </Link>

        <Link href="https://www.google.com">
          <Image
            src={Email}
            alt={"google"}
            boxsize={"42px"}
            margin={"0 15px"}
          />
        </Link>
      </Flex>

      {/* right side - Sections and Connect */}
      <Flex
        className="rightNav"
        justify={"space-around"}
        align={"center"}
        width={"40%"}
        padding={"30px"}
      >
        <Box
          margin={"0 15px"}
          paddingBottom={"8px"}
          textShadow={"0 2px 2px #000000"}
          textColor={"lightgray"}
        >
          About
        </Box>
        <Spacer />
        <Box
          margin={"0 15px"}
          paddingBottom={"8px"}
          textShadow={"0 2px 2px #000000"}
          textColor={"lightgray"}
        >
          Mint
        </Box>
        <Spacer />
        <Box
          margin={"0 15px"}
          paddingBottom={"8px"}
          textShadow={"0 2px 2px #000000"}
          textColor={"lightgray"}
        >
          Team
        </Box>
        <Spacer />
        {/* connect */}
        {isConnected ? (
          <Box margin={"0 15px"}>Connected</Box>
        ) : (
          <Button
            backgroundColor={"#00bfff"}
            borderRadius={"5px"}
            boxShadow={"0px 2px 2px 1px #0F0F0F"}
            color={"white"}
            cursor={"pointer"}
            fontFamily={"inherit"}
            padding={"15px"}
            margin={"0 15px"}
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
// test
