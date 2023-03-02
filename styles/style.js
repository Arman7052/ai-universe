
// adding date on card which will update after every 24 hour //


function formatDate(date) {
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString();
    return day + '/' + month + '/' + year;
}

function updateDate() {
    var dates = document.getElementsByClassName('date');
    for (var i = 0; i < dates.length; i++) {
        dates[i].innerHTML = '<i class="far fa-calendar-alt"></i> ' + formatDate(new Date());
    }
}

updateDate();
setInterval(updateDate, 24 * 60 * 60 * 1000);





