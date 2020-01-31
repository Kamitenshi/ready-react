// Store environment variables

// There is nothing to worry about pushing this file on a VCS as these environement 
// variables will anyway be accessible on the front side 

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const developmentEnv = {
    back_url: "localhost:4000"
}

const productionEnv = {

}

module.exports = (phase) => {
    const env = phase === PHASE_DEVELOPMENT_SERVER ? developmentEnv : productionEnv
    return { env }
}