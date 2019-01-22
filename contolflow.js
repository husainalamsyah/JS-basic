// if..else

let jam = 9;

if (jam >= 7 && jam < 14) {
    console.log('selamat pagi');
}
else if (jam >= 14 && jam < 19) {
    console.log('selamat sore');
}
else
    console.log('selamat malam');

//     switch..case

    let peran = 'murid';

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
