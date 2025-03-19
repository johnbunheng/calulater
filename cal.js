const display = document.getElementById('display');
function appendToDisplay(input){
    display.value +=input;
};
function clearDiplay(){
    display.value = "";
}
function calulater(){
    display.value = eval(display.value);
}