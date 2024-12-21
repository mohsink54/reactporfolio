import './App.css'
import laptop from './assets/laptop.png'
import logo from './assets/logo.png'
import user from './assets/user.png'
import globe from './assets/globe.png'
import resume from './assets/resume.png'
import sparkle from './assets/sparkle.png'
import { FaRegCopy } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { RiFontSizeAi } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineBubbleChart } from "react-icons/md";
import { BsVectorPen } from "react-icons/bs";
import { FaPaintbrush } from "react-icons/fa6";
import { LuSquareMousePointer } from "react-icons/lu";
import { BsEmojiGrin } from "react-icons/bs";
import { useEffect, useState } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { scroller } from "react-scroll";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  

  // scroll to header
  const scrollToHeader = ()=>{
    scroller.scrollTo('header', {
      duration: 500,
      smooth: true,
      offset: 12, 
    })
  }

  // Scroll to Top Function
  const scrollToTop = () => {
    scroller.scrollTo('header', {
      duration: 500,
      smooth: true,
      offset: 12, 
    })
  };
  

  return (
    <>
      <section className='welcome-section'>
          <div className="welcome">
            <div className="welcome-popup">
              <span className='capsule'>Welcome Here</span>
            </div>
            <div className="welcome-content">Lets turn ideas into usefull design</div>
            <button onClick={scrollToHeader}>Scroll Down</button>
          </div>
      </section>
      <header id='header'>
        <div className="logo">
          <img src={logo} alt="Website logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-list-item ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="main-left">
          <div className="main-popup">
            <span className='capsule'>Attractive UI/UX Designs</span>
          </div>
          <div className="main-content">Solving problem first,then thoughtfully designing solutions.</div>
          <button>Contact me</button>
        </div>
        <div className="main-right">
          <img src={laptop} alt="laptop image with dashboard design" />
        </div>
      </main>
      <section className="about-container">
        <div className="about-section">
          <h3>ABOUT ME</h3>
          <p>
            As a passionate UI designer, I bring creativity and precision to every pixel. 
            With a deep understanding of user experience, I craft assets that not only look 
            stunning but also function seamlessly across all platforms. 
            Portfolio showcases my best work, available for you to purchase and implement into your projects.
          </p>
          <button>View my work</button>
        </div>

        {/* Stats Card */}
        <div className="stats-card">
          <div className="icon">
            <img src={globe} alt="Globe" />
          </div>
          <h4>120%</h4>
          <p>Average increase in client engagement in the first 6 months</p>
          <img src={user} alt="User profile" />
        </div>

        {/* Resume and Experience */}
        <div className="resume-card">
          <img src={resume} alt="Resume" />
          <a href="/resume.pdf" className="download-button" download>
            Download Resume
          </a>
          <ul className="experience-list">
            <li>
              <span className="icon">
                <img src={sparkle} alt="Icon" />
              </span>
              <p>
                With 2 years of experience, I specialize in creating intuitive, user-focused designs that solve 
                real-world problems and deliver seamless digital experiences.
              </p>
            </li>
            <li>
              <span className="icon">
                <img src={sparkle} alt="Icon" />
              </span>
              <p>
                I thrive on working closely with clients, blending creativity with strategy to bring their vision to life 
                through thoughtful, impactful design solutions.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="data-container">
        <div className="data-card">
          <h4>02+</h4>
          <p className="data-text">Years of Experience</p>
        </div>
        <div className="data-card">
          <h4>120+</h4>
            <p className="data-text">Successful Projects</p>
        </div>
        <div className="data-card">
          <h4>250+</h4>
          <p className="data-text">Total Clients</p>
        </div>
        <div className="data-card">
          <h4>+80%</h4>
          <p className="data-text">Client Revenue</p>
        </div>
      </section>
      <section className='work-container'>
        <h2>Featured Work</h2>
        <div className="grid-container">
          <div className="grid-item">LMS SOFTWARE<br/><span>Sales Website</span><br/><span>2024</span></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </section>
      <section className="feature-container">
        <div className="feature-content">
          <h2>You Will Get</h2>
          <p>Everything You Need for a Professional and Seamless Design Experience</p>
        </div>
        <div className="feature-section">
          <div className="feature-cards">
            <FaRegCopy className="feature-icon" />
            <div>
              <h4>Global Styleguide</h4>
              <p>Customize design with the text and color style</p>
            </div>
          </div>
          <div className="feature-cards">
            <RiFontSizeAi className="feature-icon" />
            <div>
              <h4>Free Fonts</h4>
              <p>Using free font inter from
              Google</p>
            </div>
          </div>
          <div className="feature-cards">
            <FaLayerGroup className="feature-icon" />
            <div>
              <h4>Organized Layer</h4>
              <p>Customized design with the text
              and color style</p>
            </div>
          </div>
          <div className="feature-cards">
            <FiSend className="feature-icon" />
            <div>
              <h4>Easy Customizable</h4>
              <p>100% easy to change &
              customizable components</p>
            </div>
          </div>
          <div className="feature-cards">
            <GiStarsStack className="feature-icon" />
            <div>
              <h4>Pixel Perfect</h4>
              <p>Distance and measure using an 
              even multiple of measures</p>
            </div>
          </div>
          <div className="feature-cards">
            <CgDarkMode className="feature-icon" />
            <div>
              <h4>Dark Mood</h4>
              <p>Consistence Design with the
              text and style</p>
            </div>
          </div>
        </div>
      </section>
      <section className="skill-container">
        <div className="skill-section">
          <div className="skill-content">
            <h3>Skills & Experience</h3>
            <p>
              I&apos;m a skilled UI/UX designer proficient in Figma, Adobe XD, Photoshop, and Illustrator. With expertise in prototyping and graphic design, I bring creativity and functionality to every project. Let&apos;s collaborate to create engaging user experiences.
            </p>
          </div>
          <hr />
          <div className="skill-icon-container">
            <div className="skill-item">
              <div className="skill-shoadow">
                <FaRegUser className="skill-icon" />
              </div>
              <p>User Research</p>
            </div>
            <div className="skill-item">
              <div className="skill-shoadow">
                <BsEmojiGrin className="skill-icon" />
              </div>
              <p>Wireframe</p>
            </div>
            <div className="skill-item">
              <div className="skill-shoadow">
                <MdOutlineBubbleChart className="skill-icon" />
              </div>
              <p>Style Guide</p>
            </div>
            <div className="skill-item">
              <div className="skill-shoadow">
                <BsVectorPen className="skill-icon" />
              </div>
              <p>User Experience Design</p>
            </div>
            <div className="skill-item">
              <div className="skill-shoadow">
                <FaPaintbrush className="skill-icon" />
              </div>
              <p>Visual Design</p>
            </div>
            <div className="skill-item">
              <div className="skill-shoadow">
                <LuSquareMousePointer className="skill-icon" />
              </div>
              <p>Prototype</p>
            </div>
          </div>
        </div>
        <div className="skill-bars">
          <div className="bar-item">
            <h3>Web UI/UX Design</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <p className="percentage-text">85%</p>
          </div>
          <div className="bar-item">
            <h3>Mobile App UI/UX Design</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <p className="percentage-text">75%</p>
          </div>
          <div className="bar-item">
            <h3>Dashboard & SaaS UI/UX Design</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "92%" }}></div>
            </div>
            <p className="percentage-text">92%</p>
          </div>
        </div>
      </section>
      <section className='testimonial'>
       <div className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-content">
          <div className="testi-item">
            <img src={user} alt="" />
            <p>
            Working with Abdullah was an excellent experience. He truly understands user needs and translates them into beautiful, functional designs. His creativity and attention to detail exceeded my expectations. Highly recommended!
            </p>
            <h4>Tim Beer</h4>
            <p>Golf Course Manager</p>
          </div>
        </div>
       </div>
      </section>
      {showTopButton && (
        <button
        onClick={scrollToTop}
          className='go-to-top'
        >
          <IoIosArrowRoundUp className='goto-icon'/>
        </button>
      )}
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <img src={user} alt="User Profile Picture" />
            <div className="chat">
              <h3>Lets Chat</h3>
              <p>
                Feel free to contact us if youd like to chat. Drop us a message anytime!
              </p>
            </div>
          </div>
          <div className="footer-links">
            <div className="pages">
              <ul>
                <li>Pages</li>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="innerpages">
              <ul>
                <li>Inner Pages</li>
                <li>About Single</li>
                <li>Project Single</li>
                <li>Service Single</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>Social</li>
                <li>LinkedIn</li>
                <li>Behance</li>
                <li>Dribbble</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="address">
            <h4><a href="mailto:abdullahtariq4902@gmail.com"><span>abdullahtariq4902</span>@gmail.com</a></h4>
            <p><a href="tel:+923095370965">+92-3095370965</a> - <a href="tel:+92248579971">+92-248579971</a></p>
            <p>Pakistan, Lahore, Sabzazar</p>
          </div>
        </div>
        <hr />
        <div className="copyright">
          © 2024. All Rights Reserved
        </div>
      </footer>

    </>
  )
}

export default App
