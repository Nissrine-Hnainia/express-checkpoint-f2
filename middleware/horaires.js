let date = new Date()
let hours = date.getHours()
let days = date.getDay()


function horaires(req, res, next) {
    if ( hours > 13 && hours < 17 && days > 0 && days < 6) {
        next()
    }
    else {
        res.send('<h2> we are closed </h2>')
    }
}

// export default horaires 
module.exports = horaires