import PostReferral from "./PostReferral";
import './style.css';
import Sidebar from "./Sidebar";
function Home () {
    return (
        <div className="home-div">
            <PostReferral />
            <Sidebar />
        </div>
    ) 
}

export default Home;