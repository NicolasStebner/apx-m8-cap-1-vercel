const {send} = require('micro')
const methods = require('micro-method-router')

export default methods({
  async get(req, res) {
    return send(res, 200, `GET /me`)
  },
  async patch(req, res) {
    return send(res, 200, `PATCH /me`)
  }
})