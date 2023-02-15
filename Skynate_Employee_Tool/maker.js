setInterval(myTimer,1000);
    function myTimer()
    {
        const d = new Date();
        document.getElementById('date').innerHTML = d.toLocaleDateString("en-AU");
        document.getElementById('time').innerHTML = d.toLocaleTimeString();
        
    }

    var cal = {
    dataIn : null,
    dataIn2 : null,
    dataOut : null,
    sMth : 0,
    sYear : 0,
    name : ['Shubham','Vaishnavi','kartik'],
    sName : ['Survase','Karale','Naidu'],
    
    init : () => {
     let newDate = new Date();
     cal.sDay = newDate.getDate();
     cal.sMth = newDate.getMonth();
     cal.sYear = newDate.getFullYear();
     cal.hour = newDate.getHours();
     cal.minutes = newDate.getMinutes();
     cal.seconds = newDate.getSeconds();
     cal.date = document.getElementById('date');
     cal.txt = document.getElementById("txt");
    
     cal.storage();
    },
     //Check In Storage
     storage: () => {
        cal.sDay = 1;
        cal.dataIn = localStorage.getItem("cal-" + cal.sDay);
     console.log("user details : ", cal.dataIn);
     console.log("user details2 : ", cal.dataIn2);
     
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
    

    //Check Out Storage
     cal.dataOut = localStorage.getItem("cal-" + cal.sDay);
     console.log("user details : ", cal.dataOut);
     
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
        cal.dataIn[cal.name[0]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds +" Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataIn));
    },
    shubhamOut : () => {
        cal.dataOut[cal.sName[0]] = cal.hour + ":" + cal.minutes +  ":" + cal.seconds + " Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataOut));
    },
    vaishnaviIn : () => {
        cal.dataIn[cal.name[1]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds +" Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataIn));
    },
    vaishnaviOut : () => {
        cal.dataOut[cal.sName[1]] = cal.hour + ":" + cal.minutes +  ":" + cal.seconds + " Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataOut));
    },
    kartikIn : () => {
        cal.dataIn[cal.name[2]] = cal.hour + ":" + cal.minutes + ":" + cal.seconds +" Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataIn));
    },
    kartikOut : () => {
        cal.dataOut[cal.sName[2]] = cal.hour + ":" + cal.minutes +  ":" + cal.seconds + " Details: " + cal.txt.value;
        localStorage.setItem(`cal-${cal.sDay}`,JSON.stringify(cal.dataOut));
    },
    dataShow : () =>{
        console.log("table entered");
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        document.getElementById('body').appendChild(table);

        var row_1 = document.createElement('tr');
        var heading_1 = document.createElement('th');
        heading_1.innerHTML = 'User';
       // var heading_2 = document.createElement('th');
       // heading_2.innerHTML = 'Name';

        row_1.appendChild(heading_1);
       // row_1.appendChild(heading_2);
        thead.appendChild(row_1);

        for (let k = 1; k < 32; k++)
        {
            var dates = document.createElement('th');
                dates.innerHTML = k + "/" + cal.sMth + "/" + cal.sYear;

                row_1.appendChild(dates);
                thead.appendChild(row_1);
        }

        for (let i = 0; i < cal.name.length; i++ )
        {
            var row = document.createElement('tr');
            var cell = document.createElement('th');
            cell.innerHTML = cal.name[i];
            row.appendChild(cell);
            tbody.appendChild(row);

            for ( let j = 1; j < 32; j++)
            {
                cal.sDay = j;
                cal.dataIn = localStorage.getItem("cal-" + cal.sDay);
                if (cal.dataIn == null) 
                    {
                    localStorage.setItem("cal-" + cal.sDay, "{}");
                    cal.dataIn = {};
                    } 
                else 
                    { 
                    cal.dataIn = JSON.parse(cal.dataIn);                    
                    } 

                cal.dataOut = localStorage.getItem("cal-" + cal.sDay);
                if (cal.dataOut == null) 
                    {
                    localStorage.setItem("cal-" + cal.sDay, "{}");
                    cal.dataOut = {};
                    } 
                    else 
                    { 
                    cal.dataOut = JSON.parse(cal.dataOut); 
                    }  

                var userDetail = document.createElement('td');
                if ( cal.dataIn[cal.name[i]] !== undefined)
                    {
                        var detail = cal.dataIn[cal.name[i]] + "||" + cal.dataOut[cal.sName[i]];
                        
                        userDetail.innerHTML = detail;              
                        row.appendChild(userDetail);
                        table.appendChild(tbody);
                    }
                else if (cal.dataIn[cal.name[i]] == undefined)
                    {   
                        console.log("checker: ", cal.dataIn);
                        cal.dataIn[cal.name[i]] = "";
                        cal.dataOut[cal.sName[i]] = "";
                        var detail = cal.dataIn[cal.name[i]] + cal.dataOut[cal.sName[i]];
                        userDetail.innerHTML = detail;
                        row.appendChild(userDetail);
                        table.appendChild(tbody);
                    }
            }           
        }
    },
    reset : () =>{
        localStorage.clear();
        console.log("Storage Cleared");
        console.log("data: ",cal.dataIn[cal.name[0]]);
    }
}
    window.onload = cal.init;