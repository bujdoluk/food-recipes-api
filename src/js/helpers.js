import { TIMEOUT_SECONDS } from "./config";
import { async } from 'regenerator-runtime';

const timeout = function (seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error(`Your request took too long time! Timeout after ${seconds} seconds.`))
        }, seconds * 1000);
    })
}


export const AJAX = async function (url, uploadData = undefined) {
    try {
        const fetchUrl = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
        }) : fetch(url);

        const res = await Promise.race([fetchUrl, timeout(TIMEOUT_SECONDS)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;

    } catch (err) {
        throw err;
    }
};