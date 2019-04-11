export default function FetchData(url, n) {
    return fetch(url).catch(function(error) {
        console.log("error FetchData")
        if (n === 1) throw error;
        return FetchData(url, n - 1);
    });
}