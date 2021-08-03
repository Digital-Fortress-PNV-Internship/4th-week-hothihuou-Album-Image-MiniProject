import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../redux'
import './css/Human.css'
import { Link } from "react-router-dom";
function AnimalsContainer({ animalsData, fetchAnimals }) {
  useEffect(() => {
    fetchAnimals()
  }, [])
  return animalsData.loading ? (
    <h2>Loading...</h2>
  ) : animalsData.error ? (
    <h2>{animalsData.error}</h2>
  ) : (
    <div className="container ">
      <h1 className="jumbotron-heading ">Animals</h1>
      <div className="row">
        {animalsData &&
          animalsData.animals &&
          animalsData.animals.map(animal =>
            // <Link to={`/animal/${animal.id}`}>
            <div className="col-sm-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={animal.image} />
                  <div className="card-body">
                    <h5 className="card-title">{animal.name}</h5>
                   
                    <button type="button" className="btn btn-info">View</button>
                  </div>
                </div>
        
            </div>
            // {/* </Link> */}
             
          )}
    </div>
    </div >

  )
}

const mapStateToProps = state => {
  return {
    animalsData: state.animal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer)
