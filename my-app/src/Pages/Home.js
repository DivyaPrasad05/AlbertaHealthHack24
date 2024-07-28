import NavBar from "../components/NavBar";
import CharacterSelectionComponent from "../components/CharacterSelectionComponent";
import Chatbot from "../Components/Chatbot";

const Home = () => {
    return (
        <>
            <main className="h-screen">
                <NavBar />
                <CharacterSelectionComponent />
                <Chatbot/>
            </main>

        </>
    );
}
export default Home;