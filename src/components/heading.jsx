import React from 'react'
import {HashLink} from 'react-router-hash-link'
export const Header = () => {
  return (
    <div className='heading'>
        <nav>
            <h1>mr. nirdosh</h1>
            <main>
            <HashLink to={'/#'}>Home</HashLink>
            <HashLink to={'/#about'}>About</HashLink>
            <HashLink to={'/#contact'}>Contact</HashLink>
            </main>
        </nav>
    </div>
  )
}
