const {send} = require('micro')
const methods = require('micro-method-router')

export default methods({
  async post(req, res) {
    return send(res, 200, `POST /order?productId={id}`)
  },
})