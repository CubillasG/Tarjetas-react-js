import React from 'react'
import imagen1 from './img/html.png'

function Tarjeta() {
    return (
        <div className='card'>
            <img src={imagen1}/>
            <div className='card-body'>
                <h4 className='card-title'>Soy Gonzalo</h4>
                <p className='card-text text-secondary'> Mi primer experiencia con la programacion fue mediante HTML 5 y CSS </p>
                    
            </div>
          
        </div>
    )
}

export default Tarjeta
