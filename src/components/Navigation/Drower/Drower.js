import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Drower.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Drower extends Component {

    clickHandler = () => {
        this.props.onClose()
    }
    
    renderLinks (links) {
        return links.map((link, index) => {
            return (
                <li key = {index}>    
                    <NavLink 
                        to={link.to}
                        exact={link.exact}
                        activeStyle={{color: 'red'}}
                        onClick={this.clickHandler}
                    >{link.label}</NavLink>
                </li>
            )
        })
    }

    render() {

        const links = [
            {to: '/', label: 'Список', exact: true}
        ]

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Создать тест', exact: false})
            links.push({to: '/logout', label: 'Выйти', exact: false})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: false})
        }

        const cls = [classes.Drower]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }        

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>

                {
                    this.props.isOpen
                    ? <Backdrop 
                        onClick = {this.props.onClose}
                      />
                    : null
                }
            </>
        )
    }
}

export default Drower


