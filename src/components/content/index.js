import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Human from './Human';
import Flowers from './Flowers';
import Animals from './Animals';
import Travels from './Travels';

class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main id="main">
                <Human/>
                <Flowers/>
                <Animals/>
                <Travels/>
            </main>
        );
    }
}

export default Content;

