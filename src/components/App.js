import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PostList from './PostList';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            URL: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
            CountOfPost: 10,
            interval: 10000,
            fakeNowDate: 1512933304,
            data: []
        };
    }

    fetchData = () => {
        this.state.fakeNowDate += 1000;
        const url =  (this.state.URL + `?timeframe[finish]=` + this.state.fakeNowDate  + `&limit=` + this.state.CountOfPost);
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }

    componentDidMount () {
        this.fetchData()
        this.interval = setInterval(() => {
            this.fetchData()
        }, this.state.interval)
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