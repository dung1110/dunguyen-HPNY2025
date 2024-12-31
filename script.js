// script.js

// Lấy phần tử âm thanh và thông báo
const backgroundMusic = document.getElementById('background-music');
const musicNotice = document.getElementById('music-notice');

// Phát nhạc sau khi người dùng nhấp vào màn hình
document.body.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicNotice.style.display = 'none'; // Ẩn thông báo sau khi nhạc bắt đầu phát
        console.log("Music started!");
    }
});

// Hiển thị thông báo nếu nhạc chưa phát
document.addEventListener('DOMContentLoaded', () => {
    if (backgroundMusic.paused) {
        musicNotice.style.display = 'block';
        console.log("Music is paused. Waiting for user interaction.");
    }
});
