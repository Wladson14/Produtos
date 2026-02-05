import produtosRepository from "../Repository/produtosRepository.js"

class produtosController {
    async store(req, res) {
        const produto = req.body
        const row = await produtosRepository.create(produto)
        res.json(row)
    }

    async index(req, res) {
        const row = await produtosRepository.findAll()
        res.json(row)
    }

     async show(req, res) {
        const id = req.params.id
        const row = await produtosRepository.findById(id)
        res.json(row)
    };

    async update(req, res) {
        const id = req.params.id
        const produto = req.body
        const row = await produtosRepository.update(produto, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await produtosRepository.delete(id)
        res.json(row)
    }
}

export default new produtosController()