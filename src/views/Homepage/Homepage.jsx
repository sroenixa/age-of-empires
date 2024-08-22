import React  from 'react';
import './Homepage.scss';
import wallpaper from '../../assets/img/homepage.jpg'
function Homepage() {
    return (
      <div className="homepage">
          <img src={wallpaper} alt='homepage_image'/>
      </div>
    );
  }
  
  export default Homepage;
  