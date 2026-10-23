//                                Vazifa


// 01. Mahsulotning umumiy narxi
// Do‘konda bitta daftar narxi 5000 so‘m, ruchka narxi 3000 so‘m. Xaridor 4 ta daftar va 2 ta ruchka oladi.
// Vazifa: har bir mahsulotning umumiy narxini va xaridor to‘lashi kerak bo‘lgan jami summani hisoblang.
// Mavzular: o‘zgaruvchilar, sonli ma’lumotlar, arifmetik operatorlar.

// let d = 4;
// console.log(`Olgan daftarlar soni d = ${d}`);

// let dn = 5000;
// console.log(`Bitta daftar narxi dn = ${dn}`);

// let r = 2;
// console.log(`Olgan ruchkalar soni d = ${d}`);

// let rn = 3000;
// console.log(`Bitta ruchka narxi dn = ${dn}`);

// let dun = d * dn;
// console.log(`Olingan daftarning umumiy narxi = ${dun}`);

// let run = r * rn;
// console.log(`Olingan ruchkaning umumiy narxi = ${run}`);

// let us = dun + run;
// console.log(`Savdoning umumiy narxi = ${us}`);

//=================================================================================================

// 02. Yoshni tekshirish
// Foydalanuvchining yoshi 17 ga teng. Agar yoshi 18 yoki undan katta bo‘lsa, “Kirish mumkin”, aks holda
// “Kirish mumkin emas” deb chiqaring.
// Mavzular: taqqoslash operatorlari, if else.


// let yosh = prompt(`Yoshingizni kiriting`);

// if(yosh >= 18){
//     console.log(`Kirish mumkin`)
// }

// else{
//     console.log(`Kirish mumkin emas`)
// }

// ================================================================================================

// 03. Boolean() natijasini aniqlash
// Quyidagi qiymatlarni Boolean() orqali tekshirib, natijalarini konsolga chiqaring:
// 0
// "JavaScript"
// ""
// 25
// null
// undefined
// Mavzular: Boolean(), truthy va falsy qiymatlar.

// let qiymat = +prompt(`Qiymat kiriting`);

// if(Boolean(qiymat) == true){
//     console.log(`True`);
// }

// else{
//     console.log(`False`);
// }

// ================================================================================================

// 04. Imtihondan o‘tish
// O‘quvchining bali 76, davomat ko‘rsatkichi esa 85 foiz. Imtihondan o‘tish uchun ball kamida 60 va
// davomat kamida 80 foiz bo‘lishi kerak.
// Agar ikkala shart ham bajarilsa, “Imtihondan o‘tdi”, aks holda “Imtihondan o‘tmadi” deb chiqaring.
// Mavzular: if else, && operatori.

// let ball = prompt(`Ballingizni ni kiriting`)

// let davomat = prompt(`Davomatingizni kiriting`)

// if(ball >= 60 && davomat >= 80){
//     console.log(`Imtihondan o'tdi`)
// }

// else{
//     console.log(`Imtihondan o‘tmadi`)
// }

// ================================================================================================

// 05. Bepul yetkazib berish
// Buyurtma summasi 120000 so‘m, foydalanuvchining premium obunasi esa false.
// Agar buyurtma summasi kamida 100000 so‘m bo‘lsa yoki foydalanuvchi premium obunaga ega bo‘lsa,
// “Bepul yetkazib berish”, aks holda “Yetkazib berish pullik” deb chiqaring.
// Mavzular: if else, || operatori, boolean.

// let summa = +prompt(`Savdo summasini kiriting`);

// let premium = +prompt(`Premiun bor yoki yo'qligini kiritin ha = 1 , yo'q = 0`);

// if(summa >= 100000 ||  Boolean(premium) == true){
//     console.log(`Bepul yetkazib berish`)
// }

// else{
//     console.log(`Yetkazib berish pullik`)
// }

// ================================================================================================

// 06. Login va parol tekshiruvi
// Quyidagi ma’lumotlar berilgan:
// let login = "student";
// let password = "js12345";
// Login “student” va parol “js12345” bo‘lsa, “Tizimga xush kelibsiz”, aks holda “Login yoki parol xato” deb
// chiqaring.
// Mavzular: string, taqqoslash, &&, if else.

// let login = "student";
// let password = "js12345";

// let log = prompt(`Loginni kiriting`);
// let pass = prompt(`Parolni kiriting`);

// if(login === log  &&  pass === password){
//     console.log(`Tizimga xush kelibsiz`)
// }
// else{
//     console.log(`Login yoki parol xato`)
// }


// ================================================================================================

// 07. Chegirmali xarid
// Mahsulot narxi 200000 so‘m. Xaridorning chegirma kuponi borligi true.
// Agar xaridorga kupon berilgan bo‘lsa, narxdan 15% chegirma hisoblang. Aks holda, chegirmasiz narxni
// chiqaring.
// Natijada xaridor to‘lashi kerak bo‘lgan yakuniy summani ko‘rsating.
// Mavzular: arifmetik operatorlar, boolean, if else

// let narx = prompt(`Sotuv summani kiriting`);

// let chegirma = +prompt(`Chegir bor yoki yo'qligini kiriting ha = 1 , yoq = 0`);

// if(Boolean(chegirma) == true){
//     console.log(`15% chegirmadagi narx = ${narx - narx * .15}`)
// }

// else{
//     console.log(narx);
// }

// ================================================================================================

// 08. Bo‘sh qiymatni tekshirish
// Quyidagi o‘zgaruvchilardan foydalaning:
// let username = "";
// let age = 20;
// username bo‘sh bo‘lsa, “Ismingizni kiriting”, aks holda “Xush kelibsiz” deb chiqaring. Keyin age qiymati
// mavjudligini Boolean() orqali tekshirib, natijani chiqaring.
// Mavzular: falsy qiymatlar, Boolean(), if else

// let username = "";
// let age = 20;

// if(username == ""){
//     console.log(`Ismingizni kiriting`)
// }
// else{
//     console.log(`Xush kelibsiz`)
// }

// ================================================================================================

// 09. Sonning juft yoki toqligini aniqlash
// number nomli o‘zgaruvchiga 14 qiymatini bering. Sonni 2 ga bo‘lgandagi qoldiq orqali uning juft yoki
// toqligini aniqlang.
// Juft bo‘lsa “Juft son”, aks holda “Toq son” deb chiqaring.
// Mavzular: %, taqqoslash operatorlari, if else.

// let number = 14;

// if(number % 2 == 0){
//     console.log(`Juft`)
// }
// else{
//     console.log(`Toq`)
// }

// ================================================================================================

// 10. Kino tomosha qilish shartlari
// Foydalanuvchining yoshi 16, ota-onasining ruxsati false, chipta borligi esa true.
// Kino zaliga kirish uchun foydalanuvchi kamida 18 yoshda bo‘lishi yoki ota-onasining ruxsatiga ega bo‘lishi
// kerak. Bundan tashqari, chiptasi ham bo‘lishi shart.
// Shartlar bajarilsa “Kino zaliga kirish mumkin”, aks holda “Kirish mumkin emas” deb chiqaring.
// Mavzular: &&, ||, if else, boolean

// let ruxsat = false;
// console.log(`Ota-onasi ruxsati ${ruxsat}`);

// let yosh = 16;
// console.log(`Yoshi ${yosh}`);

// let chipta = true;
// console.log(`Chiptasi bormi ${chipta}`);

// if((ruxsat == true  ||  yosh >= 18) && chipta == true){
//     console.log(`Kino zaliga kirish mumkin`)
// }
// else{
//     console.log(`Kirish mumkin emas`)
// }