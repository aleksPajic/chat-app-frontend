export const CHAT_APP_USERNAME_STORAGE_KEY = "ChatAppUsername";

// parse date to string format dd MMM yyyy HH:mm:ss
export function parseDate(date) {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`
}