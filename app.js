

            // CHAPTER NO 01

// QUESTION NO 01
alert("Error! Please enter a valid password");

// QUESTION NO 02
alert("Welcome to JS land... \n Happy coding");

// QUESTION NO 03
alert("Welcome to JS land... ");

// QUESTION NO 04
alert("Happy coding");

// QUESTION NO 05
alert("Hello... I can run JS through my web browsers console");


            // CHAPTER NO 02

// QUESTION NO 01
var Name = "Muhammad Faizan" ;
var quote = "A Software Developer" ;

// QUESTION NO 02
var message = "Hello World" ;

// QUESTION NO 03
alert(message);

// QUESTION NO 04
var age = 15 ;
var dialog = "Certified Mobile Application Development" ;

console.log(Name);
console.log(age);
console.log(dialog);
console.log(Name + "\n" + quote );

// QUESTION NO 05
alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// QUESTION NO 06
var email = "mfmqadri11@gmail.com"
console.log("My email address is " + email)

// QUESTION NO 07
console.log("Iam trying to learn from a book A smarter way to learn javascript");

// QUESTION  NO 08
var art = "▬▬▬▬▬▬▬▬▬ ஜ۩۞۩ஜ ▬▬▬▬▬▬▬▬▬" ;
console.log(art);
alert(art);


              // CHAPTER NO 03

// QUESTION NO 01
var age = 18 ;
console.log("My age is " + age );

// QUESTION NO 02
var site_visited = 14 ;
console.log("I have visited this site " + site_visited + " times");

//QUESTION NO 03
var birth_year = 2009 ;
console.log("My birth year is " + birth_year );

//QUESTION NO 04 
var visitorName = "Abdul Haseeb"
var product = "laptop"
var site = "Sigma Computers"

console.log(visitorName + " ordered a " + product + " on " + site );



             // CHAPTER NO 04
             
console.log("Rules for code JS variables");
console.log("Varible names can only contain alphabets, numbers, $, and _  (For example : $my_1stVariable)");
console.log("Variables are case sensitive");             

var isAdmin = true ;
var isUserLogin = false ;  

console.log(isAdmin) ;


             //CHAPTER NO 05

//QUESTION NO 01

var n1 = 3;
var n2 = 5;
var sum = n1 + n2
console.log("The sum of " + n1 + " and " + n2 + " is "+ sum); 

//QUESTON NO 02

var substraction = n2 - n1;
console.log("The difference of " + n1 + " and " + n2 + " is "+ substraction);


var multiplication = n1 * n2;
console.log("The product of " + n1 + " and " + n2 + " is "+ multiplication);


var division = 3 / 5;
console.log("The dividend of " + n1 + " and " + n2 + " is "+ division);


var modulus = 5%3 ;
console.log("The reminder of " + n1 + " and " + n2 + " is "+ modulus);


//QUESTION NO 03

var variable 
var initial = 5;
var increasment = initial + 1;
var addition = increasment + 7;
var substraction = addition - 1;
var division = substraction % 3 ; 

console.log("The variable after decleration is " + variable);
console.log("The initial value is " + initial);
console.log("The value after increasement is " + increasment);
console.log("The value after adding 7 is " + addition);
console.log("The value after substract 1 is " + substraction);
console.log("The remainder after dividing by 3 is " + division);

//QUESTION NO 04

var costOfOneTicket = 600;
var persons = 5;
var totalCost = costOfOneTicket*persons


console.log("Total cost to buy " + persons + " tickets is PKR " + totalCost);

//QUESTION NO 05

console.log("Table of 4");
console.log("4 x 1 = " + 4*1);
console.log("4 x 2 = " + 4*2);
console.log("4 x 3 = " + 4*3);
console.log("4 x 4 = " + 4*4);
console.log("4 x 5 = " + 4*5);
console.log("4 x 6 = " + 4*6);
console.log("4 x 7 = " + 4*7);
console.log("4 x 8 = " + 4*8);
console.log("4 x 9 = " + 4*9);
console.log("4 x 10 = " + 4*10);

//QUESTION NO 06

var t_oC = 25;
var t_oF = (t_oC * (9/5)) +32 ;

console.log(t_oC + "oC is " + t_oF + "oF ");

var oF = 79;
var oC = ((oF - 32)*5/9);

console.log(oF + "oF is " + oC + "oC ");



              //CHAPTER NO 06 - 09

//QUESTION NO 01

var a = 10;
var a1 = ++a;
var a2 = a++;
var a3 = a--;
var a4 = --a;

console.log("The value of a is " + a );
console.log("The value of ++a is " + a1 );
console.log("The value of a++ is " + a2 );
console.log("The value of a-- is " + a3 );
console.log("The value of --a is " + a4 );

//  QUESTION NO 02

var a = 2;
var b = 1;

var task1 = --a;
var task2 = --a - --b;
var task3 = --a - --b + b++;
var task4 = --a - --b + b++ + b--;

console.log(task1);
console.log(task2);
console.log(task3);
console.log("The result is " + task4);

//QUESTION NO 03

var spec = prompt( "Assalam-O-Alaikum, Enter Your Name" );

//QUESTION NO 04

var n = prompt("Enter Your Favorite Number" , "5");

if(prompt){
   console.log(n + " x 1 = " + n*1);
   console.log(n + " x 2 = " + n*2);
   console.log(n + " x 3 = " + n*3);
   console.log(n + " x 4 = " + n*4);
   console.log(n + " x 5 = " + n*5);
   console.log(n + " x 6 = " + n*6);
   console.log(n + " x 7 = " + n*7);
   console.log(n + " x 8 = " + n*8);
   console.log(n + " x 9 = " + n*9);
   console.log(n + " x 10 = "+ n*10);
}


//QUESTION NO 05

var subject1 = prompt("Enter Your First Subject");
var subject2 = prompt("Enter Your Second Subject");
var subject3 = prompt("...And Third Subject");


var marks1 = prompt("Enter Your First subject Marks");
var marks2 = prompt("Enter Your Second subject Marks");
var marks3 = prompt("Enter Your Third subject Marks");

var eachSubjectMarks = 100;
var Percentage1 = (marks1 / eachSubjectMarks) * 100 ;
var Percentage2 = (marks2 / eachSubjectMarks) * 100 ;
var Percentage3 = (marks3 / eachSubjectMarks) * 100 ;



console.log("Subjects   Total Marks   Obtain Marks   Percentage \n" +
            subject1 + "   " + eachSubjectMarks + "   " + marks1 + "   " + Percentage1 + "%" + "\n" +
            subject2 + "   " + eachSubjectMarks + "   " + marks2 + "   " + Percentage2 + "%" + "\n" +
            subject3 + "   " + eachSubjectMarks + "   " + marks3 + "   " + Percentage3 + "%" + "\n" +
            "         " + eachSubjectMarks*3 + "       " + (marks1 + marks2 + marks3) + "      " + (Percentage1 + Percentage2 + Percentage3)/3 + "%"  

);

              //CHAPTER NO 09 - 11

//QUESTION NO 01

var city = prompt("Enter Your City");
var myCity = "Karachi";

if(city == myCity){
  alert("Welcome To The City OF Light");
}else{
   console.log(Welcome);
}

//QUESTION NO 02

var gender = prompt("Enter Your Gender" , "Male")
var g1 = "Male"
var g2 = "Female"

if(gender == g1){
  console.log("Good Morning Sir")
}else{
   console.log("Good Morning Ma'am")
}
