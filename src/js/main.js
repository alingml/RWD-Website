import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrophy, faHome, faEnvelope, faPhone, faTruck, faHeart } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';

document.addEventListener("DOMContentLoaded",function () {

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

    class Content extends React.Component{
        render(){
            return(
                <body>
                <section className={"services-container"} 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className={"services"} id={"services"}>
                    <h2>Servicii</h2>
                </div>
                    <div className={"services-display"}>
                <div className={"services-content"}>
                    <img src={"./assets/images/road.svg"} alt={"roadicon"} width={"50px"} height={"50px"} />
                    <h3>Infrastructuri si suprastructuri rutiere</h3>
                        <ul className={"services-list"}>
                            <li>constructii si reparatii drumuri si platforme</li>
                            <li>executie imbracaminti asfaltice si din beton</li>
                            <li>amenajari si sistematizari rutiere</li>
                        </ul>
                </div>
                <div className={"services-cars"}>
                    <img src={"./assets/images/excavator.svg"} alt={"eicon"} width={"50px"} height={"50px"}/>
                    <h3>Terasamente si sistematizarea terenurilor</h3>
                    <ul className={"services-cars-list"}>
                        <li>excavatii si evacuari</li>
                        <li>diguri si protejari de maluri</li>
                        <li>demolari si dezafectari</li>
                    </ul>
                </div>
                    <div className={"services-common"}>
                        <img src={"./assets/images/construction.svg"} alt={"cicon"} width={"50px"} height={"50px"}/>
                        <h3>Constructii obiective comerciale, industriale si rezidentiale</h3>
                        <ul className={"services-common-list"}>
                            <li>fundatii si structuri de rezistenta</li>
                            <li>amenajari si finisaje</li>
                            <li>sistematizari exterioare</li>
                        </ul>
                    </div>
                    <div className={"services-other"}>
                        <img src={"./assets/images/settings.svg"} alt={"sicon"} width={"50px"} height={"50px"}/>
                        <h3>Constructii obiective comerciale, industriale si rezidentiale</h3>
                        <ul className={"services-other-list"}>
                            <li>furnizare produse de cariera si balastiera</li>
                            <li>transporturi tehnologice pentru construcii</li>
                            <li>prestatii cu utialaje</li>
                            <li>modernizare drumuri</li>
                            <li>extindere retea canalizare</li>
                            <li>extindere retea alimentare cu apa</li>
                        </ul>
                    </div>
                    </div>
                </section>
                    <div data-aos="zoom-in" className={"container-grey"}>
                        <div className={"container-grey-one"}>
                            <span id={"icons-grey-container"}><FontAwesomeIcon icon={faCheckCircle}/></span>
                            <p>50+</p>
                            <p>PROIECTE TERMINATE</p>
                        </div>
                        <br/>
                        <div className={"container-grey-second"}>
                            <span id={"icons-grey-container"}><FontAwesomeIcon icon={faTrophy}/></span>
                            <p>15+</p>
                            <p>ANI EXPERIENTA</p>
                        </div>
                        <br/>
                        <div className={"container-grey-third"}>
                            <span id={"icons-grey-container"}><FontAwesomeIcon icon={faTruck}/></span>
                            <p>60+</p>
                            <p>UTILAJE</p>
                        </div>
                        <br/>
                        <div className={"container-grey-fourth"}>
                            <span id={"icons-grey-container"}><FontAwesomeIcon icon={faHeart}/></span>
                            <p>100+</p>
                            <p>ANGAJATI</p>
                        </div>
                    </div>
                    <div data-aos="flip-down" className={"photos"} id={"#projects"}>
                        <div>
                            <h2>Proiecte</h2>
                        </div>
                        <section className={"projects"}>
                        <img src={"./assets/images/A2-2.jpg"} alt={"asfaltareA2.1"}/>
                        <img src={"./assets/images/1.jpg"} alt={"asfaltareA2.2"}/>
                        <img src={"./assets/images/2.jpg"} alt={"asfaltareA2.3"}/>
                        <img src={"./assets/images/3.jpg"} alt={"asfaltareA2.3"}/>
                        <img src={"./assets/images/Picture1.png"} alt={"asfaltare"}/>
                        <img src={"./assets/images/Promenada-mamaia.jpg"} alt={"asfaltare-mamaia"}/>
                        </section>
                    </div>
                <div className={"table"}>
                    <h2>Utilaje</h2>
                    <div data-aos="zoom-in" className={"table-display"}>
                        <table>
                            <tr>
                                <th>TIP AUTO</th>
                                <th>NUMAR BUCATI</th>
                            </tr>
                            <tr>
                                <td>Autobasculanta articulata 30 tone</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Autobasculanta 8x4</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Autospecializate lucrari drumuri</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Autotrailer 20-40</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Autoturisme si autoutilitare mixte</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>Autogreder 14-2 tone</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Cilindru compactor vibrator mixt 15-18 tone</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Esalon executie tratamente bitumionase</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Incarcator compact</td>
                                <td>3</td>
                        
                            </tr>
                            <tr>
                                <td>Cilindru compactor vibrator tandem 1,5-3 tone</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Excavator pe senile 1,4 mc cu picon 24-30 tone</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Excavator pe pneuri 16-18 tone</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Buldozer pe senile 16-20 tone</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Buldoexcavator</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Repartizator finisor asfalt 16-22 tone</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Esalon executie imbracaminti beton</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Esalon executie lucrari, stabilizari soluri si reciclari in situ</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Masina marcaje rutiere</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Freze asfalt 0,5-2m</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Statie asfalt fixa 120 tone/h</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Statie asfalt mobila 80 tone/h</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                </div>
                </body>
            )
        }
    }


    class Footer extends React.Component{
        render(){
            return(
                <>
                 <section data-aos="fade-down" className={"footer-container"} id={"contact"}>
                     <div className={"footer-display"}>
                    <div className={"footer-address"}>
                        <span id={"home-icon"}><FontAwesomeIcon icon={faHome}/></span>
                        <h3>Adresă</h3>
                        <p>Bulevardul Mamaia 181 Bis, Constanța 900565</p>
                    </div>
                     <div className={"footer-email"}>
                         <span id={"home-icon"}><FontAwesomeIcon icon={faEnvelope}/></span>
                         <h3>Email</h3>
                         <p><a href={"mailto:office@autoprimaserv.ro"}>office@autoprimaserv.ro</a></p>
                     </div>
                     <div className={"footer-phone"}>
                         <span id={"home-icon"}><FontAwesomeIcon icon={faPhone}/></span>
                         <h3>Telefon</h3>
                         <p><a href={"tel:0747 338 500"}>0747 338 500</a></p>
                     </div>
                 </div>
                     <div className={"copyright"}>
                         <span>Autroprima Serv @ 2020</span>
                     </div>
                 </section>
                    </>
            )
        }
    }


    class App extends React.Component{
        render() {
            return(
                <>
                <Header/>
                <Content/>
                <Footer/>
                </>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});