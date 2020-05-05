//获取两位数值，小于10前面自动加一
function getRealValue(value) {
    return value > 10 ? value : `0${value}`;
}

//将时间规范化
function handleDate(date) {
    const true_date = new Date(date);
    const years = true_date.getFullYear();
    const months = getRealValue(true_date.getMonth() + 1);
    const days = getRealValue(true_date.getDate());
    const hours = getRealValue(true_date.getHours());
    const minutes = getRealValue(true_date.getMinutes());
    const seconds = getRealValue(true_date.getSeconds());
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    }
}

//获得年月 yead年month月
export function getYearAndMonth(date) {
    const dt = handleDate(date);
    return dt.years + "年" + dt.months + "月";
}

//获得日 day
export function getJustDay(date) {
    const dt = handleDate(date);
    return dt.days;
}

//获取具体日期year-month-day格式
export function getFullDateLike_(date) {
    const dt = handleDate(date);
    return dt.years + '-' + dt.months + '-' + dt.days;
}

//获取具体日期year年month月day日格式
export function getFullDateLikeWord(date) {
    const dt = handleDate(date);
    return dt.years + '年' + dt.months + '月' + dt.days + "日";
}

//只需要时间，不要日期 h:m:s
export function getJustTime(date) {
    const dt = handleDate(date);
    return `${dt.hours}:${dt.minutes}:${dt.seconds}`
}

//获取具体时间，具体到秒 y-m-d h:m:s
export function getDetailTime(date) {
    const dt = handleDate(date);
    return `${dt.years}-${dt.months}-${dt.days} ${dt.hours}:${dt.minutes}:${dt.seconds}`
}
