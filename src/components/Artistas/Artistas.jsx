import React from 'react'
import './Artistas.css'
import Artista1 from '../../assets/artista1.avif';

const Artistas = () => {
    return (
        <div className="artistas">

            <h1>Nuestros Artistas</h1>

            <div className="artistas-grid">

                <div className="tarjeta-artista">
                    <img src={Artista1} alt="Artista 1" />
                    <h2>Artista 1</h2>
                    <p>Especialista en tatuajes anime.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src="" alt="Artista 2" />
                    <h2>Artista 2</h2>
                    <p>Especialista en retratos.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src="" alt="Artista 3" />
                    <h2>Artista 3</h2>
                    <p>Especialista en realismo.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src="" alt="Artista 4" />
                    <h2>Artista 4</h2>
                    <p>Especialista en tatuajes tradicionales.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src="" alt="Artista 5" />
                    <h2>Artista 5</h2>
                    <p>Especialista en diseños personalizados.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src="" alt="Artista 6" />
                    <h2>Artista 6</h2>
                    <p>Especialista en diferentes estilos.</p>
                </div>

            </div>

        </div>
    )
}

export default Artistas