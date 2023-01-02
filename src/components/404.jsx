import React from 'react';
import errorimage from '../assests/404.svg'

export const ErrorPage = () => {
  return (
    <div className='errorpage'>
        <img src={errorimage} alt="404-error" />
        <p>
            404 page not found!
        </p>
    </div>
  )
}
