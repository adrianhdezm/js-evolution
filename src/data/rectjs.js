'use strict';

import get from './../utils/get';

let urls = [
    'https://api.github.com/repositories/10270250/releases?page=1',
    'https://api.github.com/repositories/10270250/releases?page=2'
];

let data = get(urls).then(raw => {

    return new Promise((resolve,reject) => {
        let data = [];

        raw.forEach(page => {
            data = data.concat(JSON.parse(page));
        });
        resolve(data);
    });

});


export default data;