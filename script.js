const users = [
    { id: 1, name: "Ali Valiyev", email: "ali.valiyev@mail.uz", phone: "+998901112233" },
    { id: 2, name: "Dilnoza Karimova", email: "dilnoza.k@mail.uz", phone: "+998935554411" },
    { id: 3, name: "Sardor Rahimov", email: "sardor.r@gmail.com", phone: "+998977778899" },
    { id: 4, name: "Malika Tursunova", email: "malika.t@mail.uz", phone: "+998912223344" },
    { id: 5, name: "Javohir Aliyev", email: "javohir.a@gmail.com", phone: "+998946667788" },
    { id: 6, name: "Nodira Usmonova", email: "nodira.u@mail.uz", phone: "+998998881122" }
];

const searchInput = document.getElementById("search");
const userList = document.getElementById("userList");
const count = document.getElementById("count");

function showUsers(list) {
    userList.innerHTML = "";

    if (list.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 4;
        cell.className = "empty";
        cell.textContent = "Hech narsa topilmadi";
        row.appendChild(cell);
        userList.appendChild(row);
    }

    list.forEach(function(user) {
        const row = document.createElement("tr");
        [user.id, user.name, user.email, user.phone].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        userList.appendChild(row);
    });

    count.textContent = "Topildi: " + list.length + " ta foydalanuvchi";
}

searchInput.addEventListener("input", function() {
    const text = searchInput.value.trim().toLowerCase();

    const result = users.filter(function(user) {
        return user.name.toLowerCase().includes(text) ||
               user.email.toLowerCase().includes(text) ||
               user.phone.includes(text);
    });

    showUsers(result);
});

showUsers(users);
