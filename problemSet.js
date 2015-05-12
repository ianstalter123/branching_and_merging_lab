
function frameYourPhrase(phrase) {

var arr = phrase.split(" ");


var max = 0;

var x = phrase.length;

for (var j = 0; j < arr.length; j++)
{

if (arr[j].length > max)
{
  max = arr[j].length;
}
}


var str = "";
   /*
   test
     TODO: Write a function that takes a string like "Hello World!" and
     returns the string as a framed phrase like:
     **********
     * Hello  *
     * World! *
     **********


     Pay attention to the spacing.  The box should be a square.  In other words,
     the longest word in the phrase will dictate the size of the box.
   */  

for(var k = 0; k < arr.length; k++)
{
   for(var i = 0; i<max; i++)
   {
    str+= "*";
   }

str+="\n";
   str+=arr[k] + "\n";
   for(var i = 0; i<max; i++)
   {
    str+= "*";
   }
 }

return str;
}

function isPrime(x) {
    /*
      TODO: Write a functiont that decides if the integer number provided
      is prime.  In other words, the number is only divisible by 1 and
      itself.  Example of primes are 2,3,5,7,11,13,17,etc.

      If this is too challenging, hard code the first 15 prime numbers and
      return true if the number is in the list.
    */

     var y = 2; 
     prime = true; 
     while (y < x)
        { 
          if (x % y === 0) 
              { prime = false; } 
            y++; 
        } 
        return prime;
}


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

