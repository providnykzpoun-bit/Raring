function loadAds() {
    const adContainer = document.getElementById('ad-space');
    if (!adContainer) return;

    // Масив з 5 варіантами реклами (включаючи нове посилання)
    const ads = [
        {
            title: "💰 Заробіток на каналі!",
            text: "Приєднуйся та заробляй прямо зараз через нашого офіційного бота.",
            link: "https://t.me/adm1notekabot?start=89b99e54-648a-49c1-912f-7b06b86543e6",
            label: "НОВА МОЖЛИВІСТЬ"
        },
        {
            title: "🔄 Швидкий обмін в LeslaSwap!",
            text: "Надійний обмінник для вашої зручності. Безпечно та швидко.",
            link: "http://t.me/Leslaswap_bot",
            label: "ОБМІННИК"
        },
        {
            title: "🚀 UA Piar Bot — заробляй UA!",
            text: "Виконуй прості завдання в Telegram та отримуй токени.",
            link: "http://t.me/Piarpiarpiar_bot",
            label: "ЗАРОБІТОК"
        },
        {
            title: "📊 Слідкуй за графіком UA Token!",
            text: "Будь у курсі всіх змін ціни на DEXTools. Не прогав момент!",
            link: "https://www.dextools.io/app/en/ton/pair-explorer/EQDqC7e4o5pzIWm3PfDQr3l96epyBezSn7dPjpCJ8GwAwnh9",
            label: "ТРЕЙДИНГ"
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
