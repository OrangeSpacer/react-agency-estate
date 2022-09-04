import './ModalForm.scss'
import Button from '../Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
const ModalForm = ({modalOpen,setModal}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [dirtyName,setDirtyName] = useState(false)
    const [dirtyPhone,setDirtyPhone] = useState(false)
    const [validForm,setValidForm] = useState(false)
    const [nameError,setNameError] = useState('input valid Name')
    const [phoneError,setPhoneError] = useState('input valid Phone')

    useEffect(() => {
        if(nameError || phoneError){
            setValidForm(false)
        }
        else{
            setValidForm(true)
        }
    },[phoneError,nameError])

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'name':
                setDirtyName(true)
                break
            case 'phone':
                setDirtyPhone(true)
                break
            default:
                break
        }
    }
    const handlerName = (e) => {
        setName(e.target.value)
        const re = /^[a-zA-Z ]+$/gim
        if(!re.test(String(e.target.value).toLocaleLowerCase())){
            setNameError('Not corret name')
        }
        else{
            setNameError('')
        }
    }
    const handlerPhone = (e) => {
        setPhone(e.target.value)
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s]?[0-9]{4,6}$/im
        if(!re.test(String(e.target.value).toLocaleLowerCase())){
            setPhoneError('Not corret phone')
        }
        else{
            setPhoneError('')
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        setName('')
        setPhone('')
    }
    return (
        <div className='modalForm' style={modalOpen ? {display:'block'}:{display:'none'}}>
            <div className='modalForm__content'>
                <h2 className='modalForm__title'>
                    Leave your contacts
                </h2>
                <div className='modalForm__subtitle'>
                    we will contact you within three hourss
                </div>
                <div>
                    <form className='modalForm__form'>
                        <div className='modalForm__form_inputBlock'>
                            {(dirtyName && nameError) && <div style={{position:'absolute',color:'red',top:'0',left:'15px',zIndex:'2000'}}>{nameError}</div>}
                            <input onBlur={e => blurHandler(e)} name='name' value={name} onChange={handlerName} className='modalForm__input' placeholder='Name'/>
                        </div>
                        <div className='modalForm__form_inputBlock'>
                        {(dirtyPhone && phoneError) && <div style={{position:'absolute',color:'red',top:'0',left:'15px',zIndex:'2000'}}>{phoneError}</div>}
                            <input onBlur={e => blurHandler(e)} name='phone' value={phone} onChange={handlerPhone} className='modalForm__input' placeholder='Phone'/>
                        </div>
                        <div style={{marginTop:'15px'}}>
                            <Button click={submitForm} type="send" text="send" disabled={!validForm}>
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='modalForm__close' onClick={setModal}>
                    <img src="img/ModalForm/close.svg" alt="close" />
                </div>
        </div>
        </div>
    );
}
 
export default ModalForm;