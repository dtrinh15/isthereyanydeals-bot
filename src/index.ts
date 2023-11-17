import {client} from "./bot"
import {createRestApi} from "./rest-api"

const PORT = process.env.PORT || 8000

const api = createRestApi(client)

api.get("/",async(req,res) =>{
    const test = fetch('https://api.isthereanydeal.com/v02/search/search/?key=137bb5278e36da06e3b3472b553ccfd276c9a732&q=assassins%20creed%20odyssey');
    res.send(test);
    console.log(test);
});
api.listen(PORT, () => {
    console.log(`[rest-api]: Bot rest-api is running at http://localhost:${PORT}`);
});
