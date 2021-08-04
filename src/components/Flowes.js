import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


const Flowers=() =>{
  const [flwoers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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
    setFilteredCountries(
      flwoers.filter((flowers) =>
        flowers.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, flwoers]);


  if (loading) {
    return <p>Loading flowers..</p>;
  }

  return (
    <div className="container ">
    <h1 className="jumbotron-heading ">Flowers</h1>
    <div className="row">
    <form className="form-inline ">
            <input className="form-control " type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}
      />
            <button className="btn btn-outline-success " type="submit">Search</button>
          </form>

      {filteredCountries.map((flower, idx) => (
        <CountryDetail key={idx} {...flower} />
      ))}
    </div>
    </div>
    
  );
}
export default Flowers

const CountryDetail = (props) => {
  const { name, image } = props;

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
            </div>
          </div>

    </>
  );
};