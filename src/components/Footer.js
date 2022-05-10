import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <PinterestIcon />
      </div>
          <p>&copy; 2022 Indianfoood.com</p>
    </div>
  )
}

export default Footer
