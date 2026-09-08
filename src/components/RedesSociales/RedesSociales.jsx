import React, { useState } from 'react'
import './RedesSociales.css'
import facebook from '../../assets/Iconos/facebook-icon.svg'
import instagram from '../../assets/Iconos/instagram-icon.svg'
import x_twiter from '../../assets/Iconos/x_dark.svg'
import x_twiter_ligth from '../../assets/Iconos/x_twitter_light.svg'
import whatsapp from '../../assets/Iconos/whatsapp-icon.svg'


function RedesSociales() {
    return (
        <div className="icon-container">
            <div className="content-redes">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={x_twiter_ligth} alt="" />
                <img src={whatsapp} alt="" />
            </div>
        </div>
    )
}

export default RedesSociales