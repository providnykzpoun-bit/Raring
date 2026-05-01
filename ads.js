function loadAds() {
    const adContainer = document.getElementById('ad-space');
    if (!adContainer) return;

    // Масив з 5 варіантами реклами
    const ads = [
        {
            title: "🚀 Заробляй UA Token разом з Piar Bot!",
            text: "Виконуй прості завдання та отримуй винагороду вже зараз.",
            link: "http://t.me/Piarpiarpiar_bot",
            label: "ЗАРОБІТОК"
        },
        {
            title: "🔄 Швидкий обмін в LeslaSwap!",
            text: "Надійний обмінник для вашої зручності. Безпечно та швидко.",
            link: "http://t.me/Leslaswap_bot",
            label: "ОБМІННИК"
        },
        {
            title: "📊 Слідкуй за графіком UA Token!",
            text: "Будь у курсі всіх змін ціни на DEXTools. Не прогав момент!",
            link: "https://www.dextools.io/app/en/ton/pair-explorer/EQDqC7e4o5pzIWm3PfDQr3l96epyBezSn7dPjpCJ8GwAwnh9",
            label: "ТРЕЙДИНГ"
        },
        {
            title: "🎁 Отримуй UA Drop!",
            text: "Приєднуйся до нашої спільноти та бери участь у розіграшах.",
            link: "https://t.me/+Jne2t1clWuo4YTdi",
            label: "AIRDROP"
        },
        {
            title: "🎮 Ігри та Лотерея UA HUB!",
            text: "Випробуй свою удачу та вигравай токени в наших іграх.",
            link: "games.html",
            label: "РОЗВАГИ"
        }
    ];

    // Вибираємо випадкову рекламу зі списку
    const randomAd = ads[Math.floor(Math.random() * ads.length)];

    // Створюємо HTML-код банера
    const adContent = `
        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); 
                    border: 1px dashed #fbbf24; 
                    padding: 15px; 
                    border-radius: 12px; 
                    margin: 20px 0; 
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <div style="color: #fbbf24; font-size: 10px; text-transform: uppercase; margin-bottom: 8px; font-weight: bold; letter-spacing: 1px;">
                ${randomAd.label}
            </div>
            <a href="${randomAd.link}" target="_blank" style="text-decoration: none;">
                <div style="color: #fff; font-weight: bold; font-size: 16px; margin-bottom: 5px;">${randomAd.title}</div>
                <div style="color: #94a3b8; font-size: 12px;">${randomAd.text}</div>
            </a>
        </div>
    `;

    adContainer.innerHTML = adContent;
}

// Запускаємо при завантаженні
document.addEventListener('DOMContentLoaded', loadAds);
