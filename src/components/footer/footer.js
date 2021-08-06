import React, { Component } from 'react';
class Footer extends Component {

    render() {
        return (
            <div>
                <footer className="text-center text-white" style={{ backgroundColor: '#caced1' }}>
                    {/* Grid container */}
                    <div className="container">
                        {/* Section: Images */}
                        <section className>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/113.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/111.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/112.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/114.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                                    <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/fluid/city/116.jpg" className="w-100" alt=""/>
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Section: Images */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 12052020:
                        <p>Album of Huou</p>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        );
    }
}


export default Footer;