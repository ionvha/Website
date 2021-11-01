const express = require('express');
// const path = require('path')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express();

// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'index.html'))
// })

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cors())

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})

app.get('/sports',(req,res) => {
    res.send([{
        id:1,
        title:"为鼓励国足打好比赛",
        content:'为鼓励国足打好比赛，中国足协沿用40了强赛期间的赢球奖励办法，国足在12强赛中取胜，其单场赢球奖金将达到600万元人民币！国足3：2战胜越南，武磊最后时刻价值连城的进球直接助力国足...'
    },
    {
        id:2,
        title:"为鼓励国足打好比赛",
        content:'为鼓励国足打好比赛，中国足协沿用40了强赛期间的赢球奖励办法，国足在12强赛中取胜，其单场赢球奖金将达到600万元人民币！国足3：2战胜越南，武磊最后时刻价值连城的进球直接助力国足...'
    }
    ])
})

app.get('/recreation',(req,res) => {
    res.send([{
        id:1,
        title:'这是中锋的速度？胡金秋快速跟进暴扣打停北京',
        content:'这是中锋的速度？胡金秋快速跟进暴扣打停北京这是中锋的速度？胡金秋快速跟进暴扣打停北京这是中锋的速度？胡金秋快速跟进暴扣打停北京'
    }])
})

app.get('/game',(req,res)=>{
    res.send({
        id:2,
        title:'RNG击败PSG各赛区炸锅！众解说发文感叹RNG官推无语 小虎采访诛心',
        content:'前言：备受LOL玩家关注的S11世界赛正在紧张激烈的进行，在小组赛RNG与PSG的比赛中：RNG击败PSG拿到世界赛首胜，赛后引国内外赛区热议，LPL解说纷纷发文感叹，小虎采访诛心...'
    })
})

app.post('/user/login',(req,res) => {
    let {username,password} = req.body;
    if(username === 'xiaoming' && password === '123456'){
        let data = {
            id:'485-191',
            username,
        };
        let primayKey = 'gshgsigh$53';
        let token = jwt.sign(data,primayKey,{expiresIn:'1h'});
        res.json({message:'登录成功',code: 0,token})
    }else {
        res.json({message:'用户名或者密码错误',code: -1})
    }
})

app.listen(4000,()=>{
    console.log('成功连接了')
})