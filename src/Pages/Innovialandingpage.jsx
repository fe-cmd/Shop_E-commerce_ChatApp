import React from 'react';
import './CSS/Innovialandingpage.css';
import innov from '../Components/Assets/innov.jpg';
import innov1 from '../Components/Assets/innov1.png';
import rob from '../Components/Assets/rob.jpg';
import rob1 from '../Components/Assets/rob1.jpg';
import rob2 from '../Components/Assets/rob2.jpg';






const Innovialandingpage = () => {
  return (
    <div>
     {/* Hero Section */}
     <section
        className="hero"
        style={{
          backgroundImage: `url(${innov})`
        }}
      >
      <div className='logo'>
<img
              src={innov1}
              alt=""
              
            />      </div>
        <div className="overlay"></div> {/* Darkened overlay for contrast */}
        <div className="content">
          <h1>Give Your Child the Ultimate Tech Experience This Easter! 🚀</h1>
          <p>Hands-on training in AI, Robotics & Drone Technology for kids aged 8–16!</p>
          <p className="hero-info">
            📅 April 14 – April 25, 2025 | 📍 Oshodi-Cappa, Lagos | 💰 ₦50,000 (Early Bird: ₦40,000)
          </p>
          <a
            href="https://paystack.com/buy/easter-bootcamp-innovia?discount=EASTER25"
            className="btn-primary"
          >
            Register Now
          </a>
        </div>
        <div className="wave-bottom"></div> {/* Wavy bottom of Hero section */}
      </section>

      {/* Why Attend Section */}
      <section className="section why">
      <div className="cont">
        <h2>Why Your Child Should Attend</h2>
        <ul className="list">
          <li>Hands-on AI, Robotics & Drone Training.</li>
          <li>Future-Ready Skills – Learn real-world tech applications.</li>
          <li>Exclusive Tech Exposure – Workshop at Microsoft ADC Lagos.</li>
          <li>Fun & Engaging – Interactive sessions that make learning exciting.</li>
        </ul>
        </div>
     <img src={rob} alt="Why Attend" className="section-img left1" />
      </section>
         <br></br>
         <br></br>
      {/* What Will They Learn Section */}
      <section className="section alternate1">
      <div className="cont">
        <h2 className='redi'>What Will Your Child Learn?</h2>
        <div className='weeks'>
        <div className="week">
          <h3>Week 1: AI & Robotics</h3>
          <ul className="list">
          <li>Build & Program Robots  </li>
          <li>AI Training</li>
          <li>Coding & Automation</li>
          </ul>
        </div>
        <div className="week fut">
          <h3>Week 2: Drone Flight & Build</h3>
          <ul className="list">
          <li>Assemble & Fly a Drone  </li>
          <li>Learn UAV Technology</li>
          <li>Microsoft ADC Lagos Workshop</li>
          </ul>
        </div>
        </div>
        </div>
        <img src={rob1} alt="What Will They Learn" className="section-img1" />
      </section>

      {/* Pricing Section */}
      <section className="section price">
      <div className="cont">
        <h2>Pricing & Discounts</h2>
        <p className="pricing">Bootcamp Fee: ₦50,000</p>
        <p className="pricing">Early Bird: ₦40,000 (Before April 1)</p>
        <p className="pricing">Returning Parents: 15% Off</p>
        </div>
        <img src={rob2} alt="Pricing" className="section-img left" />
      </section>

      {/* FAQ Section */}
      <section className="section alternate2">
        <h2 className="mic">FAQs</h2>
        <details className="faq">
          <summary>Who is this bootcamp for?</summary>
          <p>Kids aged 8–16 who are curious about AI, Robotics, and Drones!</p>
        </details>
        <details className="faq">
          <summary>Do they need prior experience?</summary>
          <p>No, beginners are welcome! Our facilitators will guide them.</p>
        </details>
      </section>

      {/* CTA Section */}
      <section
        className="cta"
        
      >
        <div className="overlay"></div> {/* Darkened overlay for contrast */}
        <div className="content">
          <h1>🚀 Give your child the gift of tech skills this Easter!</h1>
          <p>📅 April 14 – April 25, 2025 | 📍 Oshodi-Cappa, Lagos | 💰 ₦50,000 (Early Bird: ₦40,000)</p>
          <a
            href="https://paystack.com/buy/easter-bootcamp-innovia?discount=EASTER25"
            className="btn-primary"
          >
            Register Now
          </a>
        </div>
        <div className="wave-top"></div> {/* Wavy top of CTA section */}
      </section>
    </div>
  )
}

export default Innovialandingpage;
