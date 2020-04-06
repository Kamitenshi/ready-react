# Ready-React

Start faster a react project thanks to a simple architecture, integration of useful standard libraries and examples


## How to use ?

1. `yarn`: install local dependencies
2. `yarn dev`: launch development server
3. Connect to [localhost:3000](http://localhost:3000)
4. Explore the 2 pages and the basic features


## Project architecture

* components: reusable components
* constants: shared constants across the project
* pages: views of the website
* stateful-components: components sharing a global state (based on Redux)
* utils: helpful functions, objects, ...


## Examples in code

The following examples are present in the project in the `src` directory:
* Fetch data with SWR: [pages/index](./src/pages/index.tsx)
* Manage global state n°1 - Declare a new slice for the redux store: [stateful-components/counterSlice](./src/stateful-components/counterSlice.ts)
* Manage global state n°2 - Add the new slice to the store: [utils/store](./src/utils/store.ts)
* Manage global state n°3 - Use new slice in a stateful-component: [stateful-components/Counter](./src/stateful-components/Counter.tsx)
* Manage global state n°4 - Modify the values in the store from a component: [stateful-components/counterModifier](./src/stateful-components/counterModifier.tsx)
* Manage global state n°5 - Use the stateful-component: [pages/about](./src/pages/modify_counter.tsx)
* Manage component state - React hooks: [components/User](./src/components/User.tsx)

*You can find these examples by searching for the keyword HOWTO*


## Using the project

* Change backend url: [next_config](./next_config.js)
* Change SWR configuration: [pages/_app](./src/pages/_app.tsx)
* Change footer and header: [pages/_app](./src/pages/_app.tsx)
* Change tab title: [constants/text](./src/constants/text.ts)
* Change favicon: [public/favicon.ico](./public/favicon.ico)
* Add a page: [pages](./src/pages)


## Libraries

### Production

The following libraries have more functionalities that what is described.
What you can read is the main reason why they were chosen:
* Next: Improve website performances by providing features such as static build (cf: [Next documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation))
* React: Simplify UI creation by reusing components and following a certain sematic
* Redux-toolkit: Easy management of global state across the app (Wrapper around Redux)
* SWR: Simplify request management by including revalidation, interval polling, pagination, ...
* Unfetch: Easy to use to fetch resources (used by SWR)


### Development

The following libraries have more functionalities that what is described.
What you can read is the main reason why they were chosen:
* Typescript: faster development with less bugs due to type safety and clarity


## Related documentation

* Fetching data: [swr](https://github.com/zeit/swr)
* Next framework: [next](https://nextjs.org/docs/getting-started)
* React hooks: [hooks](https://reactjs.org/docs/hooks-overview.html)
* Redux toolkit: [redux](https://redux-toolkit.js.org/tutorials/advanced-tutorial)


## Extra information

* Source repository: https://github.com/Kamitenshi/ready-react.git


## Disclaimer

1. The goal of this project is to accelerate development by simplifying the code base, not to optimize every aspect of a web app
2. A lot of included libraries potential is not used. *You should dig in them before adding new ones.*


## Licence

Apache License 2.0


## Information about this release

* Version: 0.3.0
* Date: 06/04/2020