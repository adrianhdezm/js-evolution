'use strict';

import get from './../utils/get';

let urls = [
    'https://api.github.com/repositories/167174/tags?page=1&per_page=100',
    'https://api.github.com/repositories/167174/tags?page=2&per_page=100'
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
                        "project": 'jQuery',
                        "date": commit.commit.committer.date,
                    };
                });
                resolve(response)

            });

    });

});


export default dataQ;