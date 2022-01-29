import React, { Component } from 'react';
import './Item.css'

export default class Item extends Component {


    state = {
        // 鼠标是否移入
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleClick = (id) => {
        return () => {
            console.log('@id', id)
            if(window.confirm('确定删除吗')){
                this.props.del(id)
            }
        }
    }

    handleOnChange = (id) => {
        return (event) => {
            // console.log('@checkbox',id) debug
            let isChecked = event.target.checked
            this.props.update(id,isChecked)
        }
    }



    render() {

        const { id, name, done } = this.props
        const { mouse } = this.state

        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{ backgroundColor: (mouse ? '#ddd' : 'white') }} id='li-todo'>
                <label htmlFor="li-todo" id='li-label'>
                    <input checked={done} onChange={this.handleOnChange(id)} type="checkbox" id='check-todo' />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleClick(id)} id='but-del-todo' style={{ display: (mouse ? 'block' : 'none') }}>删除</button>
            </li>
        )
    }
}
