//         console.log("işlem yapılmadı")
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Pazar";
//         break


//     case 1:
//         day = "Pazartesi";
//         break


//     case 2:
//         day = "Salı";
//         break

//     case 3:
//         day = "Çarşamba";
//         break


//     case 4:
//         day = "Perşembe";
//         break

//     case 5:
//         day = "Cuma";
//         break

//     case 6:
//         day = "Cumartesi";
//         break

// }

// console.log(day);

let hour = 16;

switch (true) {

    case (hour >= 6 && hour <= 12):
        console.log("Günaydın");
        break

    case (hour >= 13 && hour <= 17):
        console.log("İyi günler");
        break

    case (hour >= 18 && hour <= 24):
        console.log("İyi akşamlar");
        break

    default:
        console.log("Yanlış Zaman!")

}