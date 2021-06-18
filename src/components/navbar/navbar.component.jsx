import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';
import AdvoticsLogo from '../../assets/advotics-logo.jpg'
import Profile from '../../assets/profile.png'
import LogoutIcon from '../../assets/logout.png'
import sideMenuIcon from '../../assets/sidemenuicon.png'
import dashboardIcon from '../../assets/Dashboard icon.svg'


export default function Navbar() {
    const [currentUser, setCurrentUser] = useState({
        displayName: 'Aldi Megantara A',
        companyName: 'Advotics',
        profilePict: Profile
    })
    const auth = {
        signOut() {
            console.log('signout')
        }
    }
    return (
        <>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img className='logo' src={AdvoticsLogo} alt="" />
            </Link>
            <div className='options'>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> <span className='user'> <strong>{currentUser.displayName}</strong>{currentUser.companyName}</span><span className='icon-head'><img style={{marginRight:'12px'}} src={currentUser.profilePict} alt="" /><img src={LogoutIcon} alt="" /></span></div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
        <div className='sidebar'>
            <Link className='sidebar-menu'><img src={sideMenuIcon} alt="" /></Link>
            <Link className='sidebar-menu'><img style={{width:'1.4rem'}} src={dashboardIcon} alt="" /></Link>
        </div>
        </>
    )
}