import React from 'react'
import chefs1 from '../images/userimage.avif'
export default 
function Chefs() {
  return (
    <div className='Chefs'>
        <div className='container-fluid'>
            <div className='ea'>
                <h5>CHEFS</h5>
                <h2>OUR<span> PROFFESIONAL </span> CHEFS</h2>
            </div>
            <div className='ga'>
                <div className='ga1'>
                    <img src={chefs1}/>
                    <h5>Walter White</h5>
                    <h6>Master Chef</h6>
                    <p><i>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut.
                       Ipsum exercitationem iure minima enim corporis et voluptate.</i></p>
                </div>
                <div className='ga1'>
                    <img src={chefs1}/>
                    <h5>Sarah Jhonson</h5>
                    <h6>Patissier</h6>
                    <p><i>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis.
                          Voluptate sed quas reiciendis animi neque sapiente.</i></p>
                </div>
                <div className='ga1'>
                    <img src={chefs1}/>
                    <h5>William Anderson</h5>
                    <h6>Cook</h6>
                    <p><i>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. 
                        Voluptates enim aut architecto porro aspernatur molestiae modi.</i></p>
                </div>
            </div>
        </div>
    </div>
  )
}
