import React from 'react'
import Tarjeta from './Tarjeta'
import './tarjetas.css'

function Tarjetas() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                     <Tarjeta/>
               </div>

               <div className='col-md-4'>
                     <Tarjeta/>
               </div>

               <div className='col-md-4'>
                     <Tarjeta/>
               </div>
              </div>
        </div>
    )
}

export default Tarjetas
