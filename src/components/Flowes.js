import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [filteredFlowers, setFilteredFlowers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(" http://localhost:3000/flowers")
      .then((res) => {
        setFlowers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  useEffect(() => {
    setFilteredFlowers(
      flowers.filter((flowers) =>
        flowers.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, flowers]);




  if (loading) {
    return <p>Loading flowers..</p>;
  }


  return (
    <div className="container ">
      <h1 className="jumbotron-heading ">Flowers</h1>
      <div className="row">
        <div>
        <button type="button" class="btn btn-primary">ADD</button> 
        </div>
        <form className="form-inline ">
          <input className="form-control " type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success " type="submit">Search</button>
        </form>

        
        {filteredFlowers.map((flower, idx) => (
          <FlowersDetail key={idx} {...flower} />
        ))}
      </div>
    </div>

  );
}
export default Flowers

const FlowersDetail = (props) => {
  const { id, name, image } = props;

  return (
    <>
     
        <div className="col-sm-4">
      
          <div className="card">
            <img
              src={image}
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
              
            <Link to={`/flower/${id}`}>
            <button type="button" className="btn btn-info">View</button>
            </Link>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
          
        </div>
     
    </>
  );
};