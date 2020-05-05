import {get} from "../Plugin/axios.method";
import {getDetailTime} from "../js/date.formate";

export async function getBlogList(params) {
    const list = await get('/api/blog/getBlogByPageSize_Index', params)
    return Promise.resolve(handleListDateFormdate(list))
}

function handleListDateFormdate(list) {
    list.forEach(item => {
        item.date = getDetailTime(item.date)
    })
    return list
}
