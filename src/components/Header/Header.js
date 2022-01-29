import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './Header.css'

export default class Header extends Component {


  hanleKeyUp = (event) => {
    let name = event.target.value
    // console.log(event.key) Enter
    if(event.key == 'Enter' && name.trim() != ''){
      let newTodo = {id:nanoid(),name:name,done:false}
      // add
      this.props.add(newTodo)
      event.target.value =''
    }
  }

  render() {
    return <div>
      <input onKeyUp={this.hanleKeyUp} className='input-todo' type="text" placeholder='输入任务，回车添加到列表' />
    </div>;
  }
}
