import './WelcomeScreen.css'
import whatsappLogo from '../../assets/logo/whatsapp-loading-logo.png'
import { useState } from 'react'

export default function WelcomeScreen() {

    const [renderLoadingScreen, setRenderLoadingScreen] = useState(true)

    const LoadingScreen = () => {

        setTimeout(() => {
            setRenderLoadingScreen(false)
        }, 2000)

        return (
            <div className='loading-screen'>
                <img src={whatsappLogo} alt="WhatsApp Loading" className='whatsapp-loading-logo' />
                <div className='loading-spinner'>
                    <div className='loading-spinner-inner'></div>
                </div>
            </div>
        );
    };

    return (
        <div className='welcome-screen-container'>
            {renderLoadingScreen ? <LoadingScreen /> : <></>}
            <div className='welcome-content'>
                <div className='welcome-image'>
                    {/* SVG que imita la ilustración de WhatsApp */}
                    <svg viewBox="0 0 457 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="laptop-illustration">
                        <path d="M410 180H47C38.1634 180 31 172.837 31 164V24C31 15.1634 38.1634 8 47 8H410C418.837 8 426 15.1634 426 24V164C426 172.837 418.837 180 410 180Z" fill="#202C33" />
                        <rect x="25" y="180" width="407" height="12" rx="6" fill="#2A3942" />
                        <rect x="178" y="192" width="101" height="8" rx="4" fill="#3B4A54" />
                        <circle cx="228" cy="85" r="45" fill="#111B21" fillOpacity="0.5" />
                        <path d="M210 75L245 95L210 115V75Z" fill="#8696A0" />
                        <path d="M300 40H340V80H300V40Z" fill="#00A884" fillOpacity="0.2" />
                        <circle cx="100" cy="140" r="15" fill="#00A884" fillOpacity="0.3" />
                    </svg>
                </div>

                <h1 className='welcome-title'>Download WhatsApp for Windows</h1>
                <p className='welcome-description'>
                    Make calls, share your screen and get a faster experience when you download the Windows app.
                </p>

                <button className='welcome-download-btn'>
                    Download
                </button>
            </div>

            <div className='welcome-footer'>
                <span><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm3 8H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z"></path></svg></span>
                Your personal messages are end-to-end encrypted
            </div>
        </div>
    );
};
