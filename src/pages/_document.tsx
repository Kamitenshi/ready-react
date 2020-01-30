import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <link rel="shortcut icon" href="/favicon.ico" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document