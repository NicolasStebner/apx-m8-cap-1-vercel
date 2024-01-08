const {send} = require('micro')
const methods = require('micro-method-router')

export default methods({
  async get(req, res) {
    return send(res, 200, `/search?q=query&offset=0&limit=10`)
  },
})