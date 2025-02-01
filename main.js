const items = document.querySelectorAll(".countdown__item > h3")

// Начинаем дату отсчета
let countdownDate = new Date(2024, 2, 19, 14, 45, 0).getTime();

function getCountdownTime() {
	// текущее время
	let nowtime = new Date().getTime();

	// разница во времени
	let distance = countdownDate - nowtime;

	// переменные в мс
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	// подсчет дня дней , часов и т.д

	let days = Math.floor(distance / oneDay) * -1;
	let hours = Math.floor((distance % oneDay) / oneHour) * -1;
	let minutes = Math.floor((distance % oneHour) / oneMinute) * -1;
	let seconds = Math.floor((distance % oneMinute) / 1000) * -1;
	console.log(days,hours,minutes,seconds)

	// создаем массив с переменными
	const values = [days, hours , minutes , seconds];

	// добавляем значение переменных на страницу
	items.forEach(function(item, index) {
		item.textContent = (values[index])
	})
}

let countdown = setInterval(getCountdownTime,1000);

getCountdownTime();