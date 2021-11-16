// Basic of JavaScript

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
    //Your code goes here
//}

//Call method here with parameters

function replaceDogNames(alist,astring){
    // for loop to get all names 
    // replace DogNames indexes
    for(let i = 0; i < alist.length; i++){
         astring.includes(alist[i]) ? alist.splice(i, 'Matched'+alist[i]): console.log("No Matches")
    }
}

console.log(replaceDogNames(dog_names,dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//function replaceEvens(arr){
    //code goes here
//}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]