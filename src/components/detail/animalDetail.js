import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAnimalsSuccess } from '../../redux/animals/animalsActions';

const AnimalsDetail = () => {
  // Lấy dữ liệu từ redux
  const animal = useSelector((state => state.animal))
  //
  const { animalId } = useParams();

  const dispatch = useDispatch();
  console.log(animal);



  useEffect(() => {
    const fetchAnimalDetail = async () => {
      const response = await axios
        .get(`http://localhost:3000/animals/${animalId}`)
      // .catch((err) => {
      //   console.log("Err: ", err);
      // });
      dispatch(fetchAnimalsSuccess(response.data));
    };
    if (animalId && animalId !== "") fetchAnimalDetail(animalId);
  }, [animalId, dispatch]);
  console.log('xxx', Object.keys(animal));
  return (
    <div className="ui grid container">
      {Object.keys(animal.animals).length === 0 ? (

        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">Details </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={animal.animals.image} alt="" />
              </div>
              <div className="column rp">
                <h1>{animal.animals.name}</h1>

                {/* <h3 className="ui brown block header">{category}</h3> */}
                <p>{animal.animals.description}</p>
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



export default AnimalsDetail;