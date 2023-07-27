function httprequest(method, url, data) {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(function (response) {
        if (!response.ok) {
            throw new Error('Error: ' + response.status + ' ' + response.statusText);
        }
    });
    fetch ('GET', 'https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log('Usuarios:', response);
    })
    .catch((error) => {
        console.error('Error al obtener usuarios:', error);
    });

fetch ('GET', 'https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        console.log('Usuario:', response);
    })
    .catch((error) => {
        console.error('Error al obtener usuario:', error);
    });

fetch ('DELETE', 'https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        console.log('Usuario eliminado');
    })
    .catch((error) => {
        console.error('Error al eliminar usuario:', error);
    });
    return response.json();
}

