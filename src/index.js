const express = require("express");
const _ = require("lodash");
const app = express();
const user_router = require("./route/users");
const board_router = require("./route/board")

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use("/users", user_router);
app.use("/board", board_router)

app.listen(3000);

app.get("/", (req, res) => {
    res.send("hi");
});

// app.get("/", (req, res) => {
//     let a= 10;
//     let b = 20;
//     let c = a+b;
//     req.send(c);
//     res.send("hello dsdsad")
// });

// app.get("/", (req, res) => {
//     let msg = "asd ";
//     res.send({msg , result : users});

//     if(users){
//         res.send("user get" + users.name);
//     }else{
//         res.send("error")     
//     }


// });

// app.get("/users/:id", (req,res)=> {
//     if(users && user.id == req.params.id){
//         res.send("user " + users.name+ "get");
//     }else{
//         res.send("error")     
//     }
// });

// app.post("/users", (req,res)=> {
//     const check_user = _.find(users, ["id", req.params.id]);
//     let msg = req.body.id+" 아이디를 가진 유저가 이미 존재합니다.";
//     let success = false;
//     if(!check_user){
//         users.push(req.body);
//         msg = req.body.name+" 유저가 추가되었습니다.";
//         success = true;
//     }
//     res.send({msg, success})
// });

// app.put("/users/:id", (req,res)=> {
//     let check_user = _.find(users, ["id", parseInt(req.params.id)]);
//     let msg = req.params.id + "아이디를 가진 유저가 존재하지 않습니다.";
//     if(check_user){
//         users = users.map(entry => {
//             if(entry.id === parseInt(req.params.id)){
//                 entry.name = req.body.name;
//             }
//             return entry;
       
//         });
//         msg = "성공적으로 수정 됨";     
//     }
//     res.send({msg});
// });

// app.delete("/users/:id", (req,res)=> {
//     let check_user = _.find(users, ["id", parseInt(req.params.id)]);
//     let msg = req.params.id + "아이디를 가진 유저가 존재하지 않습니다.";
//     if(check_user){
//         msg = "성공적으로 삭제 됨";     
//         users = _.reject(users, ["id", parseInt(req.params.id)]);       
//     }
//     res.send({msg});
    
// });