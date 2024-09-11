
let currentDate;

let hour, minute, sec;


function clock(interval){
   
    let timer = setInterval(() => {
        currentDate = new Date();
         hour = currentDate.getHours();
        minute = currentDate.getMinutes();
        sec = currentDate.getSeconds();
        console.log(`${hour}:${minute}:${sec}`);
        interval--;
        if (interval <= 0) {
            clearInterval(timer);
        }
    }, 1000);

   
    
}
    
    clock(25);
    
