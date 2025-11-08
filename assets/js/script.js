
// script.js - basic interactions
document.addEventListener('DOMContentLoaded', function(){
  // weather button
  const weatherBtn = document.getElementById('btnCuaca');
  if(weatherBtn){
    weatherBtn.addEventListener('click', function(){
      const cuaca = ['Cerah, 30°C','Berawan, 28°C','Hujan ringan, 25°C','Berangin, 26°C'];
      document.getElementById('infoCuaca').innerText = cuaca[Math.floor(Math.random()*cuaca.length)];
    });
  }
  const form = document.getElementById('formUlasan');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const rating = document.getElementById('rating').value;
      if(!nama || !email || !rating || !email.includes('@')){
        alert('Semua field wajib diisi dan email harus valid!');
        return;
      }
      alert('Terima kasih atas ulasan Anda, ' + nama + '!');
      form.reset();
    });
  }
});
