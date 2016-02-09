function do_counter() {
    $('#counter2').countdown({
            startTime: "9",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits.png"
        });
    
        $('#counter3').countdown({
            startTime: "60",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits_transparent.png"
        });
    
        $('#counter4').countdown({
            startTime: "1:1",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits_inverted.png"
        });
    
        $('#counter5').countdown({
            startTime: "11:11",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2.png"
        });
    
        $('#counter6').countdown({
            startTime: "1:1:1",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_red.png"
        });
    
        $('#counter7').countdown({
            startTime: "11:11:11",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_blue.png"
        });
    
        $('#counter8').countdown({
            startTime: "1:1:1:1",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_green.png"
        });
    
        $('#counter9').countdown({
            startTime: "11:11:11:11",
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_yellow.png"
        });
    
        var _date = new Date();
        _date.setMonth(1);
        _date.setDate(9);
        _date.setHours(0);
        _date.setMinutes(0);
        _date.setSeconds(0);
        $('#counter10').countdown({
            startTime: _date,
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_purple.png"
        });
    
        var _date = new Date();
        _date.setMonth(0);
        _date.setDate(1);
        _date.setHours(0);
        _date.setMinutes(0);
        _date.setSeconds(0);
        $('#counter11').countdown({
            startTime: _date,
            stepTime: 1,
            digitImages: 6,
            digitWidth: 53,
            digitHeight: 77,
            image: "img/digits2_orange.png"
        });
};

var today:Date = new Date();
var currentYear = today.getFullYear();
var currentTime = today.getTime();


var targetDate:Date = new Date(2014,11,1);
var targetTime = targetDate.getTime();


var timeLeft = targetTime - currentTime;

var sec = Math.floor(timeLeft/1000);
var min = Math.floor(sec/60);
var hours = Math.floor(min/60);
var days = Math.floor(hours/24);


var counter:String = days + ":" + hours + ":" + min + ":" + sec;

console.log(counter);