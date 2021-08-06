
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTravels } from '../../redux';
import '../css/Form.css';
const AddTravels = () => {
    const [state, setState] = useState({
        name: "",
        image: "",
        categories: "",
        description: ""
    });
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const { name, image, categories, description } = state;


    const handleOnchange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !categories || !image || !description) {
            setError("Please input all input field ")
        } else {
            dispatch(addTravels(state));
            history.push("/travel");
            setError("");
        }
    };
    return (


        <div className="form" >
            <h2>ADD TRAVELS</h2>
            {error && <h3 style={{ color: "red" }}>{error} </h3>}
            <div>
                <button type="button" class="btn btn-primary" onClick={() => history.push("/travel")} id="back">COME BACK</button>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group text-center col-sm-6">
                    <label  >Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={handleOnchange} />
                </div>
                <div className="form-group text-center col-sm-6">
                    <label >Categories</label>
                    <input type="text" className="form-control" name="categories" value={categories} onChange={handleOnchange} />
                </div>
                <form>
                    <div className="form-group text-center col-sm-6">
                        <label > Images</label>
                        <input type="text" className="form-control" name="image" value={image} onChange={handleOnchange} />
                    </div>
                </form>
                <div className="form-group text-center col-sm-6">
                    <label >Description </label>
                    <input type="text" className="form-control" name="description" value={description} onChange={handleOnchange} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" >Save</button>

                </div>

            </form>
        </div>
    );
};

export default AddTravels;