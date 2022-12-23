import React from 'react';
import './HeroStyle.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaGitAlt, FaReact, FaJsSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import emailjs from 'emailjs-com'; 
import Typed from 'react-typed'

function Hero() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
    "service_b8zppnz",
    "template_vzcdz29",
    e.target,
    "ptpdH1mDQaNs30PT9"
    ).then(res=>{
      alert('your message has been sent. thank you');
  }).catch(err=> alert('q!!!'));
}
  return (
    <div id="about" className='card'>
        <h2>About me</h2>
        <p>hey there! I'm khalid mohammed. I'm  a self-taught Front-End developer. Solving problems and learning<br />new things is something I enjoy doing everyday! I'm ready (and excited) to join the tech industry where <br />I can continue to learn and grow, alongside other talented developers. When im not coding <br />you can catch me playing basketball. </p>
        <div id="skills" className='aboutText'>
          <h2>skills</h2>
          <div className='dark'>
          <div className='Planet'>
          <div><AiFillHtml5 /><p>html</p></div>
          <div><DiCss3 /><p>css</p></div>
          </div>
         <div className='survive'>
         <div><FaJsSquare /><p>javascript</p></div>
         <div><FaReact /><p>react</p></div>
         </div>
          <div className='oxygen'>
          <div><FaGitAlt /><p>git</p></div>
          <div><BsGithub /><p>github</p></div>
          </div>
          </div>
          </div>
          <div id="Portfolio" className='time'>
            <h2>Portfolio</h2>
           <Typed className='whats'
            strings={['working on it ..']}
            typeSpeed={120}
            backSpeed={140}
            loop 
            />  
            <div id='contact' className='mindset'>
              <h2>Contact</h2>
              <h6>let's talk</h6>
              <p>Feel free to contact me to chat about anything!</p>
              <div className='social-icon'>
              <a href='https://www.linkedin.com/in/khalid-mohd-70493a227/' target="_blank"><AiFillLinkedin className='linkedin' /></a><br />
              <a href='https://github.com/khalidm0hd' target="_blank"><AiFillGithub className='github' /></a>
              </div>
              <div className='wrapper'>
                <h6>Get in touch</h6>
                <form className='dolo' onSubmit={sendEmail}>
                  <input type='text' name='name' placeholder="Name" /><br />
                  <input type='email' name='user_email' placeholder="Email" /><br />
                  <textarea name="message" placeholder="Message"></textarea><br />
                  <button type="submit">Send Message</button><br />
                </form>
                <footer>
        <div className="break">
            <p>© 2022 | Developed and designed by khalid mohd</p>
        </div>
    </footer>
              </div>
              </div>
              </div>
              </div>
  )
}

export default Hero;