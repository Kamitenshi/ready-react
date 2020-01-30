import NextApp from 'next/app'
import React from 'react'
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
            <>
                {header}
                <Component {...pageProps} />
                {footer}
            </>
        )
    }
}

export default App