import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
const Header = ()=>{
        return (
            <header>
            <div className="collapse bg-dark fixed-top" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">About</h4>
                    <p className="text-muted">Bạn có thể xem và lưu tất cả những hình ảnh thông tin của mình vào trang web này để lưu giữ những kỉ niểm buồn vui của tuổi thanh xuân</p>
                  </div>
                  <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                      <li><a href="https://twitter.com/home" className="text-white">Follow on Twitter</a></li>
                      <li><a href="https://www.facebook.com/huou.ho.3" className="text-white">Like on Facebook</a></li>
                      <li><a href="huou.ho22@student.passerellesnumeriques.org" className="text-white">Email me</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar navbar-dark bg-dark fixed-top">
              <div className="container d-flex justify-content-between">
                <a href="#" className="navbar-brand d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx={12} cy={13} r={4} /></svg>
                  <strong>Album Huou</strong>
                </a>
                
                <div className="menu"><Link to="/">Human</Link></div>
                <div className="menu"> <Link to="/travel">Travels</Link></div>
                <div className="menu"><Link to="/flowers"> Flowers</Link></div>
                <div className="menu"> <Link to="/animal"> Animals</Link></div>
              
              
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
            </div>
          </header>
        );
    }




export default Header;