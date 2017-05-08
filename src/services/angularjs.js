'use strict';

import get from './../utils/get';

let urls = [
    'https://api.github.com/repositories/24195339/tags?per_page=100&page=1',
    'https://api.github.com/repositories/24195339/tags?per_page=100&page=2',
    'https://api.github.com/repositories/460078/tags?per_page=100&page=1',
    'https://api.github.com/repositories/460078/tags?per_page=100&page=2'
];

let dataQ = get(urls).then(raw => {

    return new Promise((resolve,reject) => {
        let data = [];

        raw.forEach(page => {
            data = data.concat(JSON.parse(page));
        });

        get(data.map(tag => tag.commit.url))
            .then( commits => {

                let response = commits.map(commit => {

                    commit = JSON.parse(commit);

                    let versionIndex = data.map(x => x.commit.sha).indexOf(commit.sha);

                    let version = data[versionIndex].name;
                    if(version.indexOf('v') > -1) version = version.substring(1);

                    return {
                        "url": commit.html_url,
                        "version": version,
                        "project": 'AngularJS',
                        "date": commit.commit.author.date,
                    };
                });
                resolve(response)

            });

    });

});


export default dataQ;