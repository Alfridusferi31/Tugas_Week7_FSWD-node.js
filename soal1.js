const shapes = require('./modul');
const sisiPersegi = 7;
const luasPersegi = shapes.luasPersegi(sisiPersegi);
const kelilingPersegi = shapes.kelilingPersegi(sisiPersegi);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);

const panjangPersegiPanjang = 8;
const lebarPersegiPanjang = 2;
const luasPersegiPanjang = shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
