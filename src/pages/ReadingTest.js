import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reading from '../assets/reading.jpg';
import { useUser } from '../utils/UserContext';
import  { API_URI } from '../utils/config';
import getSubString from '../utils/getSubString';
import { HashLink } from 'react-router-hash-link';

const ReadingTest = () => {
    const { user, setUser } = useUser();

    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    const [startBtn, setStartBtn] = useState('Mulai');
    const [timer, setTimer] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [filteredArticle, setFilteredArticle] = useState();
    const [articleClass, setArticleClass] = useState('list-article rounded-3 py-3 hidden text-start');

    const getArticles = async () => {
        try {
            const response = await axios.get( API_URI + 'articles/');
            setArticles(response.data);
            setArticle(articles[0]);
        } catch (error) {
            console.error(error);
        }
    }

    // const getArticle = async (articleId) => {
    //     try {
    //         const response = await axios.get( API_URI + 'article/', {
    //             params: {
    //                 id: articleId
    //             }
    //         });
    //         setArticle(response.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }

    const recordSpeed = async () => {
        try {
            await axios.post( API_URI + 'speed-record/', {
                article:article?.id,
                user:user.id,
                wpm:wpm
            })
        } catch (error) {
            console.error(error);
        }
    }

    const filterArticle = (categoryArticle) => {
        setFilteredArticle(articles?.filter(article => article.category === categoryArticle));
        setArticleClass('list-article rounded-3 py-3 text-start');
    }

    const newBody = article?.body.split('\n').map((line, _index) => (
        <React.Fragment key={_index}>
            {line}
            <br />
        </React.Fragment>
    ))

    
    const startTimer = () => {
        const startTime = new Date().getTime();
        setTimer(startTime)
        setStartBtn('Membaca...');
    }


    const stopTimer = () => {
        const endTime = new Date().getTime();
        const timers = parseFloat((endTime - timer) / (60 * 1000)).toFixed(2);

        const velocity = parseFloat(article?.length_text / timers).toFixed(0);
        setWpm(velocity);
        setStartBtn('Mulai');

        if(user){
            recordSpeed();
        }
    }

    useEffect(()=> {
        // getArticle();
        getArticles();
        // setTimeout(getArticles, 1000);
        window.scrollTo(0,0);
    }, [])
    
  return (
    <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Reading Test Speed - WiraBasa</title>
        </Helmet>

        <Navbar />
        <section className='mb-5' id="hero">
            <div className="container">
                <div className="row">
                    <div className="main col ps-5">
                        <h2>SEBERAPA CEPAT ANDA MEMBACA?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <HashLink to="/reading-test/#test" className='btn mt-3'>Mulai sekarang</HashLink>
                    </div>
                    <div className='col text-center'>
                        <img src={Reading} alt='' />
                    </div>
                </div>
            </div>
        </section>

        <section id="read-test">
            <div className='instruction py-5'>
                <div className="container rounded-4 p-5">
                    <h2 className="mb-3 text-center">Instruksi</h2>
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
            </div>
            <div className="container">

                <div id="test" className="read-test">
                    <h2 className='text-center'>Test Kecepatan Membaca</h2>
                    <div className='category mt-5 text-center rounded-2'>
                        <p>Pilih tingkatan membaca</p>
                        <div className='row rounded-2' style={{border: '#3b566e 1px solid'}}>
                            <div className='col my-2'>
                                <button className='btn btn-category' onClick={() => filterArticle('Pendidikan')}>SD</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-category' onClick={() => filterArticle('category1')}>SMP</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-category' onClick={() => filterArticle('category1')}>SMA</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-category' onClick={() => filterArticle('category1')}>PT</button>
                            </div>
                        </div>
                        <ul className={articleClass}>
                            {filteredArticle?.map((article, _index) => 
                            <li key={_index}>
                                <button className='my-1 btn-title border-0' onClick={() => setArticle(article)}><h4 className='text-start'>{ article.title }</h4></button>
                                <p className='ps-2'>{ getSubString(article.body, 100) }</p>
                                <hr />
                            </li>)}
                        </ul>
                    </div>  
                    <div className="text-center my-5">
                        <button onClick={startTimer} className="btn px-4 py-2 mt-5 rounded-3">{ startBtn }</button>
                    </div>

                        <h3 className="text-center">{ article?.title }</h3>
                        <p className='body-article'>{ newBody }</p>
                        <div className="text-center my-5">
                            <button onClick={stopTimer} className="btn px-4 py-2 rounded-3">Selesai</button>
                        </div>

                        <h3 id="result-test" className="mb-3">Hasil kecepatan membaca</h3>
                        <p>Kecepatan membacamu {wpm} kata per menit.</p>
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

        <Footer />
    </React.Fragment>
  )
}

export default ReadingTest