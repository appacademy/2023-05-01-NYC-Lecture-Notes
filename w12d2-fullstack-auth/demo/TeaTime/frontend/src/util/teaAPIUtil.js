import { csrfFetch } from "../store/csrf";

export const requestTeas = () => {
    return fetch('/api/teas');
};

export const postTea = (tea) => {
    // return fetch('/api/teas', {
    //     method: 'POST',
    //     body: JSON.stringify(tea),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // });
    return csrfFetch('/api/teas', {
        method: 'POST',
        body: JSON.stringify(tea)
    });
};