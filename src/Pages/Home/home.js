import './home.css';
import Header from '../../Components/Header/header';
import Experience from '../../Components/Experience/experience';
import Education from '../../Components/Education/education';
import Technology from '../../Components/Technology/technology';
import Footer from '../../Components/Footer/footer';
import profileImage from '../../assets/profile-pic.jpeg';

export default function home() {
    return (
        <div className={'home-container'}>
            <Header />
            <span className={'pic-container'}>
                <img className={'profile-pic'} src={profileImage} alt="Author's smiling face in a suit"/>
            </span>
            <Experience />
            <Education />
            <Technology />
            <Footer />
        </div>
    );
}