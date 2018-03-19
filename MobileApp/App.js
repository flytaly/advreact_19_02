import React from 'react'
import {configure} from 'mobx'
import AppNavigator from './src/app-navigator'
configure({ enforceActions: true })

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}