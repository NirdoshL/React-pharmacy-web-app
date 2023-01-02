import React from 'react'
import {AiFillGoogleCircle,AiFillFacebook,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <article>
        <div>
      <AiFillGoogleCircle/>
      <p>Google</p>
      </div>
      <div>
      <AiFillFacebook/>
      <p>Facebook</p>
      </div>
      <div>
      <AiFillGithub/>
      <p>Github</p>
      </div>
      <div>
      <AiFillLinkedin/>
      <p>Linkedin</p>
      </div>
      </article>
    </div>
  )
}
