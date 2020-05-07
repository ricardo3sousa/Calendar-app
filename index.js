let today = new Date();
let todayMonth = today.getMonth();
let todayYear = today.getFullYear();
let day = today.getDate();
let weekD = today.getDay();


let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();


let table = document.getElementById('table-body');
let monthDisplay = document.getElementById('month');
let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');


let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthsF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


table.addEventListener('click', function (event) {
    let element = event.target;
    let dayy = element.attributes.day.value;
    
    let novo = new Date(year, month, dayy).getDay();
    let novoWeek = weekDays[novo];
    element.classList.toggle('mark');
    
    title.innerHTML = dayy + ' ' + novoWeek ;
    subtitle.innerHTML = monthsF[month] + ', ' + year;
})



function printWeek() {
    let row = document.createElement('tr');
    table.appendChild(row)
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for (let i = 0; i < week.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = week[i];
        td.style.fontSize = '12px';
        td.style.paddingBottom = '12px';
        row.appendChild(td);
    }
}


function renderCal(yyyy, mm) {
    
    title.innerHTML = day + ' ' + weekDays[weekD];
    subtitle.innerHTML = monthsF[month] + ' ' + yyyy;
    
    let count = 1;
    table.innerHTML = '';
    printWeek();

    let firstDay = new Date(yyyy, mm).getDay();
    let numDays = 32 - new Date(yyyy, mm, 32).getDate();
    
    monthDisplay.innerHTML = months[mm];
    

    if (mm == todayMonth && yyyy == todayYear) {
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let c = 0; c < 7; c++) {
                if (i === 0 && c < firstDay) {
                    let td = document.createElement('td');
                    td.innerHTML = ' ';
                    td.style.fontSize = '18px';
                    row.appendChild(td);
                } else if (count > numDays) {
                    break;
                } else {
                    if (count == day) {
                        let td = document.createElement('td');
                        td.innerHTML = count;
                        row.append(td);
                        td.setAttribute('day', count);
                        td.className = 'today';
                        td.style.fontSize = '18px';
                        count++;
                    } else {
                        let td = document.createElement('td');
                        td.innerHTML = count;
                        td.className = 'item';
                        td.setAttribute('day', count);
                        td.style.fontSize = '18px';
                        row.append(td);
                        count++;
                    }

                }
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let c = 0; c < 7; c++) {
                if (i === 0 && c < firstDay) {
                    let td = document.createElement('td');
                    td.innerHTML = ' ';
                    td.style.fontSize = '18px';
                    row.appendChild(td);
                } else if (count > numDays) {
                    break;
                } else {
                    let td = document.createElement('td');
                    td.innerHTML = count;
                    row.append(td);
                    td.className = 'item';
                    td.setAttribute('day', count);
                    td.style.fontSize = '18px';
                    count++;
                }

            }
        }
    }
}



function changeMonth(dir) {
    if (month == 0) {
        if (dir == 'prev') {
            month = 12;
            year -= 1;
            renderCal(year, month);
        }
        if (dir == 'next') {
            month += 1;
            renderCal(year, month);
        }
    }
    if (month == 11) {
        if (dir == 'prev') {
            month -= 1;
            renderCal(year, month);
        }
        if (dir == 'next') {
            month = 0;
            year += 1;
            renderCal(year, month);
        }
    } else {
        if (dir == 'prev') {
            month -= 1;
            renderCal(year, month);
        }
        if (dir == 'next') {
            month += 1;
            renderCal(year, month);
        }
    }
}

function changeYear(dir) {
    if (dir == 'prev') {
        year -= 1;
        renderCal(year, month);
    }
    if (dir == 'next') {
        year += 1;
        renderCal(year, month);
    }
}



window.onload = renderCal(year, month);