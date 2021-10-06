(function () {
  const second = 1000,
       minute = second * 60,
       hour = minute * 60,
       day = hour * 24;
  
  let today = new Date(); 
  today.setDate(today.getDate()+1);
  let birthday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0),
     countDown = new Date(birthday).getTime(),
     x = setInterval(function() {    
  
       let now = new Date().getTime(),
           distance = countDown - now;
  
       document.getElementById("days").innerText = "00",
         document.getElementById("hours").innerText = "00",
         document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
         document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
  
       //seconds
     }, 0)
  }());
