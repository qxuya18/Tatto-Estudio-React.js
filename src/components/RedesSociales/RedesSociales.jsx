import React, { useState } from 'react'
import './RedesSociales.css'
import facebook from '../../assets/Iconos/facebook-icon.svg'
import instagram from '../../assets/Iconos/instagram-icon.svg'
import x_twiter from '../../assets/Iconos/x_dark.svg'
import x_twiter_ligth from '../../assets/Iconos/x_twitter_light.svg'
import whatsapp from '../../assets/Iconos/whatsapp-icon.svg'


function RedesSociales() {
    const [like, setLike] = useState(0)
    return (
        <div className="icon-container">
            <div className="content-redes">
                <button clasName="like"
                    onClick={() => setLike(like + 1)}>
                    <img src={facebook} alt="" />
                </button >
                <p>Dale Like {like}</p>


            </div>
        </div>
    )
}

export default RedesSociales