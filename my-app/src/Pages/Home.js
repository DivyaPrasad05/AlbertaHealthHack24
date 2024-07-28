import NavBar from "../Components/NavBar.js";
import CharacterSelectionComponent from "../Components/CharacterSelectionComponent.jsx"
import Chatbot from "../Components/Chatbot.js";

const Home = () => {
    return (
        <>
            <main className="h-screen">
                <NavBar />
                <CharacterSelectionComponent />
            </main>

        </>
    );
}
export default Home;