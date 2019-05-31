class GradskiElement {
    constructor(naziv, godina) {
        this.naziv = naziv;
        this.godina = godina;
    }
}

class Park extends GradskiElement {
    constructor(naziv, godina, povrsina, brojDrveca) {
        super(naziv, godina);
        this.povrsina = povrsina;
        this.brojDrveca = brojDrveca;
        this.gustoca = this.brojDrveca / this.povrsina;
    }
    info() {
        console.log(this.naziv + '    ' + this.godina + '    ' + this.povrsina + ' km2     ' + this.brojDrveca +
            '           ' + this.gustoca.toFixed(2));
    }
}

class Ulica extends GradskiElement {
    constructor(naziv, godina, duzina, klasifikacija) {
        super(naziv, godina);
        this.duzina = duzina;
        klasifikacija == null ?
            this.klasifikacija = 3 : this.klasifikacija = klasifikacija;
    }
    info() {
        console.log(this.naziv + ' ' + this.godina + '  ' + this.duzina + ' km2 ' +
            myMap.get(this.klasifikacija));
    }
}

let myMap = new Map();
myMap.set(1, 'prolaz');
myMap.set(2, 'mala');
myMap.set(3, 'normalna');
myMap.set(4, 'velika');

const parkovi = [
    new Park('Park skojevaca', 1987, 0.2, 215),
    new Park('Pionirski Park', 1894, 2.9, 3541),
    new Park('Omladinski Park', 1953, 0.4, 949),
];

const ulice = [
    new Ulica('Trg Oslobođenja', 1971, 1.1, 4),
    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1),
    new Ulica('Beogradska', 1974, 0.8),
    new Ulica('Lenjingradska', 1982, 2.5, 2),
    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),
];

let information = () => {
    const god = new Date();
    let ukupno = 0;
    console.log('---------------Ulice-------------');
    for (let i = 0; i < ulice.length; i++) {
        ulice[i].info();
    }

    console.log('---------------Parkovi-------------');
    console.log('Naziv:          Godina:  Površina: Broj drveća:  Gustina:');
    for (let i = 0; i < parkovi.length; i++) {
        parkovi[i].info();
        ukupno = ukupno + (god.getFullYear() - parkovi[i].godina);
    }
    console.log('Prosjek starosti parkova: ' + (ukupno / parkovi.length).toFixed(2) + ' godina');
}

let ParkoviPoBrojuDrveca = () => {
    parkovi.sort((a, b) => b.brojDrveca - a.brojDrveca);
    console.log(parkovi);
}

let parkoviPoVelicini = () => {
    parkovi.sort((a, b) => a.povrsina - b.povrsina);
    console.log(parkovi);
}
let ProsjecnaUkupnaDuzinaUlica = () => {
    let ukupno = 0;
    ulice.forEach(e => ukupno += e.duzina);
    console.log('Ukupna dužina ulica: ' + ukupno.toFixed(2) + ' km2 a prosječna: ' +
        (ukupno / parkovi.length).toFixed(2) + ' km2');
}

let Ulice80tih = () => {
    console.log(ulice.filter(e => e.godina >= 1980 && e.godina < 1990));
}
information();
ParkoviPoBrojuDrveca();
parkoviPoVelicini();
ProsjecnaUkupnaDuzinaUlica();
Ulice80tih();