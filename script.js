// changing color of rows based on time
var work24TimeArray = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800"];
var work24TimeWithColon = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

function display(){
    for(let i = 0; i < work24TimeArray.length-1; i++){
        if(moment().isBefore(moment(moment().format("YYYY[-]MM[-]DD "+ work24TimeWithColon[i])))){
            $("#t"+work24TimeArray[i]).removeClass().addClass("future");
        }else{
            if(moment().isSameOrAfter(moment(moment().format("YYYY[-]MM[-]DD "+ work24TimeWithColon[i+1])))){
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
display();
$("#currentDay").text(moment().format('LLLL'))

setInterval(function(){
    $("#currentDay").text(moment().format('LLLL'));
}, 1000);

setInterval(function(){
    display();
}, 5000);