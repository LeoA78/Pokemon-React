

export const getData = async (url_api) => {
    try {
        const response = await fetch(url_api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error); 
    }
}
