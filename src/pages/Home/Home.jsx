import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-3xl font-poppins">This is Home</h1>
        </div>
    );
};

export default Home;