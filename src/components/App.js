import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Post from './Post';
import PostList from './PostList';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            URL: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
            CountOfPost: 10,
            interval: 10000,
            data: []
        };
    }

    componentDidMount () {
        const url =  (this.state.URL + `?timeframe[finish]=` + (new Date).getTime()  + `&limit=` + this.state.CountOfPost);
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    render() { 
        return (
            <div className="container">
                <PostList posts={this.state.data}/>
            </div>
        )
    }
}