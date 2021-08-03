import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFlowers } from '../redux'
import './css/Human.css'
function FlowersContainer({ flowerData, fetchFlowers }) {
  useEffect(() => {
    fetchFlowers()
  }, [])
  return flowerData.loading ? (
    <h2>Loading</h2>
  ) : flowerData.error ? (
    <h2>{flowerData.error}</h2>
  ) : (
    <div className="container ">
        <h1 className="jumbotron-heading ">Flowers</h1>
      <div className="row">
      {flowerData &&
         flowerData.flowers &&
         flowerData.flowers.map(flower => 
          <div className="col-sm-4">
          <div className="card">
            <img  src={flower.image}  />
            <div className="card-body">
              <h5 className="card-title">{flower.name}</h5>
 
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
    flowerData: state.flower
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFlowers: () => dispatch(fetchFlowers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowersContainer)
