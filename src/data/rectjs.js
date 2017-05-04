'use strict';

let data = [
    {
        "version": "v15.5.4",
        "url": "https://github.com/facebook/react/releases/tag/v15.5.4",
        "date": "2017-05-01T16:20:19Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.5.3",
        "url": "https://github.com/facebook/react/releases/tag/v15.5.3",
        "date": "2017-05-01T16:19:43Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.5.2",
        "url": "https://github.com/facebook/react/releases/tag/v15.5.2",
        "date": "2017-05-01T16:19:06Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.5.1",
        "url": "https://github.com/facebook/react/releases/tag/v15.5.1",
        "date": "2017-05-01T16:16:18Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.5.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.5.0",
        "date": "2017-04-07T21:43:16Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.4.2",
        "url": "https://github.com/facebook/react/releases/tag/v15.4.2",
        "date": "2017-01-06T20:32:46Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.4.1",
        "url": "https://github.com/facebook/react/releases/tag/v15.4.1",
        "date": "2016-11-23T02:01:23Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.4.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.4.0",
        "date": "2016-11-16T14:37:23Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.3.2",
        "url": "https://github.com/facebook/react/releases/tag/v15.3.2",
        "date": "2016-09-19T17:54:25Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.3.1",
        "url": "https://github.com/facebook/react/releases/tag/v15.3.1",
        "date": "2016-08-19T18:52:36Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.3.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.3.0",
        "date": "2016-07-29T18:46:39Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.2.1",
        "url": "https://github.com/facebook/react/releases/tag/v15.2.1",
        "date": "2016-07-08T22:45:33Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.2.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.2.0",
        "date": "2016-07-01T19:03:22Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.1.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.1.0",
        "date": "2016-05-20T23:18:26Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.0.2",
        "url": "https://github.com/facebook/react/releases/tag/v15.0.2",
        "date": "2016-04-30T00:42:36Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.0.1",
        "url": "https://github.com/facebook/react/releases/tag/v15.0.1",
        "date": "2016-04-08T18:33:15Z",
        "project": "ReactJS"
    },
    {
        "version": "v15.0.0",
        "url": "https://github.com/facebook/react/releases/tag/v15.0.0",
        "date": "2016-04-08T16:05:25Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.8",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.8",
        "date": "2016-03-29T17:35:57Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.7",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.7",
        "date": "2016-01-28T20:26:37Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.4",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.4",
        "date": "2016-01-06T23:58:19Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.5",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.5",
        "date": "2016-01-06T23:57:28Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.6",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.6",
        "date": "2016-01-06T23:56:47Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.3",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.3",
        "date": "2015-11-24T21:55:07Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.2",
        "date": "2015-11-02T20:08:22Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.1",
        "date": "2015-10-28T21:40:16Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.14.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.14.0",
        "date": "2015-10-09T15:54:27Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.3",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.3",
        "date": "2015-06-18T06:55:32Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.9.0-rc1",
        "url": "https://github.com/facebook/react/releases/tag/v0.9.0-rc1",
        "date": "2015-04-18T22:48:43Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.10.0-rc1",
        "url": "https://github.com/facebook/react/releases/tag/v0.10.0-rc1",
        "date": "2015-04-18T22:48:41Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.11.0-rc1",
        "url": "https://github.com/facebook/react/releases/tag/v0.11.0-rc1",
        "date": "2015-04-18T22:48:35Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.12.0-rc1",
        "url": "https://github.com/facebook/react/releases/tag/v0.12.0-rc1",
        "date": "2015-04-18T22:45:22Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.0-rc1",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.0-rc1",
        "date": "2015-04-18T22:44:16Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.0-rc2",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.0-rc2",
        "date": "2015-04-18T22:43:48Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.0",
        "date": "2015-04-18T22:43:13Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.1",
        "date": "2015-04-18T22:42:17Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.13.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.13.2",
        "date": "2015-04-18T22:41:12Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.12.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.12.2",
        "date": "2015-01-05T16:45:12Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.12.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.12.1",
        "date": "2014-11-21T00:33:28Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.12.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.12.0",
        "date": "2014-11-21T00:33:26Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.11.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.11.2",
        "date": "2014-11-21T00:33:25Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.11.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.11.1",
        "date": "2014-11-21T00:33:23Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.11.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.11.0",
        "date": "2014-11-21T00:33:02Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.10.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.10.0",
        "date": "2014-11-21T00:32:50Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.9.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.9.0",
        "date": "2014-03-04T23:10:29Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.8.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.8.0",
        "date": "2013-12-20T05:53:19Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.5.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.5.2",
        "date": "2013-12-19T17:48:21Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.4.2",
        "url": "https://github.com/facebook/react/releases/tag/v0.4.2",
        "date": "2013-12-19T17:46:57Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.5.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.5.1",
        "date": "2013-10-29T21:55:17Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.5.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.5.0",
        "date": "2013-10-19T22:14:07Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.4.1",
        "url": "https://github.com/facebook/react/releases/tag/v0.4.1",
        "date": "2013-07-29T18:01:22Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.4.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.4.0",
        "date": "2013-07-19T19:43:51Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.3.0",
        "url": "https://github.com/facebook/react/releases/tag/v0.3.0",
        "date": "2013-07-02T20:29:33Z",
        "project": "ReactJS"
    },
    {
        "version": "v0.3.3",
        "url": "https://github.com/facebook/react/releases/tag/v0.3.3",
        "date": "2013-07-02T20:27:44Z",
        "project": "ReactJS"
    }
];

export default data;