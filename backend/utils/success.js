const successMessage = (res, message, successStatusCode, payload) =>{
    return res.status(successStatusCode).json({
        success: true,
        message,
        payload
    })
}

module.exports = successMessage