setInterval(myTimer,1000);
    function myTimer()
    {
        const d = new Date();
        document.getElementById('date').innerHTML = d.toLocaleDateString("en-AU");
        document.getElementById('time').innerHTML = d.toLocaleTimeString();
        
    }
    var cal = {
    dataIn : null,
    dataOut : null,
    Id : null,
    sMth : 0,
    sYear : 0, 
    name : ["Shubham","vaishnavi","kartik"],
    surname : ["Survase","karale","naidu"],
    init : () => {
     let newDate = new Date();
     //cal.sDay = newDate.getDate();
     cal.sMth = newDate.getMonth();
     cal.sYear = newDate.getFullYear();
     cal.hour = newDate.getHours();
     cal.minutes = newDate.getMinutes();
     cal.seconds = newDate.getSeconds();
     cal.date = document.getElementById('date');
     cal.txt = document.getElementById("txt");
     cal.sDay = 1;
    
     //Check In
          cal.dataIn = localStorage.getItem("cal-" + cal.sDay); 
        if (cal.dataIn == null) 
      {
        localStorage.setItem("cal-" + cal.sDay, "{}");
        cal.dataIn = {};
        console.log("cal.dataIn: null-",cal.dataIn);
      } 
      else 
      { 
        cal.dataIn = JSON.parse(cal.dataIn); 
        console.log("cal.dataIn: JSON-",cal.dataIn);
      }
     //checkout
     
         cal.dataOut = localStorage.getItem("cal-" + cal.sDay);  
      
      if (cal.dataOut == null) 
      {
        localStorage.setItem("cal-" + cal.sDay, "{}");
        cal.dataOut = {};
        console.log("cal.dataOut: null-",cal.dataOut);
      } 
      else 
      { 
        cal.dataOut = JSON.parse(cal.dataOut); 
        console.log("cal.dataOut: JSON-",cal.dataOut);
     } 
     },
     shubhamIn : () => {
        cal.dataIn[cal.name[0]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds + " Details: "+ cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataIn));
        console.log('Time:', cal.dataIn);
      },
      shubhamOut : () => {
        cal.dataOut[cal.surname[0]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds +" Details: "+ cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataOut));
        console.log('Time:', cal.dataOut);
      },
      vaishnaviIn : () => {
        cal.dataIn[cal.name[1]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds + " Details: "+ cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataIn));
        console.log('Time:', cal.dataIn);
      },
      vaishnaviOut : () => {
        cal.dataOut[cal.surname[1]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds +" Details: "+ cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataOut));
        console.log('Time:', cal.dataOut);
      },

      generateTable : () =>
      {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        let x = localStorage.getItem("cal-" + cal.sDay, cal.dataIn[cal.name[0]]);
        document.getElementById("show").innerHTML = x;
        console.log(x);

        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('body').appendChild(table);

        //1st heading with dates
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Employee";
        row_1.appendChild(heading_1);

        for(let i = 1; i< 5; i++)
        {   
            let dateData = document.createElement('th');
            dateData.innerHTML = i + "/" + cal.sMth + "/" + cal.sYear;
            row_1.appendChild(dateData);
            thead.appendChild(row_1);
        }

        for (let j = 0; j < cal.name.length; j++)
        {
            const row = document.createElement('tr');
            const cell = document.createElement("td");
            cell.innerHTML = cal.name[j];
            row.appendChild(cell);
            tbody.appendChild(row);
            for (let k = 1; k < 5; k++)
            {
                let userDetail = document.createElement("td");
               //userDetail.innerHTML = cal.dataIn[cal.name[j]];
               userDetail.innerHTML = localStorage.getItem("cal-"+k);
                row.appendChild(userDetail);
                tbody.appendChild(row);
            }
        }
},
resetTable : () =>{
  
    localStorage.clear() ;
}

 }
 window.onload = cal.init;
 
