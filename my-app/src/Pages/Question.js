import NavBar from "../components/NavBar";
import { FaMicrophone, FaArrowRight } from 'react-icons/fa';

const Question = () => {
    return (
        <div className="">
            <NavBar />
            <div className="mt-5">
                <div className="relative ml-10 w-5/6 sm:max-w-xl sm:ml-80 ">
                    <img
                        src="/chatbox.png"
                        alt="chatbox"
                    />
                    {/* Next Question Button */}
                    <button
                        className="absolute bottom-11 right-16 sm:bottom-16 sm:right-20  bg-blue-500 text-white px-4 py-2 rounded-full"
                    >
                        Next Question
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
                                className="flex-grow p-2 outline-none w-5/6"
                            />

                            <button className="bg-blue-500 mx-1 p-1 rounded-full text-white">
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