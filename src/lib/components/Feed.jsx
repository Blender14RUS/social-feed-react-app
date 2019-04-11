import React, { Component } from 'react'
import PostList from './PostList';

export default class Feed extends Component {
    state = { 
        fakeNowDate: 1512933304,
        count: this.props.CountOfPost != null ? this.props.CountOfPost  : 10,
        interval: this.props.Interval != null ? this.props.Interval  : 10000,
        data: [], 
        isLoading: false, 
        error: null 
    };

    fetchData() {
        let date = this.state.fakeNowDate;
        date += 1000;
        this.setState({ fakeNowDate: date.valueOf() });
        const url = `${ this.props.URL }?timeframe[finish]=${ this.state.fakeNowDate }&limit=${ this.state.count }`;
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
        this.timeOut = setTimeout(() => this.fetchData(), this.state.interval)
    }

    componentDidMount () {
        this.fetchData();
        //this.timeOut = setTimeout(() => this.fetchData(), this.state.interval)
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
                <PostList Posts = { data }/>
            </div>
        )
    }
}