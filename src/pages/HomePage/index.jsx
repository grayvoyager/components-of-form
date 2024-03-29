import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Form from "../../components/Form";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Pratyush's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[1063px] gap-[139px] md:gap-[104px] md:pb-5 sm:gap-[69px] bg-white-A700">
        <div className="flex flex-col self-stretch items-center gap-[84px] md:gap-[63px] sm:gap-[42px] bg-gradient">
          <header className="flex sm:flex-col justify-between items-center w-[90%] md:w-full mt-[52px] gap-5 md:p-5">
            <Img
              src="images/img_rectangle_1.png"
              alt="image"
              className="w-[5%] sm:w-full object-cover rounded-[32px]"
            />
            <div className="flex sm:flex-col justify-between items-center w-[40%] sm:w-full mt-[5px] pl-[17px] gap-5 bg-white-A700 shadow-sm rounded-lg">
              <ul className="flex gap-9 flex-wrap">
                <li>
                  <a href="#">
                    <Heading as="h6">Home</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Contact</Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading as="h6">Support</Heading>
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <a href="Login" target="_blank" rel="noreferrer" className="self-end mb-2.5">
                  <Heading as="h6">Login</Heading>
                </a>
                <Button shape="round" className="min-w-[95px]">
                  Sign up
                </Button>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col justify-between items-center w-full gap-5 px-[19px] mx-auto md:p-5 max-w-[1309px]">
            <div className="flex flex-col items-start w-[52%] md:w-full gap-5">
              <Heading size="2xl" as="h1" className="!text-gray-900 tracking-[-0.96px] capitalize leading-[60px]">
                Free invoicing software for small business.
              </Heading>
              <Text size="md" as="p" className="!text-blue_gray-700 leading-[30px]">
                Invoice is online invoicing software that helps you craft professional invoices, send payment reminders,
                keep track of expenses, log your work hours, and get paid faster—all for free!
              </Text>
              <Button shape="round" className="sm:px-5 min-w-[122px]">
                Sign up
              </Button>
            </div>
            <div className="h-[500px] w-[500px] md:h-auto mr-[7px] p-[13px] md:mr-0 relative">
              <div className="flex sm:flex-col items-center w-[89%] bottom-[8%] left-[13.02px] m-auto absolute sm:relative">
                <div className="flex sm:flex-col items-center sm:self-stretch z-[1] flex-1">
                  <div className="flex sm:flex-col items-center sm:self-stretch z-[1] flex-1">
                    <Img src="images/img_shadow.svg" alt="shadow_one" className="h-[299px] sm:w-full z-[1]" />
                    <Img
                      src="images/img_thumbs_up.svg"
                      alt="thumbsup_one"
                      className="self-end h-[23px] w-[23px] sm:w-full mb-[71px] ml-[-16px] sm:ml-0 relative"
                    />
                  </div>
                  <Img
                    src="images/img_user.svg"
                    alt="user_one"
                    className="self-end h-[24px] w-[23px] sm:w-full mb-[73px] ml-[-23px] sm:ml-0 relative"
                  />
                </div>
                <Img
                  src="images/img_xmlid_5939.svg"
                  alt="xmlid5939_one"
                  className="h-[160px] sm:w-full ml-[-49px] sm:ml-0 relative"
                />
              </div>
              <div className="flex sm:flex-col justify-center items-center w-[98%] mt-2">
                <Img
                  src="images/img_close.svg"
                  alt="close_one"
                  className="self-end h-[82px] sm:w-full mb-[50px] z-[1]"
                />
                <div className="flex flex-col items-end sm:self-stretch ml-[-84px] sm:ml-0 relative flex-1">
                  <div className="flex flex-col self-stretch items-end z-[1]">
                    <div className="flex flex-col self-stretch items-end z-[1]">
                      <Img
                        src="images/img_television.svg"
                        alt="television_one"
                        className="h-[86px] mr-[42px] md:mr-0 z-[1]"
                      />
                      <div className="flex sm:flex-col self-stretch justify-end items-center mt-[-72px] relative">
                        <div className="flex sm:flex-col justify-end items-start sm:self-stretch z-[1] flex-1">
                          <div className="flex sm:flex-col justify-end items-start sm:self-stretch flex-1">
                            <div className="sm:self-stretch h-[348px] md:h-auto sm:w-full z-[1] flex-1 relative sm:flex-none">
                              <Img src="images/img_device.svg" alt="device_one" className="h-[348px]" />
                              <div className="h-[270px] w-[69%] md:h-auto right-[22.97px] bottom-0 top-0 my-auto absolute">
                                <Img src="images/img_folder_1.svg" alt="folderone_one" className="h-[270px]" />
                                <Img
                                  src="images/img_document.svg"
                                  alt="document_one"
                                  className="h-[227px] right-[15.86px] top-[16.58px] m-auto absolute"
                                />
                              </div>
                            </div>
                            <Img
                              src="images/img_calcuator.svg"
                              alt="calcuator_one"
                              className="h-[103px] sm:w-full mt-[104px] ml-[-73px] sm:ml-0 relative"
                            />
                          </div>
                          <Img
                            src="images/img_xmlid_5926.svg"
                            alt="xmlid5926_one"
                            className="h-[139px] sm:w-full mt-[86px] ml-[-35px] sm:ml-0 z-[1] relative"
                          />
                        </div>
                        <div className="flex self-end justify-end items-center w-[14%] sm:w-full mb-[15px] ml-[-25px] sm:ml-0 relative">
                          <Img
                            src="images/img_user_blue_gray_800_01.svg"
                            alt="user_three"
                            className="self-end h-[33px] mb-[69px]"
                          />
                          <Img src="images/img_group.svg" alt="image_one" className="h-[263px] ml-[-2px] relative" />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_sort.svg"
                      alt="sort_one"
                      className="h-[24px] w-[23px] mt-[-21px] mr-[46px] md:mr-0 relative"
                    />
                  </div>
                  <div className="flex justify-end items-center w-[74%] md:w-full mt-[-72px] mr-[70px] md:mr-0 relative">
                    <Img src="images/img_ticket_1.svg" alt="ticketone_one" className="h-[142px] z-[1]" />
                    <Img
                      src="images/img_settings.svg"
                      alt="settings_one"
                      className="self-end h-[23px] mb-[39px] ml-[-5px] relative"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center bottom-1/4 right-[16%] m-auto absolute">
                <Img src="images/img_settings_gray_50.svg" alt="settings_three" className="h-[10px] w-[11px] z-[1]" />
                <Img
                  src="images/img_xmlid_5956.svg"
                  alt="xmlid5956_one"
                  className="self-end h-[5px] ml-[-5px] relative"
                />
              </div>
              <div className="flex items-center bottom-[24%] right-[14%] m-auto absolute">
                <Img src="images/img_xmlid_5955.svg" alt="xmlid5955_one" className="self-start h-[5px] z-[1]" />
                <Img
                  src="images/img_thumbs_up_deep_orange_200.svg"
                  alt="thumbsup_three"
                  className="self-end h-[6px] ml-[-4px] relative"
                />
              </div>
              <Img
                src="images/img_contrast.svg"
                alt="contrast_one"
                className="h-[7px] bottom-[20%] right-[19%] m-auto absolute"
              />
              <Img
                src="images/img_light_bulb.svg"
                alt="lightbulb_one"
                className="h-[35px] right-[24%] top-[43%] m-auto absolute"
              />
              <div className="flex flex-col w-[19%] right-[21%] top-[37%] m-auto absolute">
                <div className="flex items-center">
                  <div className="flex self-end w-[46%] mb-0.5">
                    <div className="flex flex-col w-full pb-[30px] sm:pb-5">
                      <div className="flex items-start z-[1]">
                        <div className="h-[33px] z-[1] flex-1 relative">
                          <Img
                            src="images/img_sort_gray_50.svg"
                            alt="sort_three"
                            className="h-[33px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex items-center left-[0.13px] top-[2.22px] m-auto absolute">
                            <div className="flex flex-col items-start z-[1]">
                              <Img
                                src="images/img_xmlid_5759.svg"
                                alt="xmlid5759_one"
                                className="h-[3px] w-[4px] ml-3.5 md:ml-0 z-[1]"
                              />
                              <div className="flex items-center mt-[-1px] relative">
                                <div className="flex self-end z-[1]">
                                  <Img
                                    src="images/img_xmlid_5794.svg"
                                    alt="xmlid5794_one"
                                    className="self-end h-[3px] w-[4px] z-[1]"
                                  />
                                  <Img
                                    src="images/img_xmlid_5759.svg"
                                    alt="xmlid5765_one"
                                    className="self-start h-[3px] w-[4px] ml-[-1px] z-[2] relative"
                                  />
                                  <Img
                                    src="images/img_xmlid_5790.svg"
                                    alt="xmlid5790_one"
                                    className="self-start h-[3px] w-[4px] ml-[-4px] relative"
                                  />
                                </div>
                                <div className="flex items-start ml-[-1px] relative flex-wrap">
                                  <Img
                                    src="images/img_xmlid_5759.svg"
                                    alt="xmlid5763_one"
                                    className="h-[3px] w-[4px] mt-0.5"
                                  />
                                  <Img
                                    src="images/img_arrow_left.svg"
                                    alt="arrowleft_one"
                                    className="h-[10px] ml-[-1px] relative"
                                  />
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="mb-[3px] !text-gray-300 !text-[2.84px] rotate-[45deg]"
                                  >
                                    954
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start ml-[-28px] relative">
                              <div className="flex flex-col items-start ml-[3px] md:ml-0 z-[1]">
                                <div className="flex z-[1]">
                                  <Img
                                    src="images/img_xmlid_5759.svg"
                                    alt="xmlid5761_one"
                                    className="self-end h-[3px] w-[4px] z-[1]"
                                  />
                                  <Img
                                    src="images/img_xmlid_5790.svg"
                                    alt="xmlid5778_one"
                                    className="h-[3px] w-[4px] z-[2]"
                                  />
                                  <Img
                                    src="images/img_xmlid_5759.svg"
                                    alt="xmlid5724_one"
                                    className="self-start h-[3px] w-[4px] ml-[-1px] z-[3] relative"
                                  />
                                  <Img
                                    src="images/img_xmlid_5790.svg"
                                    alt="xmlid5774_one"
                                    className="self-start h-[3px] w-[4px] ml-[-4px] relative"
                                  />
                                </div>
                                <div className="flex items-start mt-[-3px] relative flex-wrap">
                                  <Img
                                    src="images/img_xmlid_5790.svg"
                                    alt="xmlid5782_one"
                                    className="h-[3px] w-[4px]"
                                  />
                                  <Img
                                    src="images/img_arrow_left.svg"
                                    alt="arrowleft_three"
                                    className="h-[10px] ml-[-3px] relative"
                                  />
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="ml-[-1px] !text-gray-300 !text-[2.84px] rotate-[45deg] relative"
                                  >
                                    +
                                  </Text>
                                </div>
                              </div>
                              <div className="flex items-center mt-[-10px] relative">
                                <div className="flex items-start z-[1]">
                                  <Img
                                    src="images/img_xmlid_5790.svg"
                                    alt="xmlid5786_one"
                                    className="h-[3px] w-[4px]"
                                  />
                                  <Img src="images/img_arrow_left.svg" alt="arrowleft_five" className="h-[10px]" />
                                </div>
                                <div className="flex self-end items-center flex-wrap">
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-gray-300 !text-[2.84px] z-[1] rotate-[45deg]"
                                  >
                                    216
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-end ml-[-3px] !text-gray-300 !text-[2.84px] rotate-[45deg] relative"
                                  >
                                    544
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start bottom-[7.66px] right-[13.13px] m-auto absolute flex-wrap">
                            <Text size="xs" as="p" className="!text-gray-300 !text-[2.84px] rotate-[45deg]">
                              984
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="mb-0.5 ml-[-6px] !text-gray-300 !text-[2.84px] z-[2] rotate-[45deg] relative"
                            >
                              +
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="mt-[3px] !text-gray-300 !text-[2.84px] z-[1] rotate-[45deg]"
                            >
                              356
                            </Text>
                            <Img
                              src="images/img_arrow_left.svg"
                              alt="arrowleft_seven"
                              className="h-[10px] ml-[-3px] relative"
                            />
                          </div>
                          <Text
                            size="xs"
                            as="p"
                            className="w-max bottom-[10.23px] right-0 left-0 m-auto !text-gray-300 !text-[2.84px] rotate-[45deg] absolute"
                          >
                            914
                          </Text>
                        </div>
                        <Img
                          src="images/img_xmlid_5759.svg"
                          alt="xmlid5767_one"
                          className="h-[3px] w-[4px] mt-3 ml-[-58px] relative"
                        />
                      </div>
                      <div className="flex mt-[-33px] ml-[21px] md:ml-0 relative">
                        <Img src="images/img_xmlid_5759.svg" alt="xmlid5446_one" className="h-[3px] w-full z-[1]" />
                        <Img
                          src="images/img_xmlid_5790.svg"
                          alt="xmlid5770_one"
                          className="h-[3px] w-full ml-[-4px] relative"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_settings_deep_orange_200.svg"
                    alt="settings_five"
                    className="h-[60px] ml-[-53px] z-[1] relative"
                  />
                </div>
                <Img
                  src="images/img_light_bulb_gray_200.svg"
                  alt="lightbulb_three"
                  className="h-[36px] mt-[-36px] z-[1] relative"
                />
              </div>
              <Img
                src="images/img_user_gray_300.svg"
                alt="user_five"
                className="h-[39px] right-[21%] top-[37%] m-auto absolute"
              />
            </div>
          </div>
        </div>
        <Form className="flex flex-col items-center w-[53%] md:w-full gap-[76px] md:gap-[57px] md:p-5 sm:gap-[38px]" />
      </div>
    </>
  );
}
