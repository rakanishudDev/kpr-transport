import React from 'react'
import '../styles/Teenused.css'
import renaultMaster from "../media/imgs/renault-master.jpg"
import renaultCab from "../media/imgs/renault-cab.jpg"
import volvoFurgoon from "../media/imgs/volvofurgoon.jpg"

const Teenused = () => {
  return (
    <div className="teenused-pagecontainer">

      <div className="teenus-container">
        <img className="kaubik-img" width="500px" src={renaultMaster}/>
        <div className="teenus-info-table">
          <div><h2>Renault Master</h2></div>
          <div className="info-table-body">
            <div className="info-table-row">
              <div className="column1"> 
                <p>FURGOONI MÕÕTMED</p>
              </div>
              <div className="column2"> 
                <p>pikkus 3,6 m, laius 1,75 m, kõrgus 2,15 m</p>
              </div>
            </div>
            <div className="info-table-row">
              <div className="column1"> 
                <p>MAHT</p>
              </div>
              <div className="column2"> 
                <p>14,8 m3</p>
              </div>
            </div>
            <div className="info-table-row">
              <div className="column1"> 
                <p>KANDEVÕIME</p>
              </div>
              <div className="column2"> 
                <p>1,5 tonni</p>
              </div>
            </div>
            <div className="info-table-row-baashind">
                <div className="column1"> 
                  <p>BAASHIND</p>
                </div>
                <div className="column2">
                  <div className="baashind">
                    <p className="hind">14 €/h</p>
                    <p className="hind">0.4 €/km</p>
                    </div>
                </div>
            </div>
          </div>
        </div>{/* table end */}
      </div>
      <div className="hr-line"></div>
      <div className="teenus-container">
        <img className="kaubik-img" width="500px" src={renaultCab}/>
        <div className="teenus-info-table">
          <div><h2>Renault Master</h2></div>
          <div className="info-table-body">
            <div className="info-table-row">
              <div className="column1"> 
                <p>FURGOONI MÕÕTMED</p>
              </div>
              <div className="column2"> 
                <p>pikkus 3,8 m, laius 2 m, kõrgus 2,5 m</p>
              </div>
            </div>
            <div className="info-table-row">
              <div className="column1"> 
                <p>MAHT</p>
              </div>
              <div className="column2"> 
                <p>15,6 m3</p>
              </div>
            </div>
            <div className="info-table-row">
              <div className="column1"> 
                <p>KANDEVÕIME</p>
              </div>
              <div className="column2"> 
                <p>1,5 tonni</p>
              </div>
            </div>
            <div className="info-table-row-baashind">
                <div className="column1"> 
                  <p>BAASHIND</p>
                </div>
                <div className="column2">
                  <div className="baashind">
                    <p className="hind">14 €/h</p>
                    {/* <p>|</p> */}
                    <p className="hind">0.4 €/km</p>
                    </div>
                </div>
            </div>
          </div>
        </div>{/* table end */}
      </div>
      <div className="hr-line"></div>
      <div className="teenus-container">
        <img className="kaubik-img" width="500px" src={volvoFurgoon}/>
        <div className="teenus-info-table">
          <div><h2>VOLVO FL280</h2></div>
          <div className="info-table-body">
            <div className="info-table-row">
                <div className="column1"> 
                  <p>FURGOONI MÕÕTMED</p>
                </div>
                <div className="column2"> 
                  <p>pikkus 7,4 m, laius 2,5 m, kõrgus 2,25 m</p>
                </div>
            </div>
            <div className="info-table-row">
                <div className="column1"> 
                  <p>MAHT</p>
                </div>
                <div className="column2"> 
                  <p>41,6 m3</p>
                </div>
            </div>
            <div className="info-table-row">
                <div className="column1"> 
                  <p>KANDEVÕIME</p>
                </div>
                <div className="column2"> 
                  <p>6 t</p>
                </div>
            </div>
            <div className="info-table-row">
                <div className="column1"> 
                  <p>TAGALUUKTÕSTUK</p>
                </div>
                <div className="column2"> 
                  <p>2000 kg</p>
                </div>
            </div>
            <div className="info-table-row-baashind">
                <div className="column1"> 
                  <p>BAASHIND</p>
                </div>
                <div className="column2">
                  <div className="baashind">
                      <p className="hind">20 €/h</p>
                      <p className="hind">0.6 €/km</p>
                  </div>
                </div>
            </div>
          </div>
        </div>{/* table end */}
      </div>
      <p className="hinnakiri-NB">Hindadele lisandub käibemaks 20%</p>
    </div>
  )
}

export default Teenused