import React, {Component} from 'react'
import PostList from './PostList';
import {FetchData, CountNewPosts}  from './Helper';
import Counter from './Counter';

export default class Feed extends Component {
    state = { 
        fakeNowDate: 1512933304,
        count: this.props.countOfPost != null ? this.props.countOfPost  : 10,
        interval: this.props.interval != null ? this.props.interval  : 10000,
        data: [],
        newData: [], 
        isLoading: true, 
        error: null,
        countsNewPosts: 0
    };

    fetchNewData() {
        let date = this.state.fakeNowDate;
        date += 1000;
        this.setState({fakeNowDate: date});
        const fullURL = `${this.props.url}?timeframe[finish]=${this.state.fakeNowDate}&limit=${this.state.count}`;
        FetchData(fullURL, 3)
            .then(response =>  response.json())
            .then(result => {
                this.setState({newData: result, isLoading: false});
                if (this.state.data.length === 0)
                    this.setState({data: result, isLoading: false});
                else 
                    this.setState({countsNewPosts: CountNewPosts(this.state.data, result)});
            })
            .catch(error => this.setState({isLoading: false, error}))
            .catch(clearTimeout(this.timeOut));
        if (this.state.error == null) 
            this.timeOut = setTimeout(() => this.fetchNewData(), this.state.interval)
    }

    componentDidMount() {
        this.fetchNewData();
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }    

    render() { 
        const { countsNewPosts, newData, data, isLoading, error, } = this.state;
        
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <Counter onClick={this.handleClick} countsNewPosts={countsNewPosts} data={newData} />
                <PostList posts={data}/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({countsNewPosts: 0, data: this.state.newData})
    }
}