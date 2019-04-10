import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemHeader from './ItemHeader'

const style = {
    card: {
        margin: '5px',
    }
}
export default function Post (props) {
    return (
        <Card style = {style.card}>
            <CardHeader avatar = {
                <Avatar src = {props.AvatarURL} />
            }
            title={
                <ItemHeader Name = {props.Name} PublicationDate = {props.CreateTime} Login = {props.Login} />
            }
            />
            
            <CardContent>
                <Typography>
                    {props.Body}
                </Typography>
            </CardContent>
        
            <CardActions>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
