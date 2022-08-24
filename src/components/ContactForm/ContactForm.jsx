import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import classes from './ContactForm.module.scss'
const ContactForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [textArea,setTextArea] = useState('')
    const [nameDirty,setNameDirty] = useState(false)
    const [emailDirty,setEmailDirty] = useState(false)
    const [nameError, setNameError] = useState('Not valid name')
    const [emailError, setEmailError] = useState('Not valid email')
    const [formValid,setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || nameError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }
    },[emailError,nameError])


    const emailHndler = (e) => {
        const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Not correct email')
        }
        else{
            setEmailError('')
        }
        setEmail(e.target.value)
    }

    const textAreaHandler = (e) => {
        setTextArea(e.target.value)
    }

    const nameHandler = (e) => {
        const re = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
        if(!re.test(String(e.target.value).toLowerCase())){
            setNameError('Not correct name')
        }
        else{
            setNameError('')
        }
        setName(e.target.value)
    }
    
    const blurHandler = (e) => {
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
        }
    }

    const formSend = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
    }

    return (
        <form className={classes.formBlock}>
            <div className={classes.formInputBlock}>
                <div className={classes.formInputContent}>
                    {(nameDirty && nameError) && <div style={{color:'red',position:'absolute',top:'-30px'}}>{nameError}</div>}
                    <input onClick={blurHandler} value={name} onChange={nameHandler} name="name" type="text" placeholder="name"  className={classes.formInput}/>
                </div>
                <div className={classes.formInputContent}>
                    {(emailDirty && emailError) && <div style={{color:'red',position:'absolute',top:'-30px'}}>{emailError}</div>}
                    <input onClick={blurHandler} value={email} onChange={emailHndler} name="email" type="text" placeholder="email"  className={classes.formInput}/>
                </div>
            </div>
            <textarea onChange={textAreaHandler} value={textArea} placeholder="Message *" className={classes.formTextArea}/>
            <Button text="submit" type="modal" click={formSend} disabled={!formValid}/>
        </form>
    );
}
 
export default ContactForm;