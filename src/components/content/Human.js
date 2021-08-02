import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Human extends Component {


    render() {
        return (

            <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
              
                <h1 className="jumbotron-heading">Human </h1>
                <p className="lead text-muted">Bạn có thể xem và lưu tất cả những hình ảnh thông tin của mình vào trang web này để lưu giữ những kỉ niểm buồn vui của tuổi thanh xuân </p>
                {/* <p>

                  <a href="" className="btn btn-primary my-2">Home</a>
                  <a href="" className="btn btn-warning my-2">Secondary action</a>
                </p>
                 */}
              </div>
            </section>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="https://mdbootstrap.com/img/new/fluid/city/115.jpg" data-holder-rendered="true" style={{height: '225px', width: '100%', display: 'block'}} />
                      <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    }
}


export default Human;