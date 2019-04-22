function fetchData(url, n) {
    return fetch(url).catch(function(error) {
        if (n === 1) throw error;
        return fetchData(url, n - 1);
    });
}

function countNewPosts(oldData, newData) {
    let difference = newData.filter(firstArrayItem => !oldData.some(secondArrayItem => firstArrayItem.created_at === secondArrayItem.created_at));
    return difference.length;
}

export {
    fetchData,
    countNewPosts,
};