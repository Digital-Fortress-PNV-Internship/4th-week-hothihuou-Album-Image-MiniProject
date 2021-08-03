import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTravels } from '../redux'
import './css/Human.css'
import { Link } from "react-router-dom";
function TravelsContainer({ travelsData,fetchTravels  }) {
  useEffect(() => {
    fetchTravels ()
  }, [])
  return travelsData.loading ? (
    <h2>Loading</h2>
  ) : travelsData.error ? (
    <h2>{travelsData.error}</h2>
  ) : (
    <div className="container ">
        <h1 className="jumbotron-heading ">Travels </h1>
      <div className="row">
      {travelsData &&
         travelsData.travels &&
         travelsData.travels.map(travel => 
          <div className="col-sm-4">
          <div className="card" style={{ width: '18rem' }}>
            <img  src={travel.image}  />
            <div className="card-body">
              <h5 className="card-title">{travel.name}</h5>
             
              <button type="button" className="btn btn-info">View</button>
            </div>
          </div>
        </div>
         )}
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    travelsData: state.travel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTravels : () => dispatch(fetchTravels ())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelsContainer)
