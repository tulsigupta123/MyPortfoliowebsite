import React from 'react'
import './Contact.css'
import Swing from 'react-reveal/Swing';
const Contact = () => {
  return (
    <>
    <div className="contact-section" id="contact">
   <center><h2>CONTACT</h2></center> 
   <div className="contact-container">
<Swing><div className="img">
<img src="https://www.icicilombard.com/docs/default-source/assets/customer-support/images/health_screen.png" alt="image" /></div></Swing>
<div className="contact-form">
<form>
    <span>Let's Connect Together</span>
    <ul>
  <a href="https://github.com/tulsigupta123" rel="noreferrer" target="_blank"><li><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></li></a>
  <a href="https://linkedin.com/in/tulsigupta598" rel="noreferrer" target="_blank"><li><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG2.png" alt="linkedin" /></li></a>
  <a href="https://tulsigupta902@gmail.com" rel="noreferrer" target="_blank"><li><img src="https://static-00.iconduck.com/assets.00/gmail-icon-144x144-9zpetszl.png" alt="mail" /></li></a>
  <a href="tel:8948720881"><li><img src="https://static.vecteezy.com/system/resources/thumbnails/016/416/785/small/phone-call-icon-in-black-colors-telephone-signs-illustration-png.png" alt="phone" /></li></a>
    </ul> 
 <div className="contact-or">  <hr />OR <hr /> </div>
<input type="text" name="name" placeholder="Enter your name" />
<input type="email" name="email" placeholder="Enter your email id" />
<textarea name="msg" placeholder= "Write your message"></textarea>
<a href="https://api.whatsapp.com/send?phone=8948720881" rel="noreferrer" target="_blank"><button type="submit">Send </button></a>

</form>
</div>
   </div>
   </div>
    </>
  )
}

export default Contact