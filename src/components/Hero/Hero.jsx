import React, { useState, useEffect } from 'react'
import './Hero.css'
import img1 from '../../assets/hero.jpg'
import img2 from '../../assets/hero2.jpg'
import img3 from '../../assets/hero3.jpg'

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const images = [img1, img2, img3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 7000) // cambia cada 4 segundos
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section className='container-hero'>
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    className={`hero-img ${i === current ? 'active' : ''}`}
                />
            ))}

            <div className='hero-content'>
                <h1>Estudio Profesional de Tatuajes</h1>
                <p>Diseño único, técnica precisa y arte que dura para siempre.</p>
            </div>



        </section>
    )
}

export default Hero   