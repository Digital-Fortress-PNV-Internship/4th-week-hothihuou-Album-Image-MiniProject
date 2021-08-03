import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import './css/Human.css'
function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className="container ">
      <h1 className="jumbotron-heading ">Human</h1>
      <div className="row">
        {userData &&
          userData.users &&
          userData.users.map(user =>
            // <div key={user.id}>
            // <Link to={`//${user.id}`}>
            <div className="col-sm-4">
              <div className="card" >
                <img src={user.image} />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  
                  <button type="button" className="btn btn-info">View</button>
                </div>
              </div>
            </div>
            // </Link>
            // </div>
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
