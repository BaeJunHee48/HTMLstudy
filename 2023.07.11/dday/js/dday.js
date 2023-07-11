var now = new Date();
var firtDay = new Date("2018-03-23"); // 처음 만난 날의 날짜 정보
var toNow = now.getTime(); //오늘 날짜를 밀리초로 바뀝니다.
var toFirst = firtDay.getTime(); // 처음 만난날을 밀리초로 바뀝니다.
var passedTime = toNow - toFirst; // 처음 만난날과 오늘날짜를 뺀 날짜(밀리초)
var passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 밀리초를 일로 변환한후 반올림합니다.

document.querySelector("#accent").innerHTML = `${passedDay + 1} 일`;

clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);
clacDate(1000);

function clacDate(days) {
    var future = toFirst + days * (24 * 60 * 60 * 1000); //처음 만난날에 밀리초 바꾼 100일을 더합니다.
    var someday = new Date(future); // future 값을 사용해서 Date 객체의 인스턴스를 만듭니다.
    var year = someday.getFullYear(); // "연도"를 가져와서 year변수에 저장합니다.
    var month = someday.getMonth() + 1; // "월"을 가져와서 month변수에 저장합니다.
    var date = someday.getDate(); // "일"을 자겨와서 date변수에 저장합니다.

    document.querySelector("#date" + days).innerText = `${year} 년 ${month} 월 ${date} 일`;
}
