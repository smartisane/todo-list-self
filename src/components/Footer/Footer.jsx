import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {

  // 将所有都选上或所有都取消
  handleOnChange = (event) => {
    let isChecked = event.target.checked
    console.log(isChecked);

    this.props.updateAll(isChecked)

  }

  // 删除所有已完成
  delAll = () => {
    this.props.delAll()
  }

  render() {
    const { todos } = this.props
    let allNum = todos.length
    let doneNum = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0)
    }, 0)
    return <div className='footer'>
      <div id='footer-left'>
        <input type="checkbox" onChange={this.handleOnChange} checked={allNum == doneNum ? true : false} />
        <span>已完成 {doneNum} / {allNum} todos</span>
      </div>

      <button id='but-footer' onClick={this.delAll}>删除全部已完成</button>
    </div>;
  }
}
