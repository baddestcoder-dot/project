alert("Hello World");
    document.getElementById("demo").innerHTML = 68-7 
    var num=50;
    var num2= 2022;
    var num="Uchechukwu"
   var name
   var name="Uchechukwu Joy";
    document.write("Hello "+ name);
    window.alert("Hello "+ name);
    document.write("Hello "+ name);
   var name="Cj";
    var date = "26th 1998"; 
    document.write("Hello " + name + " your date of birth " + date)

    for(var i=0; i<100;i++){
       document.write("<br />" + i);
    }
 for(var i=1; i<10; i++){
   document.write("<br /> Number " +i)
}
for(var i="a"; i<"z"; i++){
   document.write("<br /> " +i);
}
    var gender ='M'
    var age =20;
    if(age >=15 || gender=='M'){
        document.write("Come In!!!");
    }
else{
    document.write("You are either less than 15 or female");
}
var score =0;
if(score >=70){
    document.write("Grade A");
}
else if(score >=60){
    document.write("Grade B");
}
else if(score >=50){
    document.write("Grade C");
}
else if(score >=40){
    document.write("Grade D");
}
else if(score >=30){
    document.write("Grade E");
}
else{
    document.write("Grade F");
}

var age =0;
if(age >=25){
    document.write("Out of School");
}
else if(age >=18){
    document.write("Tertiary/College");
}
else if(age >=12){
    document.write("Secondary/High School");
}
else if(age >=5){
    document.write("Primary");
}
else if(age >=3){
    document.write("Pre-Nursery");
}
else if(age >=1){
    document.write("Pre-Creche");
}
else{
    document.write("Wrong Input");
}
 var day = 8;
switch(day){
    case 1:
        document.write("First Day of the week is Sunday!!! ");
        break;
        case 2:
        document.write("Second Day of the Week is Monday!!! ");
        break;
        case 3:
        document.write("Third Day of the Week is Monday!!! ");    
        break;
        case 4:
        document.write("Fourth Day of the Week is Monday!!! ");    
        break;
        case 5:
        document.write("Fifth Day of the Week is Monday!!! ");    
        break;
        case 6:
        document.write("Sixth Day of the Week is Monday!!! ");    
        break;
        case 7:
        document.write("Seventh Day of the Week is Monday!!! ");    
        break;
        default:
        document.write("Wrong Input ");    
        break;
}

function array() {

var names = ['Izuchukwu', 'Mmesoma', 'Emmanuel 1', 'Nonso', 'Daniel', 'Chinonye', 'Echezona', 'Valentine', 'Gerald']
for (var index=0; index<names.length;index++){
    document.write("<br>" + names[index]);
}
}

var num=0;
while(num<names.length){
   document.write("<br>" + names[num]);
   num++
}


function objects(){
    var car = {
        name: 'Lexus',
        model: '300',
        color: 'White',
        geartype: 'Automatic'
    };
    document.write("Vehicle Name: " +car.name);
    document.write("<br> Vehicle model: " +car["model"]);
}


function array(){

    var names =['Aguata', 'Dunukofia', 'Achina', 'Abagana', 'Njikoka']
    var index=0; 
    for (; index<names.length;index++){
      document.write("<br>" +names[index]);
    }
}

var num=0;
while(num<names.length){
    document.write("<br>" + names[num]);
}

function objects(){
    var person = {
        height: '3feet',
        weight:  '500pounds',
        eyecolor: 'green',
        skin_color:  'orange',
        nationality: 'Nigeria'
    };
    document.write("<br> Person height: " +person.height);
    document.write("<br> person weight: " +person.weight);
    document.write("<br> Person eyecolor: " +person.eyecolor);
    document.write("<br> Person skin_color " +person.skin_color);
    document.write("<br> Person nationality: " +person.nationality);
}
function variables()






//assignment

function fiveTimesTables(){

    var result = 0['Aguata', 'Dunukofia', 'Achina', 'Abagana', 'Njikoka']
    var index=0; 
    for (; index<names.length;index++){
      document.write("<br>" +names[index]);
    }
}


var num=0;
while(num<names.length){
    document.write("<br>" + names[num]);
}


function fiveTimesTables(){
    for(var i=1; i<=12; i++ ){
        document.write("<br />" +i);
    }
}

//for(var i="a"; i<"z"; i++){
  //  document.write("<br /> " +i);
// }
//     var gender ='M'
//     var age =20;
//     if(age >=15 || gender=='M'){
//         document.write("Come In!!!");
//     }

 var day = 8;
switch(month){
    case 1:
        document.write("January!!! ");
        break;
        case 2:
        document.write("Feburary!!! ");
        break;
        case 3:
        document.write("March!!! ");    
        break;
        case 4:
        document.write("April!!! ");    
        break;
        case 5:
        document.write("May!!! ");    
        break;
        case 6:
        document.write("June!!! ");    
        break;
        case 7:
        document.write("July!!! ");    
        break;
        case 8:
        document.write("August!!! ");    
        break;
        case 9:
        document.write("September!!! ");    
        break;
        case 10:
        document.write("October!!! ");    
        break;
        case 11:
        document.write("November!!! ");    
        break;
        case 12:
        document.write("December!!! ");    
        break;
        default:
        document.write("Wrong Input ");    
        break;
}
