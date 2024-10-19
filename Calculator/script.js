const display = document.getElementById("display");
function inputondisplay(input) {
    // displaying the value on the imput 
    display.value = display.value + input;
    
}
function clearDisplay( ) {
    display.value = "";
   
}
function ondedelete() {
    display.value = display.value.slice(0, -1);
}
function calculate () {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
        
    } catch (error) {
        display.value = " Error ";
    }
}