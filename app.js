// for(let i = 1; i <= 10; i++){
//     console.log('saya ada di dalam loop');
//     console.log(i);
// }

// for(let i = 1; i <= 20; i+=2){
  
//     console.log(i);
// }
// for(let i = 20; i >= 0; i-=2){
//     console.log(i);
// }
// for(let i = 10; i <= 100000; i*=10){
//     console.log(i);
// }
// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra'];
// for(let i = 0; i < animals.length; i++){
//  console.log(i + 1, animals[i]);
// }

// const pilihan = 'abcd';

// for(let i = 1; i <= 10; i++){
//     console.log(`${i}. soal nomor ${i}`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`       ${pilihan[j]}. Pilihan jawaban`);
//     }
// }

// const studentRow = [
//     ['Olivia','Liam','Emma','Noah'],
//     ['Amelia','Oliver','Ava','Elijah'],
//     ['Sophia','Mateo','Isabella','Lucas'],
// ];

// for(let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//     for(let j = 0; j < row.length; j++){
//         console.log(`  ${row[j]}`);
//     }
// }

// for(let row of studentRow){
//     for(let student of row){
//         console.log(student);
//     }
// }

// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }

// const PASSWORD = 'Pass123';
// let guess = prompt('enter the password');
// while(guess !== PASSWORD){
//     guess = prompt('enter the password');
// }
// alert('congrats!. the password is correct');

// let input = prompt('Hei!. say something');
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === "stop") break;
// }
// alert('oke')


// const fruits = ['banana', 'orange', 'apple', 'mango'];

// for(let fruit of fruits){
//     console.log(`Buah ${fruit}`);
// }

// const studentScore = {
//     Olivia : 20,
//     Liam : 13,
//     Emma : 40,
//     Noah : 18,
//     Amelia : 32,
//     Oliver : 10,
//     Ava : 11,
//     Elijah : 21,
//     Sophia : 14,
//     Mateo : 22,
// } 

