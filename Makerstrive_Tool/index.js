   var cal = {
   data : null,
   sMth : 0,
   sYear : 0,
   
   init : () => {
    let newDate = new Date();
    cal.sDay = newDate.getDate();
    cal.sMth = newDate.getMonth();
    cal.hour = newDate.getHours();
    cal.minutes = newDate.getMinutes();
    cal.date = document.getElementById('date');
    
    cal.data = localStorage.getItem("cal-" + cal.sDay + "-" + cal.sMth);
    
    if (cal.data == null) 
    {
      localStorage.setItem("cal-" + cal.sDay + "-" + cal.sMth, "{}");
      cal.data = {};
      console.log("cal.data: null-",cal.data);
    } 
    else 
    { 
      cal.data = JSON.parse(cal.data); 
      console.log("cal.data: JSON-",cal.data);
    } 
},
checkIn : () => {
  cal.data[cal.sDay] = cal.hour + ":" + cal.minutes;
  localStorage.setItem('cal-${cal.sDay}-${cal.sMth}',JSON.stringify(cal.data));
  console.log('Time:', cal.data);
  document.getElementById('show').innerHTML = cal.data[cal.sDay];
  return false;
}
}
window.onload = cal.init;
