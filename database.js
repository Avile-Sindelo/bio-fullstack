export default function Database(db){
    async function getAllSkills(){
        return await db.manyOrNone('select * from skills');
    }

    async function getTypedText(){
        return await db.manyOrNone('select * from typed');
    }

    async function getAllProjects(){
        return await db.manyOrNone('select * from projects');
    }

    async function addEmail(name, email, message){
        await db.none(`insert into email (customer_name, email_address, message) values ($1, $2, $3)`, [name, email, message]);
    }


    return{
        getAllSkills,
        getTypedText,
        getAllProjects,
        addEmail
    }
}