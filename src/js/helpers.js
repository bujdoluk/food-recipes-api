import { async } from 'regenerator-runtime';
import { TIMEOUT } from './config';

const timeout = function (s) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long to complete! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};

export const AJAX = async function (url, uploadData = undefined) {
    try {
        const fetchUrl = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
        }) : fetch(url);


        const res = await Promise.race([fetchUrl, timeout(TIMEOUT)]);
        const data = await res.JSON();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
}