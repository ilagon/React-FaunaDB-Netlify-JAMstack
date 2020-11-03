const {UPDATE_LINK} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');
exports.handler = async(event) => {

    if(event.httpMethod !== 'PUT'){
        return formattedRes(405, {err: 'Method not supported'});
    }

    const {name, url, description, _id:id, archived} = JSON.parse(event.body);
    const variables = {name, url, description, archived, id};
    try{
        const {updateLink: updatedLink} = await sendQuery(UPDATE_LINK, variables);
        return formattedRes(200, updatedLink);
    }catch(err){
        console.log(err);
        return formattedRes(500, {err: 'Something went wrong'});
    }
};