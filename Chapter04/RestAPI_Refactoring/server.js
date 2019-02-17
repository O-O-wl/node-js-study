
const http  = require('http');
const fs = require('fs');


const users = {};

const router = {

    get : {
        '/': (req,res)=> {
            return fs.readFile('./client.html',(err,data)=>{
                if(err){
                    throw err;
                }
                res.end(data)
            })
        },

        '/users':(req,res)=>{

            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            return res.end(JSON.stringify(users))  // 객체를 문자열로 반환

        },

        '*':(req,res)=>{ return (fs.readFile(`.${req.url}`,(err,data)=>{
            if(err){
                console.log(`${req.url}파일이 존재하지 않습니다.`);
                throw  err;
            }
            res.end(data);

        }))
        },
    },
    'post' : {
        '/': (req,res)=> {}
        ,
        '/users':(req,res)=>{
            const id = +new Date();
            let body = '';

            req.on('data',(chunk)=>{
                body += chunk;
            });

            req.on('end',()=>{
                console.log(`POST BODY:${body}`);

            });

            const { name } = JSON.parse(body);
            users[id] = name;


            res.writeHead(201,{'Cotent-Type':'text/html;charset=utf-8'});
            return res.end(`${name} 사용자 등록 완료`);

        }
    },
    'put' : {
        '/': (req,res)=> {

        },
        '/users':(req,res)=>{

            const id = req.url.split('/')[2];

            let body ='';

            req.on('data',(chunk)=>{
                body += chunk;
            });

            req.on('end',()=>{
                console.log(`PUT BODY : ${body}`)
            });

            const newName = JSON.parse(body).name;
            users[id] = newName;

            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

            return res.end(`${JSON.stringify(users)}`)

        }
    },
    'patch' : {
        '/': (req,res)=> {},
        '/users':(req,res)=>{}
    },
    'delete' : {
        '/': (req,res)=> {},
        '/users':(req,res)=>{
            const id = req.url.split('/')[2];

            let body ='';

            req.on('data',(chunk)=>{
                body += chunk;
            });

            req.on('end',()=>{
                console.log(`DELETE BODY : ${body}`)
            });

            //const newName = JSON.parse(body).name;
            delete users[id];

            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

            return res.end(`${JSON.stringify(users)}`)
        }
    },
};


const server = http.createServer((req,res)=>{


    // 1 . 들어온 메소드를 작은알파벳으로 변환후 키로 router '메소드객체'(router의 속성인 객체) 에서 찾아냄
    // 2 . 메소드 객체내에서 'url' 속성 함수 찾아내어 matchedUrl 에 저장
    const matchedUrl = router[req.method.toLowerCase()][req.url]

    // 3. matchedUrl 가 undefined아니면 실행 undefined 이면 router[req.method.toLowerCase()]['*'])(req,res)
    // 실행하는 속성객체함수에는 (req,res) 를 파라미터로
    ( matchedUrl || router[req.method.toLowerCase()]['*'])(req,res);




}).listen(8888,()=>{
    console.log('서버 시작 PORT :8888');
});

server.on('error',(err)=>{
    if(err){
        throw err;
    }
});