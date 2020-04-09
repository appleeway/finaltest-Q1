module.exports = {
  showDateMethodUrl: (req, res, next) => {
    function formatConsoleDate(date) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()
      var milliseconds = date.getMilliseconds()

      return year + '-' +
        month + '-' +
        day + ' ' +
        ((hour < 10) ? '0' + hour : hour) +
        ':' +
        ((minutes < 10) ? '0' + minutes : minutes) +
        ':' +
        ((seconds < 10) ? '0' + seconds : seconds)
    }

    console.log(`${formatConsoleDate(new Date())} | ${req.method} from ${req.url}`)
    next()
  }
}



