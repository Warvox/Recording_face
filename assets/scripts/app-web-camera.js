//Вывод текущей даты

function showCurrentDate() {
  let currentDate = new Date();
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return `${currentDay} ${month[currentMonth]} ${currentYear}г.`;
}

document.querySelector(".data").innerHTML = showCurrentDate();

//Выпадающее карточка пользователя

// Вывод видеопотока в div

if (navigator.webkitGetUserMedia != null) {
  var options = {
    video: true
  };

  // Запрашиваем доступ к веб-камере
  navigator.webkitGetUserMedia(
    options,
    function (stream) {
      // Получаем тег video
      var video = document.getElementById("video-player");
      // Включаем поток в тег video
      video.srcObject = stream;
    },
    function (e) {
      console.log("произошла ошибка");
    }
  );
}