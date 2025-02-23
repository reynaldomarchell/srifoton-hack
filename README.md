# QuizAI ✨

![QuizAI](public/quizai.png)
QuizAI adalah aplikasi kuis berbasis AI yang dirancang untuk membuat proses belajar menjadi lebih menyenangkan, menantang, otomatis, personalisasi, dan dapat disesuaikan. Aplikasi ini bertujuan untuk meningkatkan minat belajar masyarakat Indonesia dan dunia.

### Live Website

[QuizAI Live](https://quizai.rey.mba/)

---

## Table of Contents

1. [Installation](#installation)
2. [Environment Setup](#environment-setup)
3. [Usage](#usage)
4. [Features](#features)

---

## Installation

### Prerequisites

- Node.js dan npm sudah terinstall di sistem Anda.
- Mengerti cara menggunakan terminal atau command prompt.

### Steps

1. **Clone Repository:**

   ```bash
   git clone https://github.com/reynaldomarchell/srifoton-hack.git
   cd srifoton-hack
   ```

2. **Install Dependencies:**

   Gunakan package manager pilihan Anda (prefferably bun):

   - Menggunakan npm:

     ```bash
     npm install --legacy-peer-deps
     ```

   - Menggunakan bun ([Bun](https://bun.sh/)):
     ```bash
     bun install
     ```

3. **Setup Database dengan Prisma:**

   Lakukan migrasi database menggunakan Prisma:

   ```bash
   npx prisma db push
   ```

4. **Start Development Server:**

   Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. **Access Application:**

   Buka URL berikut di browser: [http://localhost:3000/](http://localhost:3000/)

## Environment Setup

Pastikan Anda memiliki file `.env` yang benar dengan variabel yang dibutuhkan. Jika belum ada, buat dan isi sesuai dengan kebutuhan aplikasi, contohnya:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/srifoton-hack"
NEXTAUTH_URL="http://localhost:3000"

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

OPEN_API_KEY=
```

## Usage

1. **Landing Page:**

   Setelah membuka aplikasi, Anda akan diarahkan ke halaman utama yang menjelaskan sedikit tentang aplikasi ini.

2. **Login:**

   Untuk menyimpan data kuis pribadi, login diperlukan. Anda bisa melakukan login menggunakan akun Google atau Discord.

3. **Dashboard/Home:**

   Berisi statistik laporan dan tombol "Create Quiz" untuk membuat kuis baru menggunakan AI.

4. **Create Quiz:**

   - Akses melalui Sidebar --> Quiz.
   - Masukkan detail tentang kuis yang akan dibuat, kemudian klik "Create Quiz".
   - Anda bisa mengedit pertanyaan dan jawaban, menambah pertanyaan baru, dan memposting kuis.

5. **Saved Quiz:**

   - Akses melalui Sidebar --> Quiz.
   - Berisi semua kuis yang sudah Anda buat.
   - Dapat dibagikan, dimainkan, atau di-review.

6. **Community Quiz:**

   - Akses melalui Sidebar --> Community Quiz.
   - Berisi kuis yang dibuat oleh pengguna lain di komunitas, bisa difilter dan dimainkan.

## Features

- **Customizable Quizzes:** Membuat kuis yang bisa disesuaikan dengan keinginan.
- **Automated Quiz Creation:** AI yang membantu dalam pembuatan kuis.
- **Community Sharing:** Membagikan kuis yang telah dibuat kepada komunitas.
- **Login Integration:** Masuk dengan mudah menggunakan Google atau Discord.
- **Statistical Overview:** Dashboard dengan statistik dan pelaporan kinerja.
