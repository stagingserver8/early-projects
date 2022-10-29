





//window.onload = function () 

//{


//Working on HEAD
var avatarhead = new Image();
var avatarheadnum = Math.floor(Math.random()*33)+1;
var headname ="head"+ avatarheadnum + ".png";
avatarhead.src = headname;

//Working on Background

var avatarback = new Image();
var avatarbacknum = Math.floor(Math.random()*2)+1;
var backname ="back"+ avatarbacknum+ ".png";
avatarback.src = backname;

//Working on GLASSES
var avatarglasses = new Image();
var glassnum= Math.floor(Math.random()*4)+1;
var glassname = "glasses"+glassnum+".png";
avatarglasses.src = glassname;

//WORKING ON BODY
var avatarbody = new Image();
var bodynum = Math.floor(Math.random()*5)+1;
var bodyname = "body"+bodynum+".png";
avatarbody.src = bodyname;

//WORKING ON ACCESSORY
var avataraccessory = new Image();
var accessorynum = Math.floor(Math.random()*28)+1;
var assname = "accessory"+accessorynum+".png";
avataraccessory.src = assname;

avatarback.onload = function()

{
    buildavatar();
}


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
canvas.width = 400;
canvas.height= 500;

ctx.drawImage(avatarback, ((400-avatarback.width)/2),0);
ctx.drawImage(avatarhead, ((400-avatarhead.width)/2),0);
ctx.drawImage(avatarbody, ((400-avatarbody.width)/2),0);
ctx.drawImage(avatarglasses, ((400-avatarglasses.width)/2),0);
ctx.drawImage(avataraccessory, ((400-avataraccessory.width)/2),0);


}



//Matches Head 

function favTutorial() {  
    var mylist = document.getElementById("myList");  
    if (mylist.value =="Tulip") {
        avatarhead.src = "head1.png";
      }
    if (mylist.value =="Duck") {
        avatarhead.src = "head2.png";
      }

      if (mylist.value =="Bull") {
        avatarhead.src = "head3.png";
      }

      if (mylist.value =="Cow") {
        avatarhead.src = "head4.png";
      }

      if (mylist.value =="Chef") {
        avatarhead.src = "head5.png";
      }

      if (mylist.value =="Cage") {
        avatarhead.src = "head6.png";
      }

      if (mylist.value =="Sun") {
        avatarhead.src = "head7.png";
      }
      if (mylist.value =="Zebra") {
        avatarhead.src = "head8.png";
      }
      if (mylist.value =="Wine") {
        avatarhead.src = "head9.png";
      }
      if (mylist.value =="Whale") {
        avatarhead.src = "head10.png";
      }
      if (mylist.value =="Watch") {
        avatarhead.src = "head11.png";
      }
      if (mylist.value =="UFO") {
        avatarhead.src = "head12.png";
      }
      if (mylist.value =="Tooth") {
        avatarhead.src = "head13.png";
      }
      if (mylist.value =="Ghost") {
        avatarhead.src = "head14.png";
      }
      if (mylist.value =="Toaster") {
        avatarhead.src = "head15.png";
      }
      if (mylist.value =="Steak") {
        avatarhead.src = "head16.png";
      }

      if (mylist.value =="Punk") {
        avatarhead.src = "head17.png";
      }

      if (mylist.value =="Skateboard") {
        avatarhead.src = "head18.png";
      }

      if (mylist.value =="Sailboat") {
        avatarhead.src = "head19.png";
      }

      if (mylist.value =="Scorpion") {
        avatarhead.src = "head20.png";
      }

      if (mylist.value =="Robot") {
        avatarhead.src = "head21.png";
      }

      if (mylist.value =="Goat") {
        avatarhead.src = "head22.png";
      }

      if (mylist.value =="Plant") {
        avatarhead.src = "head23.png";
      }

      if (mylist.value =="Gold Coin") {
        avatarhead.src = "head24.png";
      }

      if (mylist.value =="Heart") {
        avatarhead.src = "head25.png";
      }

      if (mylist.value =="Egg") {
        avatarhead.src = "head26.png";
      }

      if (mylist.value =="Dog") {
        avatarhead.src = "head27.png";
      }

      if (mylist.value =="Camera") {
        avatarhead.src = "head28.png";
      }

      if (mylist.value =="Ape") {
        avatarhead.src = "head29.png";
      }

      if (mylist.value =="Bank") {
        avatarhead.src = "head30.png";
      }
      if (mylist.value =="Baseball") {
        avatarhead.src = "head31.png";
      }
      if (mylist.value =="Beer") {
        avatarhead.src = "head32.png";
      }
      if (mylist.value =="Burger") {
        avatarhead.src = "head33.png";
      }



    }  



