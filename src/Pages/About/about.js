import './about.css';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import desertImage from '../../assets/unsplash-sonoran-desert.jpeg';

export default function About() {
    return (
        <div className={'about-container'}>
            <Header />
            <img src={desertImage} alt='desert landscape' className={'about-image'} />
            <div className={'about-section'}>
                <p>
                    Arizona native that enjoy the outdoors, music, and black coffee. I enjoy
                    beautiful scenes and UIs. Please reach out if interested in work or
                    any of the aformentioned things!
                </p>
            </div>
            <Footer />
        </div>
    );
};