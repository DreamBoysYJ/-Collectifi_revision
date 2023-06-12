import db from "./models";


export const connectDataBase = async () => {
    try {
        await db.sequelize.sync({force: false});
        console.log("Database connected ")
        
    }
    catch (e) {
        console.log(`Error connectDatabase : ${e}`)
    }
}