import Hero from "../sections/Hero";
import About from "../sections/About";
import Principles from "../sections/Principles";
import Meetups from "../sections/Meetups";
import SuccessEvents from "../sections/SuccessEvents";
import Footer from "../sections/Footer";

function Home(){
    return(
        <div>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="principles"><Principles /></div>
            <div id="meetups"><Meetups /></div>
            <div id="events"><SuccessEvents /></div>
            <Footer />
        </div>
    );
}

export default Home;