import React, {Component} from 'react';
import axios from 'axios';
import './SharePage.css'

export default class SharePage extends React.Component{
    constructor(){
        super()
        this.state={
            img: null,
            video: null,
        }
    }
    componentDidMount(){
        this.request()
    }
    request(){
        axios.get('https://mobian-api.jieoukeji.com/api/admin/setting/beginnersGuide').then(res=>{
                this.setState({img: res.data.data[1].value,video: res.data.data[0].value});
                console.log(this.state.img,this.state.video);

            })
    }
    render(){
        return  <div style={{position: "relative"}}>
                    <img id="img" src={this.state.img} style={{ width: 100+'%' }} />
                    <video src={this.state.video} id="video" controls="controls" />     
                </div>
    }
}