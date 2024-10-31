
# Tek veya Çift Sayı Bulucu

## Proje Açıklaması
Bu projede, kullanıcıdan bir sayı girmesi istenerek sayının **tek** mi yoksa **çift** mi olduğunu belirleyen bir uygulama yapılır. Kullanıcıya sonuç gösterilir ve ardından program kullanıcıya başka bir sayı girmek isteyip istemediğini sorar. Eğer kullanıcı devam etmek isterse, döngü yeniden başlar; aksi takdirde program sona erer.

## Projenin Akışı

1. **Kullanıcıdan Sayı Alma**:
   - `prompt()` fonksiyonu kullanılarak kullanıcıdan bir sayı girmesi istenir.

2. **Giriş Kontrolleri**:
   - Kullanıcının geçerli bir sayı girip girmediği `isNaN()` fonksiyonu ile kontrol edilir.
   - Geçersiz giriş durumunda, kullanıcıya "Lütfen geçerli bir sayı girin." mesajı gösterilir.

3. **Tek veya Çift Sayı Kontrolü**:
   - Girilen sayının tek mi çift mi olduğunu anlamak için `%` operatörü (mod alma operatörü) kullanılır. Eğer `sayi % 2` sonucu `0` ise, sayı çifttir; aksi takdirde tek sayıdır.

4. **Sonucu Gösterme**:
   - Sonuç kullanıcıya `alert()` fonksiyonu ile gösterilir.

5. **Kullanıcıya Devam Etmek İsteyip İstemediğini Sorma**:
   - Kullanıcıya başka bir sayı denemek isteyip istemediği `confirm()` fonksiyonu ile sorulur. `confirm()` kullanıcının "Tamam" veya "İptal" butonlarına tıklamasını bekler. "Tamam" tıklanırsa döngü devam eder, "İptal" tıklanırsa döngü sona erer.

6. **Döngü**:
   - Döngü, kullanıcı "İptal"e basana kadar devam eder. Bu işlem için `do-while` döngüsü kullanılır, böylece kullanıcı her durumda en az bir kez sayı girebilir.

## Kullanılacak Nesneler ve Anahtar Kelimeler

- **Değişkenler**:
  - `sayi`: Kullanıcının girdiği sayı.
  - `devamEt`: Kullanıcı başka bir sayı girmek istediğinde `true`, istemediğinde `false` olarak döngüyü kontrol eder.

- **Fonksiyonlar**:
  - `prompt()`: Kullanıcıdan giriş almak için kullanılan JavaScript fonksiyonu.
  - `alert()`: Kullanıcıya bilgi vermek için kullanılan JavaScript fonksiyonu.
  - `confirm()`: Kullanıcıya "Tamam" veya "İptal" seçenekleri sunmak için kullanılan JavaScript fonksiyonu.

- **Operatörler**:
  - `%` (mod alma operatörü): Sayının ikiye bölünüp bölünmediğini kontrol eder. Eğer `sayi % 2 == 0` ise sayı çifttir, değilse tektir.

- **Koşul İfadeleri**:
  - `if-else`: Girilen sayının tek mi çift mi olduğunu kontrol eder.

- **Döngü**:
  - `do-while`: Döngü, kullanıcı `confirm()` ile devam etmeyi seçtiği sürece çalışır.

## Projenin Özellikleri
- **Giriş Kontrolü**: Kullanıcının girdiği değerin geçerli bir sayı olup olmadığı kontrol edilir ve yanlışsa hata mesajı gösterilir.
- **Döngü Sürekliliği**: Kullanıcı devam etmek istediği sürece döngü yeniden başlar.
- **Bilgilendirici Mesajlar**: Her adımda kullanıcıya açıklayıcı mesajlar verilir.

---
