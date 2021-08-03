import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Slide.css';

class Slide extends Component {


  render() {
    return (

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wap102.com/wp-content/uploads/2020/03/hinh-anh-pikachu.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            
              <h2>I hope you like. </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wap102.com/wp-content/uploads/2020/03/hinh-anh-pikachu.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            
              <h2>I hope you like</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wap102.com/wp-content/uploads/2020/03/hinh-anh-pikachu.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              
              <h2>I hope you like</h2>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default Slide;