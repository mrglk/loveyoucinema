export function getPageLang() {
    const cookies = document.cookie.split(';');
    const langCookie = cookies.find(cookie => cookie.trim().startsWith('lang='));
    const langCookieValue = langCookie.split('=')[1];
    return langCookieValue;
}