import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {fetchUsersSuccess} from '../../redux/user/userActions';

const UserDetail =()=> {
    const user = useSelector((state=>state.user))
   //  const { image,name, description } = user;
     const {userId} =useParams();
     
    const dispatch = useDispatch();
    console.log(user);

    const fetchUserDetail = async () => {
        const response = await axios
          .get(`http://localhost:3000/human/${userId}`)
          // .catch((err) => {
          //   console.log("Err: ", err);
          // });
         dispatch(fetchUsersSuccess(response.data));
      };

      useEffect(()=>{
        if (userId && userId !== "") fetchUserDetail(userId);
      }, [userId]);
      console.log('xxx', Object.keys(user));
        return (
            <div className="ui grid container">
              {Object.keys(user).length === 0 ? (
                
                <div>...Loading</div>
              ) : (
                <div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                      <div className="column lp">
                        <img className="ui fluid image" src={user.image} />
                      </div>
                      <div className="column rp">
                        <h1>{user.name}</h1>
                        
                        {/* <h3 className="ui brown block header">{category}</h3> */}
                        <p>{user.description}</p>
                        {/* <div className="ui vertical animated button" tabIndex="0">
                          <div className="hidden content">
                            <i className="shop icon"></i>
                          </div>
                          <div className="visible content">Add to Cart</div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
};



export default UserDetail;