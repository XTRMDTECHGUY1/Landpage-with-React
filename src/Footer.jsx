import React from 'react'
import facebook from './assets/New folder/facebook.png';
import instagram from './assets/New folder/instagram.png';
import Telegram from './assets/New folder/Telegram.png';
import Tiktok from './assets/New folder/Tiktok.png';
import twitter from './assets/New folder/twitter.png';
import youtube from './assets/New folder/youtube.png';

function Footer() {
  return (
    <div className='footer'>
    <div className='sb_footer section_padding'>
    <div className='sb_footer-links'>
    <div className='sb_footer-links_div'>
    <h4 className='font'> Lets Keep in touch!</h4>
    <a href='/'style={{  textDecoration: 'none'}}>
        <p> Find us on any of this plaforms, we response 1-2 business days</p>
    </a>

    <div className='socialmedia'>
<p className='social'> <img src={facebook} alt="" /></p>
<p className='social'> <img src={instagram} alt="" /></p>
<p className='social'> <img src={Telegram} alt="" /></p>
<p className='social'> <img src={Tiktok} alt="" /></p>
<p className='social'> <img src={twitter} alt="" /></p>
<p className='social'> <img src={youtube} alt="" /></p>
</div>
    </div>

    <div className='sb_footer-links_div'>
    <h4 className='font'> USEFUL LINK</h4>
    <a href='/'style={{  textDecoration: 'none'}}>
        <p> About us</p>
    </a>
    <a href='/'style={{  textDecoration: 'none'}}>
        <p> Blog</p>
    </a>
    <a href='/'style={{  textDecoration: 'none'}}>
        <p> Github</p>
    </a>
    <a href='/'style={{  textDecoration: 'none'}}>
        <p> Free Products</p>
    </a>
    </div>

   
    <div className='sb_footer-links_div'>
    <h4 className='font'> OTHER RESOURCES</h4>
    <a href='/license' style={{  textDecoration: 'none'}}>
        <p> License</p>
    </a>
    <a href='/terms'style={{  textDecoration: 'none'}}>
        <p>Term and Conditions</p>
    </a>
    <a href='/privacy'style={{  textDecoration: 'none'}}>
        <p> Privacy & Policy</p>
    </a>
    <a href='/contact'style={{  textDecoration: 'none'}}>
        <p> Contact Us</p>
    </a></div>


 

    
        
    </div>

    

   <hr></hr>
   <div className='sb_footer-below'>
    <div className='sb_footer-copyright'>
        <p> 
        @{new Date().getFullYear()} Xtrmtech. All right reserved.        
        </p>
    </div>
   </div>
    </div>


    </div>
  )
}

export default Footer