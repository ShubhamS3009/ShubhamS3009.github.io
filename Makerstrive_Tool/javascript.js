var users= [
    {user : 'user1', pass: 'pass1'},
    {user : 'user2', pass: 'pass2'},
    {user : 'user3', pass: 'pass3'},
    {user : 'admin', pass: 'admin'}
];
function login()
{

    //login page
    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    for (var i = 0; i < users.length; i++)
    {
        console.log('enter the loop');
    console.log("current user: ", i+1);
        if (username == users[i].user && password == users[i].pass)
        {
            window.location.href = 'user.html';
            alert("Login Successful");                                             
            break;
        }
        else if (i == (users.length-1))
        {
            alert('Login failed! Try Again');
            console.log(i,'-times wrong');
        }
        else if (username == users[3].user && password == users[3].pass)
        {
            console.log('admin login');
            window.location.href = 'admin.html';
            break;
        }
        else
        {
            console.log('else statement');
        }
    }
    var userId = i;
    console.log("current user: ", userId);
}
    //Date & Time Display
    setInterval(myTimer,1000);
    function myTimer()
    {
        const d = new Date();
        document.getElementById('date').innerHTML = d.toLocaleDateString();
        document.getElementById('time').innerHTML = d.toLocaleTimeString();
        
    }
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let todaysDate = newDate.getDate();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

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
 }
 }
 window.onload = cal.init;