import React, {Component} from 'react';
import './List.css';

//import MatrialUi Components
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        width: '94%',
        backgroundColor: '#eeeeee',
      },
    });

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }
    render(){
        const { classes, style } = this.props;
        return (
            <List>
            {this.props.items.map((item,i) => {
                    return (
                        <ListItem key={item.id} button style={style} onClick={this.props.status}>
                            <ListItemText id={item.id} primary={item.task} secondary={item.description} onClick={this.props.status}/>
                            <p style={{paddingRight: "20px"}}>{item.date}</p>
                            {this._renderList}
                            {item.status == 'Pending'? 
                            (
                            <Button id={item.id} variant="outlined" color="seconday" size="small" onClick={this.props.status}>
                                complete
                            </Button>
                            ) :
                            (
                                <p>COMPLETE</p>
                            )}
                        </ListItem>
                    )
            })}
            </List>
        );
    }
}

export default withStyles(styles)(ToDoList);
