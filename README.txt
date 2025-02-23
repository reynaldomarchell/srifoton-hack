SDG: Quality Education
Tujuan: Membuat quiz app powered by AI untuk membuat proses belajar yang jauh lebih fun, challenging, automized/otomatis, personalized, dan customizable. 

Dengan harapan: membuat masyarakat Indonesia dan dunia yang lebih senang dan excited untuk belajar.

Link website live: https://quizai.rey.mba/

----------------------------------------------------

0) Installation Steps:

1. Unzip source folder
2. Open the 'srifoton-hack' folder
3. Open terminal atau cmd atau semacamnya
4. Ketik 'npm install' atau 'bun install' (tergantung package manager yang dimiliki).
5. Setelah selesai dependencies nya ter-install semua. Ketik 'npm run dev' atau 'bun dev' di terminal.
6. Buka url:"http://localhost:3000/" di browser

----------------------------------------------------

1) How to use:

1. Pertama kali buka web app nya, akan masuk ke page landing. Di sini terdapat sedikit penjelasan mengenai web app nya (quiz/ai).
2. Masuk ke halaman login. Bisa antara dengan klik button 'Try it out' di awal dan akhir page, atau 'Sign In' di kanan atas screen (di navbar)

----------------------------------------------------

2) Login:

1. App ini memerlukan login untuk menyimpan data-data quiz pribadi.
2. Dapat langsung login dengan menggunakan akun Google atau Discord.

----------------------------------------------------

3) Dashboard/Home:

1. Di dashboard terdapat beberapa statistics laporan yang bisa berguna bagi user. 
2. Bisa click button "Create Quiz" di bagian "Try ask this out!"
   Jika di klik, maka akan redirect ke bagian "Create Quiz (akan dijelaskan nanti)" dengan template yang dipilih.

----------------------------------------------------

4) Sidebar

1. Tempat navigasi ke setiap bagian di web app nya, termasuk account info dan logout option di kiri bawah.
2. Terdapat icon kecil di atas dan sebelah kanan sedikit dari Sidebar nya. Klik untuk expand dan collapse si Sidebar nya.

----------------------------------------------------

5) Create Quiz

1. Cara akses: Sidebar --> Quiz.
2. Masukkan details tentang quiz yang mau dibuat, lalu klik button "Create Quiz" AI akan membuatkan quiz nya untuk anda.
3. Sekarang anda bisa edit details jawaban dan pertanyaan nya untuk memastikan kalau jawaban nya tepat.
4. Klik trash icon merah di bagian soal untuk menghapus soal tersebut
5. Di bagian paling bawah kiri ada button untuk menambahkan pertanyaan secara manual
6. Klik button "Submit Quiz" di bagian paling bawah kanan untuk save si quiz nya.
7. Page akan otomatis redirect ke bagian "Saved Quiz" dan quiz nya dapat dimainkan.

(Penjelasan dilanjut di section selanjutnya)

----------------------------------------------------

6) Saved Quiz

1. Cara akses: Sidebar --> Quiz.
2. Terdiri dari semua quiz yang telah anda buat
3. Di bawah kiri dari setiap card quiz ada share button untuk membagikan quiz tersebut kepada orang lain.
4. Untuk memainkan quiz juga melakukan beberapa hal lain nya, klik button "Actions" di sebelah kanan bawah quiz nya.

Note: Action "Verified by Expert" adalah untuk menandakan kalau quiz tersebut sudah di cek credibilitas gabungan pertanyaan-jawaban nya benar oleh seorang expert.

5. Jika klik action "Mark quiz as Public", maka quiz tersebut sekarang bisa diakeses oleh semua orang yang menggunakan web app ini.

6. Klik "Actions" --> "Start Quiz" untuk memainkan quiz nya.
7. Klik "Actions" --> "Review" untuk me-review/mempelajari manakah jawaban yang benar untuk pertanyaan tertentu.

----------------------------------------------------

7) Community Quiz

1. Cara akses: Sidebar --> Community Quiz.
2. Terdiri dari semua quiz yang dibuat oleh semua orang.
3. Terdapat filter di bagian atas untuk mem-filter quiz nya.
4. Sisanya di bagian ini sama seperti di bagian "Save Quiz", hanya saja Actions yang dapat dilakukan hanya "Start Quiz" dan "Review"