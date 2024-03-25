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


    return{
        getAllSkills,
        getTypedText,
        getAllProjects
    }
}