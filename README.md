"# LAT_UKL1_2025" 

# 🧾 Attendance Management API (Express + Prisma ORM)

API ini digunakan untuk mengelola data **User** dan **Kehadiran (Attendance)** menggunakan **Node.js**, **Express**, dan **Prisma ORM v6.18** dengan **MySQL** sebagai database.  
Proyek ini mendukung autentikasi JWT, hashing password, manajemen role, serta analisis data presensi berdasarkan periode tertentu.

---

## 🚀 Teknologi yang Digunakan
- Node.js
- Express.js
- Prisma ORM v6.18
- MySQL
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📁 Struktur Folder
```
project-root/
├── Controllers/
│   ├── attendance.controller.js
│   ├── auth.controller.js
│   ├── presensi.controller.js
│   └── User.controller.js
│
├── Middleware/
│   └── roleValidation.js
│
├── Routes/
│   ├── attendance.route.js
│   ├── presensi.route.js
│   └── user.route.js
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── generated/
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── prisma.config.ts
├── README.md
└── server.js
```

---

## ⚙️ Instalasi & Konfigurasi

### Install Dependencies
```cmd
npm install
```

### Buat File `.env`
```env
DATABASE_URL="mysql://root:password@localhost:3306/attendance_db"
JWT_SECRET="super_secret_key"
PORT=3000
```

### Generate Prisma Client
```cmd
npx prisma generate
```

### Jalankan Migrasi Database
```cmd
npx prisma migrate dev --name init
```

### Jalankan Server
```cmd
npm run dev
```
atau
```cmd
node server.js
```

---

## 🧠 Prisma Schema (Database Model)
```prisma
enum role {
  siswa
  karyawan
  admin
}

enum Status {
  hadir
  izin
  sakit
  alpha
}

model User {
  id          Int           @id @default(autoincrement())
  name        String
  username    String         @unique
  password    String
  role        role           @default(siswa)
  attendances Attendance[]
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}

model Attendance {
  id          Int           @id @default(autoincrement())
  userId      Int
  user        User          @relation(fields: [userId], references: [id])
  date        DateTime
  time        String
  status      Status
}
```

---

## 🧩 Endpoint API

### 🔐 **Auth**
| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `POST` | `/users/login` | Login dan mendapatkan token JWT |

**Contoh Request:**
```json
{
  "username": "naufal",
  "password": "123456"
}
```

---

### 👤 **User**
| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `GET` | `/users` | Menampilkan semua user |
| `GET` | `/users/:id` | Menampilkan user berdasarkan ID |
| `POST` | `/users` | Membuat user baru |
| `PUT` | `/users/:id` | Memperbarui data user |
| `DELETE` | `/users/:id` | Menghapus user |

---

### 🕒 **Attendance**
| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `GET` | `/attendance` | Menampilkan semua data kehadiran |
| `GET` | `/attendance/:id` | Menampilkan kehadiran berdasarkan ID |
| `POST` | `/attendance` | Membuat data kehadiran baru |
| `PUT` | `/attendance/:id` | Memperbarui data kehadiran |
| `DELETE` | `/attendance/:id` | Menghapus data kehadiran |

**Contoh Request (POST):**
```json
{
  "userId": 1,
  "date": "2025-11-06",
  "time": "08:00",
  "status": "hadir"
}
```

---

### 📊 **Presensi / Analisis**
| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `GET` | `/presensi/summary/:userId?month=YYYY-MM` | Ringkasan kehadiran per bulan |
| `GET` | `/presensi/analysis` | Analisis data kehadiran (per role / kelas) |

**Contoh Request Body (untuk `/presensi/analysis`):**
```json
{
  "start_date": "2025-01-01",
  "end_date": "2025-01-31",
  "group_by": "role"
}
```

---

## 🧰 Middleware

`Middleware/roleValidation.js` digunakan untuk memvalidasi **role** user berdasarkan token JWT.

---

CREATE USER
![Nama Alt Text](./OUTPUT/create%20user.png)

ADD ATTENDANCE
![Nama Alt Text](./OUTPUT/add%20attendance.png)

UPDATE USER
![Nama Alt Text](./OUTPUT/update%20user.png)

UPDATE ATTENDANCE
![Nama Alt Text](./OUTPUT/update%20attendance.png)

DELETE USER
![Nama Alt Text](./OUTPUT/delete%20user.png)

DELETE ATTENDANCE
![Nama Alt Text](./OUTPUT/delete%20attendance.png)

GET ALL USER
![Nama Alt Text](./OUTPUT/output%20get%20user.png)

GET ALL ATTENDANCE
![Nama Alt Text](./OUTPUT/get%20attendace%20by%20id.png)

GET USER BY ID
![Nama Alt Text](./OUTPUT/get%20user%20by%20id.png)

GET ATTENDANCE
![Nama Alt Text](./OUTPUT/get%20attendace%20by%20id.png)

GET ATTENDANCE SUMMARY
![Nama Alt Text](./OUTPUT/get%20att%20summary.png)
 
ANALYSIS SUMMARY
![Nama Alt Text](./OUTPUT/analysis%20summ.png)

---

## 🔑 Fitur Utama
✅ Login dengan JWT  
✅ Hash password dengan bcrypt  
✅ Validasi role pengguna  
✅ CRUD User & Attendance  
✅ Ringkasan Kehadiran bulanan  
✅ Analisis Presensi berdasarkan role atau kelas  
✅ Prisma ORM dengan MySQL  

---

## 📬 Author

**Nama:** Naufal  
**Bahasa Pemrograman:** JavaScript (Node.js)  
**Framework:** Express.js  
**ORM:** Prisma 6.18  
**Database:** MySQL  
**Versi Proyek:** 1.0.0  

