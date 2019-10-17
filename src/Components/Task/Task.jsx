import React, { Component } from 'react';
import './Task.css';

//import MatrialUi Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            task: "",
            description: "",
            date: ""
        };
    }
    
    render() {

        return (
        <form style={{paddingBottom: '30px', textAlign: "center"}} onSubmit={this.props.items}>
                <TextField
                id="outlined-name"
                label="Task"
                margin="normal"
                variant="outlined"
                style={{width: '44vw'}}
                name="task"
                />
                <TextField
                id="outlined-name"
                type="Date"
                margin="normal"
                variant="outlined"
                style={{width: '44vw', marginLeft: '28px'}}
                name="date"
                />
                <TextField
                id="outlined-name"
                label="Description"
                margin="normal"
                variant="outlined"
                style={{width: '90vw', marginBottom: '20px'}}
                name="description"
                />
                <Button variant="outlined" color="primary" type="submit">
                Submit
                </Button>
        </form>
        );  
    }
}

export default Task;
