import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrophy, faHome, faEnvelope, faPhone, faTruck, faHeart } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';

class Footer extends React.Component{
    render(){
        AOS.init({ duration:1000 });
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

export default Footer