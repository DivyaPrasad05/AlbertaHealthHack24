import NavBar from "../components/NavBar";
import CharacterSelectionComponent from "../components/CharacterSelectionComponent";

const Home = () => {
    return (
        <>
        <div className="z-10 h-screen">

            <NavBar />
            <CharacterSelectionComponent />
            </div>

        </>
    );
}
export default Home;