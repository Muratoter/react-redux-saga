

const create = () => {
    const getLocalizations = () => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    }).then(function (json) {
        return json;
    }).catch(err => {
        console.log("api error: ", err)
    })

    return {
        getLocalizations,
    }

}
export default {
    create
}