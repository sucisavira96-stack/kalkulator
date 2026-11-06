
let angkaPertama = "";
let angkaKedua = "";
let operator = "";
let resetLayar = false;

const layar = document.getElementById("layar");

function masukkan(angka) {
    if (resetLayar) {
        layar.value = "0";
        resetLayar = false;
    }

    if (angka === "." && layar.value.includes(".")) {
        return;
    }

    if (layar.value === "0" && angka !== ".") {
        layar.value = angka;
    } else {
        layar.value += angka;
    }
}

function pilihOperasi(op) {
    angkaPertama = layar.value;
    operator = op;
    resetLayar = true;
}

function hitung() {
    if (operator === "" || resetLayar) return;

    angkaKedua = layar.value;

    let a = Number(angkaPertama);
    let b = Number(angkaKedua);
    let hasil;

    if (operator === "+") {
        hasil = a + b;
    } else if (operator === "-") {
        hasil = a - b;
    } else if (operator === "*") {
        hasil = a * b;
    } else if (operator === "/") {
        hasil = b === 0 ? "Error" : a / b;
    }

    layar.value = hasil;
    operator = "";
    resetLayar = true;
}

function hapus() {
    layar.value = "0";
    angkaPertama = "";
    angkaKedua = "";
    operator = "";
    resetLayar = false;
}

function hapusSatu() {
    if (resetLayar) {
        layar.value = "0";
        resetLayar = false;
        return;
    }

    layar.value = layar.value.slice(0, -1) || "0";
}

function persen() {
    layar.value = Number(layar.value) / 100;
    resetLayar = true;
}
