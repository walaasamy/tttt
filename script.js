
// JavaScript لعرض السهم عند التمرير
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // يظهر السهم بعد التمرير 300 بكسل
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block'; // عرض السهم
    } else {
        scrollToTopBtn.style.display = 'none'; // إخفاء السهم
    }
});

// عند النقر على السهم، العودة إلى أعلى الصفحة
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // منع التصرف الافتراضي للرابط
    window.scrollTo({ top: 0, behavior: 'smooth' }); // التمرير بسلاسة إلى الأعلى
});



const flights = [
    { flightNumber: 'AA123', from: 'Cairo', to: 'Dubai', departure: '10:00 AM', arrival: '2:00 PM' },
    { flightNumber: 'BA456', from: 'Riyadh', to: 'London', departure: '1:00 PM', arrival: '5:00 PM' },
    { flightNumber: 'QR789', from: 'Doha', to: 'New York', departure: '3:00 PM', arrival: '11:00 PM' },
    { flightNumber: 'EK101', from: 'Dubai', to: 'Sydney', departure: '8:00 AM', arrival: '8:00 PM' },
    { flightNumber: 'LH202', from: 'Frankfurt', to: 'Tokyo', departure: '9:00 AM', arrival: '11:00 PM' }
];

const flightSchedule = document.getElementById('flight-schedule');

const locations = ['Cairo', 'Dubai', 'Riyadh', 'London', 'Doha', 'New York', 'Sydney', 'Frankfurt', 'Tokyo', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Moscow', 'Beijing', 'Seoul', 'Bangkok', 'Singapore', 'Los Angeles', 'Chicago'];

function getRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
}

function getRandomLocation() {
    return locations[Math.floor(Math.random() * locations.length)];
}

function updateFlightTimes() {
    flightSchedule.innerHTML = '';
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${getRandomLocation()}</td>
            <td>${getRandomLocation()}</td>
            <td>${getRandomTime()}</td>
            <td>${getRandomTime()}</td>
        `;
        flightSchedule.appendChild(row);
    });
}
setInterval(updateFlightTimes, 3000); // تحديث كل 3 ثواني
updateFlightTimes();



function toggleText(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    const isExpanded = moreText.style.display === 'inline';

    moreText.style.display = isExpanded ? 'none' : 'inline';
    button.textContent = isExpanded ? "Read More" : "Read Less";
}


$(document).ready(function() {
    $('#booking-form').on('submit', function(event) {
        event.preventDefault();

    
        let name = $('#name').val();
        let phone = $('#phone').val();
        let persons = $('#persons').val();
        let date = $('#date').val();
        let ticketType = $('#ticket-type').val();

        
        $('#name, #phone, #persons, #date, #ticket-type').css('border', '');

        let isValid = true;

        if (!name) {
            $('#name').css('border', '2px solid red');
            isValid = false;
        }
        if (!phone) {
            $('#phone').css('border', '2px solid red');
            isValid = false;
        }
        if (!persons) {
            $('#persons').css('border', '2px solid red');
            isValid = false;
        }
        if (!date) {
            $('#date').css('border', '2px solid red');
            isValid = false;
        }
        if (!ticketType) {
            $('#ticket-type').css('border', '2px solid red');
            isValid = false;
        }

        if (!isValid) {
            alert('يرجى ملء الحقول الفارغة.');
        } else {
            alert('تم التسجيل بنجاح!');

            let row = `<tr>
                        <td>${name}</td>
                        <td>${phone}</td>
                        <td>${persons}</td>
                        <td>${date}</td>
                        <td>${ticketType}</td>
                       </tr>`;

            $('#booking-details tbody').append(row);
            $('#booking-details').fadeIn();
        }
    });
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 
    slideToClickedSlide: true, 
    slidesPerGroup: 1, 
});


document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        
        if (this.nextElementSibling.style.display === 'none' || this.nextElementSibling.style.display === '') {
            this.nextElementSibling.style.display = 'block';
        } else {
            this.nextElementSibling.style.display = 'none';
        }
    });
});






