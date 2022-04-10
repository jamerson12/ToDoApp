import React, { Component } from 'react';

import PropTypes from 'prop-types';


class TodoItem extends Component {

    markComplete = (e) => {
        
    }
    delTodo = () => {
        //console.log('click');
    }

    render() {

        const {id , title} = this.props.todo;

        return (
            <div className="todo">
        
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} id={`${this.props.todo.id}`}/>

                <label htmlFor={`${this.props.todo.id}`}>
                    <span className="label">{title}</span>
                    <button className="btn" onClick={this.props.delTodo.bind(this,id)}>Delete</button>
                </label> 
                
            </div>
            
        );
    }
}

//Defining proptypes

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem;