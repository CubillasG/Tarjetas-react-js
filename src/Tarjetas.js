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
    image: imagen1,
    texto: 'HTML es el lenguaje de marcado a partir del cual se define todo el contenido que vemos en las páginas, y junto a él está el CSS, orientado hacia su diseño y apariencia. De hecho, aunque muchas personas desconocen qué es HTML y CSS, es muy probable que disfruten a diario de sus aplicaciones al navegar por la red.',
    url: "https://github.com/CubillasG/Modern.Desing"
    },
    {
        id: 2,
        title: 'Javascript',
        image: imagen2,
        texto: 'JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc.',
        url: "https://github.com/CubillasG/MyTienda"
    },
    {
        id: 3,
        title: 'React js',
        image: imagen3,
        texto: 'React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.',
        url: "https://github.com/CubillasG/Buscador-de-Libros"
    }

]

function Tarjetas() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    tarjetas.map(tarjeta =>
                        <div className='col-md-4' key={tarjeta.id}>
                             <Tarjeta titulo={tarjeta.title} misImagenes={tarjeta.image} texto={tarjeta.texto} links={tarjeta.url}/>
                        </div>  
                        )
                }

               
              </div>
        </div>
    )
}

export default Tarjetas
