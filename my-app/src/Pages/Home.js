import NavBar from "../components/NavBar";
import CharacterSelectionComponent from "../components/CharacterSelectionComponent";

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