//Matches Glasses
function favTutorialGlass() {  
        var mylist = document.getElementById("myListGlass");  
        if (mylist.value =="Orange") {
            avatarglasses.src = "glasses1.png";
            
          }
        if (mylist.value =="Green") {
            avatarglasses.src  = "glasses2.png";
          }
    
          if (mylist.value =="Red") {
            avatarglasses.src  = "glasses3.png";
          }

          if (mylist.value =="Funky") {
            avatarglasses.src  = "glasses4.png";
          }
          
    
        }  

        function favTutorialAccess() {  
            var mylist = document.getElementById("myListAccess");  
            if (mylist.value =="Clown Scarf") {
                avataraccessory.src = "accessory1.png";
             
              }
            if (mylist.value =="Small Bling") {
                avataraccessory.src  = "accessory2.png";
              }
        
              if (mylist.value =="Safety Vest") {
                avataraccessory.src  = "accessory3.png";
              }
    
              if (mylist.value =="Ying Yang") {
                avataraccessory.src = "accessory4.png";
              }
              
              if (mylist.value =="Black Tie") {
                avataraccessory.src = "accessory5.png";
              }

              if (mylist.value =="Sunset") {
                avataraccessory.src = "accessory6.png";
              }

              if (mylist.value =="Shrimp") {
                avataraccessory.src = "accessory7.png";
              }

              if (mylist.value =="Rainbow Steps") {
                avataraccessory.src = "accessory8.png";
              }

              if (mylist.value =="Pocket Pencil") {
                avataraccessory.src = "accessory9.png";
              }

              if (mylist.value =="Old Shirt") {
                avataraccessory.src = "accessory10.png";
              }

              if (mylist.value =="Lightbulb") {
                avataraccessory.src = "accessory11.png";
              }

              if (mylist.value =="Leaf") {
                avataraccessory.src = "accessory12.png";
              }

              if (mylist.value =="Infinity") {
                avataraccessory.src = "accessory13.png";
              }

              if (mylist.value =="Black Glasses") {
                avataraccessory.src = "accessory14.png";
              }

              if (mylist.value =="Fries") {
                avataraccessory.src = "accessory15.png";
              }

              if (mylist.value =="Eye") {
                avataraccessory.src = "accessory16.png";
              }

              if (mylist.value =="Eth") {
                avataraccessory.src = "accessory17.png";
              }

              if (mylist.value =="Ducky") {
                avataraccessory.src = "accessory18.png";
              }

              if (mylist.value =="Dollar Bling") {
                avataraccessory.src = "accessory19.png";
              }

              if (mylist.value =="Pride") {
                avataraccessory.src = "accessory20.png";
              }

              if (mylist.value =="Cow") {
                avataraccessory.src = "accessory21.png";
              }

              if (mylist.value =="Cloud") {
                avataraccessory.src = "accessory22.png";
              }

              if (mylist.value =="Checkers") {
                avataraccessory.src = "accessory23.png";
              }

              if (mylist.value =="Carrot") {
                avataraccessory.src = "accessory24.png";
              }

              if (mylist.value =="Sunset Tshirt") {
                avataraccessory.src = "accessory25.png";
              }

              if (mylist.value =="Love") {
                avataraccessory.src = "accessory27.png";
              }

              if (mylist.value =="Anchor") {
                avataraccessory.src = "accessory28.png";
              }
           
        
            }
        

function favTutorialBody() {  
var mylist = document.getElementById("myListBody");  

if (mylist.value =="Purple") {
 avatarbody.src = "body1.png";                 
}
if (mylist.value =="Red") {
avatarbody.src   = "body2.png";
}
                         
if (mylist.value =="Rust") {                
avatarbody.src   = "body3.png";                  
}
                     
if (mylist.value =="Blue") {               
  avatarbody.src = "body4.png";                
}
 
if (mylist.value =="Brown") {
avatarbody.src = "body5.png";
}

if (mylist.value =="Cold") {
  avatarbody.src = "body6.png";
  }
if (mylist.value =="White") {
    avatarbody.src = "body7.png";
    }

    if (mylist.value =="Yellow") {
      avatarbody.src = "body8.png";
      }
      if (mylist.value =="Peachy") {
        avatarbody.src = "body9.png";
        }
        if (mylist.value =="Hot Brown") {
          avatarbody.src = "body10.png";
          }
          if (mylist.value =="Pink") {
            avatarbody.src = "body11.png";
            }
            if (mylist.value =="Beige") {
              avatarbody.src = "body12.png";
              }


    }

    function favTutorialBack() {  
        var mylist = document.getElementById("myListBack");  
        if (mylist.value =="Warm") {
            avatarback.src = "back1.png";
          }
        if (mylist.value =="Cold") {
            avatarback.src = "back2.png";
          }
    
        }  


// Click the Save Button

function Save() {
 // console.log(canvas.toDataURL());
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}