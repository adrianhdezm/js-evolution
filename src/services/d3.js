'use strict';

import get from './../utils/get';

let urls = [
    'https://api.github.com/repositories/943149/releases?per_page=100&page=1',
    'https://api.github.com/repositories/943149/releases?per_page=100&page=2'
];

let dataQ = get(urls).then(raw => {

    return new Promise((resolve,reject) => {
        let data = [];

        raw.forEach(page => {
            data = data.concat(JSON.parse(page));
        });


        data = data.map(item => {
            return {
                "url": item.html_url,
                "version": item.tag_name,
                "project": 'D3',
                "date": item.created_at
            };
        });


        resolve(data);
    });

});


export default dataQ;