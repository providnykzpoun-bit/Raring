function loadAds() {
    const adContainer = document.getElementById('ad-space');
    if (!adContainer) return;

    // Тільки ваші нові позиції для ротації
    const ads = [
        {
            title: "💰 Зароби на каналі!",
            text: "Отримуй винагороду за прості дії у нашому новому боті.",
            link: "https://t.me/soapadsbot?start=ref_afd37e0a-6643-40d2-bd76-425e6f44b51a",
            label: "ЗАРОБІТОК"
        },
        {
            title: "🎁 Тут роздають крипту!",
            text: "Забирай свої бонуси та бери участь у роздачах токенів.",
            link: "https://t.me/exton_swap_bot?start=profile_0c08210de2_409059054",
            label: "AIRDROP"
        },
        {
            title: "🎰 Лотерея «На удачу»",
            text: "Випробуй свою фортуну! Можливо, саме ти станеш наступним переможцем.",
            link: "https://t.me/drugprgram",
            label: "ЛОТЕРЕЯ"
        },
        {
            title: "🛒 Магазин «Пиар Грам»",
            text: "Купуй послуги для просування свого каналу за вигідними цінами.",
            link: "https://t.me/Magagazinchik_bot?start=ctgr_115496",
            label: "МАГАЗИН"
        },
        {
            title: "🔄 Обмінник UA (LeslaSwap)",
            text: "Швидкий та надійний обмін активів прямо в Telegram.",
            link: "http://t.me/Leslaswap_bot",
            label: "ОБМІН"
        }
    ];

    // Рандомайзер вибору
    const randomAd = ads[Math.floor(Math.random() * ads.length)];

    // HTML код рекламного блоку
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

document.addEventListener('DOMContentLoaded', loadAds);
