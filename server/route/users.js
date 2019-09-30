const express = require("express");
const router = express.Router();
const _ = require("lodash");
const models = require("../models");

const User = models.user;
const Board = models.board;

let users = [{
    id: 1,
    name: "홍길동"
},{
    id: 2,
    name: "강철수"
}];;

router.get("/", async(req,res)=> {
    let result = await User.findAll({
        attributes: ["name"],
        include:[Board]
    });
    res.send(result);
});
router.get("/address/:address", async(req,res)=> {
    let result = await User.findAll({
        where:{
            address: req.params.address
        }
    });
    res.send(result);
});

router.post("/", async(req, res)=> {
    let result = false;
    try{
        let result_user = await User.create({name: req.body.name});
        await result_user.createBoard({title: "Test", contents: "a", viewCount: 1});
        result = true;
    }catch(err){
        console.error(err);
    }
    res.send(result);
});





router.put("/:id", async(req, res) => {
    let result = false;
    try {
        await User.update(
            {
                name: req.body.name,
                address: req.body.address
            }, {
                where: {
                    id: req.params.id
                }
            }
        );
        result = true;
    } catch (err) {
        console.error(err);
    }

    res.send(result);
});

router.delete("/:id", async(req, res) => {
    let result = false;
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        result = true;
    } catch (err) {
        console.error(err);
    }
    res.send(result);
});
module.exports = router;