import React from 'react';
import PropTypes from 'prop-types'


function Tarjeta({titulo,misImagenes,texto,links}) {
    return (
        <div className='card'>
            <img src={misImagenes}/>
            <div className='card-body todo'>
                <h4 className='card-title todo'>{titulo}</h4>
                <p className='card-text'>{texto}</p>
                <a href={links} target='new'><button type="button" class="btn btn-primary">Ir a Git Hub</button></a>   
            </div>
          
        </div>
    )
}
Tarjeta.propTypes = {
    titulo: PropTypes.string.isRequired,
    misImagenes: PropTypes.string,
    links: PropTypes.string.isRequired
}

export default Tarjeta
