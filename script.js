const nama = document.getElementById("nama")
const tanggal_lahir = document.getElementById("tanggal_lahir")
const username = document.getElementById("username")
const no_id = document.getElementById("no_id")
const Gender = document.getElementById("Gender")

const konfirmasi = document.getElementById("konfirm")
const clear = document.getElementById("clear")

const card = document.getElementById("card")

konfirmasi.addEventListener("click", () => {

    if (nama.value === "" || tanggal_lahir === "" || username === "" || no_id === "") {
        alert("Data Harus Lengkap WOI!!!")
    } else {  
        card.innerHTML = `
        <div class="item">
            <p>Username</p>
            <p> : </p>
            <p>${username.value}</p>
        </div>
        <div class="item">
            <p>Nama</p>
            <p> : </p>
            <p>${nama.value}</p>
        </div>
        <div class="item">
            <p>Tanggal Lahir</p>
            <p> : </p>
            <p>${tanggal_lahir.value}</p>
        </div>
        <div class="item">
            <p>Alamat</p>
            <p> : </p>
            <p>${alamat.value}</p>
        </div>
        <div class="item">
            <p>Nomor Identitas</p>
            <p> : </p>
            <p>${no_id.value} </p>
        </div>
        <div class="item">
            <p>Oshimen</p>
            <p> : </p>
            <p>${oshimen.value}</p>
        </div>
        <div class="item">
            <p>Jenis Kelamin</p>
            <p> : </p>
            <p>${Gender.value}</p>
        </div>
        `
        nama.value = ""
        tanggal_lahir.value = ""
        username.value = ""
        no_id.value = ""
    }

})

clear.addEventListener("click", () => {
    clearForm()
})

const clearForm = () => {
    nama.value = ""
    tanggal_lahir.value = ""
    username.value = ""
    no_id.value = ""
    card.innerHTML = ""
}