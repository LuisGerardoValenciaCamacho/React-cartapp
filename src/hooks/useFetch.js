export const useGetFetch = async (url, params) => {
    await fetch(url, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
    })
    .catch(error => {
        return error;
    })
}