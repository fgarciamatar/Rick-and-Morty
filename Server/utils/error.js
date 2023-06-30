const errorHandler = (res, error) => {
    const { response } = error;
    if(response.data && error.response.status === 404) res.status(error.response.status).send("Not Found")
    else  res.status(500).send(error.message)
}
module.exports = errorHandler;