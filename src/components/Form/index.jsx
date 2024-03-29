import React from "react";
import { Button, TextArea, Text, Input, Heading } from "./..";

export default function Form({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center gap-3.5 px-[242px] md:px-5">
        <Heading size="md" as="h1" className="!text-blue_gray-900 text-center">
          Contact
        </Heading>
        <Heading size="xl" as="h2" className="!text-gray-900 tracking-[-0.72px] text-center">
          Write a message
        </Heading>
      </div>
      <div className="flex flex-col w-[63%] gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex sm:flex-col justify-between gap-5">
            <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
              <Text as="p">First name</Text>
              <Input shape="round" type="text" name="firstName" placeholder={`First name`} className="sm:pr-5" />
            </div>
            <div className="flex flex-col items-start w-[47%] sm:w-full gap-[7px]">
              <Text as="p">Last name</Text>
              <Input shape="round" type="text" name="lastName" placeholder={`Last name`} className="sm:pr-5" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[7px]">
            <Text as="p">Email</Text>
            <Input shape="round" type="email" name="email" placeholder={`you@company.com`} className="sm:pr-5" />
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <Text as="p">Message</Text>
            <TextArea
              shape="round"
              name="input_one"
              placeholder={`Leave us a message...`}
              className="self-stretch sm:pb-5 sm:pr-5 text-blue_gray-500"
            />
          </div>
        </div>
        <Button size="sm" shape="round" className="w-full sm:px-5 border-blue_gray-900 border border-solid shadow-xs">
          Send message
        </Button>
      </div>
    </div>
  );
}
