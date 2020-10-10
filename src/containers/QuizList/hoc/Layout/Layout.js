import React, {Component} from 'react'
import classes from './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drower from '../../components/Navigation/Drower/Drower'
import {connect} from 'react-redux'

class Layout extends Component {

    state = {
        menu: false
    }

    menuCloseHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render () {
        return (
            <div className={classes.Layout}>

                <Drower 
                    isOpen = {this.state.menu}
                    onClose = {this.menuCloseHandler}
                    isAuthenticated = {this.props.isAuthenticated}
                />

                <MenuToggle 
                    isOpen = {this.state.menu}
                    onToggle = {this.menuCloseHandler}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)

