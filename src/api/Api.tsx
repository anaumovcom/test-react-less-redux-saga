const uri = 'https://my-json-server.typicode.com/typicode/demo/posts';

export const fetchText = () => {
    return fetch(uri).then(response => response);
}