import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFlowers, deleteFlowers } from '../redux'
import './css/Human.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function FlowersContainer({ flowerData, fetchFlowers }) {
  useEffect(() => {
    fetchFlowers()
  }, [])
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete the Flowers?")) {
      dispatch(deleteFlowers (id));

    }
  }

  return flowerData.loading ? (
    <h2>Loading</h2>
  ) : flowerData.error ? (
    <h2>{flowerData.error}</h2>
  ) : (
    <div className="container ">
      <h1 className="jumbotron-heading ">Flowers</h1>
      <div className="row">
      <div>
          <button type="button" class="btn btn-primary" onClick={() => history.push("/addFlower")}>ADD</button>
        </div>
        {flowerData &&
          flowerData.flowers &&
          flowerData.flowers.map(flower =>
            <div className="col-sm-4">
              <div className="card">
                <img src={flower.image} />
                <div className="card-body">
                  <h5 className="card-title">{flower.name}</h5>
                  <Link to={`/flower/${flower.id}`}>
                    <button type="button" className="btn btn-info">View</button>
                  </Link>
                  <button type="button" class="btn btn-danger" onClick={() => handleDelete(flower.id)}>Delete</button>
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
