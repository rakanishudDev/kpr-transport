import React from 'react'
import '../styles/Kontakt.css'
import {ReactComponent as Mail} from '../media/svgs/mail.svg'
import {ReactComponent as Phone} from '../media/svgs/phone.svg'
const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <div className="kontakt-row">
        <div className="juriidline-info-container">
          <p className="juriidline-info">Juriidiline info:</p>
          <div className="info-firma-box">
            <p className="info-firma">2022 KPR Transport OÜ</p>
            <p className="info-firma-reg">Reg-nr 10358170</p>
          </div>
          <p className="info-p">Koondise 5, Saue</p>
          <p className="info-p">76505 Harju maakond</p>
        </div>
        <div className="kontakt-info-container">
          <p className="kontakt">Veoste tellimine ja info:</p>
          <div className="info-p-box"><Phone width="1rem" /><p className="info-p">56788345</p></div>
          <div className="info-p-box"><Mail height="1rem" width="1rem" /><p className="info-p">kprtransport@gmail.com</p></div>
        </div>
      </div>
      <div className="avaleht-kontakt">
        <p className="partnerid-p">VÕTA MEIEGA ÜHENDUST</p>
        <form className="avaleht-form">
            <fieldset className="form-fieldset">
                <legend className="form-label">Nimi</legend>
                <div className="textarea-box">
                    <input className="form-input" type="name" required />
                </div>
            </fieldset>
            <fieldset className="form-fieldset">
                <legend className="form-label">Email</legend>
                <div className="textarea-box">
                    <input className="form-input" type="email" required />
                </div>
            </fieldset>
            <fieldset className="form-fieldset">
                <legend className="form-label">Sõnum</legend>
                <div className="textarea-box">
                <textarea className="form-textarea" required />
                </div>
            </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Kontakt