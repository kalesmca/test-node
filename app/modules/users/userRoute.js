import {Router} from 'express';
import User from './controllers/userController';

const routes = Router();

// endpoint to Get Leads
let getAllUser = (req, res) => {
  console.log("comming");
        for(var i=0;i<1000000;i++){
            console.log("I ::",i);
        }
        console.log("#####################")
    let user = new User({});
    user.getAll(req).then((callbackRes)=>{
        res.json(callbackRes);
    })
  }
  routes.post('/getALl', getAllUser);
export default routes;

