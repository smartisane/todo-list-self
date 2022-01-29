import React, { Component } from 'react';
import Item from '../Item/Item';

import './List.css'

export default class List extends Component {

  
  render() {
    const {todos,del,update} = this.props;

    return <div>
        <ul id='ul-todo'>
          {
            todos.map(todo=>{
              // console.log(todo)
              return <Item update={update}  key={todo.id} {...todo} del={del}/>
            })
          }
        </ul>
    </div>;
  }
}
