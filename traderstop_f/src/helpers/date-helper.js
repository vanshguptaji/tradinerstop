export const convertDateToUnixTimeStamp = (date) => {
    return Math.floor(date.getTime() / 1000)
}

export const convertUnixTimeStampToDate = (unixTimeStamp) => {
    const milliseconds = unixTimeStamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
    // return new Date(date.getFullYear() + years, date.getMonth() + months, date.getDate() + days + weeks * 7);
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + weeks * 7);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
}