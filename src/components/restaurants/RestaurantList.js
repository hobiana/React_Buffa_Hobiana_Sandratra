import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
*/
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//import Paper from '@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    container: {
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 10
    },
    sortContainer: {
        float: 'right',
        display: 'row',
        width: 300
    },
    sortLabel: {
        float: 'right',
        marginRight: 10
    },
    sortSelect: {
        float: 'right',
        marginTop: -5,
        width: 100
    },
    resultLabel: {
        float: 'left'
    },
    list: {
        marginTop: 30,
        overflow: 'auto',
        maxHeight: 500,
        background: ''
    },
    link: {
        margin: theme.spacing.unit,
    },
    card: {
        maxWidth: '60%',
        overflow: 'inherit',
        marginBottom: '10px'
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
});

class RestaurantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: 'nom'
        }
    }

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    sort = (property) => {
        switch (property) {
            case 'nom':
                return (a, b) => {
                    return a.nom >= b.nom ? 1 : -1;
                }
            default:
                return (a, b) => {
                    return a.nom >= b.nom ? 1 : -1;
                }
        }
    }

    onChangeOrderBy = (e) => {
        this.setState({ orderBy: e.target.value });
    }

    render() {
        const { orderBy } = this.state;
        const { list,
            classes } = this.props;
        return (
            /*<Paper
                className={classes.container}
                elevation={2}>
                <List>
                    <Typography 
                        className={classes.resultLabel}
                        component="span" 
                        color="textSecondary">
                        {`${list.length} réstaurant(s) trouvés.`}
                    </Typography>
                    <Select
                        className={classes.sortSelect}
                        name="sort"
                        value={orderBy}
                        onChange={this.onChangeOrderBy}
                        fullWidth
                        inputProps={{
                            id: 'sort',
                        }}>
                        <MenuItem value={'nom'}>Nom</MenuItem>
                    </Select> 
                    <Typography 
                        className={classes.sortLabel}
                        component="span" 
                        color="textSecondary">
                        Trier par
                    </Typography>
                    <div className={classes.list}>
                        {list.sort(this.sort(orderBy)).map(({ _id, nom, desc, cuisine, adresse, photo }, index) =>  (
                            <div key={index}>
                                <ListItem
                                    button
                                    component={Link} to={`/restaurants/${_id}`}
                                    alignItems="flex-start"
                                    key={index} >
                                    <img
                                        style={{maxWidth: 200}}
                                        src={`/images/restaurants/${photo}`}
                                        alt={nom} />
                                    <ListItemText
                                        primary={nom}
                                        secondary={
                                            <React.Fragment>
                                                <Typography 
                                                    component="span" 
                                                    color="textPrimary">
                                                    {`Cuisine: ${cuisine}`}
                                                </Typography>
                                                <Typography 
                                                    component="span" 
                                                    color="textSecondary">
                                                    {adresse}
                                                </Typography>
                                                {desc}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </div>
                </List>
            </Paper>
            */
            <div>
                <div>
                    <Typography
                        className={classes.resultLabel}
                        component="span"
                        color="textSecondary">
                        {`${list.length} réstaurant(s) trouvés.`}
                    </Typography>
                    <Select
                        className={classes.sortSelect}
                        name="sort"
                        value={orderBy}
                        onChange={this.onChangeOrderBy}
                        fullWidth
                        inputProps={{
                            id: 'sort',
                        }}>
                        <MenuItem value={'nom'}>Nom</MenuItem>
                    </Select>
                </div>
                <Grid item xs={12}>
                    {list.sort(this.sort(orderBy)).map(({ _id, nom, desc, cuisine, adresse, photo, ville, tel }, index) => (

                        <Card className={classes.card} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.media}
                                    height="140"
                                    image={`/images/restaurants/${photo}`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {nom}
                                    </Typography>
                                    <Typography component="p">
                                        {desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link className={classes.link} to={"/restaurants/"+_id}>
                                    Voir
                                </Link>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {"Spécialité: " + cuisine}
                                    </Typography>
                                    <Typography paragraph>
                                        {adresse+", "+ville}
                                    </Typography>
                                    <Typography paragraph>
                                        {"Tel: "+tel}
                                    </Typography>
                                </CardContent>

                            </Collapse>
                        </Card>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(RestaurantList)