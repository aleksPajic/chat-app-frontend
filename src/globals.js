export const CHAT_APP_USERNAME_STORAGE_KEY = "ChatAppUsername";

// parse date to string format yyyy-MM-dd hh:mm:ss
export function getCurrentDateParsed() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const mintes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return `${year}-${month}-${day} ${hours}:${mintes}:${seconds}`
}