/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked"); 
    
    let buttonDiv = document.getElementById("random_num");
    buttonDiv.innerHtml = newText;
    
    console.log("Math.random is a built in function that returns " + 
            "a random number. Ex. " + randNum);
}

function button2Clicked() {
    console.log("Button 2 was clicked"); 
    
    let buttonDiv2 = document.getElementById("random_num");
    buttonDiv2.innerHtml = newText;
    
    console.log("Math.random is a built in function that returns " + 
            "a random number. Ex. " + randNum);
}