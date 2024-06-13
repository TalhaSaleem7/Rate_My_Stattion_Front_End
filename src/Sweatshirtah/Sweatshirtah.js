import React from 'react'
import { Container } from 'react-bootstrap'
import Cooperah1 from '../Cooperah/Cooperah1'
import Cooperah from '../Cooperah/Cooperah'
import Buyerah from '../Buyerah/Buyerah'




const Sweatshirtah = () => {

    return (
        <>
            <section className='Sweatshirt-sec'>
                
            <Container>
                <div className="Sweatshirt">
                    <Cooperah1/>

                    <div className="Sweatshirt-box">

                    <div className="Sweatshirt-part-1">
                                 <Cooperah/>
                    </div>

                    <div className="Sweatshirt-part-2">
                        <Buyerah/>
                    </div>

                    </div>
                </div>
            </Container>
            </section>          
  

        </> 
    )
}

export default Sweatshirtah