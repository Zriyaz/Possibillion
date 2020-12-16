export const getHeadData = () => {
    return fetch("http://localhost:8000/api", {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
