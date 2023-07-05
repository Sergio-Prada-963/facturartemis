import app from "./app.js";

const main = ()=>{
    app.listen(app.get('port'));
    console.log(`listening on ${app.get('port')}`);
}
main();