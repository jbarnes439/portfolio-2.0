import './contact.css';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Form from '../../Components/Form/form';

export default function Contact() {    

    return (
        <div className={'contact-container'}>
            <Header />
            <h3>Contact</h3>
            <Form />
            <Footer />
        </div>
    )
}