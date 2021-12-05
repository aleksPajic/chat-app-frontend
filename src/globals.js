export const CHAT_APP_USERNAME_STORAGE_KEY = "ChatAppUsername";

// parse date to string format dd MMM yyyy HH:mm:ss
export function parseDate(date) {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    let day = date.getDate();
    day = day < 9 ? '0'.concat(day) : day;
    let hours = date.getHours();
    hours = hours < 9 ? '0'.concat(hours) : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 9 ? '0'.concat(minutes) : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 9 ? '0'.concat(seconds) : seconds;
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`
}