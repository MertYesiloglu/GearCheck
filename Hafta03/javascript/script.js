const ekipmanFormu = document.getElementById("ekipmanFormu");
const ekipmanAdi = document.getElementById("ekipmanAdi");
const kategori = document.getElementById("kategori");
const fiyat = document.getElementById("fiyat");

ekipmanFormu.addEventListener("submit", function (e) {
    e.preventDefault();

    const adiDegeri = ekipmanAdi.value.trim();
    const kategoriDegeri = kategori.value;
    const fiyatDegeri = fiyat.value.trim();

    if (adiDegeri === "" || fiyatDegeri === "" || kategoriDegeri === "") {
        alert("Lütfen tüm zorunlu alanları doldurun ve bir kategori seçin!");
        return;
    }

    if (isNaN(fiyatDegeri) || Number(fiyatDegeri) <= 0) {
        alert("Lütfen geçerli bir fiyat girin!");
        return;
    }

    alert("Ekipman bilgileri doğrulandı, 4. haftada localStorage'a kaydedilecek!");
    ekipmanFormu.reset();
});

const karakterSayaci = document.getElementById("karakterSayaci");

ekipmanAdi.addEventListener("input", function () {
    const uzunluk = ekipmanAdi.value.length;
    karakterSayaci.textContent = `${uzunluk} / 50 karakter`;

    if (uzunluk > 50) {
        karakterSayaci.style.color = "red";
        karakterSayaci.textContent = `${uzunluk} / 50 karakter (Çok uzun!)`;
    } else {
        karakterSayaci.style.color = "#666";
    }
});