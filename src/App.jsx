import { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import Video from "/light.mp4";




function App() {
  const [activeTab, setActiveTab] = useState(1)

  function handleClick(e) {
    const tabNum = Number(e.target.dataset.tab);
    if (!tabNum) return;

    setActiveTab(tabNum);
  }

  function App() {
    return (
      <div className="App">
          <video controls autostart autoPlay src={Video} type="video/mp4" />
      </div>
    );
  }
  const form = useRef();
  const [status, setStatus] = useState("");

  let lastSubmit = 0;

const sendEmail = (e) => {
  e.preventDefault();

  const now = Date.now();
  if (now - lastSubmit < 15000) {
    setStatus("Please wait before sending again.");
    return;
  }
  lastSubmit = now;

  emailjs.sendForm(
    "service_ayj0k0x",
    "template_tw4phec",
    form.current,
    "hrIQtuh2KhvUnDcV_"
  )
  .then(() => setStatus("Message sent!"))
  .catch(() => setStatus("Failed to send"));
};
    


  
  return (
    <>
  
      <div className='page'>
      <div className='fading'>
        <div className='intro'>
          <h1>Hello!</h1>
            <h4>My name is Matthew Quintero </h4>
        </div>
        <p className='description'>I am currently a junior in Florida International University pursing a bachelor's degree in Computer Science</p>
        <p className='no-space-font'> I am passionate about making my code come to life with modern technology!</p>
        <p className='no-space-font'> This involves with working with current web development tools and hardware for embedded systems.</p>

        <h2 className='About' id='about'>About</h2>
        <p className='description'> I started to get interested in tech around high school when I began to build my first PC and still use it till today!</p>
          <p className='no-space-font'>In highschool I also took classes like intro to computing which made me understand what</p>
            <p className='no-space-font'>programming was and why it is useful. Since that, I began to explore my interests and it led</p>
            <p className='no-space-font'>me to be creating and contributing to projects in teams and on my own. My dream is to be able to work in an environment where I can see my creations come to life and be used by others.</p>
          <p className='no-space-font'>Specifically in fields like space technology. Other than that, my current hobbies consist of going to the gym, playing piano, running, and rock climbing.</p>
      
          

      
          

        <h2 className='About' id='experience'>Experience</h2>

        <div class="container">
        <div class="tabs" onClick = {handleClick}>
          
          <a className={`tab tab-1 ${activeTab === 1 ? "active" : ""}`} data-tab="1">December 2024 - September 2025</a>
          <a className={`tab tab-2 ${activeTab === 2 ? "active" : ""}`} data-tab="2">October 2025 - December 2025</a>
          <a className={`tab tab-3 ${activeTab === 3 ? "active" : ""}`} data-tab="3">October 2025 - December 2025</a>

          <span class="highlighter"></span>
          
          </div>
        

        <div class="content">

              <div className={`content__section ${activeTab === 1 ? "visible" : ""}`} data-tab="1">
                <h3>TeKniK LABS and Bricks 4 Kids</h3>
                <p className='job_title'> Lead Teacher</p>
                <p className='job_description'>
                 Led interactive Java and Lua coding lessons for
                  over 30 students using hands-on, project-based learning
                  to strengthen programming fundamentals and problem-solving skills. Maintained
                  consistent communication with students and parents to support progress and increase engagement. Designed personalized instruction and independent projects that significantly improved student confidence and coding proficiency across both school-year and summer camp programs.
                </p>
                <div className='skill_line'>
                  <button className='skills'> Java</button>
                  <button className='skills'> Lua</button>
                  
                </div>
                
          </div>

          <div className={`content__section ${activeTab === 2 ? "visible" : ""}`} data-tab="2">
            <a href='https://github.com/INIT-FIU-Hardware-Build-Fall2025/Neuroplay-BCI' className='link'><h3>INIT Build - Neuro-Play</h3></a>
                <p className='job_title'> Project collaborator</p>
                <p className='job_description'>
                  Developed embedded firmware in Python and C++ to interface with live EEG signal streams, translating brainwave data into real-time control commands for a Raspberry Pi–powered robotic car running Linux. Collaborated closely with an 11-member multidisciplinary team to design and integrate Arduino-based hardware, implementing robust data parsing, serial communication protocols, and fault-tolerant error-handling to ensure reliable signal transmission. Optimized firmware data flow and motion-control logic to reduce EEG-to-system latency by 30%, significantly improving responsiveness, stability, and overall system performance during real-time operation.
                </p>
                <div className='skill_line'>
                  <button className='skills'> Python</button>
                  <button className='skills'> C++</button>
                  <button className='skills'> Arduino</button>
                  <button className='skills'> Linux</button>
                  <button className='skills'> ML</button>
                  
                </div>
                <div className='image-format'>
                  <img className="exp-image" src="/neuro.jpg" alt="Photo" />
                  <img className="exp-image" src="/neuro2.jpg" alt="Photo" />
                </div>
          </div>

          <div className={`content__section ${activeTab === 3 ? "visible" : ""}`} data-tab="3">
            <a href='https://github.com/Mattquin45/Pokemon-type-battle-Data-model' className='link'><h3 h3 className='job-header'>Breakthrough Tech - Pokemon Type Simulator</h3></a>
                <p className='job_title'> Project contributor</p>
                <p className='job_description'>
                  Cleaned, transformed, and validated large, complex datasets using Python, Pandas, and NumPy to ensure high data quality and reliability for analysis and modeling. Performed in-depth exploratory data analysis (EDA) through structured weekly labs, leveraging Matplotlib and Seaborn to uncover trends, correlations, and anomalies in real-world datasets. Applied data wrangling, statistical analysis, and visualization techniques in a comprehensive project to generate actionable insights, clearly communicating results through a formal presentation and detailed written report.
                </p>
                <div className='skill_line'>
                  <button className='skills'> Python</button>
                  <button className='skills'> Pandas</button>
                  <button className='skills'> NumPy</button>
                  <button className='skills'> Matplotlib</button>
                  <button className='skills'> Seaborn</button>
                  <button className='skills'> EDA</button>
                  
                </div>
                <div className='image-format'>
                  <img className="exp-image" src="/pokemon.png" alt="Photo" />
                  <img className="exp-image" src="/data.jpeg" alt="Photo" />
                </div>
              </div>
        </div>
          </div>

          


         

          <h2 id='projects'>Projects</h2>
          <div className='project'>
            <a href='https://github.com/Mattquin45/Suggestion-calander'><img className="proj-image" src="/calendar.png" alt="Photo" /></a>
           
              <h2 className='proj-title'>Path manager</h2>
            <p className='proj-naming2'>March 2025 - Present</p>
            <div className='project-text'>
              <p className='proj-description'> Designed and deployed a responsive React-based calendar application enabling customizable scheduling, automated PDF exports, and email reminders to improve user time management. Integrated React-PDF, TypeScript, and Node.js for document generation and notification workflows, and implemented secure authentication and data persistence using Spring Boot, PostgreSQL, and JWT-based REST APIs.</p>
            
            <div className='proj-skills'>
                  <button className='skills'>JS</button>
                  <button className='skills'>React</button>
                  <button className='skills'>Node.js</button>
                  <button className='skills'>TypeScript</button>
              <button className='skills'> SpringBoot</button>
              <button className='skills'> PostgreSQL</button>
              <button className='skills'> JWT</button>
              <button className='skills'> React-PDF</button>
              <button className='skills'> Java</button>
              <button className='skills'> RESTAPI</button>
              </div>
            </div>
            </div>
            
          
          
          
          <div className='project'>
            <a href='https://github.com/Mattquin45/CodeDoc'><img className="proj-image" src="/codedoc.png" alt="Photo" /></a>
              
              <h2 className='proj-title'>CodeDoc</h2>
              <p className='proj-naming'> September 2025 - ShellHacks Submission</p>
              <p className='proj-description'> Built an AI-powered documentation generator using Google Gemini and Google ADK to analyze source code and automatically produce structured technical documentation. Designed multi-agent workflows to document functions and types, reducing review time by 40%. Integrated a Streamlit frontend with the ADK API server for an improved user interface, and collaborated with a 4-person team to optimize agent coordination, cutting response latency by 30%.</p>
            
            <div className='proj-skills'>
                  <button className='skills'>Python</button>
                  <button className='skills'>StreamLit</button>
                  <button className='skills'>GoogleADK</button>
                  <button className='skills'>FastAPI</button>
              
                  
            </div>
            </div>
            
          <div className='project'>
            <a href='https://github.com/Ahirshson02/TrackLaw'><img className="projvert-image" src="/tracklaw.png" alt="Photo" /></a>
            <div className='projectvid-text'>
              <h2 className='projvid-title'>TrackLaw</h2>
              <p className='projvid-naming'> January 2025 - 305Hackathon Submission</p>
              <p className='projvid-description'> Collaborated with a 4-member team to design and develop an AI-powered legislative tracking application that combined real-time data visualization with intelligent policy analysis, earning 1st Place – Software Development & AI Integration. Led the implementation of secure, cross-platform authentication using Dart, Swift, and Firebase, ensuring reliable and protected access across devices. Integrated Google Gemini AI to power an in-app chatbot that delivers real-time legislative summaries, policy insights, and contextual explanations, significantly improving user accessibility and understanding of complex legislation.</p>
            
            <div className='projvid-skills'>
                  <button className='skills'>Dart</button>
                  <button className='skills'>Flutter</button>
                  <button className='skills'>Gemini</button>
                  <button className='skills'>Firebase</button>
              
            </div>
            </div>
          </div>
          <div className='project'>
            <video className="video" src={Video} controls muted />
            <div className='projectvid-text'>
              <a href='https://github.com/Mattquin45/ESP32-relay-light-switch-with-BLE' className='link'><h2 className='projvid-title'>Light Switch Automation App</h2></a>
              <p className='projvid-naming'>February 2025 </p>
              <p className='projvid-description'> Collaborated with a 4-member team to design and develop an AI-powered legislative tracking application that combined real-time data visualization with intelligent policy analysis, earning 1st Place – Software Development & AI Integration. Led the implementation of secure, cross-platform authentication using Dart, Swift, and Firebase, ensuring reliable and protected access across devices. Integrated Google Gemini AI to power an in-app chatbot that delivers real-time legislative summaries, policy insights, and contextual explanations, significantly improving user accessibility and understanding of complex legislation.</p>
            
            <div className='projvid-skills'>
                  <button className='skills'>C++</button>
                  <button className='skills'>Arduino</button>
                  <button className='skills'>BLE</button>
                  <button className='skills'>ESP32</button>
              
            </div>
            </div>
          </div>





          
          <h2 id='contact'>Contact</h2>
          <section className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Have a question, project idea, or opportunity? Feel free to reach out.
      </p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input className='name' type="text" name="name" placeholder="Your Name" required />
        <input className='email' type="email" name="user_email" placeholder="Your Email" required />
        <textarea className='message' name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </section>
        
  <div className="centered-buttons" id="buttons">    
  <div className="social-menu">
  <ul>
    <li>
      <a href="https://www.instagram.com/holycrapits_matthew/?igsh=MXBlanplOHc3ZXYzdg%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="/instagram.png" alt="Instagram" className="pic" />
      </a>
    </li>

    <li>
      <a href="https://www.linkedin.com/in/matthew-quin/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="/linkedin.png" alt="LinkedIn" className="pic" />
      </a>
    </li>

    <li>
      <a href="https://github.com/Mattquin45" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/320px-GitHub_Invertocat_Logo.svg.png"
          alt="GitHub"
          className="pic"
        />
      </a>
    </li>
            </ul>
            </div>
            </div> 

      </div>
    </div>

    </>
  )
}

export default App
