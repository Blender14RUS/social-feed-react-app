import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ItemHeader from './ItemHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../style.css'

export default class Post extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        console.log("click");
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
                </CardContent>
                
                <CardActions disableActionSpacing> 
                    <IconButton
                        onClick={this.handleExpandClick}
                        aria-expanded={false}
                        aria-label="Show more"
                    >   
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}
