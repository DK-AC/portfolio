import React from 'react'
import styleContainer from '../common/styles/Container.module.scss'
import style from './Contacts.module.scss'
import {Title} from '../common/components/title'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title name={'contact'}/>
                <div className={style.contacts}>
                    <form className={style.formContacts}>
                        <input className={style.formControl} type={'text'}
                               placeholder={'Name'}/>
                        <input className={style.formControl} type={'text'}
                               placeholder={'E-mail'}/>
                        <textarea
                            className={`${style.formControl} ${style.formControlTextArea} `}
                            placeholder={'Your message'}/>
                        <input className={style.submitBtn} type="submit" title={'ads'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
