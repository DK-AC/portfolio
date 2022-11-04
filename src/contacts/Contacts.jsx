import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
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
