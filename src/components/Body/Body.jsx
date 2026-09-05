import React from 'react'
import './Body.css'
import famous from '../../assets/famous.jpg'

function Body() {
    return (
        <div className='body'>
            <h1>LA TINTA DEL PUERTO</h1>
            <div className='content'>
                <p>En un barrio de La Ribera, entre una panadería y una ferretería, Marina Solís alquiló un local vacío en 2019. Enfermera de 34 años, llevaba años dibujando diseños en servilletas que nunca se atrevía a enseñar. Su abuela, una mujer de pocas palabras, le había enseñado a tatuar con una aguja de coser y tinta de carbón. "Lo que se marca en la piel no se borra con el tiempo", le decía.

                    Lo bautizó La Tinta del Puerto. Los primeros meses fueron duros: tatuó a tres personas en el baño de su apartamento antes de abrir. El primer cliente real fue Javi, un pescador que le pidió un ancla en la muñeca. El segundo, su hermano Andrés, con una cruz en el antebrazo.

                    En 2023 contrató a Leo, un chico de veintidós con un estilo geométrico que contrastaba con el realismo de Marina. El local se convirtió en un punto de encuentro: café, gatos del barrio, y los domingos, Don Eusebio —el antiguo propietario— dejaba pan en la ventana.

                    Hoy sigue siendo pequeño. Un local, dos mesas, una pared de diseños. Solo el zumbido de las máquinas, el olor a tinta y a café, y la certeza de que algo, una vez marcado, ya no se borra.</p>
                <img src={famous} alt="" />
            </div>
        </div>
    )
}

export default Body