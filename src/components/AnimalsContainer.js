import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../redux'
import { Link } from "react-router-dom";
// import './css/Human.css'
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
                <div className="col-sm-4" key={animal.id}>
                  <Link to={`/animal/${animal.id}`}>
                  <div className="card" >
                    <img src={animal.image} />
                    <div className="card-body">
                      <h5 className="card-title">{animal.name}</h5>

                      <button type="button" className="btn btn-info">View</button>
                    </div>
                  </div>
                  </Link>
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
