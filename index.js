setInterval(() => {
    
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
a = new Date()
let time = addZero(a.getHours()) + ':' + addZero(a.getMinutes()) + ':' + addZero(a.getSeconds());
document.getElementById('time').innerHTML = time;
}, 1000);

a = new Date()
let date = a.toLocaleDateString();
document.getElementById('date').innerHTML = date;