import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

function about() {
  return (
    <div>
<section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About</span>
                            <h2>We are Creative Tech Enthusiast working since 2015</h2>
                        </div>
                        <div className="text">
                        Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt in elit non sed ut velit ullamco aliquip.</div>
                      <div className="text">
                        Nulla cupidatat elit amet sed labore ut et consequat nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse dolor laboris non duis sunt.
                      </div>
                        <div className="btn-box">
                            <a href="#" className="theme-btn btn-style-one">Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>Thunder and City</h2>
                        <span>Lost City</span>
                      </div>
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images">
                          <img src="https://madebydesignesia.com/themes/playhost/images/covers/1.webp" alt=""/></a></figure>
                     
                    </div>
                </div>
              
            </div>
        </div>
    </section>

    <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container bottomContainer">
    <div className="ultimateImg">
      <img
        className="mainImg"
        src="https://images2.alphacoders.com/597/597965.jpg"
      />
      <div className="purpleBox">
        <p className="purpleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
          lectus viverra in semper nec pretium mus.
        </p>
        <img
          className="stars"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
        />
      </div>
    </div>
    <div className="allText bottomText">
      <p className="text-blk headingText">Call Of Duty</p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
        pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
        ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <Link to='/services'><a className="explore">View Services</a></Link>
    </div>
  </div>
</div>


 <div className='row'>
  <div className='col-sm-4'>
  <div>
    <div className="background" />
  <div id="curve" className="card">
    <div className="footer">
      <svg id="curve">
        <path
          id="p"
          d="M0,200 Q80,100 400,200 V150 H0 V50"
          transform="translate(0 300)"
        />
        <rect
          id="dummyRect"
          x={0}
          y={0}
          height={450}
          width={400}
          fill="transparent"
        />
        {/* slide up*/}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,100 400,50 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseover"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce1"
        />
        {/* slide up and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,0 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce1.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce2"
        />
        {/* slide down and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,80 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce2.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce3"
        />
        {/* slide down and curve out */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,45 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce3.end"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce4"
        />
        {/* curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,50 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce4.end"
          end="dummyRect.mouseout"
          dur="0.05s"
          id="bounce5"
        />
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,200 Q80,100 400,200 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseout"
          dur="0.15s"
          id="bounceOut"
        />
      </svg>
      <div className="info">
        <div className="name">Filan Fisteku</div>
        <div className="job">Architect Manager</div>
      </div>
    </div>
    <div className="card-blur" />
  </div>
    </div>

  </div>
<div className='col-sm-4'>
<div>
    <div className="background" />
  <div id="curve" className="card">
    <div className="footer">
      <svg id="curve">
        <path
          id="p"
          d="M0,200 Q80,100 400,200 V150 H0 V50"
          transform="translate(0 300)"
        />
        <rect
          id="dummyRect"
          x={0}
          y={0}
          height={450}
          width={400}
          fill="transparent"
        />
        {/* slide up*/}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,100 400,50 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseover"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce1"
        />
        {/* slide up and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,0 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce1.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce2"
        />
        {/* slide down and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,80 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce2.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce3"
        />
        {/* slide down and curve out */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,45 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce3.end"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce4"
        />
        {/* curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,50 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce4.end"
          end="dummyRect.mouseout"
          dur="0.05s"
          id="bounce5"
        />
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,200 Q80,100 400,200 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseout"
          dur="0.15s"
          id="bounceOut"
        />
      </svg>
      <div className="info">
        <div className="name">Filan Fisteku</div>
        <div className="job">Architect Manager</div>
      </div>
    </div>
    <div className="card-blur" />
  </div>
    </div>


  </div>
  <div className='col-sm-4'>
  <div>
    <div className="background" />
  <div id="curve" className="card">
    <div className="footer">
      <svg id="curve">
        <path
          id="p"
          d="M0,200 Q80,100 400,200 V150 H0 V50"
          transform="translate(0 300)"
        />
        <rect
          id="dummyRect"
          x={0}
          y={0}
          height={450}
          width={400}
          fill="transparent"
        />
        {/* slide up*/}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,100 400,50 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseover"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce1"
        />
        {/* slide up and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,0 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce1.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce2"
        />
        {/* slide down and curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,80 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce2.end"
          end="dummyRect.mouseout"
          dur="0.15s"
          id="bounce3"
        />
        {/* slide down and curve out */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,45 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce3.end"
          end="dummyRect.mouseout"
          dur="0.1s"
          id="bounce4"
        />
        {/* curve in */}
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,50 Q80,50 400,50 V150 H0 V50"
          fill="freeze"
          begin="bounce4.end"
          end="dummyRect.mouseout"
          dur="0.05s"
          id="bounce5"
        />
        <animate
          xlinkHref="#p"
          attributeName="d"
          to="M0,200 Q80,100 400,200 V150 H0 V50"
          fill="freeze"
          begin="dummyRect.mouseout"
          dur="0.15s"
          id="bounceOut"
        />
      </svg>
      <div className="info">
        <div className="name">Filan Fisteku</div>
        <div className="job">Architect Manager</div>
      </div>
    </div>
    <div className="card-blur" />
  </div>
    </div>

    
  </div>
 </div>
</div>
  );
}
export default about

