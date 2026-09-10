import React, { useState } from 'react';
import './Anime.css'

const Anime = () => {

    const [animeActual, setAnimeActual] = useState(0);
    const [retratoActual, setRetratoActual] = useState(0);

    const imagenesAnime = [
        '/src/assets/anime1.webp',
        '/src/assets/anime2.webp',
    ];

    const imagenesRetratos = [
        '/src/assets/retrato1.webp',
        '/src/assets/retrato2.webp',
    ];

    return (
        <div className="galeria">

            <section className="categoria">
                <h2>ANIME</h2>

                <div className="carousel">

                    <button
                        onClick={() =>
                            setAnimeActual(
                                animeActual === 0
                                    ? imagenesAnime.length - 1
                                    : animeActual - 1
                            )
                        }
                    >
                        ←
                    </button>

                    <img
                        src={imagenesAnime[animeActual]}
                        alt="Tatuaje anime"
                    />

                    <button
                        onClick={() =>
                            setAnimeActual(
                                animeActual === imagenesAnime.length - 1
                                    ? 0
                                    : animeActual + 1
                            )
                        }
                    >
                        →
                    </button>

                </div>
            </section>


            <section className="categoria">
                <h2>RETRATOS</h2>

                <div className="carousel">

                    <button
                        onClick={() =>
                            setRetratoActual(
                                retratoActual === 0
                                    ? imagenesRetratos.length - 1
                                    : retratoActual - 1
                            )
                        }
                    >
                        ←
                    </button>

                    <img
                        src={imagenesRetratos[retratoActual]}
                        alt="Tatuaje de retrato"
                    />

                    <button
                        onClick={() =>
                            setRetratoActual(
                                retratoActual === imagenesRetratos.length - 1
                                    ? 0
                                    : retratoActual + 1
                            )
                        }
                    >
                        →
                    </button>

                </div>
            </section>

        </div>
    );
};

export default Anime;