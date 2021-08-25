import React from 'react'
import Tarjeta from './Tarjeta'
import './tarjetas.css'
import imagen1 from './img/html.png'
import imagen2 from './img/js.png'
import imagen3 from './img/react.jpg'

const tarjetas = [
    {
    id: 1,
    title: 'html5 y css',
    image: imagen1
    },
    {
        id: 2,
        title: 'Javascript',
        image: imagen2
    },
    {
        id: 3,
        title: 'React js',
        image: imagen3
    }

]

function Tarjetas() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    tarjetas.map(tarjeta =>
                        <div className='col-md-4' key={tarjeta.id}>
                             <Tarjeta titulo={tarjeta.title} misImagenes={tarjeta.image}/>
                        </div>  
                        )
                }

               
              </div>
        </div>
    )
}

export default Tarjetas
