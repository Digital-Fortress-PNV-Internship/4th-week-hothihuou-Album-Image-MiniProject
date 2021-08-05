import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTravels, deleteTravels } from '../redux'
import './css/Human.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TravelsContainer({ travelsData, fetchTravels }) {
  useEffect(() => {
    fetchTravels()
  }, []);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete the travels?")) {
      dispatch(deleteTravels(id));

    }
  }

  return travelsData.loading ? (
    <h2>Loading</h2>
  ) : travelsData.error ? (
    <h2>{travelsData.error}</h2>
  ) : (
   
    <div className="container ">
      <h1 className="jumbotron-heading ">Travels </h1>
      <div className="row">
      <div>
          <button type="button" class="btn btn-primary" onClick={() => history.push("/addTravel")}>ADD</button>
        </div>

        {travelsData &&
          travelsData.travels &&
          travelsData.travels.map(travel =>
            <div className="col-sm-4" >
              
                <div className="card">
                  <img src={travel.image} />
                  <div className="card-body">
                    <h5 className="card-title">{travel.name}</h5>
                    
                 
                    <Link to={`/travel/${travel.id}`}>
                    <button type="button" className="btn btn-info">View</button>
                    </Link>
                     <button type="button" class="btn btn-danger" onClick={() => handleDelete(travel.id)} >Delete</button>
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
    fetchTravels: () => dispatch(fetchTravels())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelsContainer)
