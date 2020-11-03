const {CREATE_LINK} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');
exports.handler = async(event) => {
    if(event.httpMethod !== 'POST'){
        return formattedRes(405, {err: 'Method not supported'});
    }
    const {name, url, description} = JSON.parse(event.body);
    const variables = {name, url, description, archived: false};
    try{
        const {createLink: createdLink} = await sendQuery(CREATE_LINK, variables);
        return formattedRes(200, createdLink);
    }catch(err){
        console.log(err);
        return formattedRes(500, {err: 'Something went wrong'});
    }
};