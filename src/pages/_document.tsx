import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { title } from '../constants/text'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <link href="/favicon.ico" />
                <title>{title}</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document