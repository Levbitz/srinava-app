import React, { useState } from "react";
import Logo from "../../../assets/images/logo/logo_sm.svg";
import { useNavigate } from "react-router-dom";
import ImgOne from "../../../assets/images/big.jpeg";
import "./ConferencePageOne.css";
import { BsVolumeUpFill, BsMicFill } from "react-icons/bs";
import { FaVideo, FaRupeeSign, FaExpandAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaShareSquare } from "react-icons/fa";
import { GrSend, GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";

function ConferencePageOne() {
  const navigation = useNavigate();

  const [small, setSmall] = useState({
    parent: "l7",
  });

  const enlargeHandler = () => {
    if (small.parent === "l7") {
      setSmall({
        parent: "l12",
      });
    } else {
      setSmall({
        parent: "l7",
      });
    }
  };
  return (
    <div className="mt-2">
      <div className="container">
        <div className="row">
          <div className="col l8  s12">
            <div className="row">
              <div className="col l3 s12">
                <div className="row">
                  <div className="col l4 s2 offset-s1 ">
                    <span>
                      <ImCross onClick={() => navigation("/")} />
                    </span>
                    <span>
                      <img src={Logo} alt="" />
                    </span>
                  </div>
                  <div className="col l8 s6 offset-s3">
                    <span className="text:bold text-lg">
                      SRINAVA <br /> Auction Portal
                    </span>
                  </div>
                </div>
              </div>
              <div className="col l7 s12">
                <div className="bg-slate-100 w-full rounded px-5 ">
                  <div className="row">
                    <div className="col l6">
                      <div className="py-5">
                        <p className="text:xs conference_middle_top flex">
                          Previous bid :
                          <span className="ml-5">
                            <div className=" overflow-y-scroll h-10 pr-1">
                              <p className="previous-bid-text">gdjhdhjhj</p>
                              <p className="previous-bid-text">gdjhdhjhj</p>
                              <p className="previous-bid-text">gdjhdhjhj</p>
                              <p className="previous-bid-text">gdjhdhjhj</p>
                            </div>
                          </span>
                        </p>
                        <p className="text:xs conference_middle_top">
                          current bid : <span>vjkgjkjkgjkjkdjkdfj</span>
                        </p>
                      </div>
                    </div>

                    <div className="col l5">
                      <div className="py-5">
                        <p className="text:xs chit_group_name">
                          ChitGroup: SIKABEN23001
                        </p>
                        <p className="text:xs chit_group_name">
                          Chit Value : Bid Amount : <span>100,000</span>
                        </p>
                        <p className="flex   items-center  text:xs conference_middle_top">
                          Bid Amount <FaRupeeSign size={13} className="mx-3" />
                          <span className=" text-base">5,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l2">
                <div>
                  <p>CurrentPrize Amount :</p>
                  <p>45,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col l4 s12 center">
            <div className="row  bg-slate-100 rounded ">
              <div className="col l12">
                <div>
                  <div className="row">
                    <div className="col l6">
                      <p>Auction Amounts</p>
                    </div>
                    <div className="col l6">
                      <p>Customer Amount</p>
                    </div>
                  </div>

                  <div>
                    <div className="container">
                      <div className="row">
                        <div className="col l3">
                          <span className="flex justify-center items-center   bg-sky-600 text-sm text-white font-extrabold rounded  py-1 mb-1">
                            <FaRupeeSign />
                            1000
                          </span>
                        </div>
                        <div className="col l3">
                          <span className="flex justify-center items-center  w-20 bg-sky-600 text-sm text-white font-extrabold rounded  py-1 mb-1">
                            <FaRupeeSign />
                            1000
                          </span>
                        </div>
                        <div className="col l3">
                          <span className="flex justify-center items-center  w-20 bg-sky-600 text-sm text-white font-extrabold rounded  py-1 mb-1">
                            <FaRupeeSign />
                            1000
                          </span>
                        </div>
                        <div className="col l3">
                          <span className="flex justify-center items-center  w-20 bg-sky-600 text-sm text-white font-extrabold rounded  py-1 mb-1">
                            <FaRupeeSign />
                            1000
                          </span>
                        </div>
                        <div className="col l3">
                          <span className="flex justify-center items-center  w-20 bg-sky-600 text-sm text-white font-extrabold rounded  py-1 mb-1">
                            <FaRupeeSign />
                            1000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col ${small.parent} `}>
            <div
              style={{
                position: "relative",
              }}
            >
              <img className=" rounded-3xl" src={ImgOne} />

              <div className="container">
                <div className="row py-7">
                  <Tips />
                  <CallBtn />
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 10,
                  bottom: 100,
                  right: "0",
                  margin: 20,
                }}
              >
                <div className="side_users_wrap">
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                </div>

                <div className=" pr-0  hide-on-med-and-down">
                  <div className="absolute bottom-0 right-0 ">
                    <p className="p-3 ">
                      {small.parent === "l7" ? (
                        <FaExpandAlt onClick={enlargeHandler} />
                      ) : (
                        <ImCross onClick={enlargeHandler} />
                      )}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l3 offset-l1 ">
            <div className="bg-slate-100 w-full p-5 rounded-lg">
              <Tab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferencePageOne;

const SingleSideUser = () => {
  return (
    <div>
      <div className="my-5 border-2 rounded-[12px] overflow-hidden">
        <img width={100} src={ImgOne} alt="" />
      </div>
    </div>
  );
};

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="tab_header">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          messages
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          members
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? <Messages /> : <Members />}
      </div>
    </div>
  );
};

const Messages = () => {
  return (
    <>
      <div className="bg-slate-100 w-full p-5 rounded-lg  overflow-y-scroll h-96 pr-5">
        <div>
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
        </div>
      </div>

      <div className=" mt-2 p-5">
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <GrAttachment />
          </div>
          <div className="mr-2">
            <BsEmojiSmile />
          </div>
          <div>
            <div className=" mr-2">
              <input className="bg-white" type="text" />
            </div>
          </div>
          <div className="ml-5 mt-1">
            <GrSend size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

const SingleMessage = () => {
  return (
    <>
      <div className="flex mb-3 justify-center  items-center ">
        <div className="mr-4">
          <div className="bg-fuchsia-700 p-3 rounded-full w-1"></div>
        </div>
        <div className="bg-white w-full pl-5 py-1 rounded-xl ">
          <span>user Name</span>
          <p> Singlellkdfldflkfdllkflkfl vlklkfkdklflk Message</p>
        </div>
      </div>
    </>
  );
};

const Members = () => {
  return (
    <>
      <div className="bg-slate-100 w-full p-5 rounded-lg  overflow-y-scroll h-96 pr-5">
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
      </div>
    </>
  );
};
const SingleMember = () => {
  return (
    <>
      <div className="flex mb-3 justify-start  items-start ">
        <div className="mr-4">
          <div className="bg-fuchsia-700 p-3 rounded-full w-1"></div>
        </div>
        <div className="bg-white w-full pl-5 py-1 rounded-xl ">
          <p>user Name </p>
        </div>
      </div>
    </>
  );
};

const CallBtn = () => {
  return (
    <div className="col l6 s12 ">
      <div className="row  bg-slate-300 w-full p-5 rounded-lg items-center sm:m-l5">
        <div className="col l2 s2">
          <div>
            <p>
              <BsVolumeUpFill />
            </p>
          </div>
        </div>
        <div className="col l2 s2">
          <div>
            <p>
              {" "}
              <FaVideo />
            </p>
          </div>
        </div>
        <div className="col l2 s2">
          <div>
            <p>
              <BsMicFill />
            </p>
          </div>
        </div>
        <div className="col l2 s2">
          <div>
            <p>
              <IoMdCall />
            </p>
          </div>
        </div>
        <div className="col l2 s2">
          <div>
            <p>
              <FaShareSquare />
            </p>
          </div>
        </div>
        <div className="col l2 s2">
          <div>
            <p>
              <ImCross />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tips = () => {
  return (
    <>
      <div className="col l6 s12 mb-1">
        <div className="bg-slate-300 w-full py-1 pl-5 rounded-lg ">
          <div className="row  p-0 m-0">
            <span className="p-0 m-0">Tips</span>
          </div>
          <div className="row  p-0 m-0">
            <span className="p-0 m-0">
              {" "}
              fjfffiofofoifop .dsoisdiodsodosioidsoi
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
