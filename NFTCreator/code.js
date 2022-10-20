console.log("hello")
window.onload = function () 

{
//Working on HEAD
var avatarhead = new Image();
var avatarheadnum = Math.floor(Math.random()*6)+1;

var headname ="head"+ avatarheadnum + ".png";
avatarhead.src = headname;

//Working on GLASSES
var avatarglasses = new Image();
var glassnum= Math.floor(Math.random()*4)+1;
var glassname = "glasses"+glassnum+".png";
avatarglasses.src = glassname;

//WORKING ON BODY
var avatarbody = new Image();
var bodynum = Math.floor(Math.random()*5)+1;
var bodyname = "body"+bodynum+".png";
console.log(bodynum)
avatarbody.src = bodyname;

//WORKING ON ACCESSORY
var avataraccessory = new Image();
var accessorynum = Math.floor(Math.random()*4)+1;
var assname = "accessory"+accessorynum+".png";
avataraccessory.src = assname;

avatarhead.onload = function()

{
    buildavatar();
}

avatarglasses.onload = function()

{
    buildavatar();
}

avatarbody.onload = function()

{
    buildavatar();
}

avataraccessory.onload = function()

{
    buildavatar();
}


function buildavatar() {

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height= 600;

ctx.drawImage(avatarhead, ((400-avatarhead.width)/2),0);
ctx.drawImage(avatarbody, ((400-avatarbody.width)/2),0);
ctx.drawImage(avatarglasses, ((400-avatarglasses.width)/2),0);
ctx.drawImage(avataraccessory, ((400-avataraccessory.width)/2),0);





}


}
