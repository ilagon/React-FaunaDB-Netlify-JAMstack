const {GET_LINKS} = require("./utils/linkQueries");
const sendQuery = require('./utils/sendQuery');
const formattedRes = require('./utils/formattedResponse');
exports.handler = async(event) => {
    if(event.httpMethod !== 'GET'){
        return formattedRes(405, {err: 'Method not supported'});
    }
    try{
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data;
        return formattedRes(200, data);
    }catch(err){
        console.log(err);
        return formattedRes(500, {err: 'Something went wrong'});
    }
};