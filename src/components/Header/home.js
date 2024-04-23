import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import images from './images/a.png';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
  return (
    <div>
    <div className='Main'>
    <Carousel>
      <Carousel.Item>
      <img src='https://wallpapercave.com/wp/4joHxWG.jpg' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images2.alphacoders.com/597/597965.jpg'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://wallpapers.com/images/hd/best-gaming-background-aea1fp9pow4r1l4r.jpg'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div><br/>
    <div className='container'>
      <h6>Premium Game Server</h6>
      <div className='row'>
        <div className='col-3'>
        <img src='https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon1.png'/>
        <br/><br/>
        <h8>Super Quick Setup</h8><br/><br/>
        <p1>Dolor minim in pariatur in deserunt<br/> laboris eu pariatur labore excepteur<br/> cupidatat cupidatat duis dolor in.</p1>
        </div>
        <div className='col-3'>
        <img src='https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon2.png'/>
        <br/><br/>
        <h8>Premium Hardware</h8><br/><br/>
        <p1>Dolor minim in pariatur in deserunt<br/> laboris eu pariatur labore excepteur<br/> cupidatat cupidatat duis dolor in.</p1>
        </div>
        <div className='col-3'>
        <img src='https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon3.png'/>
        <br/><br/>
        <h8>DDos Protection</h8><br/><br/>
        <p1>Dolor minim in pariatur in deserunt<br/> laboris eu pariatur labore excepteur<br/> cupidatat cupidatat duis dolor in.</p1>
        </div>
        <div className='col-3'>
        <img src='https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon4.png'/>
        <br/><br/>
        <h8>Fast Support</h8><br/><br/>
        <p1>Dolor minim in pariatur in deserunt<br/> laboris eu pariatur labore excepteur<br/> cupidatat cupidatat duis dolor in.</p1>
        </div>
      </div>
    </div><br/><br/>
    <div className="container She">
  <div className="box">
    <span />
    <div className="content">
      <h2>Galactic Odyssey</h2>
      <img src='https://madebydesignesia.com/themes/playhost/images/covers/5.webp'/>
      <Link to='/payment'><i className='a'>Buy Now</i></Link>
    </div>
  </div>
  <div className="box">
    <span />
    <div className="content">
      <h2>Warfare Legends</h2>
      <img src='https://madebydesignesia.com/themes/playhost/images/covers/6.webp'/>
      <Link to='/payment'><i className='a'>Buy Now</i></Link>
    </div>
  </div>
  <div className="box">
    <span />
    <div className="content">
      <h2>Raceway</h2>
      <img src='https://madebydesignesia.com/themes/playhost/images/covers/7.webp'/>
      <Link to='/payment'><i className='a'>Buy Now</i></Link>
    </div>
  </div>
</div>


    </div>
  );
}

export default UncontrolledExample;
