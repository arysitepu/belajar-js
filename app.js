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

function teriak(msg){
    try {
        console.log(msg.toUpperCase());
    } catch (error) {
        console.log(error);
        console.log('Silahkan masukkan tipe data string pada agrumen teriak()');
    }
}