module.exports = {
  get: (req, res, next) => {
    res.status(200).json({
      posts : ["array", "of", "posts"]
    })
  },

  post: (req, res, next) => {
    res.status(200).json({
      "message": "added"
    })
  }
}