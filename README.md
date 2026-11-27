# Users Search

Foydalanuvchilar ro'yxatini ism, email yoki telefon raqami bo'yicha jonli qidiradigan oddiy veb ilova. Kutubxona va framework ishlatilmagan — faqat HTML, CSS va JavaScript.

## Imkoniyatlar

- **Jonli qidiruv** — har bir harf kiritilganda ro'yxat darhol filtrlanadi
- **Uch maydon bo'yicha qidirish** — ism, email va telefon raqami
- **Katta-kichik harfga sezgir emas** — "ali" va "Ali" bir xil natija beradi
- **Natijalar soni** — nechta foydalanuvchi topilgani ko'rsatib turiladi
- **Bo'sh natija** — hech narsa topilmasa, "Hech narsa topilmadi" xabari chiqadi
- **Xavfsiz chiqarish** — ma'lumotlar `textContent` orqali qo'shiladi, `innerHTML` orqali HTML kiritib bo'lmaydi

## Qanday ishlaydi

1. Foydalanuvchilar `script.js` ichidagi `users` massivida saqlanadi.
2. Qidiruv maydonidagi `input` hodisasi har o'zgarishda matnni oladi.
3. `Array.filter()` ism, email va telefonda shu matn borligini tekshiradi.
4. `showUsers()` funksiyasi natijani jadvalga chiqaradi va sonini yangilaydi.

## Texnologiyalar

| Qism | Texnologiya |
|---|---|
| Tuzilma | HTML5 |
| Dizayn | CSS3 |
| Mantiq | Vanilla JavaScript (ES6) |

## Fayllar tuzilmasi

```
users-search/
├── index.html   # sahifa tuzilmasi: qidiruv maydoni va jadval
├── style.css    # dizayn
├── script.js    # ma'lumotlar, qidiruv va jadvalni chizish
└── LICENSE
```

## Ishga tushirish

`index.html` faylini brauzerda oching. Server yoki o'rnatish talab qilinmaydi.

## Litsenziya

MIT
