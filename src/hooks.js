// ./src/hooks.js
module.exports.hook = async function ({ appConfig, filterEntities, isLocalDev }) {
  console.log('inproc hook called with appConfig => ', Object.keys(appConfig))
  console.log(`filterEntities: ${JSON.stringify(filterEntities)}, isLocalDev: ${isLocalDev}`)
}
