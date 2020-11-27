import React, { Component } from 'react';
import BaseComponent from '../base/BaseComponent';
// import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import './index.css';

const requireImg = require('../utils/requireImg');
const icon = requireImg('../images/icon.png');


@inject('testStore')
@observer
class Index extends BaseComponent {

    constructor(props) {
        super(props)

        console.log("process.env.NODE_ENV: " + process.env.NODE_ENV)

    }

    clickMe() {
        console.log('clickMe');
    }


    render() {
        let { testStore } = this.props

        return <div className='index'>
            
        </div>
    }

}

export default Index;