import mysql from "mysql"
import "dotenv/config"

const conexao = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

conexao.connect()

export const consulta = (sql, valores='', mensagenReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, result) => {
            if (erro) return reject(mensagenReject) 
            const row = JSON.parse(JSON.stringify(result))
            return resolve(result)
        })
    })
}

export default conexao
