import React from 'react'
import "../styles/Layout.css"
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../media/svgs/box.svg'
import {ReactComponent as Location} from '../media/svgs/location.svg'
import {ReactComponent as Mail} from '../media/svgs/mail.svg'
import {ReactComponent as Phone} from '../media/svgs/phone.svg'
import {ReactComponent as Menu} from '../media/svgs/menu.svg'

const Layout = ({children}) => {
  return (
    <div className="layout">

        <div className="navbar">
            <header className="header">
                <Logo className="transportLogo" />
                <p className="heading">KPR Transport</p>
            </header>
            <nav className="nav">
                <ul className="nav-links">
                    <li><Link className="link" to="/">AVALEHT</Link></li>
                    <li><Link className="link" to="/hinnakiri">HINNAKIRI</Link></li>
                    <li><Link className="link" to="/kontakt">KONTAKT</Link></li>
                </ul>
                <div className="menu">
                    <Menu width="1.5rem" />
                </div>
            </nav>
        </div>
        <div className="navbar-fix"></div>
        <main className="main">
            {children}
        </main>
        <footer className="footer">
            <div className="footer-info-container">
                <div className="footer-info-box">
                    <Phone width="1rem" />
                    <p className="footer-info">56788345</p>
                </div>
                <p className="footer-info-seperator">|</p>
                <div className="footer-info-box">
                    <Mail height="1rem" width="1rem" />
                    <p className="footer-info">kprtransport@gmail.com</p>
                </div>
                <p className="footer-info-seperator">|</p>
                <div className="footer-info-box">
                    <Location width="1rem" />
                    <p className="footer-info">Koondise 5, Saue, Harju maakond</p>
                </div>
            </div>
            <p className="">&copy; <i>KPR Transport</i> OÜ 2022</p>
        </footer>
    </div>
  )
}

export default Layout