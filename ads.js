function loadAds() {
    const adContainer = document.getElementById('ad-space');
    if (!adContainer) return;

    // Ваші актуальні рекламні позиції
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

    // Вибір випадкової реклами
    const randomAd = ads[Math.floor(Math.random() * ads.length)];

    // HTML код з блоком замовлення реклами зверху
    const adContent = `
        <div style="margin: 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid #334155; background: #111827;">
            <div style="background: #1e293b; padding: 8px 15px; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase;">Реклама в боті</span>
                <a href="http://t.me/tokenpist_bot" target="_blank" style="color: #fbbf24; font-size: 11px; text-decoration: none; font-weight: bold;">
                    Замовити 📩
                </a>
            </div>

            <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 18px; text-align: center;">
                <div style="color: #fbbf24; font-size: 10px; text-transform: uppercase; margin-bottom: 8px; font-weight: bold; letter-spacing: 1px;">
                    ${randomAd.label}
                </div>
                <a href="${randomAd.link}" target="_blank" style="text-decoration: none;">
                    <div style="color: #fff; font-weight: bold; font-size: 17px; margin-bottom: 5px;">${randomAd.title}</div>
                    <div style="color: #94a3b8; font-size: 13px;">${randomAd.text}</div>
                </a>
            </div>
        </div>
    `;

    adContainer.innerHTML = adContent;
}

document.addEventListener('DOMContentLoaded', loadAds);
