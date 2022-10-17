import React from 'react'
import "../styles/App.css"
import omniva from "../media/imgs/omniva.png"
import onninen from "../media/imgs/onninen.png"
import dpd from "../media/imgs/dpd.png"
import ahola from "../media/imgs/Ahola.png"
import {ReactComponent as Alecoq} from "../media/imgs/alecoq.svg"
import {ReactComponent as Schenker} from "../media/imgs/schenker.svg"
import {ReactComponent as Garbage} from "../media/svgs/garbage.svg"
import {ReactComponent as House} from "../media/svgs/house.svg"
import {ReactComponent as Truck} from "../media/svgs/truck.svg"

const avaleht = () => {
  return (
    <div>
        <div className="background-img-container">
            <div className="background-img">
                <div className="background-img-row">
                    <div className="box1">
                        <p className="box1-p">Veo- ja kullerteenused Harjumaa piires</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="mid-sector">
            <div>
            <p className="partnerid-p">MEIE TEENUSED</p>
            <div className="teenused-container">
                
                <div className="teenus-box">
                    <div>
                    <Truck className="teenuse-logo" width="3rem"/>
                    </div>
                    <p className="teenus">VEOTEENUS</p>
                    <p className="teenuse-kirjeldus">Toimatame teie veose võimalikult kiiresti ja tervelt kohale</p>
                    <ul className="teenuse-list">
                        <li>Kaubavedu</li>
                        <li>Mööbli kohale toimetamine</li>
                        <li>Kodutehnika kohaletoimatamine</li>
                        <li>Ehitusmaterjalide vedu</li>
                        <li>Muud veoteenused</li>
                        <li>Abistame laadimisel</li>
                    </ul>
                </div>
                <div className="teenus-box">
                    <div>
                        <Garbage className="teenuse-logo" width="2rem"/>
                    </div>
                    <p className="teenus">PRÜGI UTLISIEERIMINE</p>
                    <p className="teenuse-kirjeldus">Aitame utiliseerida igasuguse prügi</p>
                    <ul className="teenuse-list">
                        <li>Prügivedu</li>
                        <li>Ehitusprahi äravedu</li>
                        <li>Vana mööbel</li>
                        <li>Kodumasinad</li>
                        <li>Vanametall</li>
                        <li>Muud prügiveod</li>
                    </ul>
                </div>
                <div className="teenus-box">
                    <div>
                    <House className="teenuse-logo" width="3rem" />
                    </div>
                    <p className="teenus">KOLIMISTEENUS</p>
                    <p className="teenuse-kirjeldus extra-padding-bottom">Pakume kolimisteenust nii era- kui äriklientidele </p>
                </div>
            </div>
            </div>
            <div className="hr-line"></div>
            <div className="partnerid-container">
                <div className="partnerid-p-container">
                    <p className="partnerid-p">KOOSTÖÖ PARTNERID</p>
                </div>
                <div className="partnerid">
                    <img width="100px" src={omniva} />
                    <img width="100px" src={onninen} />
                    <img width="100px" height="45px" src={dpd} />
                    <img width="100px" src={ahola} />
                    <Alecoq width="100px" />
                    <Schenker width="100px" />
                </div>
            </div>
            <div className="hr-line"></div>
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
    </div>
  )
}

export default avaleht