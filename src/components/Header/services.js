import React from 'react';
import './services.css'; // Import your CSS file if you have one
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiamondIcon from '@mui/icons-material/Diamond';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import images from './images/a.png';

const YourComponent = () => {
  return (
    <div>
      <center><h6 className='him'>Our Services</h6></center>
    <div className="container" style={{  width: '75%', height: '50%' }}>
      <div className="container you">
        <img src={images}/>
      </div>
      <div className="container">
        <div className="text-box">
          <h1 className="are">Unlock Your Gaming</h1>
        </div>
      </div>
      <div className="container">
        <div className="text-box">
          <h2 className="are">Unlock Your Gaming</h2>
        </div>
      </div>
      <div className="container">
        <div className="text-box">
          <h3 className="are">Unlock Your Gaming</h3>
        </div>
      </div>
      <div className="container">
        <div className="text-box">
          <h4 className="are">Unlock Your Gaming</h4>
        </div>
      </div>
      <div className="container">
        <div className="text-box">
          <h5 className="are">Unlock Your Gaming</h5>
        </div>
      </div>
    </div><br/><br/>
    <div>
      <center><h6 className='him'> Services</h6></center>
    </div>
    <div>
      <p className='her'>Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. 
         Owing to our outstanding customer service we have maintained the 85 % customer retention rate.
         We, the best IT service provider company in Noida help your business in getting loyalty back by transforming into latest advanced IT technology.
         Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support.
         We are the trustful answer for enterprises that are inclining towards digital era. Digitizing your work help in overall 25 % reduction in the core capital of the company and hence better ROI.</p>
    </div>
  <p className='her'><center>Key features of our company</center></p>
  <div class="container">
    <div class="row">
    <div class="her col-sm-3">
      <i><center><TvIcon /></center></i>
      <p className='her'><center><b>Responsive</b></center></p>
      <p className='her'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="her col-sm-3">
      <i><center><FavoriteIcon /></center></i>
      <p className='her'><center><b>Passion</b></center></p>
      <p className='her'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="her col-sm-3">
      <i><center><DiamondIcon /></center></i>
      <p className='her'><center><b>Design</b></center></p>
      <p className='her'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div class="her col-sm-3">
      <i><center><SettingsIcon/></center></i>
      <p className='her'><center><b>Support</b></center></p>
      <p className='her'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
  
</div>

</div>
    <div className=' row'>
      <div className='container col-sm-3'>
        <h7>Computer games are fun activities you play on your computer. They come in many types like racing cars, 
          fighting monsters, or building cities. Some games are for one player, while others let many players join in. 
          With these games, you can do things or go places you can’t in real life. They can help you think better, react faster, and learn new things. But remember, playing too much is not good. Always balance your time between games, schoolwork, and outside play. 
          This way, you can enjoy computer games while also doing well in school and staying healthy.
          But remember, even though these games are fun, they should not take all your time. 
          It’s also important to play outside, read books, and help at home. 
          Computer games can help you learn new things, like how to plan or be quick. 
          </h7>
          <br/><center><a className="explore">View Services</a></center>
      </div><br/>
      <div className=' col-sm-3'>
      <figure>
        <img src="https://assets.gqindia.com/photos/5d933f025d883c0008e2df1b/1:1/w_1080,h_1080,c_limit/call%20of%20duty.jpg" alt="Mountains" width={500}/>
        <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
      </figure>
      <figure>
      <img src="https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" alt="Mountains" width={500}/>
      <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
     </figure>
    </div>
    <div className=' col-sm-3'>
    <figure>
      <img src="https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="Mountains" width={500}/>
      <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
     </figure>
     <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuIglavJb0w9gLJ18vB-1GKk6pKhmCO7o-Q&usqp=CAU" alt="Mountains" width={500}/>
        <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
      </figure>
    </div>

    </div><br/> <br/>
    <div className=' row'>
      <div className=' col-sm-3'>
      <figure>
        <img src="https://play-lh.googleusercontent.com/c15fVxquhZ_LO5jPc-f2nYpz-EHvphyniI4JCKG8hYd-yXkhq5k4WpSJMu-M9S3vIA" alt="Mountains" width={500}/>
        <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
      </figure>
      <figure>
      <img src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" alt="Mountains" width={500}/>
      <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
     </figure>
    </div>
    <div className=' col-sm-3'>
    <figure>
      <img src="https://m.media-amazon.com/images/M/MV5BYWIzYjUzMGUtZjJlNy00MWVlLWJjNGEtODU1OWFiOWIwOTFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="Mountains" width={500}/>
      <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
     </figure>
     <figure>
        <img src="https://play-lh.googleusercontent.com/sjk0NynlA3oNJaw8ridRp602w5Zx5c00hk1sXYIOGbdWIYtyVSx-voB37SMyMxinGseH" alt="Mountains" width={500}/>
        <figcaption><Link to='/payment'><button><ShoppingCartIcon /></button></Link></figcaption>
      </figure>
    </div>
    <div className='container col-sm-3'>
        <h7>Computer games are fun activities you play on your computer. They come in many types like racing cars, 
          fighting monsters, or building cities. Some games are for one player, while others let many players join in. 
          With these games, you can do things or go places you can’t in real life. They can help you think better, react faster, and learn new things. But remember, playing too much is not good. Always balance your time between games, schoolwork, and outside play. 
          This way, you can enjoy computer games while also doing well in school and staying healthy.
          But remember, even though these games are fun, they should not take all your time. 
          It’s also important to play outside, read books, and help at home. 
          Computer games can help you learn new things, like how to plan or be quick. 
          </h7>
          <br/><center><a className="explore">View Services</a></center>
      </div>
    </div>
    </div>
  );
};

export default YourComponent;
