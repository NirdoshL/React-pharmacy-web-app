import React, { Fragment } from 'react'
import { About } from './about'
import { Contact } from './contact'


export const Home = () => {
  return (
    <Fragment>
    <div className='home' id='home'>
        <main>
       <h1>Nirdosh <br/> Pharmacy</h1>
       <p>Balkot, Bagmati<br/>Bhaktapur-44800</p>
       </main>
    </div>
    <About/>
    <Contact/>
    </Fragment>
  )
}
