module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/app.js'
    return config
  }
}
