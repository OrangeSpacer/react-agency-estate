import { useState } from "react";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import classes from './ContactUs.module.scss'
const ContactUs = () => {
    const [inputValue,setInputValue] = useState('')
    const [ValidForm,setValidForm] = useState(false)
    const [error,setError] = useState(null)

    const validateEmail = (email) => {
        return/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email)
    }

    const handlerInputValue = (e) => {
        if(!validateEmail(e.target.value)){
            setError('Email is invalid')
        }
        else{
            setError(null)
            setValidForm(!ValidForm)
        }
        setInputValue(e.target.value)
    }
    const submitForm = (e) => {
        if(!error){
            setInputValue('Succes')
            setValidForm(!ValidForm)
        }
        e.preventDefault()
    }
    return (
        <Container>
            <div className={classes.questionBlock} style={{backgroundImage: `url("/img/ContactUs/ContactUs.png")`}}>
                <div className={classes.questionText}>
                    Do you have any questions?
                </div> 
                <h2 className={classes.title}>
                    Contact us
                </h2> 
                {error && <h5 style={{color:'red'}}>{error}</h5>}
                <form className={classes.questionForm}>
                    <input onChange={handlerInputValue} className={classes.questionInput} placeholder="Enter your mail" value={inputValue} style={error && {border:'1px solid red'}}/>
                    <Button text='Send' type='send' click={submitForm} disabled={!ValidForm}/>
                </form>
            </div>
        </Container>
    );
}
 
export default ContactUs;