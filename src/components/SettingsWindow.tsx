import React, { useState } from 'react'
import "./SettingsWindow.scss"
import { FcSettings } from "react-icons/fc"
import { IoColorFilterOutline } from "react-icons/io5"
import SliderInput from './utils/SliderInput'
import UseOutsideClick from './customHooks/UseOutsideClick'
import {texts} from '../consts';



const SettingsWindow = () => {
    const {SETTIGS_WINDOW_OPACITY} = texts;
    const [isSettingsWindowOpen, setIsSettingsWindowOpen] = useState<boolean>(false);
    const activeStyle = isSettingsWindowOpen ? "active" : "";

    const openSettingsHandler = (event:any) => {
        setIsSettingsWindowOpen((PrevState) => !PrevState)
        event.stopPropagation();
    };

    const clickOutsideHandler = () => {
        setIsSettingsWindowOpen((prevState) => prevState = false)
    };

    const ref = UseOutsideClick(clickOutsideHandler);
   
    return (
        <div className='settings-wrapper' >
            <FcSettings className={`setting-icon ${activeStyle}`} onClick={openSettingsHandler} />

            <div className={`settings-window-wrapper ${activeStyle}`} ref={ref}>
                <div className='setting-option'>
                    <div className='option-title-wrapper'>
                        <IoColorFilterOutline className='option-icon' />
                        <h3 className='option-title'>{SETTIGS_WINDOW_OPACITY}</h3>
                    </div>
                    <SliderInput />
                </div>
            </div>

        </div>
    )
}

export default SettingsWindow