const Pool = require('pg').Pool
//DataBase Information
//passwordにはhash化とsalt化が必要
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_datarecord_db',
    password: 'root',
    port: 5432,
})

const getUsers = (request, response) => {
    debugger
    pool.query('SELECT * FROM public."user"', (error, result) => {
        if(error){
            throw error
        }
        response.status(200).json(result.rows)
    })
}

//get user
const getUserById = (request, response) => {
    debugger
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM public."user" WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(result.rows)
    })
}

// post new user
const createUser = (request, response) => {
    const {username, email, password} = request.body;
    //ここにパスワードをハッシュ化する関数を配置する
    pool.query('INSERT INTO public."user" (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
        if(error){
            throw error
        }
        //レスポンスをjsonで返す
        response.status(201).json({username, email, password})
    })
}

//update user
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email, password } = request.body;
    debugger

    pool.query(
        'UPDATE public."user" SET username = $1, email = $2, password = $3 WHERE id = $4',
        [username, email, password, id],
        (error, resuts) => {
            if (error) {
                throw error
            }
            //updateの結果をresponseで返す
            response.status(201).json(request.body);
        }
    )
}

//delete USER

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.quert('DELETE FROM public."user" WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send(`User deleted with ID ${id}`)
    })
}

//index.jsから呼び出すためにexportする
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}