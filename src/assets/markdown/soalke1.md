### **Soal Ke 1**

_Soal dasar mengenai pengetahuan dasar programming._

*   Apakah yang dimaksud dengan Variabel dan Tipe Data didalam Javascript dan TypeScript? Jelaskan jenis-jenis nya!
    
*   Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana! (TypeScript)
    

*   Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana
    

*   Apa yang kamu ketahui tentang synchronous dan asynchronous programming di TypeScript?
    

### **Soal Ke 2**

_Disini kalian dituntut untuk menyelesaikan beberapa soal logic ringan._

1. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut: 90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D, 0 - 59 = E
    

*   klik gambar ini 
    
    * ![](https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png) 
        
    *   lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda. 
        
    *   Ambilah data “street dan city” tersebut menggunakan destructuring
        

*   Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data _number_ yang menghasilkan output segitiga terbalik yang berisi angka.
    
*   Buatlah program untuk membentuk pola segitiga seperti dibawah ini
    
    ![](https://ckbox.cloud/rc1DFuFpHqcR3Mah6y0e/assets/nz_W8s06tlfN/images/148.png)
*   Terdapat sebuah kata "Purwakarta". Buatlah fungsi untuk merubah huruf "a" di kata tersebut dengan huruf "o" sehingga outputnya menjadi "Purwokorto".
    
        // Contoh output
        ubahKata(o)
        Kata sebelumnya: Purwakarta
        Kata setelah diubah: Purwokorto
    
*   Buatlah sebuah fungsi bernama plugin, yang menerima parameter _number_ sebagai angka, lalu mencetak angka dari 1 hingga _number_ dengan ketentuan:  
    \- jika angkanya bisa dibagi 3, maka cetak _plug_  
    \- jika angkanya bisa dibagi 5, maka cetak _in_  
    \- jika angkanya bisa dibagi 3 & 5, maka cetak _plugin_
    
        // Contoh output
        plugin(5)
        1
        2
        plug
        4
        in
    
*   Buatlah sebuah fungsi bernama cekParameter, yang menerima parameter lalu mengecek tipe parameter tersebut. Ketentuan:  
    \- Jika parameter string maka return: "Parameter  " + param + " adalah String!"  
    \- Jika parameter number maka return: "Parameter  " + param + " adalah Number!"  
    \- Jika parameter boolean maka return: "Parameter  " + param + " adalah Boolean!"  
    \- Jika parameter array maka return: "Parameter  " + param + " adalah Array!"  
    \- Jika parameter object maka return: "Parameter  " + param + “ adalah Object!”
    
        // Contoh output:
        cekParameter([1, 2, 9])
        Parameter 1, 2, 9 adalah Array!
        cekParameter({nama: 'Rudi', umur: 20})
        Parameter [object Object] adalah Array! // tidak perlu extract objectnya, cukup seperti ini