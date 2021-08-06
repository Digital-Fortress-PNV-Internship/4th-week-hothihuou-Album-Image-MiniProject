import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFlowersSuccess } from '../../redux/flowers/flowersActions';

const FlowersDetail = () => {
  const flower = useSelector((state => state.flower))
  //  const { image,name, description } = flower;
  const { flowerId } = useParams();

  const dispatch = useDispatch();
  console.log(flower);



  useEffect(() => {
    const fetchflowerDetail = async () => {
      const response = await axios
        .get(`http://localhost:3000/flowers/${flowerId}`)
      // .catch((err) => {
      //   console.log("Err: ", err);
      // });
      dispatch(fetchFlowersSuccess(response.data));
    };
    if (flowerId && flowerId !== "") fetchflowerDetail(flowerId);
  }, [dispatch, flowerId]);
  console.log('xxx', Object.keys(flower));
  return (
    <div className="ui grid container">
      {Object.keys(flower.flowers).length === 0 ? (

        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">Details</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={flower.flowers.image} alt=""/>
              </div>
              <div className="column rp">
                <h1>{flower.flowers.name}</h1>

                {/* <h3 className="ui brown block header">{category}</h3> */}
                <p>{flower.flowers.description}</p>
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

export default FlowersDetail;