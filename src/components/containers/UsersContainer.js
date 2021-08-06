import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchUsers, deleteUsers } from '../../redux'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/Human.css'


function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])


  const dispatch = useDispatch();

  const history = useHistory();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete the user?")) {
      dispatch(deleteUsers(id));
    }
  }

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>

  ) : (
    <div className="container ">
      <h1 className="jumbotron-heading ">Human</h1>
      <div className="row">
        <div>
          <button type="button" class="btn btn-outline-primary" onClick={() => history.push("/addUser")}>ADD</button>
        </div>

        {userData &&
          userData.users &&
          userData.users.map(user =>

            <div className="col-sm-4" >

              <div className="card" >
                <img src={user.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>

                  <Link to={`/user/${user.id}`}>
                    <button type="button" class="btn btn-outline-info">View</button>
                  </Link>

                  <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(user.id)}>Delete</button>
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
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
