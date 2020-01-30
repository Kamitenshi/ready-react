import NextApp from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../utils/store'
interface Props {
    Component: any,
    router: any,
    ctx: any
}

class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props
        const header = <h2>Header</h2>
        const footer = <h2>Footer</h2>
        return (
            <Provider store={store}>
                {header}
                <Component {...pageProps} />
                {footer}
            </Provider>
        )
    }
}

export default App