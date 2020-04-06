import NextApp from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import fetch from 'unfetch'
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

        const backUrl = process.env.back_url
        const swrConfig = {
            refreshInterval: 3000,
            fetcher: (service: string) => fetch(`https://${backUrl}/${service}`).then(res => res.json())
        }

        return (
            <SWRConfig
                value={swrConfig}
            >
                <Provider store={store}>
                    {header}
                    <Component {...pageProps} />
                    {footer}
                </Provider>
            </SWRConfig>
        )
    }
}

export default App