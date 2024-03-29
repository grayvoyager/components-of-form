import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Pratyush's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex justify-center px-14 py-[157px] md:p-5">
          <div className="flex flex-col items-start justify-center w-[36%] md:w-full gap-[29px]">
            <a href="#" className="mt-0.5">
              <Heading size="lg" as="h1" className="!text-gray-900_02">
                Sign up
              </Heading>
            </a>
            <div className="flex flex-col self-stretch items-center gap-8">
              <div className="flex flex-col self-stretch gap-6">
                <div className="flex flex-col gap-5">
                  <div className="flex sm:flex-col justify-between gap-5">
                    <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
                      <Text as="p">First name</Text>
                      <Input
                        shape="round"
                        type="text"
                        name="firstName"
                        placeholder={`First name`}
                        className="sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
                      <Text as="p">Last name</Text>
                      <Input shape="round" type="text" name="lastName" placeholder={`Last name`} className="sm:pr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Text as="p">Email</Text>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`you@company.com`}
                      className="sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <Text as="p">Shop Name</Text>
                    <Input shape="round" type="text" name="name" placeholder={`Shop name`} className="sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Text as="p">Address Line 1</Text>
                    <Input shape="round" name="address" placeholder={`Address Line 1`} className="sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Text as="p">Address Line 2</Text>
                    <Input shape="round" name="address" placeholder={`Address Line 2`} className="sm:pr-5" />
                  </div>
                  <div className="flex sm:flex-col justify-between gap-5">
                    <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
                      <Text as="p">Pincode</Text>
                      <Input shape="round" type="number" name="pincode" placeholder={`Pincode`} className="sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
                      <Text as="p">State</Text>
                      <Input shape="round" name="input_one" placeholder={`State`} className="sm:pr-5" />
                    </div>
                  </div>
                </div>
                <Button shape="round" className="w-full sm:px-5 shadow-xs">
                  Sign up
                </Button>
              </div>
              <div className="flex gap-1 flex-wrap">
                <Text as="p" className="self-end !text-blue_gray-700 !font-normal">
                  Already have a account?
                </Text>
                <a href="Login" target="_blank" rel="noreferrer" className="self-end">
                  <Heading size="xs" as="h2" className="!text-gray-900_01">
                    Login
                  </Heading>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
