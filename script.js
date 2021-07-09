const container_box = document.querySelector('.container_box');
const bookedSeats = document.querySelector('.bookedSeats');
const remainingSeats = document.querySelector('.remainingSeats');


var bookedSeatsCount = 0;
var remainingSeatsCount = 36;

for(let i=0; i<36; i++)
{
    var box = document.createElement("div");
    box.className = "seat_box";
    container_box.appendChild(box);
}
const seat_box = document.querySelectorAll('.seat_box');
seat_box.forEach((box) => {
    box.addEventListener('click', (e)=>{
        if(e.target.classList.length == 1)
        {
            bookedSeatsCount+=1;
            remainingSeatsCount-=1;  
            e.target.classList.add("seat_booked");
        }
        else{
            bookedSeatsCount-=1;
            remainingSeatsCount+=1; 
            e.target.classList.remove("seat_booked"); 
        }
            bookedSeats.innerHTML = `Booked Seats: ${bookedSeatsCount}`
            remainingSeats.innerHTML = `Available Seats: ${remainingSeatsCount}`
    })
});

