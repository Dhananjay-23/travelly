const { response } = require("express");
const express=require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var lo;
var la;
app.get("/",function(req,res)
{
   res.sendFile(__dirname+"/index1.html");

});
const http = require("https");

const options = {
	"method": "POST",
	"hostname": "travel-advisor.p.rapidapi.com",
	"port": null,
	"path": "/attractions/v2/get-options?currency=USD&units=km&lang=en_US",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "e69a70848fmsh77183307e9106cbp16afebjsnc31d83139405",
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		"useQueryString": true
	}
};





app.post("/",function(req,res)
{
    const reqq = http.request(options, function (resp) {
        const chunks = [];
    
        resp.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        resp.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    reqq.write(JSON.stringify({
        contentId: '140446P33',
        contentType: 'attraction_product',
        startDate: '2022-03-01',
        endDate: '2022-03-02',
        pax: [{ageBand: 'ADULT', count: 2}],
        updateToken: ''
      }));
      reqq.end();
});
app.listen(3000,function()
{
    console.log("Server started on port 3000");
});