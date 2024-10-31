let devamEt;

do {
  // Kullanıcıdan sayı al
  let sayi = prompt("Bir sayı girin:");

  // Girişin geçerli bir sayı olup olmadığını kontrol et
  if (isNaN(sayi) || sayi === "") {
    alert("Lütfen geçerli bir sayı girin.");
  } else {
    // Sayıyı tam sayıya dönüştür
    sayi = parseInt(sayi);

    // Tek veya çift kontrolü yap
    if (sayi % 2 === 0) {
      alert(`${sayi} bir çift sayıdır.`);
    } else {
      alert(`${sayi} bir tek sayıdır.`);
    }
  }

  // Başka bir sayı denemek isteyip istemediğini sor
  devamEt = confirm("Başka bir sayı denemek ister misiniz?");
} while (devamEt);
