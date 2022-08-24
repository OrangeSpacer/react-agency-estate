import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Map from "../../components/Map/Map";
import Container from "../../components/UI/Container/Container";
import Title from "../../components/UI/Title/Title";
import classes from './Contact.module.scss'
const Contact = () => {
    return (
        <Container>
            <div className={classes.contactBlock}>
                <Title title="Contact"/>
                <div>
                    <Map/>
                </div>
                <div className={classes.contactInfoBlock}>
                    <ContactInfo/>
                </div>
                <div className={classes.contactFormBlock}>
                    <div>
                        <h5 className={classes.contactFormTitle}>
                            Be in touch<br/>
                            <span>with us</span>
                        </h5>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </Container>
    );
}
 
export default Contact;