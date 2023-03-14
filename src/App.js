import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { BsEnvelope } from "react-icons/bs";

const App = () => {
  return (
    <>
      <section className=" flex  justify-center p-28 backdrop-blur-lg bg-cover bg-[url('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  ">
        <div className=" flex  flex-col items-center  p-32 justify-center  bg-gray-900 rounded-3xl space-y-36">
          <div className="flex flex-col items-center space-y-10">
            <img
              className="w-36 rounded-full border-8  "
              src="https://c694f06e17b177b6.demo.carrd.co/assets/images/image04.jpg?v=d8a04bef"
            />
            <h1 className="text-6xl font-semibold text-gray-400">HELLO !</h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Penatibus magnis dis lorem nisl parturient
              <br /> montes lorem nascetur augue lacus viverra.
            </p>
            <AiOutlineArrowDown className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 animate-bounce hover:scale-110 cursor-pointer " />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-white"/> */}

          <div className="flex flex-col items-center space-y-10">
            <h1 className="text-6xl font-semibold text-gray-400">Sed etiam</h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Amet lectus nulla et diam ut gravida nisl. <br /> Quam nulla massa
              lorem etiam sed dolor.
            </p>
            <div className="space-y-10">
              <div className="flex  rounded-lg gap-6 items-center p-4 bg-gray-300 hover:scale-110 cursor-pointer">
                <p className="text-black font-semibold text-lg ">
                  Sed etiam tempor orci lobortis <br /> elementum
                </p>
                <AiOutlineArrowRight className="text-black text-xl" />
              </div>
              <div className="flex  rounded-lg gap-6 items-center p-4 bg-gray-300 hover:scale-110 cursor-pointer ">
                <p className="text-black bg-gray-300 font-semibold text-lg  rounded-lg">
                  Odio tempor orci dapibus
                </p>
                <AiOutlineArrowRight className="text-black text-xl" />
              </div>
              <div className="flex  rounded-lg gap-6 items-center p-4 bg-gray-300 hover:scale-110 cursor-pointer">
                <p className="text-black bg-gray-300 font-semibold text-lg  rounded-lg">
                  Lorem sed maecenas aliquam velit <br /> tempus
                </p>
                <AiOutlineArrowRight className="text-black text-xl" />
              </div>
              <div className="flex  rounded-lg gap-6 items-center p-4 bg-gray-300 hover:scale-110 ">
                <p className="text-black bg-gray-300  cursor-pointer font-semibold text-lg  rounded-lg ">
                  Urna lacus sed aliquam
                </p>
                <AiOutlineArrowRight className="text-black text-xl" />
              </div>
            </div>
            <p className="text-gray-400 font-semibold text-lg ">
              Aenean ornare velit lacus varius enim lorem <br />
              etiam sed ullamcorper nisl proin aliquam sed <br />
              tempus facilisis ante etiam magna.
            </p>
          </div>

          <div className="space-y-10 text-center">
            <h1 className="text-6xl font-semibold text-gray-400">Amet nisl</h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Lorem ipsum nisl suscipit gravida adipiscing <br />
              bibendum magna etiam tempor orci.
            </p>
            <div className="flex gap-6">
              <AiOutlineTwitter className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer" />
              <SiTiktok className="bg-gray-400 text-7xl rounded-full text-gray-800 p-5 hover:scale-110 cursor-pointer" />
              <AiOutlineInstagram className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer" />
              <FaLinkedin className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer" />
            </div>
            <div className="flex gap-6">
              <AiFillGithub className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer " />
              <BsBox className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer " />
              <ImMobile className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer" />
              <BsEnvelope className="bg-gray-400 text-7xl rounded-full text-gray-800 p-4 hover:scale-110 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
