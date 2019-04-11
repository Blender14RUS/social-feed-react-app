import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ItemHeader from './ItemHeader'
import '../style.css'

export default function Post(props) {
    return (
        <Card className="card">
            <CardHeader avatar={
                <Avatar src={props.user.profile_image_url} />
            }
            title={
                <ItemHeader name={props.user.name} publicationDate={props.created_at} login={props.user.screen_name} />
            }
            />
            <CardContent>
                <Typography>
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}
