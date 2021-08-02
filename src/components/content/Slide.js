import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Slide.css';

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
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://wap102.com/wp-content/uploads/2020/03/hinh-anh-pikachu.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://wap102.com/wp-content/uploads/2020/03/hinh-anh-pikachu.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <div className="AddImages">
              <button type="button"className="btn btn-sm btn-outline-secondary"> Add images </button>
              </div>
              <div className="searchForm">
                <form>
                
                    <input type="text" id="filter" placeholder="Search for..." />
                     <input type="submit" value="Submit"></input>
                </form>
              </div>
              
            </div>
          );
    }
}


export default Slide;