const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");

//Public 

$("#registration-form").submit(function (event) {
    event.preventDefault();
  
   
    const email = $("#email").val();
    const password = $("#password").val();
  
  

      // Kirim data registrasi ke server menggunakan AJAX atau fetch
      $.ajax({
        url: "/api/v1/users/register", // Ganti dengan rute API registrasi Anda
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({  email, password }),
        success: function (response) {
          // Tampilkan pesan sukses atau redirect ke halaman login
          alert("Registrasi berhasil! Silakan masuk.");
          window.location.href = "/";
        },
        error: function (error) {
          console.error("Terjadi kesalahan: " + JSON.stringify(error));
          alert("Gagal mendaftar. Silakan coba lagi.");
        },
      });
   
  });



    });
});