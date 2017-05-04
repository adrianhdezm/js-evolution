'use strict';

let data = [
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.9.1",
        "version": "v1.9.1",
        "project": "Polymer",
        "date": "2017-04-17T23:58:35Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.5",
        "version": "v2.0.0-rc.5",
        "project": "Polymer",
        "date": "2017-04-17T23:53:49Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.9.0",
        "version": "v1.9.0",
        "project": "Polymer",
        "date": "2017-04-14T00:40:50Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.4",
        "version": "v2.0.0-rc.4",
        "project": "Polymer",
        "date": "2017-04-14T00:25:15Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.3",
        "version": "v2.0.0-rc.3",
        "project": "Polymer",
        "date": "2017-03-15T04:25:10Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.2",
        "version": "v2.0.0-rc.2",
        "project": "Polymer",
        "date": "2017-03-07T22:19:13Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.1",
        "version": "v2.0.0-rc.1",
        "project": "Polymer",
        "date": "2017-03-04T01:56:47Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.8.1",
        "version": "v1.8.1",
        "project": "Polymer",
        "date": "2017-02-27T22:22:05Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.8.0",
        "version": "v1.8.0",
        "project": "Polymer",
        "date": "2017-02-07T00:42:37Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.7.1",
        "version": "v1.7.1",
        "project": "Polymer",
        "date": "2016-12-14T19:20:04Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.7.0",
        "version": "v1.7.0",
        "project": "Polymer",
        "date": "2016-09-28T21:40:01Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.6.1",
        "version": "v1.6.1",
        "project": "Polymer",
        "date": "2016-08-01T19:02:23Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.6.0",
        "version": "v1.6.0",
        "project": "Polymer",
        "date": "2016-06-29T22:51:15Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.5.0",
        "version": "v1.5.0",
        "project": "Polymer",
        "date": "2016-05-31T17:11:18Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.4.0",
        "version": "v1.4.0",
        "project": "Polymer",
        "date": "2016-03-18T17:57:08Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.3.1",
        "version": "v1.3.1",
        "project": "Polymer",
        "date": "2016-03-02T18:12:34Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.3.0",
        "version": "v1.3.0",
        "project": "Polymer",
        "date": "2016-02-22T19:39:42Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.2.4",
        "version": "v1.2.4",
        "project": "Polymer",
        "date": "2016-01-27T22:18:35Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.2.3",
        "version": "v1.2.3",
        "project": "Polymer",
        "date": "2015-11-17T01:31:37Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.2.2",
        "version": "v1.2.2",
        "project": "Polymer",
        "date": "2015-11-17T01:31:14Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.2.1",
        "version": "v1.2.1",
        "project": "Polymer",
        "date": "2015-10-29T22:35:41Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.2.0",
        "version": "v1.2.0",
        "project": "Polymer",
        "date": "2015-10-23T00:49:12Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.5",
        "version": "v1.1.5",
        "project": "Polymer",
        "date": "2015-10-08T21:18:00Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.4",
        "version": "v1.1.4",
        "project": "Polymer",
        "date": "2015-10-08T21:17:45Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.3",
        "version": "v1.1.3",
        "project": "Polymer",
        "date": "2015-10-08T21:17:19Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.2",
        "version": "v1.1.2",
        "project": "Polymer",
        "date": "2015-08-28T23:45:46Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.7",
        "version": "v1.0.7",
        "project": "Polymer",
        "date": "2015-08-20T22:38:14Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.8",
        "version": "v1.0.8",
        "project": "Polymer",
        "date": "2015-08-20T22:37:54Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.9",
        "version": "v1.0.9",
        "project": "Polymer",
        "date": "2015-08-20T22:37:34Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.1",
        "version": "v1.1.1",
        "project": "Polymer",
        "date": "2015-08-20T22:36:26Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.1.0",
        "version": "v1.1.0",
        "project": "Polymer",
        "date": "2015-08-17T16:16:01Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.6",
        "version": "v1.0.6",
        "project": "Polymer",
        "date": "2015-07-09T22:19:49Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.5",
        "version": "v1.0.5",
        "project": "Polymer",
        "date": "2015-06-26T01:57:37Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.2",
        "version": "v1.0.2",
        "project": "Polymer",
        "date": "2015-06-02T19:12:00Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.1",
        "version": "v1.0.1",
        "project": "Polymer",
        "date": "2015-06-02T19:11:47Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v1.0.0",
        "version": "v1.0.0",
        "project": "Polymer",
        "date": "2015-06-02T19:10:55Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.9.0",
        "version": "v0.9.0",
        "project": "Polymer",
        "date": "2015-05-17T00:29:16Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.5",
        "version": "0.5.5",
        "project": "Polymer",
        "date": "2015-02-23T19:54:26Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.4",
        "version": "0.5.4",
        "project": "Polymer",
        "date": "2015-01-24T00:19:42Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.3",
        "version": "0.5.3",
        "project": "Polymer",
        "date": "2015-01-21T22:39:52Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.2",
        "version": "0.5.2",
        "project": "Polymer",
        "date": "2014-12-15T19:48:24Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.1",
        "version": "0.5.1",
        "project": "Polymer",
        "date": "2014-11-12T22:54:10Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.5.0",
        "version": "0.5.0",
        "project": "Polymer",
        "date": "2014-11-11T19:45:31Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.4.2",
        "version": "0.4.2",
        "project": "Polymer",
        "date": "2014-10-07T19:11:32Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.4.1",
        "version": "0.4.1",
        "project": "Polymer",
        "date": "2014-09-19T16:48:50Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.4.0",
        "version": "0.4.0",
        "project": "Polymer",
        "date": "2014-08-28T22:54:31Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.5",
        "version": "0.3.5",
        "project": "Polymer",
        "date": "2014-08-08T00:48:37Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.4",
        "version": "0.3.4",
        "project": "Polymer",
        "date": "2014-07-11T19:43:18Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.3",
        "version": "0.3.3",
        "project": "Polymer",
        "date": "2014-06-20T00:41:35Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.2",
        "version": "0.3.2",
        "project": "Polymer",
        "date": "2014-06-09T19:50:45Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.1",
        "version": "0.3.1",
        "project": "Polymer",
        "date": "2014-05-30T20:02:10Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.3.0",
        "version": "0.3.0",
        "project": "Polymer",
        "date": "2014-05-28T18:27:12Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.2.4",
        "version": "0.2.4",
        "project": "Polymer",
        "date": "2014-05-12T21:52:22Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.2.3",
        "version": "0.2.3",
        "project": "Polymer",
        "date": "2014-04-18T23:01:29Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.2.2",
        "version": "0.2.2",
        "project": "Polymer",
        "date": "2014-04-01T18:03:20Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.2.1",
        "version": "0.2.1",
        "project": "Polymer",
        "date": "2014-03-07T20:48:47Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.2.0",
        "version": "0.2.0",
        "project": "Polymer",
        "date": "2014-02-15T02:01:46Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.1.4",
        "version": "0.1.4",
        "project": "Polymer",
        "date": "2014-01-27T20:14:07Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.1.3",
        "version": "0.1.3",
        "project": "Polymer",
        "date": "2014-01-17T01:18:50Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.1.2",
        "version": "0.1.2",
        "project": "Polymer",
        "date": "2014-01-10T17:56:10Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.1.1",
        "version": "0.1.1",
        "project": "Polymer",
        "date": "2013-12-12T01:28:03Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/0.1.0",
        "version": "0.1.0",
        "project": "Polymer",
        "date": "2013-11-27T18:31:14Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20131107",
        "version": "v0.0.20131107",
        "project": "Polymer",
        "date": "2013-11-07T22:12:11Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20131025",
        "version": "v0.0.20131025",
        "project": "Polymer",
        "date": "2013-10-25T20:25:46Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20131010",
        "version": "v0.0.20131010",
        "project": "Polymer",
        "date": "2013-10-10T23:33:22Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20131003",
        "version": "v0.0.20131003",
        "project": "Polymer",
        "date": "2013-10-04T00:02:26Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130912",
        "version": "v0.0.20130912",
        "project": "Polymer",
        "date": "2013-09-13T00:25:02Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130905",
        "version": "v0.0.20130905",
        "project": "Polymer",
        "date": "2013-09-05T22:03:55Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130829",
        "version": "v0.0.20130829",
        "project": "Polymer",
        "date": "2013-08-30T00:04:00Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130816",
        "version": "v0.0.20130816",
        "project": "Polymer",
        "date": "2013-08-22T22:13:47Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130815",
        "version": "v0.0.20130815",
        "project": "Polymer",
        "date": "2013-08-15T22:53:45Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130808",
        "version": "v0.0.20130808",
        "project": "Polymer",
        "date": "2013-08-08T22:30:48Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130801",
        "version": "v0.0.20130801",
        "project": "Polymer",
        "date": "2013-08-01T21:22:53Z"
    },
    {
        "url": "https://github.com/Polymer/polymer/releases/tag/v0.0.20130711",
        "version": "v0.0.20130711",
        "project": "Polymer",
        "date": "2013-07-11T21:04:51Z"
    }
];

export default data;