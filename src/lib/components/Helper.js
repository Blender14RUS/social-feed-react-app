function FetchData(url, n) {
    return fetch(url).catch(function(error) {
        if (n === 1) throw error;
        return FetchData(url, n - 1);
    });
}

function CountNewPosts(oldData, newData) {
    let difference = newData.filter(firstArrayItem => !oldData.some(secondArrayItem => firstArrayItem.created_at === secondArrayItem.created_at));
    return difference.length;
}

export {
    FetchData,
    CountNewPosts,
 };