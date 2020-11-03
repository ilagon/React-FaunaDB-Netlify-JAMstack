const {DELETE_LINK} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');
exports.handler = async(event) => {
    if(event.httpMethod !== 'DELETE'){
        return formattedRes(405, {err: 'Method not supported'});
    }

    const {id} = JSON.parse(event.body);
    const variables = {id};
    try{
        const {deleteLink: deletedLink} = await sendQuery(DELETE_LINK, variables);
        return formattedRes(200, deletedLink);
    }catch(err){
        console.log(err);
        return formattedRes(500, {err: 'Something went wrong'});
    }
};