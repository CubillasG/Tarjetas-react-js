import React from 'react';


function Tarjeta({titulo,misImagenes}) {
    return (
        <div className='card bg-dark'>
            <img src={misImagenes}/>
            <div className='card-body'>
                <h4 className='card-title'>{titulo}</h4>
                <p className='card-text text-secondary'> Mi primer experiencia con la programacion fue mediante HTML 5 y CSS </p>
                <button type="button" className="btn btn-secondary">Ir al sitio web</button>  
            </div>
          
        </div>
    )
}

export default Tarjeta
