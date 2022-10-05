import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right">
          <span><FacebookIcon /></span>
          <span><InstagramIcon /></span>
          <span><YouTubeIcon /></span>
          <span><TwitterIcon /></span>
        </div>

        <div className="footer-left">

          <p className="footer-links">
            <span className="link-1">Home</span>

            <span>Blog</span>

            <span>Pricing</span>

            <span>About</span>

            <span>Faq</span>

            <span>Contact</span>
          </p>

          <p>DFLIX &copy; 2022</p>
        </div>

      </footer>
    </>
  )
}

export default Footer