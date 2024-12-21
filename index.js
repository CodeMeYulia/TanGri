const doing = document.querySelector(".before");
const timer = document.querySelector(".timer")
console.log(timer);

const date = new Date('2024-12-21T10:00:00+03:00');

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

