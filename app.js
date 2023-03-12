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
   res.sendFile(__dirname+"/index.html");
//    const query=req.body.cityName;
//    const apiKey="1572be061e202bcc1cae43c48a8aabfd";
//    const unit="metric";
//    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

//    https.get(url,function(response)
//    {
//    //console.log(response.statusCode);
//    response.on("data",function(data)
//    {
//    const weatherData=JSON.parse(data);
//    const long=weatherData.coord.lon;
//    //lo=long;
//    console.log(long);
//    const latt=weatherData.coord.lat;
//    //la=latt;
//    console.log(latt);
//    // res.write("<h1>Lattitude is"+latt+" and longitude is "+long+" </h1>");
//    // res.send();
//    });
//    });
});


app.post("/",function(req,res)
{
    // const apiK="63c380816d3a4055881e62130a5e3d44";
    // const cat="accomodation";
    // const url=" https://api.geoapify.com/v2/places?categories="+cat+"&filter=circle:"+long+","+latt+",25000&apiKey="+apiK;

    // https.get(url,function(response)
    // {
    // //console.log(response.statusCode);
    // response.on("data",function(data)
    // {
    //     const hotels=JSON.parse(data);
    //     const hot1=hotels.features[0].properties.name;
    //     const hot2=hotels.features[1].properties.name;

    //     res.write("<h1>The hotels available are : </h1><br> <ul><li>"+hot1+"</li><li>"+hot2+"</li></ul>");
    //     res.send();
    // });

//     const query=req.body.cityName;
//     const apiKey="1572be061e202bcc1cae43c48a8aabfd";
//     const unit="metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

// https.get(url,function(response)
// {
// //console.log(response.statusCode);
// response.on("data",function(data)
// {
// const weatherData=JSON.parse(data);
// const long=weatherData.coord.lon;
// console.log(long);
// const latt=weatherData.coord.lat;
// console.log(latt);
// // res.write("<h1>Lattitude is"+latt+" and longitude is "+long+" </h1>");
// // res.send();
// });
// });
    const lon=req.body.long;
    const lat=req.body.latt
    const apiK="63c380816d3a4055881e62130a5e3d44";
    const cat="accomodation";
    const urll=" https://api.geoapify.com/v2/places?categories="+cat+"&filter=circle:"+lon+","+lat+",25000&apiKey="+apiK;

    https.get(urll,function(response)
    {
    response.on("data",function(data)
    {
        console.log(data);
        //const hotels=JSON.parse(data);
        //const hot1=hotels.features[0].properties.name;
        //const hot2=hotels.features[1].properties.name;

        //res.write("<h1>The hotels available are : </h1><br> <ul><li>"+hot1+"</li><li>"+hot2+"</li></ul>");
        //res.send();
    });

});



});
app.listen(3000,function()
{
    console.log("Server started on port 3000");
});