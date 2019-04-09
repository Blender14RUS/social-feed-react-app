import React, { Component } from 'react'
import PostList from './PostList';

export default class Feed extends Component {
    state = { 
        fakeNowDate: 1512933304,
        data: [], isLoading: false, error: null 
    };

    fetchData = () => {
        let date = Object.assign({}, this.state.fakeNowDate);
        date += 1000;
        this.setState({fakeNowDate: date});
        const url =  (this.props.URL + `?timeframe[finish]=` + this.state.fakeNowDate  + `&limit=` + this.props.CountOfPost);
        fetch(url)  
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(result => this.setState({data: result, isLoading: false  }))
        .catch(error => this.setState({isLoading: false, error }));
    }

    componentDidMount () {
        this.fetchData()
        this.timer = setInterval(() => {this.fetchData()}, this.props.Interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }    

    render() { 
        const { data, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <PostList posts={data}/>
            </div>
        )
    }
}