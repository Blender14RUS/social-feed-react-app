import React, { Component } from "react";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import $ from 'jquery'

export default class Counter extends Component {
    state = {
        countsNewPosts: 0,
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.drop) {
            this.setState({countsNewPosts: 0})
        }
        if(nextProps.data !== this.props.data) {
            let difference = nextProps.data.filter(firstArrayItem => !this.props.data.some(secondArrayItem => firstArrayItem.created_at === secondArrayItem.created_at));
            let counts = this.state.countsNewPosts;
            counts += difference.length;
            this.setState({countsNewPosts: counts})
        }
    }

    componentDidMount() {
        this.props.updatePostsEvent();
    }

    render() {
        return (
            <ol>
                <li className="li">
                    <Badge className="badge" badgeContent={this.state.countsNewPosts} color="primary">
                        <MailIcon />
                    </Badge>
                </li>
            </ol>
        )
    }
}