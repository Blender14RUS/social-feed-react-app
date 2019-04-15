import React, {Component} from 'react'
import PostList from './PostList';
import FetchData from './FetchData';
import Counter  from './Counter';

export default class Feed extends Component {
    state = { 
        fakeNowDate: 1512933304,
        count: this.props.countOfPost != null ? this.props.countOfPost  : 10,
        interval: this.props.interval != null ? this.props.interval  : 10000,
        data: [],
        newData: [], 
        isLoading: true, 
        error: null,
        countsNewPosts: false
    };

    fetchNewData() {
        let date = this.state.fakeNowDate;
        date += 1000;
        this.setState({fakeNowDate: date});
        const fullURL = `${this.props.url}?timeframe[finish]=${this.state.fakeNowDate}&limit=${this.state.count}`;
        FetchData(fullURL, 3)  
        .then(response =>  response.json())
        .then(result => this.setState({newData: result, isLoading: false}))
        .catch(error => this.setState({isLoading: false, error}))
        .catch(clearTimeout(this.timeOut));
        if (this.state.error == null) 
            this.timeOut = setTimeout(() => this.fetchNewData(), this.state.interval)
        
        this.setState({countsNewPosts: false})
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
                <div onClick={this.handleClick} >
                    <Counter data={newData} drop={countsNewPosts} updatePostsEvent={this.handleClick}/>
                </div>
                <PostList posts={data}/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({countsNewPosts: true})
        this.setState({data: this.state.newData})
    }
}