// for (let student in studentScore){
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for(let score in scores){
//     total += score;
// }
// console.log(total / scores.length);

// function

// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi(){
//     console.log("cek...");
//     console.log("do re mi...");
// }

// nyanyi();

// function selamatPagi(name){
//     console.log(`Halo ${name} selamat pagi`);
// }
// selamatPagi('Ary');

// function jumlahkan(a = 0 , b = 0){
//     const total = a + b;
//    return total
// }
// jumlahkan(1,2);

// function jumlahkan(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'bukan angka';
//     }
//         return a + b;
    
// }

// let programming = 'javascript';

// function typeSafe(){
//    let programming = 'type script';
//    console.log(programming);
// }
// typeSafe();
// console.log(programming);

// let tinggi = 8;
// if( tinggi > 5){
//     var lebar = 10;
//     console.log(lebar);
// }
// console.log('lebar:', lebar);

// for (let index = 0; index < 10; index++) {
//     lebar = index;
//     var indexNumber = index;
//     console.log(indexNumber);
// }
// console.log('index:', indexNumber);
// console.log('lebar:', lebar);
// function lamarKerja(){
//     const jabatan = 'Programmer';
//     function orangDalam(){
//         let kenalan = `Orang dalam dapat memasukkan ${jabatan}`;
//         console.log(kenalan);
//     }

//     orangDalam();
// }

// function perpangkatan(nilai){
//     return nilai * nilai
// }

// let hasil = perpangkatan(10);

// const hasilPerpangkatan = function(nilai, pembanding){
//     return nilai * pembanding;
// }

// function duaKali(func){
//     func();
//     func();
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// function hasilnyaAdalahFunction(){
//     const rand = Math.random();
//     if(rand > 0.1){
//         return function(){
//             console.log('Selamat, angkanya lebih besar');
//         };
//     }else{
//         return function(){
//             console.log('maaf, mungkn bisa coba lagi');
//         };
//     }
// }

// const myMath = {
//     perkalian: function(x,y){
//         return x * y;
//     },
// }

// const saya = {
//     nama: 'ary',
//     hobi: 'musik',
//     kenalan: function(){
//         return `Hi, Nama saya ${this.nama}. hobi saya ${this.hobi}.`
//     }
// }

// try {
//     saya.kenalan()
// } catch{
//     console.log('Error!!!.');
// }

// function teriak(msg){
//     try {
//         console.log(msg.toUpperCase());
//     } catch (error) {
//         console.log(error);
//         console.log('Silahkan masukkan tipe data string pada agrumen teriak()');
//     }
// }

// const angka = [1,2,3,4,5,6,7,8,9];

// function print(element){
//     console.log(element);
// }
// angka.forEach(print);

// const angka = [1,2,3,4,5,6,7,8,9];

// angka.forEach(function(el){
//     if(el % 2 === 0){
//         console.log(el);
//     }
// });

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90
//     },
//     {
//         title: 'Naruto',
//         rating: 89
//     },
//     {
//         title: 'One piece',
//         rating: 82
//     },
//     {
//         title: 'Bleach',
//         rating: 80
//     },
//     {
//         title: 'Tokyo revenge',
//         rating: 88
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 87
//     },
// ];

// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const angka = [1,2,3,4,5,6,7,8,9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90
//     },
//     {
//         title: 'Naruto',
//         rating: 89
//     },
//     {
//         title: 'One piece',
//         rating: 82
//     },
//     {
//         title: 'Bleach',
//         rating: 80
//     },
//     {
//         title: 'Tokyo revenge',
//         rating: 88
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 87
//     },
// ];

// const animeList = animes.map(function(anime){
//     return anime.title.toUpperCase();
// });

// const perpangkatan = (x) => {
//     return x*x;
// }

// const random = () => {
//     return Math.floor(Math.random() * 1000);
// }


// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a,b) => a + b

// console.log('halo');

// setTimeout(() => {
//     console.log('masih disana gak?.');
// }, 3000);
// console.log('saya pergi iyaa...');

// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// const interval = setInterval(() => {
//         console.log(Math.random());
//     }, 2000);

// const angka = [1,2,3,4,5,6,7,8,9];
// const angkaGanjil = angka.filter((n) => {
//     return n % 2 === 1;
// });
// const angkaBaru = angka.filter((n) => {
//     return n < 5;
// });

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90,
//         year: 2010
//     },
//     {
//         title: 'Naruto',
//         rating: 89
//     },
//     {
//         title: 'One piece',
//         rating: 82,
//         year: 2012
//     },
//     {
//         title: 'Bleach',
//         rating: 80,
//         year: 2009
//     },
//     {
//         title: 'Tokyo revenge',
//         rating: 88,
//         year: 2007
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 87,
//         year: 2005
//     },
// ];
// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// const cukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// const examScore = [80,85,70,90,93,77];
// const isGraduate = examScore.every((score) => score >= 75);

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90,
//         year: 2010
//     },
//     {
//         title: 'Naruto',
//         rating: 89
//     },
//     {
//         title: 'One piece',
//         rating: 82,
//         year: 2012
//     },
//     {
//         title: 'Bleach',
//         rating: 80,
//         year: 2009
//     },
//     {
//         title: 'Tokyo revenge',
//         rating: 88,
//         year: 2007
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 87,
//         year: 2005
//     },
// ];
// const isAnimeListNew = animes.some((anime) => anime.year > 2020);

// const examScore = [80,85,70,90,93,77];

// const total = examScore.reduce((total, score) => {
//     return total + score;
// });

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 82,
//         year: 2010
//     },
//     {
//         title: 'Naruto',
//         rating: 90
//     },
//     {
//         title: 'One piece',
//         rating: 82,
//         year: 2012
//     },
//     {
//         title: 'Bleach',
//         rating: 80,
//         year: 2009
//     },
//     {
//         title: 'Tokyo revenge',
//         rating: 88,
//         year: 2007
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 77,
//         year: 2005
//     },
// ];
// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime);
//     if(currAnime.rating > bestAnime.rating){
//         return currAnime;
//     }
//     return bestAnime;
// });

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     panggilNanti: function(){
//         setTimeout(function(){
//             console.log(this.firstName);
//         }, 3000);
//     }
// };

// function lemparDadu(sisi = 6){
// return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name ='user', msg= 'selamat bekerja'){
//     console.log(`${name}, ${msg}`);
// }

// const angka = [1,2,3,4,5,6,7,8,9];
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...angka, ...nama];

// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };

// const credential = {
//     password: 'password',
//     token: 'asfbwuirb34buy3b4hbkj'
// };
// const userBaru = {...user, ...credential};

// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// }

// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const pemenang = (gold, silver, bronze, ...lain)=> {
//     console.log(`Medali emas di raih: ${gold}`);
//     console.log(`Medali silver di raih: ${silver}`);
//     console.log(`Medali bronze di raih: ${bronze}`);
//     console.log(`peserta lainnya: ${lain}`)
// };

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };

// const {name: nama, email, phone= '535344534'} = user;

// const user = {
//     name: 'John',
//     email: 'john@doe.com',
//     role: 'Admin'
// };

// const userAndRole = ({name, role}) => {
//     return `${name} ${role}`;
// };

const animes = [
    {
        title: 'Attack on titan',
        rating: 82,
        year: 2010
    },
    {
        title: 'Naruto',
        rating: 90,
        year: 1995
    },
    {
        title: 'One piece',
        rating: 82,
        year: 2012
    },
    {
        title: 'Bleach',
        rating: 80,
        year: 2009
    },
    {
        title: 'Tokyo revenge',
        rating: 88,
        year: 2007
    },
    {
        title: 'Hunter x Hunter',
        rating: 77,
        year: 2005
    },
];
const anime = animes.map(({title, year, rating}) => {
    return `${title} (${year}) rating ${rating}`;
});