import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals, deleteAnimals } from '../../redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/Human.css'
function AnimalsContainer({ animalsData, fetchAnimals }) {
  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete the Animal?")) {
      dispatch(deleteAnimals(id));

    }
  }

  return animalsData.loading ? (
    <h2>Loading...</h2>
  ) : animalsData.error ? (
    <h2>{animalsData.error}</h2>
  ) : (
    <div className="container ">
      <h1 className="jumbotron-heading ">Animals</h1>
      <div className="row">
        <div className="comeback">
          <button type="button" class="btn btn-outline-primary" onClick={() => history.push("/addAnimal")}>ADD</button>
        </div>
        {animalsData &&
          animalsData.animals &&
          animalsData.animals.map(animal =>
            <div className="col-sm-4" key={animal.id}>

              <div className="card" >
                <img src={animal.image} alt=""></img>
                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>


                  <Link to={`/animal/${animal.id}`}>
                    <button type="button" class="btn btn-outline-info">View</button>
                  </Link>

                  <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(animal.id)}>Delete</button>
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
    fetchAnimals: () => dispatch(fetchAnimals())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer)
