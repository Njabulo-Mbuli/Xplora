import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
    spacer: {
        height: 65,
    },
    card: {
        boxSizing: "border-box",
        border: "2px solid rgba(0,0,0,0)",
        '&:hover': {
            cursor: "pointer",
            border: "2px solid #764ba2",
        },
        borderRadius: 0,
        maxWidth: 200,
    },
});

const ItemCard = ({ launch, history }) => {
    const classes = useStyles()

    const date = new Date(launch.launch_date_local)
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dtf.formatToParts(date)
    
    const handleItemClick = (id) => {
        history.push({
            pathname: `/LaunchDetails/${id}`
        });
    }
    return (
        <Card className={classes.card} onClick={() => { handleItemClick(launch.id) }}>
            <CardActionArea className="cardImage">
                <CardMedia component="img" height="auto" title={launch.mission_name} image={launch.links.mission_patch_small} />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {launch.mission_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Date: {`${day} ${month} ${year}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default withRouter(ItemCard)