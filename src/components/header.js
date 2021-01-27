import React, { Component } from 'react';
import AOS from 'aos';

class Header extends React.Component{
    render(){
        AOS.init({ duration:1000 });
        return(
            <header>
                <div className={"div-logo"}>
                <img src={"./assets/images/logo.png"} alt={"logo"}/>
                </div>
                <div className={"nav-bar"}>
                    <nav>
                        <ul>
                            <li><a href={"#services"}>Servicii</a></li>
                            <li><a href={"#projects"}>Proiecte</a></li>
                            <li><a href={"#contact"}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <section>
                    <div  data-aos="zoom-in-up"
                          className="carousel">
                        <img src={"./assets/images/A2-1.jpg"} alt={"herophoto"}/>
                    </div>
                    <section className={"about"}>
                    <div data-aos="zoom-in" className={"about-display"}>
                        <p id={"quote"}>” Autoprima Serv este o companie care ofera valoare - determinata de siguranta lucrului bine facut si confirmata de satisfactia clientilor „ </p>
                        <h2><strong>Despre noi</strong></h2>
                        <p>
                            Infiintata in 1999 ca o afacere de familie, Autoprima Serv a evoluat, devenind o companie durabila, cladita pe valori fundamentale precum - seriozitate, flexibilitate si competenta profesionala.
                            Activitatea companiei noastre a fost axata la inceput, pe transporturi (grele pentru constructii, transporturi speciale si de marfuri periculoase), prestatii cu utilaje si furnizare produse de cariera. Urmand dinamica sectorului de constructii, ne-am specializat in executia infrastructurilor rutiere, a lucrarilor de terasamente si a constructiilor imobiliare.
                            </p><br/>
                        <span>Misiune</span>
                        <p>
                            Ne-am propus sa satisfacem cerintele din ce in ce mai exigente ale clientilor, prin servicii de calitate superioara, la preturi competitive.
                            </p><br/>
                            <span>Viziune</span>
                        <p>
                            Vrem sa contribuim la dezvoltarea infrastructurilor rutiere din Romania, pentru a atinge standardele de calitate regasite in cadrul Uniunii Europene.
                            Valori
                            Vizam stabilirea colaborarilor eficiente atat cu clientii cat si cu partenerii, prin dezvoltarea continua a capacitatii antreprenoriale
                        </p>
                    </div>
                    <div data-aos="zoom-out" className="second-hero">
                        <img src={"./assets/images/bridge sign.jpg"} alt={"bridgephoto"}/>
                        </div>
                    </section>
                </section>
            </header>
        )
    }
}

export default Header