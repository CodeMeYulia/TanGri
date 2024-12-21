const doing = document.querySelector(".before");
const timer = document.querySelector(".timer")
console.log(timer);

const date = new Date();
date.setHours(13, 56, 0, 0); // устанавливаем время на 12:00 мск
date.setDate(date.getDate()); // устанавливаем дату на сегодняшний день

function updateTimer() {
    const now = new Date();

    if (now >= date) {
        document.querySelector('.timer').style.display = 'block'; // делаем таймер видимым, если время запуска таймера наступило
        const seconds = Math.floor((now - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const formattedTime = `${String(days).padStart(2, '0')} дней ${String(hours % 24).padStart(2, '0')} часов ${String(minutes % 60).padStart(2, '0')} минут ${String(seconds % 60).padStart(2, '0')} секунд`;
        document.querySelector('.timer').innerText = formattedTime;
        doing.innerText = "женаты -"

    }
}

updateTimer();
setInterval(updateTimer, 1000);

