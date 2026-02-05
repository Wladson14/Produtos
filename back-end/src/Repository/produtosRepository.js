import { consulta } from "../database/conexao.js";

class produtosRepository {
    create(produto) {
        const sql = "INSERT INTO produtos SET ?;"
        return consulta(sql, produto, "Não foi possível criar")
    }

    findAll() {
        const sql = "SELECT * FROM produtos;"
        return consulta(sql, [], "Os produtos não foram encontrados")
    }

     findById(id) {
        const sql = "SELECT * FROM produtos WHERE id=?"
        return consulta(sql, [id], "Não foi possivel atualizar")
    }

    update(produto, id) {
        const sql = "UPDATE produtos SET nome=?, valor=?, estoque=? WHERE id=?;"
        return consulta(sql, [produto.nome, produto.valor, produto.estoque, id], "Não foi possível atualizar")
    }

    delete(id) {
        const sql = "DELETE FROM produtos WHERE id=?;"
        return consulta(sql, [id],  "Não foi possível deletar") 

    }
}

export default new produtosRepository()