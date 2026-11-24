
const formRegistrasi = document.getElementById("formRegistrasi");

formRegistrasi.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasi").value;

    if (password !== konfirmasi) {
        alert("Konfirmasi password tidak sama!");
        return;
    }

    const akun = {
        nama: nama,
        username: username,
        password: password
    };

    localStorage.setItem("akunPenjualan", JSON.stringify(akun));

    alert("Registrasi berhasil! Silakan login.");

    window.location.href = "login.html";
});
