import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { fetchUsersSuccess } from '../../redux/user/userActions';

const UserDetail = () => {
  const user = useSelector((state => state.user))
  // const { image,name, description,category } = user;
  const { userId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(user);



  useEffect(() => {
    const fetchUserDetail = async (id) => {

      const response = await axios
        .get(`http://localhost:3000/human/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(fetchUsersSuccess(response.data));
    };
    if (userId && userId !== "") fetchUserDetail(userId);
  }, [dispatch, userId]);

  return (
    <div className="ui grid container">
      <div>
        <button type="button" class="btn btn-primary" onClick={() => history.push("/")} id="back">COME BACK</button>
      </div>
      {Object.keys(user.users).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">Details </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={user.users.image} alt="" />
              </div>
              <div className="column rp">
                <h1>{user.users.name}</h1>
                <h3 className="ui brown block header">{user.users.category}</h3>
                <p>{user.users.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default UserDetail;