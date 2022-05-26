// changing color of rows based on time
var work24TimeArray = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"];
console.log(moment().isBefore(moment(moment().format("YYYY[-]MM[-]DD "+ work24TimeArray[0]))));

function display(){
    for(let i = 0; i < work24TimeArray.length-1; i++){
        if(moment().isBefore(moment(moment().format("YYYY[-]MM[-]DD "+ work24TimeArray[i])))){
            $("#t"+work24TimeArray[i]).removeClass().addClass("future");
        }else{
            if(moment().isSameOrAfter(moment(moment().format("YYYY[-]MM[-]DD "+ work24TimeArray[i+1])))){
                console.log("works")
                $("#t"+work24TimeArray[i]).removeClass().addClass("past");
            }else{
                $("#t"+work24TimeArray[i]).removeClass().addClass("present");
            }
        }
    }
}

// saving input text into local storage and displaying text from local local storage
for(let i = 0; i < work24TimeArray.length-1; i++){
    $("#btn"+work24TimeArray[i]).click(function(){
        var text = $("#t"+work24TimeArray[i]).val();
        localStorage.setItem(work24TimeArray[i], text);
    });
}

for(let i = 0; i < localStorage.length; i++){
    $("#t"+localStorage.key(i)).text(localStorage.getItem(localStorage.key(i)));
}

// displaying the current day and time and updating colors
setInterval(function(){
    $("#currentDay").text(moment().format('LLLL'));
    display();
}, 1000);