
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../redux';
import '../css/Form.css';
const AddUser = () => {
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


    const handleUserOnchange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !categories || !image || !description) {
            setError("Please input all input field ")
        } else {
            dispatch(addUsers(state));
            history.push("/");
            setError("");
        }
    };
    return (


        <div className="form" >
            <h2>ADD USER</h2>
            {error && <h3 style={{ color: "red" }}>{error} </h3>}
            <div>
                <button type="button" class="btn btn-primary" onClick={() => history.push("/")} id="back">COME BACK</button>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group text-center col-sm-6">
                    <label  >Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={handleUserOnchange} />
                </div>
                <div className="form-group text-center col-sm-6">
                    <label >Categories</label>
                    <input type="text" className="form-control" name="categories" value={categories} onChange={handleUserOnchange} />
                </div>
                <form>
                    <div className="form-group text-center col-sm-6">
                        <label > Images</label>
                        <input type="text" className="form-control" name="image" value={image} onChange={handleUserOnchange} />
                    </div>
                </form>
                <div className="form-group text-center col-sm-6">
                    <label >Description </label>
                    <input type="text" className="form-control" name="description" value={description} onChange={handleUserOnchange} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" >Save</button>

                </div>

            </form>
        </div>
    );
};

export default AddUser;