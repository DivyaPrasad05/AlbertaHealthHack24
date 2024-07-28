import { useState } from "react";
import NavBar from "../components/NavBar";
import { FaMicrophone, FaArrowRight } from 'react-icons/fa';

const Question = () => {
    const [userMessage, setUserMessage] = useState("");
    const userMessageHandler = (event) => {
        setUserMessage(event.target.value);
    }
    function elevaluateUserMessage() {
        alert(userMessage);
    }
    return (
        <div className="" style={{ backgroundImage: 'url(/QuestionPageImage.png)' }}>
            <NavBar />
            <div className="mt-5">
                <div className="relative ml-10 w-5/6 sm:max-w-xl sm:ml-80 ">
                    <img
                        src="/chatbox.png"
                        alt="chatbox"
                    />
                    <div
                        className="absolute top-4 left-16 sm:top-7 sm:left-28 w-3/5 max-h-28 sm:max-h-56 bg-white text-black px-4 py-2 rounded-lg overflow-auto"

                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            {/* Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                        </p>
                    </div>
                    {/* Next Question Button */}
                    <button
                        className="absolute bottom-11 right-16 sm:bottom-16 sm:right-20  bg-blue-500 text-white px-4 py-2 rounded-full"
                    >
                        Next

                        <span className="hidden sm:inline"> Question</span>
                    </button>
                </div>

                <div className="ml-5 sm:ml-48 flex flex-row">
                    <img
                        src="/po1.png"
                        alt="Panda"
                        className="w-32 sm:w-48"
                    />
                    {/* Talk to Popo Section */}
                    <div className="sm:ml-10 ml-3  flex items-end mb-3 ">
                        <div className="bg-gray-200 rounded-full py-2 px-4 w-60 sm:w-96">
                            <input
                                type="text"
                                placeholder="Talk to Popo"
                                className="flex-grow p-2 outline-none w-4/6 sm:w-5/6"
                                onChange={userMessageHandler}

                            />

                            <button className="bg-blue-500 mx-1 p-1 rounded-full text-white" onClick={elevaluateUserMessage}>
                                <FaArrowRight />
                            </button>

                            <button className="">
                                <FaMicrophone className="text-gray-600 hover:text-gray-400" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;