document.addEventListener('DOMContentLoaded', () => {
     //Замена аватарки

    document.querySelector('.logo').setAttribute('src', '../img/unknown_person.png');
    // var ava = document.getElementById('logo');
    // ava.setAttribute('src','../img/Photo_person.jpg');

    //Замена ФИО и должности

    let post = ["unknown", "UNKNOWN"]
    document.getElementById("FIO").innerHTML = post[1];
    document.getElementById("post_person").innerHTML = `Должность: ${post[0]}`;
    document.getElementById("times_in_1").innerHTML = '00:00';


    Data = new Date();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    //document.getElementById("times_in_1").innerHTML = `${Hour}:${Minutes}`;
    document.getElementById('ellipse_in_1').style.display='none';
})

