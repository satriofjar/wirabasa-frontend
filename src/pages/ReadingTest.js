import React from 'react'

const ReadingTest = () => {
    const startTimer = () => {

    }

    const stopTimer = () => {

    }
    
  return (
    <div>
        <section id="hero1">
            <div className="layer">
                <div className="container">
                    <div className="hero-cntn text-center">
                        <h2>SEBERAPA CEPAT ANDA MEMBACA?</h2>
                        <a href="#Test">Mulai sekarang <img src="" alt="" width="20" /></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="read-test">
            <div className="container">
                <div className="instruction mt-5">
                    <h3 className="mb-3">Instruksi</h3>
                    <p>Sebelum menghitung kecepatan membaca, bersiaplah. Kemudian, klik tombol mulai jika sudah siap membaca. 
                        <br />
                        Saat menekan tombol dimulai, pengatur waktu akan dimulai pula.
                        <br />
                        Jangan cepat-cepat saat membaca, tetapi membacalah secara normal untuk menemukan tingkat membaca Anda saat ini.
                        <br />
                        Klik tombol stop segera setelah Anda selesai. Ini akan menghentikan pengatur waktu dan menampilkan kecepatan membaca Anda.
                        <br />
                        Sebelum memulai tes sebenarnya, Anda dapat mengeklik mulai. Scroll ke bawah tanpa membaca, lalu klik berhenti untuk melihat hasilnya.</p>
                </div>

                <div id="Test" className="read-test mt-5">
                    <h2>Test Kecepatan Membaca</h2>
                    <div className="text-center my-5">
                        <button id="startBtn" onclick={startTimer} className="btn px-4 py-2 rounded-3">Mulai</button>
                    </div>

                        <h3 className="text-center"></h3>
                        <p></p>
                        <div className="text-center my-5">
                            <button id="endBtn" onclick={stopTimer} className="btn px-4 py-2 rounded-3">Selesai</button>
                        </div>

                        <h3 id="result-test" className="mb-3">Hasil kecepatan membaca</h3>
                        <p>Kecepatan membacamu <span id="wpm"></span> kata per menit.</p>
                </div>

                <div className="py-5">
                    <h2>Keterangan</h2>
                    <p>Berikut ini disajikan rician rata-rata kecepatan baca yang disesuaikan dengan keperluan baca.</p>
                    <ul className="ms-4">
                        <li>Kecepatan 100 kpm atau lebih (sangat tinggi) biasa digunakan pada saat membaca  <b>skimming</b> atau <b>scanning</b> untuk keperluan pengenalan dan penjajagan bahan bacaan, mencari jawaban atas pertanyaan-pertanyaan tertentu, mengetahui organisasi tulisan, mencari gagasan pokok, mendapatkan kesan umum suatu bacaan.</li>
                        <li>Kecepatan antarta 500-800 kpm (tinggi) digunakan untuk membaca bahan bacaan yang mudah / ringan atau bahan yang sudah dikenal, membaca prosa fiksi untuk mengetahui jalan cerita secara umum.</li>
                        <li>Kecepatan antara 350-500 kpm (cepat) digunakan untuk membaca bacaan yang tergolong ringan / mudah yang bersifat deskriptif-informatif dan bahan bacaan fiksi yang agak sulit untuk menikmati keindahan sastranya atau mengantisipasi akhir dari sebuah cerita.</li>
                        <li>Kecepatan antara250-350 kpm (rata-rata) digunakan untuk membaca fiksi yang kompleks guna menganalisis watak tokoh dan jalan ceritanya atau bahan-bahan bacaan nonfiksi yang agak sulit untuk mencapatkan detail informasi, mencari hubingan atau melakukan kerja evaluative mengenai ide penulisnya.</li>
                        <li>Kecepatan antara100-125 kpm (lambat) digunakan untuk mempelajari bacaan yang sukar, bacaan ilmiah yang bersifat teknis, analisis nilai sastra klasik, memecahkan persoalan yang dirujuk bacaan (bacaan yang berisi instruksi).</li>
                    </ul>

                    <p>Kecepatan rata-rata di atas hendaknya disertai dengan minimal 70% pemahaman isi bacaan, karena kecepatan rata-rata di atas masih merupakan kecepatan kasar yang belum menyertakan pemahaman isi bacaan. Berdasarkan hasil studi para ahli membaca di Amerika, 
                        kecepatan yang memadai untuk siswa tingkat akhir sekolah dasar (SD) kurang lebih 200 kpm, siswa SLTP 200-250 kpm, siswa SLTA 250-325 kpm, dan tingkat mahasiswa 325-400 kpm  dengan pemahaman isi minimal 700%. 
                        Data tersebut jika dikonversi ke dalam perhitungan KEM (kemampuan membaca yang sesungguhnya) menjadi seperti berikut.</p>

                    <ol className="ms-4">
                        <li>Tingkat SD - 200 x 70% = 140 kpm</li>
                        <li>Tingkat SMP - 200 x 70% s.d. 250 x 70% = 140-175 kpm</li>
                        <li>Tingkat SMA - 250 x 70% s.d. 350 x 70% = 175 - 245 kpm</li>
                        <li>Tingkat PT - 350 x 70% s.d. 400 x 70% = 245-280 kpm</li>
                    </ol>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ReadingTest