const dbUser =  process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
    port: 3000,
    DBuri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.di1n2.mongodb.net/?retryWrites=true&w=majority`,
    env: "development"

}

