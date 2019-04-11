export default function FetchData(url, n) {
    return fetch(url).catch(function(error) {
        if (n === 1) throw error;
        return FetchData(url, n - 1);
    });
}