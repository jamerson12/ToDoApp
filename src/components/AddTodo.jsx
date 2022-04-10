import React, {Component} from 'react';

export class AddTodo extends Component{


    state = {
        title: ''
    }

    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title:''
        });
    }
    onChange = (e) => {
        return this.setState({ 
            [e.target.name] : e.target.value 
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" className="input" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="inputBtn"/>
            </form>
        )
    }
}

export default AddTodo;