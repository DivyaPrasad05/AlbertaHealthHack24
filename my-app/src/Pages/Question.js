import NavBar from "../components/NavBar";
const Question = () => {
    return (
        <div className="h-screen">
            <NavBar />

            <div className="ml-10 w-full sm:max-w-xl sm:ml-56">
                <img
                    src="/chatbox.png"
                    alt="chatbox"
                />
            </div>
            <div className="ml-5 sm:ml-36">
                <img
                    src="/po1.png"
                    alt="Panda"
                    className="w-32 sm:w-48"
                />
            </div>
        </div>
    );
}

export default Question;