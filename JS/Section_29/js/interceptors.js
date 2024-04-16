// Requisição
// Se não tivesse o postsFetch, seria axios.interceptor.request.use()
postsFetch.interceptor.request.use(
    function(config) {
        console.log("Antes da requisição...")
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

// Respostas
// Se não tivesse o postsFetch, seria axios.interceptor.response.use()
postsFetch.interceptor.response.use(
    function(response) {
        console.log("Antes da resposta...")
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)