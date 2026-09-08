import React from 'react'
import './PreEstilos.css'
import anime from '../../assets/anime.jpg'
import puntillismo from '../../assets/puntillismo.jpg'
import retrato from '../../assets/retrato.jpg'


const PreEstilos = () => {
    return (
        <div className='card-container'>
            <div className='ft-up'>
                <h2>Conoce algunos de nuestros Estilos</h2>
            </div>
            <div className='card'>
                <div>
                    <h3>ANIME</h3>
                    <p>Diseños inspirados en Animes</p>
                    <img src={anime} alt="" />
                </div>
                <div>
                    <h3>PUNTILLISMO</h3>
                    <p>Diseños inspirados en Animes</p>
                    <img src={puntillismo} alt="" />
                </div>
                <div>
                    <h3>RETRATOS</h3>
                    <p>Diseños inspirados en Animes</p>
                    <img src={retrato} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreEstilos