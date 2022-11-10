import React, {useRef} from 'react'
import styleContainer from '../common/styles/Container.module.scss'
import style from './Contacts.module.scss'
import {Title} from '../common/components/title'
import {Fade} from 'react-awesome-reveal'
import emailjs from '@emailjs/browser'

export const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_72wnd05",
                "template_ex75hm5",
                form.current,
                "1JHzR5J9vZQsqOIgD"
            )
            .then(
                (result) => {
                    console.log(result.text,result.status);
                    alert("SUCCESS!");
                },
                (error) => {
                    console.log(error.text,error.status,error);
                    alert("FAILED...", error);
                }
            );
    };


    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title name={'contact'}/>
                <Fade cascade>
                    <div className={style.contacts}>
                        <form ref={form} onSubmit={sendEmail} className={style.formContacts}>
                            <input className={style.formControl} type={'text'} name={'name'}
                                   placeholder={'Name'}/>
                            <input className={style.formControl} type={'email'} name={'email'}
                                   placeholder={'E-mail'}/>
                            <textarea
                                className={`${style.formControl} ${style.formControlTextArea} `}
                                placeholder={'Your message'} name="message"/>
                            <input className={style.submitBtn} type="submit"/>
                        </form>
                    </div>
                </Fade>
            </div>

        </div>
    )
}
