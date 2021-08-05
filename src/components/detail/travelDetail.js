import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTravelsSuccess } from '../../redux/travels/travelsActions';

const TravelDetail = () => {
  const travel = useSelector((state => state.travel))
  //  const { image,name, description } = travel;
  const { travelId } = useParams();

  const dispatch = useDispatch();
  console.log(travel);

  const fetchTravelDetail = async () => {
    const response = await axios
      .get(`http://localhost:3000/travels/${travelId}`)
    // .catch((err) => {
    //   console.log("Err: ", err);
    // });
    dispatch(fetchTravelsSuccess(response.data));
  };

  useEffect(() => {
    if (travelId && travelId !== "") fetchTravelDetail(travelId);
  }, [travelId]);
  console.log('xxx', Object.keys(travel));
  return (
    <div className="ui grid container">
      {Object.keys(travel.travels).length === 0 ? (

        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">Details </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={travel.travels.image} />
              </div>
              <div className="column rp">
                <h1>{travel.travels.name}</h1>

                {/* <h3 className="ui brown block header">{category}</h3> */}
                <p>{travel.travels.description}</p>
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



export default TravelDetail;