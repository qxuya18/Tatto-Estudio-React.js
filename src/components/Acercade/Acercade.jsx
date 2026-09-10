import React from 'react'
import './About.css'

const Acercade = () => {
    return (
        <div className="about">

            <section className="about-info">
                <h1>Acerca de nosotros</h1>

                <p>
                    Somos un estudio de tatuajes dedicado a crear diseños
                    únicos y personalizados. Nuestro objetivo es convertir
                    cada idea de nuestros clientes en una pieza de arte.
                </p>

                <p>
                    Contamos con artistas especializados en diferentes
                    estilos, trabajando siempre con creatividad, cuidado
                    y atención a cada detalle.
                </p>
            </section>


            <section className="ubicacion">

                <h2>Visítanos</h2>

                <p>
                    Encuéntranos en nuestra ubicación y ven a conocer
                    nuestro estudio.
                </p>
                <p>2022-106286@intecap.edu.gt</p>
                <p>36017158</p>
                <p>Calle Doroteo Guamuch Flores y 10 calle Zona 5.</p>

                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb="
                        title="Ubicación del estudio"
                        loading="lazy"
                    ></iframe>
                </div>

            </section>

        </div>
    )
}

export default Acercade;