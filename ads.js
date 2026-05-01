// Функція для створення рекламного блоку
function loadAds() {
    const adContainer = document.getElementById('ad-space');
    if (!adContainer) return;

    // Тут ви легко можете змінити посилання, текст або картинку
    const adContent = `
        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); 
                    border: 1px dashed #fbbf24; 
                    padding: 15px; 
                    border-radius: 12px; 
                    margin: 20px 0; 
                    text-align: center;">
            <div style="color: #fbbf24; font-size: 10px; text-transform: uppercase; margin-bottom: 8px;">Рекламна пауза</div>
            <a href="http://t.me/Piarpiarpiar_bot" target="_blank" style="text-decoration: none;">
                <div style="color: #fff; font-weight: bold; font-size: 16px;">🚀 Заробляй UA Token разом з Piar Bot!</div>
                <div style="color: #94a3b8; font-size: 12px; margin-top: 5px;">Натисніть, щоб почати заробляти зараз</div>
            </a>
        </div>
    `;

    adContainer.innerHTML = adContent;
}

// Запускаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', loadAds);
