import React from 'react'
import logo from '../assets/logo.svg';
import invoice from '../assets/invoice.svg';
import urudi from '../assets/urudi.svg';
import apple from '../assets/apple.svg';
import sendMoney from '../assets/send-money.svg';
import batch from '../assets/batch.svg';
import traffic from '../assets/traffic.svg';
import don from '../assets/don.png';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import ig from '../assets/instagram.svg';
import gmail from '../assets/gmail.svg';
import MetaTags from 'react-meta-tags';
// import Scrollbar from 'smooth-scrollbar';


// var options = {
//     damping: 0.01,
//   }
export default function Home() {
    // const dummyRef = useRef();
    // const [scrollbar, setScrollbar] = useState(dummyRef.current);


    // useEffect(() => {
    //     setScrollbar(
    //         Scrollbar.init(document.getElementById('main'), options)
    //     );
    //   }, [scrollbar]);

    //   const handleClick = (anchor) => {
    //     scrollbar.scrollIntoView(document.querySelector(anchor), {
    //         offsetLeft: 34,
    //         offsetBottom: 12,
    //         alignToTop: false,
    //         onlyScrollIfNeeded: true,
    //     });
    //   };

    return (
      <div id='main'>
        <MetaTags>
            <title>Donald - Designer</title>
            <meta name="description" content="Hello, I'm a product and motion designer. View some projects I've worked on" />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content={don} />
          </MetaTags>
        <header>
            <div>
                <img 
                    src={logo} 
                    alt="my logo"
                    className="logo"
                />    
            </div>
            <div className="nav-links">
                <p> 
                    <a href="#works">WORKS</a>  
                </p>
                <p> 
                    <a href="#about">ABOUT ME </a> 
                </p>
                <p> 
                    <a href="#contact">CONTACT </a> 
                </p>    
            </div>
            
        </header>
        <body>
            <div className="hero-page">
                <p>Donald Ugobude</p>
                <h1> Hey there! I’m a creative <span>product</span> and <span>motion designer</span> in Lagos, Nigeria.</h1>
                <p className='description-of-don'>
                    I currently work at <a href="https://app.float.co/" target='_blank' rel='noreferrer'>Float</a> as a Product & Motion Designer where I define roadmaps, conduct research, create 2D animations & still creatives, facilitate design reviews with stakeholders and incorporate findings into user-centered designs.
                </p>
            </div>
            
            <div className="works" id='works'>
                <h1>Works</h1>
                <br />
                <p>
                    I double as a product and motion designer, so projects may vary from product work to 2D animations. 
                </p>
                <div className="product">
                    <div>
                        <a 
                            href="https://www.behance.net/gallery/147641367/Float-Invoicing-Research"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={invoice} 
                                alt="my logo"
                            />    
                        </a>
                           
                    </div>
                    <div className="urudi">
                        <a 
                            href="https://www.behance.net/gallery/147665997/Case-study-Urudi"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={urudi} 
                                alt="my logo"
                            />    
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.behance.net/gallery/153830403/Apple-Music-A-button-that-downloads-all-songs"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={apple} 
                                alt="my logo"
                            />    
                        </a>
                    </div>
                </div>
                <div className='animation'>
                    <div>
                        <a 
                            href="https://www.behance.net/gallery/154079039/Case-study-Send-money-on-Float-animation"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={sendMoney} 
                                alt="my logo"
                            />    
                        </a>   
                    </div>
                    <div>
                        <a 
                            href="https://www.behance.net/gallery/154072083/Case-study-Batch-Motion-Animation"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={batch} 
                                alt="my logo"
                            />    
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.behance.net/gallery/154082809/Case-study-Traffic-lights-in-Lagos"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={traffic} 
                                alt="my logo"
                            />    
                        </a>
                    </div>
                </div>
            </div>

            <div className="about-me" id='about'>
                <h1>About me</h1>
                <br />
                <p>
                    I’m Donald, a guy passionate about design and how broad it is. I wear different design hats.
                    <br />
                    <br />
                    On one end, I’m a Product guy who builds user-friendly products. In this endeavour, I converse with stakeholders; business and the customers, to have a clear grasp of their needs. The aim is always to align business goals with customer’s needs. 
                    <br />
                    <br />
                    On the other end, I’m a motion designer who loves animation. I remember the first time I saw a motion designer at work, I was amazed. Making different shapes move in different directions, It was mind-blowing.  Working as a motion guy, I play around with shapes and pngs, to make videos that show the business’ products to the public.
                    <br />
                    <br />
                    I work at <a href="app.float.co">Float</a>, where I build amazing products and create stunning animations.  When I’m not on my laptop, I’m either eating, listening to songs or watching football. 
                </p>
            </div>

            <div className="contact" id='contact'>
                <div className="getInTouch">
                    <h1>Get in touch</h1>
                    <br />
                    <p>Trying to build something amazing? Send me a message</p>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ugobudedonald@gmail.com">
                        <button>Let's talk</button>    
                    </a>    
                </div>
                
                <div className="socials">
                    <div className='memoji'>
                        <a href="#main">
                            <img 
                                src={don} 
                                alt="donald memoji" 
                            />    
                        </a>
                       
                        <br />
                        <br />
                        <h1>Donald Ugobude</h1>
                        <br />
                        <p>Designer</p>
                    </div>
                    <div className='social-media'>
                        <p>I can also be reached via:</p>
                        <div className='social-media-logo'>
                            <a 
                                href="https://www.linkedin.com/in/donald-ugobude/"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img 
                                    src={linkedin} 
                                    alt="my logo"
                                />    
                            </a>
                            <a 
                                href="https://twitter.com/0d3ra"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img 
                                    src={twitter} 
                                    alt="my logo"
                                />    
                            </a>
                            <a 
                                href="https://www.instagram.com/0d3ra/"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img 
                                    src={ig} 
                                    alt="my logo"
                                />    
                            </a>
                            <a 
                                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ugobudedonald@gmail.com/"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img 
                                    src={gmail} 
                                    alt="my logo"
                                />    
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <p style={{textAlign: 'center', fontSize: '16px'}}>Designed & built by Donald Ugobude</p>
            </div>
        </body>  
      </div>
    )
  }
