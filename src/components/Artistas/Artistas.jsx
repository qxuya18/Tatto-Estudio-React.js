import React from 'react'
import './Artistas.css'
import Artista1 from '../../assets/artista1.avif';
import Artista2 from '../../assets/artista2.webp';
import Artista3 from '../../assets/artista3.webp';
import Artista4 from '../../assets/artista4.webp';
import Artista5 from '../../assets/artista5.jpg';
import Artista6 from '../../assets/artista6.jpg';

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
                    <img src={Artista2} alt="Artista 2" />
                    <h2>Artista 2</h2>
                    <p>Especialista en retratos.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src={Artista3} alt="Artista 3" />
                    <h2>Artista 3</h2>
                    <p>Especialista en realismo.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src={Artista4} alt="Artista 4" />
                    <h2>Artista 4</h2>
                    <p>Especialista en tatuajes tradicionales.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src={Artista5} alt="Artista 5" />
                    <h2>Artista 5</h2>
                    <p>Especialista en diseños personalizados.</p>
                </div>

                <div className="tarjeta-artista">
                    <img src={Artista6} alt="Artista 6" />
                    <h2>Artista 6</h2>
                    <p>Especialista en diferentes estilos.</p>
                </div>

            </div>

        </div>
    )
}

export default Artistas