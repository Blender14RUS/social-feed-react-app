import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ItemHeader from './ItemHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import '../style.css'

export default class Post extends Component {
    state = { 
        expanded: false,
    };

    imgURL = this.props.entities.media ? <img className="picture" src={this.props.entities.media[0].media_url} alt="" /> : ''

    handleExpandClick = () => {
        console.log(this.props)
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        return (
            <Card className="card">
                <CardHeader avatar={
                    <Avatar src={this.props.user.profile_image_url} />
                }
                title={
                    <ItemHeader name={this.props.user.name} publicationDate={this.props.created_at} login={this.props.user.screen_name} />
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                />
                
                <CardContent>
                    <Typography>
                        {this.props.text}
                    </Typography>
                    {this.imgURL}
                </CardContent>
            </Card>
        )
    }
}
