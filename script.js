document.getElementById('start-btn').addEventListener('click', function() {
    const startContainer = document.getElementById('start-container');
    const backgroundFade = document.getElementById('bg-fade');
    const videoContainer = document.getElementById('video-container');
    const mainVideo = document.getElementById('main-video');

    // 1. Làm mờ và ẩn đi nội dung ban đầu
    startContainer.classList.add('fade-out');

    // 2. Sau khi nội dung đã mờ đi (sau 1 giây), thì hiện ảnh nền lên
    setTimeout(function() {
        startContainer.style.display = 'none';
        backgroundFade.classList.add('visible');

        // 3. Sau khi background đã hiện ra (1.5s), làm mờ dần background này
        setTimeout(function() {
            backgroundFade.classList.add('fade-out');

            // 4. Sau khi background đã mờ đi (1.2s), hiện nền đen và video
            setTimeout(function() {
                backgroundFade.style.display = 'none';
                // Chuyển hướng sang trang video.html
                window.location.href = 'video.html';
            }, 1200); // Thời gian trùng với transition fade-out của background
        }, 1500); // Thời gian background hiện ra
    }, 1000); // Thời gian chữ và nút mờ đi
});