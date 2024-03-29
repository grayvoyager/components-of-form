import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input } from "../../components";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>Pratyush's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex justify-center px-14 py-[317px] md:p-5">
          <div className="flex flex-col items-start justify-center w-[30%] md:w-full gap-[30px] p-5">
            <a href="Login" target="_blank" rel="noreferrer" className="mt-[3px]">
              <Heading size="lg" as="h1" className="!text-gray-900_02">
                Login
              </Heading>
            </a>
            <div className="flex flex-col self-stretch gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-start gap-[7px]">
                  <Text as="p">Email*</Text>
                  <Input shape="round" type="email" name="email" placeholder={`Enter your email`} className="sm:pr-5" />
                </div>
                <div className="flex flex-col items-start gap-[7px]">
                  <Text as="p">Password*</Text>
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder={`Create a password`}
                    className="sm:pr-5"
                  />
                </div>
              </div>
              <Button shape="round" className="w-full sm:px-5 shadow-xs">
                Get started
              </Button>
            </div>
            <div className="flex self-center gap-1 flex-wrap">
              <a href="#">
                <Text as="p" className="!text-blue_gray-700 !font-normal">
                  Don’t have an account?
                </Text>
              </a>
              <a href="#" className="self-end">
                <Heading size="xs" as="h2" className="!text-gray-900_01">
                  Sign Up
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
