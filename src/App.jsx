import React, { Component } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';

import './APP.css'
import Footer from './components/Footer/Footer';


export default class App extends Component {

  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '打代码', done: false },
    ]
  }

  del = (id) => {
    console.log('删除id', id);
    let { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.id != id
    })
    this.setState({ todos: newTodos })
  }

  add = (newTodo) => {
    let { todos } = this.state
    let newTodos = [newTodo, ...todos]
    this.setState({ todos: newTodos })
  }

  // checkbox改变后对相应的todo作状态（done）更新
  updateChecked = (id) => {
    const { todos } = this.state
    todos.forEach(todo => {
      if (todo.id == id) {
        todo.done = !todo.done
        // 不能用break
      }
    });
    this.setState({ todos })
  }

  // 底部checkbox,全选或全不选时改变所有todos的done属性
  updateAll = (isChecked) => {
    const {todos} = this.state
    let newTodos = todos.map(todo=>{
      todo.done = isChecked
      // 注意map要有一个返回值
      return todo
    })
    this.setState({todos:newTodos})
  }

  delAll = ()=>{
    const {todos} = this.state
    let newTodos = todos.filter(todo=>{
      // 没完成的保留
      return !todo.done
    })
    this.setState({todos:newTodos})
  }

  render() {

    const { todos } = this.state

    return <div id='box'>
      <h1>React Demo - Todo List</h1>
      <Header add={this.add} />
      <List update={this.updateChecked} del={this.del} todos={todos} />
      <Footer todos={todos} updateAll={this.updateAll} delAll={this.delAll}/>
    </div>;
  }
}
