import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Contacts.module.css'
import {Title} from '../common/components/title'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title name={'Contacts'}/>
                <div className={style.contacts}>
                    <form className={style.formContacts}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea/>
                        <input className={style.submitBtn} type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
