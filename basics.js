// vari`ables

let namapertama = "husain";
let namaakhir = "alamsyah";
// console.log(namapertama, namaakhir);

// constants

const numberrating = 3;
console.log(numberrating);

// primitive types - title

let nama = 'husain';
let umur = 19;
let persetujuan = true;
let namaAwal = undefined;
let pilihWarna = null;

//objects
let person = {
    nama: 'husain',
    umur: 19
};

person.nama = 'alamsyah';

let seleksi = 'nama';
person[seleksi] = 'kisanak';

console.log(person.nama);

// Arrays
let pilihanWarna = ['crimson', 'navy']
pilihanWarna[2] = 1;
console.log(pilihanWarna.length)


// CONTROL FLOW

// If..else
let jam = 9;

if (jam >= 7 && jam < 14) {
    console.log('selamat pagi');
}
else if (jam >= 14 && jam < 19) {
    console.log('selamat sore');
}
else
    console.log('selamat malam');

    let peran = 'murid';

// Switch..case
switch (peran) {
    case 'murid':
    console.log('user murid')
    break;

case 'guru':
    console.log('user guru')
    break;

default:
    console.log('user asing')
}

// if (peran === 'murid') console.log('murid');
// else if (role === 'guru') console.log('guru');
// else console.log('user asing')
