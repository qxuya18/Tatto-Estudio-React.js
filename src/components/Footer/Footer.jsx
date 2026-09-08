import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


export const Footer = () => {
    return (
        <div className='container-footer'>
            <footer className='footer'>
                <div>
                    <h2>Brian Dennis Quintanilla</h2>
                    <p>Proyecto Intecap Full Stack</p>
                    <p>Aprendiendo React.js</p>
                </div>
                <div>
                    <h2>nuestro trabajo</h2>
                    <p>Proyecto Intecap Full Stack</p>
                    <p>Aprendiendo React.js</p>
                </div>
                <div>
                    <h2>Encuentranos</h2>
                    <p>Proyecto Intecap Full Stack</p>
                    <p>Aprendiendo React.js</p>
                    <FaFacebook size={28} color="#2051adff" />
                    <FaTwitter size={28} color="#2051adff" />
                    <FaInstagram size={28} color="#ad31a3ff" />

                </div>
            </footer>
            <div className='ft_down'>
                <p>Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer
