import React from 'react';
import Image from '../Images/hd-icon.png'
import {GoCheck} from 'react-icons/go'
import Footer from '../Components/Footer/Footer';
export default function Home() {
    return (
        <div className='HomePage'>
        <div className='yellowBar'></div>
            <div className='HomePageWrap'>
<div className='HomePageContent'>
<div className='ImageText'>
                Access Live Sports Without Cable in
                </div>
                <img className='HDImage' src={Image} alt='HD Quality'></img>
                <p className='TextFormHDSub'>PLEASE <a href='https://www.wecubs.com' style={{color:"#fff",textDecoration:"underline"}}>REGISTER</a> BELOW</p>
            <div className='Form_Services'>
                <form className='FormAcc'>
             <div className='Center'>
             <p className='TextFormHD'>REGISTER TO START LIVE HD STREAM</p>
                <p className='TextFormDes'>Please fill out the following fields to create an account:</p>
                <p className='Label'>Email*</p>
                    <input required className='InputBox' placeholder='your email here...' type='email' />
                <p className='Label'>Password*</p>
                    <input required className='InputBox' placeholder='your password here...'  type='password'/>
                    <input type='submit' className='InputBtn' value='Create Free Account | $0.00'></input>
             </div>
                </form>
                <div className='Services'>
                    <p className='ServiceHeaderTXT'>
                    <span className='DolarAmount'>$0</span><span className='DolarAmountTXT'>Unlimited Access</span>
                    </p>
                    <p className='Offer'><span className='CheckIcon'><GoCheck /></span> Free Unlimited Access</p>
                    <p className='Offer'><span className='CheckIcon'><GoCheck /></span> HD Streaming - 1080p</p>
                    <p className='Offer'><span className='CheckIcon'><GoCheck /></span> No Ads </p>
                    <p className='Offer'><span className='CheckIcon'><GoCheck /></span> All Platforms </p>
                    <p className='Offer'><span className='CheckIcon'><GoCheck /></span> Quick and Easy Setup</p>
                </div>
            </div>
</div>
            </div>
            <Footer />
        </div>
    )
}
