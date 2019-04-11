import React, { Component } from 'react'
import PostList from './PostList';
import FetchData from './FetchData';

export default class Feed extends Component {
    state = { 
        fakeNowDate: 1512933304,
        count: this.props.countOfPost != null ? this.props.countOfPost  : 10,
        interval: this.props.interval != null ? this.props.interval  : 10000,
        data: [], 
        isLoading: true, 
        error: null 
    };

    fetchData() {
        let date = this.state.fakeNowDate;
        date += 1000;
        this.setState({fakeNowDate: date});
        const fullURL = `${this.props.url}?timeframe[finish]=${this.state.fakeNowDate}&limit=${this.state.count}`;
        FetchData(fullURL, 3)  
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(result => this.setState({data: result, isLoading: false  }))
        .catch(error => this.setState({isLoading: false, error }))
        .catch(clearTimeout(this.timeOut));
        if (this.state.error == null)
            this.timeOut = setTimeout(() => this.fetchData(), this.state.interval)
    }

    componentDidMount () {
        this.fetchData();
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }    

    render() { 
        const { data, isLoading, error } = this.state;

        if (error) {
            return <p>{ error.message }</p>;
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