
class User {
    constructor(){
        console.log('user constructor calling');
    }
    getAll(){
        
        return new Promise((resolve,reject)=>{
            
            resolve({"status" : "getAll Success"});
        });
    } 
}

export default User;