import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p
                    key="k1"
                    onClick={this.props.click}
                >
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="k2">{this.props.children}</p>
                <input
                    key="k3"
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}
                />
            </Aux>
        )
    }
};

Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);