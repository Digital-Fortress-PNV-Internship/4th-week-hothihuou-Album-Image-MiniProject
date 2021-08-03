import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../redux'
// import './css/Human.css'
function AnimalsContainer({ animalsData, fetchAnimals }) {
  useEffect(() => {
    fetchAnimals ()
  }, [])
  return animalsData.loading ? (
    <h2>Loading...</h2>
  ) : animalsData.error ? (
    <h2>{animalsData.error}</h2>
  ) : (
    <div className="container ">
        <h1 className="jumbotron-heading ">Animals</h1>
      <div className="row">
      {animalsData&&
         animalsData.animals &&
         animalsData.animals.map(animal=> 
          <div className="col-sm-4">
          <div className="card" >
            <img  src={animal.image}  />
            <div className="card-body">
              <h5 className="card-title">{animal.title}</h5>
              <p className="card-text">{animal.description}</p>
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
    animalsData: state.animal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch( fetchAnimals())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer)
