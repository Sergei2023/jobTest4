я вложил несколько видео, если захотите изменить
в строке <source src="assets/video/НАЗВАНИЕ_ВИДЕО.mp4" type="video/mp4">
поменяйте ссылку на видео
они находятся в папке assets/vide/ТУТ ВИДЕО

добавил градиент и сделал темнее сверху чтобы было оучше видно заголовок
так же добавил ему свечения
    .video-overlay {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,     /* Прозрачность сверху (чем больше - темнее) */
            rgba(0, 0, 0, 0) 50%,      /* Прозрачность в середине */
            rgba(0, 0, 0, 0) 100%      /* Прозрачность внизу */
        );
    }
тут можете его менять 

для вставки выших ссылок вставьте актуальные

<div class="store-buttons">
    <a href="ВАША ССЫЛКА" class="store-btn">
        <img src="assets/images/appstore.png" alt="App Store">
        <span>App Store</span>
    </a>
    <a href="ВАША ССЫЛКА" class="store-btn">
        <img src="assets/images/googleplay.png" alt="Google Play">
        <span>Google Play</span>
    </a>
    <a href="ВАША ССЫЛКА" class="store-btn">
        <img src="assets/images/rustore.png" alt="RuStore">
        <span>RuStore</span>
    </a>
</div>
