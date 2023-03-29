let input = prompt("Input value");
console.log(input);

if ((typeof(+input) == "number") && (!isNaN(+input))){
    if (input % 2 === 0) {
        console.log("чётное");
    } else {
        console.log("нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}












