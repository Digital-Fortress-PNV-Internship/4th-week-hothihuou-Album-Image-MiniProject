import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };

    handleSubmit = e=>{

    }
    getData = () => {
        fetch(`http://localhost:3000/human`)
            .then(response => response.json())
            .then(data => {
                const { query } = this.state;
                const filteredData = data.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <div className="searchForm">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.query}
                            onChange={this.handleInputChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
                </div>
            </div>
        );
    }
}


export default Search;