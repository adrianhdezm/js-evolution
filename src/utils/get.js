'use strict';

let getOne = function(url){
    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = () => {
            if(request.status === 200) {
                resolve(request.response);
            } else {
                reject(new Error(request.statusText));
            }
        };

        request.onerror = () => {
            reject(new Error("Unknown Error"))
        };

        request.send();

    });
};


export default function(urls){
    urls = urls.map(url => getOne(url));
    return Promise.all(urls);

};

