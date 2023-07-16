'use strict';
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = require("./server.js");
const app = express();
const rateLimit = require("express-rate-limit");
const getIP = require('ipware')().get_ip;
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 50, // limit each IP to max requests per windowMs
    message: {
        error: "Bạn đã đặt giới hạn lượt yêu cầu 50/1p"
    }
});
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m', '\x1b[32m'];
    var more = color[Math.floor(Math.random() * color.length)];
    console.log(more + '[ IP ] -> ' + ipInfo.clientIp);
    next();
});
app.post('/')
app.use("/", server);
app.set("json spaces", 4);
app.use((error, req, res, next) => {
    res.status(error.status).json({ message: error.message });
});
///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////
app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(req, res) {
   // var result = 'App is running'
  //  response.send(result);
     
res.json({ 
	
    "message": "SUPPORT API By GZT",
    "apikey": {
        "create": "/apikey?type=register&name=JRT",
        "recover_key": "/apikey?type=recover&ip_address=IP_address",
        "checker": "/apikey?type=checker&apikey=APIKEY"
    },
    "example": {
        "simsimi": {
            "ask": "/sim? type=ask&ask=xin chào",
            "teach": "/sim? type=teach&ask=Dạy&ans=trả lờGZTy=JRT"
        },
        "facebook": {
            "info_user_facebook": "/facebook/info?uid=100004253741257",
            "find_uid_facebook": "/finduid?url=<url profile, story, post, video,...>",
            "download_facebook": "/v2/fbget?url=<url> (download được stories)"
        },
        "canvas": {
            "avatarAnime": {
                "image": "/taoanhdep/avatarwibu?id=26&chu_nen=nguyenhaidang&chGZTy=JRT",
                "list": "/taoanhdep/list",
                "search": "/taoanhdep/search?key=Siesta"
            },
            "fbcover": {
                "v1": "/fbcover/v1?name=<tên của bạn>&uid=<uid facebook>&address=<địa chỉ>&email=<email>&subname=<tên phụ>&sdt=<sdt>&color=no",
                "v2": "/fbcover/v2?name=<name>&id=5&subGinzajukie"
            },
            "thuphap": "/thuphap?id=1&sodong=3&doNguyễn Chí Thành Lộc Đăng&doNguyễn Chí Thành Lộc Đăng&dong_3=NgChí Thành Lộc Đăng",
            "tiki": "/tiki?Nguyễn Chí Thành Lộc Đăng",
            "blink": "/blink?id=100004253741257,4,100023619860498&delay=500",
            "danhthiep": "/shopmaihuong?tNguyễn Chí Thành LộciĐăng&text2=0258965JQK",
            "giangsinh": "/giangsinh?text=GZT"
        },
        "images": {
            "GET": {
                "girl": "images/girl",
                "vu": "images/vu",
                "mong": "images/mong",
               "ma": "image/ma",
                "get": "/up_api?type=get"
            },
            "UPLOAD": {
                "image_API": {
                    "upload": "up_api?type=upload&link=",
                    "note": "chỉ nhận link imgur"
                }
            }
        },
        "GAME": {
            "dhbc": {
                "dhbc": "/dhbcv1",
                "dhbcv2": "/dhbcv2"
            },
            "linkword": "/linkword?word=",
            "vuatiengviet": {
                "getKeyWord": "/vuatiengviet/keyword",
                "createImage": "/vuatiengviet/image?word=từ khóa"
            },
            "cfs": {
                "cfs": "/cfs",
                "cfsdata": "/cfsdata",
                "react": "/react"
            },
            "taixiu": "/taixiu",
            "taixiu2": "/taixiuv2"
        },
        "data": {
            "covid": "/covid?country=viet nam",
            "info_facebook": "/info",
            "leageuoflegends": {
                "list_champion": "/lol/list",
                "champion": "/lol?champion=yasuo"
            },
            "pokemon": "/pokemon/search?name=Pikachu",
            "pinterest": "/pinterest?search=mirai"
        },
        "utilities": {
            "youtube": {
                "youtube": "/youtube",
                "audio": "/sing?link=https://www.youtube.com/watch?v=Zmt2lZfCoMs",
                "video": "/video?link=https://www.youtube.com/watch?v=Zmt2lZfCoMs"
            },
            "upload_imgur": "/imgur?link=<link ảnh>",
            "download_video_tiktok": "/tiktok?link=<url tik tok>",
            "get_proxy": "/proxy?location=vn&protocols=socks4",
            "mail10p": {
                "listDomain": "/mail10p/domain",
                "getEmail": "/mail10p/get?email=emall@domain&apikey=",
                "checkMail": "/mail10p/check?id_mail=id_mail&apikey=",
                "document": {
                    "use": "lấy 1 email gửi tới 1 địa chỉ email bạn tự đặt tên@domain (Ginza@mailkept.com)",
                    "get": "email bạn vừa mới đặt ở trên@domain (ví dụ: Ginza@mailkept.com). Hãy chắc chắn rằng đã có 1 email đã gửi thư đến email bạn vừa tạo",
                    "check": "nhập id mail của bạn (id có khi bạn get thành công)"
                }
            },
            "bank": {
                "check": "/bank/check",
                "find": "/bank/find",
                "get": "/bank/get",
                "password": "/bank/password",
                "pay": "/bank/pay",
                "register": "/bank/register",
                "send": "/bank/send",
                "top": "/bank/top"
            },
            "videodowload": "/videodowload?url=<url> (download được tất cả video)"
        }
    }
        
 })

  
}).listen(app.get('port'), function() {
    console.log('\x1b[36m[ START ] -> Server listening on portt\x1b[37m', app.get('port'), '\n');
});
// build tool
app.post('/', function(request, response) {
const request1 = require('request')
var content = request.param.content
if(!content) return response.json({ erorr: 'thieu du lieu!'})
const options = {
  method: 'POST',
  url: 'https://buildtool.dev/verification',
  headers: {
    'cookie': 'paste_submitted=yes; last_code_class=language-js; last_page_link=code-viewer.php%3Fpaste%3D097ba7.language-js'
  },
  form: {
    'content': content,
    'code_class': 'language-js'
  }
};
request1(options, function (error, response1, body) {
  var start = body.indexOf('href=\"code-viewer')
  var end = body.indexOf('language-js\">Permanent link')
  var cut = body.substring(start + 6, end + 11)
  response.json({
	  data: 'https://buildtool.dev/' + cut
  })
});
});

// bank
async function bank() {
const { writeFileSync } = require('fs-extra');
const { join } = require('path');
const pathData = join(__dirname, "public", "bank", "data", "bank.json");
const user = require('./public/bank/data/bank.json');
    if(user[0] == undefined ) return
    while(true) {
	    for (let id of user) {
		    var userData = user.find(i => i.senderID == id.senderID);
		    var money = userData.data.money;
		    userData.data.money = parseInt(money) + parseInt(money) * 0.005
		    writeFileSync(pathData, JSON.stringify(user, null, 2));
    	}
	    console.log("DANG XU LI BANKING");
	    await new Promise(resolve => setTimeout(resolve, 60 * 60 * 1000))
    }
}
bank()
// -------------------------->      END     <-------------------------------//
