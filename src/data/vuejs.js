'use strict';

let data = [
    {
        "date": "2017-05-02T10:32:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.3.2",
        "project": "Vuejs",
        "version": "v2.3.2"
    },
    {
        "date": "2017-05-02T07:59:40Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.3.1",
        "project": "Vuejs",
        "version": "v2.3.1"
    },
    {
        "date": "2017-04-27T06:22:55Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.3.0",
        "project": "Vuejs",
        "version": "v2.3.0"
    },
    {
        "date": "2017-03-27T02:48:01Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.6",
        "project": "Vuejs",
        "version": "v2.2.6"
    },
    {
        "date": "2017-03-24T04:56:51Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.5",
        "project": "Vuejs",
        "version": "v2.2.5"
    },
    {
        "date": "2017-03-13T15:14:50Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.4",
        "project": "Vuejs",
        "version": "v2.2.4"
    },
    {
        "date": "2017-03-13T08:08:57Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.3",
        "project": "Vuejs",
        "version": "v2.2.3"
    },
    {
        "date": "2017-03-09T02:40:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.2",
        "project": "Vuejs",
        "version": "v2.2.2"
    },
    {
        "date": "2017-02-26T14:46:50Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.1",
        "project": "Vuejs",
        "version": "v2.2.1"
    },
    {
        "date": "2017-02-26T04:34:49Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.2.0",
        "project": "Vuejs",
        "version": "v2.2.0"
    },
    {
        "date": "2017-01-17T17:20:30Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.10",
        "project": "Vuejs",
        "version": "v2.1.10"
    },
    {
        "date": "2017-01-16T23:50:30Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.9",
        "project": "Vuejs",
        "version": "v2.1.9"
    },
    {
        "date": "2016-12-28T05:54:49Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.8",
        "project": "Vuejs",
        "version": "v2.1.8"
    },
    {
        "date": "2016-12-24T16:39:59Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.7",
        "project": "Vuejs",
        "version": "v2.1.7"
    },
    {
        "date": "2016-12-13T17:23:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.6",
        "project": "Vuejs",
        "version": "v2.1.6"
    },
    {
        "date": "2016-12-13T03:21:13Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.5",
        "project": "Vuejs",
        "version": "v2.1.5"
    },
    {
        "date": "2016-12-02T03:01:50Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.4",
        "project": "Vuejs",
        "version": "v2.1.4"
    },
    {
        "date": "2016-11-24T00:24:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.3",
        "project": "Vuejs",
        "version": "v2.1.3"
    },
    {
        "date": "2016-11-23T23:43:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.2",
        "project": "Vuejs",
        "version": "v2.1.2"
    },
    {
        "date": "2016-11-23T21:04:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.1",
        "project": "Vuejs",
        "version": "v2.1.1"
    },
    {
        "date": "2016-11-22T16:15:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.1.0",
        "project": "Vuejs",
        "version": "v2.1.0"
    },
    {
        "date": "2016-11-20T17:30:13Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.8",
        "project": "Vuejs",
        "version": "v2.0.8"
    },
    {
        "date": "2016-11-16T21:55:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.7",
        "project": "Vuejs",
        "version": "v2.0.7"
    },
    {
        "date": "2016-11-15T23:09:09Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.6",
        "project": "Vuejs",
        "version": "v2.0.6"
    },
    {
        "date": "2016-11-05T03:49:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.5",
        "project": "Vuejs",
        "version": "v2.0.5"
    },
    {
        "date": "2016-11-04T20:51:32Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.4",
        "project": "Vuejs",
        "version": "v2.0.4"
    },
    {
        "date": "2016-10-13T09:28:23Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.3",
        "project": "Vuejs",
        "version": "v2.0.3"
    },
    {
        "date": "2016-10-12T04:58:21Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.2",
        "project": "Vuejs",
        "version": "v2.0.2"
    },
    {
        "date": "2016-09-30T21:21:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.1",
        "project": "Vuejs",
        "version": "v2.0.1"
    },
    {
        "date": "2016-09-30T18:33:06Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0",
        "project": "Vuejs",
        "version": "v2.0.0"
    },
    {
        "date": "2016-09-27T21:12:48Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.8",
        "project": "Vuejs",
        "version": "v2.0.0-rc.8"
    },
    {
        "date": "2016-09-27T20:53:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.28",
        "project": "Vuejs",
        "version": "v1.0.28"
    },
    {
        "date": "2016-09-23T22:25:32Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.7",
        "project": "Vuejs",
        "version": "v2.0.0-rc.7"
    },
    {
        "date": "2016-09-23T19:54:28Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.27",
        "project": "Vuejs",
        "version": "v1.0.27"
    },
    {
        "date": "2016-09-13T13:22:19Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.6",
        "project": "Vuejs",
        "version": "v2.0.0-rc.6"
    },
    {
        "date": "2016-09-08T11:30:31Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.5",
        "project": "Vuejs",
        "version": "v2.0.0-rc.5"
    },
    {
        "date": "2016-08-29T19:49:47Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.4",
        "project": "Vuejs",
        "version": "v2.0.0-rc.4"
    },
    {
        "date": "2016-08-20T18:12:10Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.3",
        "project": "Vuejs",
        "version": "v2.0.0-rc.3"
    },
    {
        "date": "2016-08-16T03:40:00Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.2",
        "project": "Vuejs",
        "version": "v2.0.0-rc.2"
    },
    {
        "date": "2016-08-11T05:48:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.1",
        "project": "Vuejs",
        "version": "v2.0.0-rc.1"
    },
    {
        "date": "2016-08-10T05:02:47Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.8",
        "project": "Vuejs",
        "version": "v2.0.0-beta.8"
    },
    {
        "date": "2016-08-05T22:18:11Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.7",
        "project": "Vuejs",
        "version": "v2.0.0-beta.7"
    },
    {
        "date": "2016-08-01T19:27:48Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.6",
        "project": "Vuejs",
        "version": "v2.0.0-beta.6"
    },
    {
        "date": "2016-07-27T04:43:34Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.5",
        "project": "Vuejs",
        "version": "v2.0.0-beta.5"
    },
    {
        "date": "2016-07-26T02:07:00Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.4",
        "project": "Vuejs",
        "version": "v2.0.0-beta.4"
    },
    {
        "date": "2016-07-24T03:36:09Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.3",
        "project": "Vuejs",
        "version": "v2.0.0-beta.3"
    },
    {
        "date": "2016-07-17T05:56:33Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.2",
        "project": "Vuejs",
        "version": "v2.0.0-beta.2"
    },
    {
        "date": "2016-07-07T21:57:15Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.1",
        "project": "Vuejs",
        "version": "v2.0.0-beta.1"
    },
    {
        "date": "2016-06-28T21:18:25Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.26",
        "project": "Vuejs",
        "version": "v1.0.26"
    },
    {
        "date": "2016-06-28T09:04:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.8",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.8"
    },
    {
        "date": "2016-06-28T02:53:10Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.7",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.7"
    },
    {
        "date": "2016-06-22T19:52:03Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.6",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.6"
    },
    {
        "date": "2016-06-17T18:36:02Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.5",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.5"
    },
    {
        "date": "2016-06-16T22:33:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.25",
        "project": "Vuejs",
        "version": "v1.0.25"
    },
    {
        "date": "2016-06-16T17:04:38Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.4",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.4"
    },
    {
        "date": "2016-06-15T18:27:21Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.3",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.3"
    },
    {
        "date": "2016-06-13T23:39:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.2",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.2"
    },
    {
        "date": "2016-06-10T23:30:28Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.1",
        "project": "Vuejs",
        "version": "v2.0.0-alpha.1"
    },
    {
        "date": "2016-05-11T22:01:24Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.24",
        "project": "Vuejs",
        "version": "v1.0.24"
    },
    {
        "date": "2016-05-11T16:24:51Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.23",
        "project": "Vuejs",
        "version": "v1.0.23"
    },
    {
        "date": "2016-05-07T22:02:23Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.22",
        "project": "Vuejs",
        "version": "v1.0.22"
    },
    {
        "date": "2016-04-07T22:13:11Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.21",
        "project": "Vuejs",
        "version": "v1.0.21"
    },
    {
        "date": "2016-03-26T21:28:40Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.20",
        "project": "Vuejs",
        "version": "v1.0.20"
    },
    {
        "date": "2016-03-25T07:36:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.19",
        "project": "Vuejs",
        "version": "v1.0.19"
    },
    {
        "date": "2016-03-18T00:50:20Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.18",
        "project": "Vuejs",
        "version": "v1.0.18"
    },
    {
        "date": "2016-02-29T02:12:04Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.17",
        "project": "Vuejs",
        "version": "v1.0.17"
    },
    {
        "date": "2016-01-30T10:31:17Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.16",
        "project": "Vuejs",
        "version": "v1.0.16"
    },
    {
        "date": "2016-01-18T19:58:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.15",
        "project": "Vuejs",
        "version": "v1.0.15"
    },
    {
        "date": "2016-01-11T20:57:35Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.14",
        "project": "Vuejs",
        "version": "v1.0.14"
    },
    {
        "date": "2015-12-25T03:49:15Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.13",
        "project": "Vuejs",
        "version": "v1.0.13"
    },
    {
        "date": "2015-12-17T23:15:17Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.12",
        "project": "Vuejs",
        "version": "v1.0.12"
    },
    {
        "date": "2015-12-10T05:17:18Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.11",
        "project": "Vuejs",
        "version": "v1.0.11"
    },
    {
        "date": "2015-11-23T20:00:48Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.10",
        "project": "Vuejs",
        "version": "v1.0.10"
    },
    {
        "date": "2015-11-23T19:32:57Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v1.0.9",
        "project": "Vuejs",
        "version": "v1.0.9"
    },
    {
        "date": "2015-11-12T22:01:22Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.8",
        "project": "Vuejs",
        "version": "1.0.8"
    },
    {
        "date": "2015-11-06T17:27:49Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.7",
        "project": "Vuejs",
        "version": "1.0.7"
    },
    {
        "date": "2015-11-05T19:54:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.6",
        "project": "Vuejs",
        "version": "1.0.6"
    },
    {
        "date": "2015-11-05T19:46:39Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.5",
        "project": "Vuejs",
        "version": "1.0.5"
    },
    {
        "date": "2015-10-31T20:41:00Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.4",
        "project": "Vuejs",
        "version": "1.0.4"
    },
    {
        "date": "2015-10-29T02:17:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.3",
        "project": "Vuejs",
        "version": "1.0.3"
    },
    {
        "date": "2015-10-29T01:59:56Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.2",
        "project": "Vuejs",
        "version": "1.0.2"
    },
    {
        "date": "2015-10-27T18:01:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.1",
        "project": "Vuejs",
        "version": "1.0.1"
    },
    {
        "date": "2015-10-27T01:42:10Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0",
        "project": "Vuejs",
        "version": "1.0.0"
    },
    {
        "date": "2015-10-23T00:59:09Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-rc.2",
        "project": "Vuejs",
        "version": "1.0.0-rc.2"
    },
    {
        "date": "2015-10-15T21:36:20Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-rc.1",
        "project": "Vuejs",
        "version": "1.0.0-rc.1"
    },
    {
        "date": "2015-10-11T00:48:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-beta.4",
        "project": "Vuejs",
        "version": "1.0.0-beta.4"
    },
    {
        "date": "2015-10-02T20:31:11Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-beta.3",
        "project": "Vuejs",
        "version": "1.0.0-beta.3"
    },
    {
        "date": "2015-09-25T20:57:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-beta.2",
        "project": "Vuejs",
        "version": "1.0.0-beta.2"
    },
    {
        "date": "2015-09-25T20:44:01Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.6",
        "project": "Vuejs",
        "version": "1.0.0-alpha.6"
    },
    {
        "date": "2015-09-25T20:23:36Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.16",
        "project": "Vuejs",
        "version": "0.12.16"
    },
    {
        "date": "2015-09-21T19:13:35Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-beta.1",
        "project": "Vuejs",
        "version": "1.0.0-beta.1"
    },
    {
        "date": "2015-09-19T22:25:11Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.5",
        "project": "Vuejs",
        "version": "1.0.0-alpha.5"
    },
    {
        "date": "2015-09-19T21:37:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.15",
        "project": "Vuejs",
        "version": "0.12.15"
    },
    {
        "date": "2015-09-11T19:26:46Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.4",
        "project": "Vuejs",
        "version": "1.0.0-alpha.4"
    },
    {
        "date": "2015-09-11T18:30:55Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.14",
        "project": "Vuejs",
        "version": "0.12.14"
    },
    {
        "date": "2015-09-07T20:28:39Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.3",
        "project": "Vuejs",
        "version": "1.0.0-alpha.3"
    },
    {
        "date": "2015-09-07T20:11:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.13",
        "project": "Vuejs",
        "version": "0.12.13"
    },
    {
        "date": "2015-09-01T20:27:23Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.2",
        "project": "Vuejs",
        "version": "1.0.0-alpha.2"
    },
    {
        "date": "2015-08-31T21:14:53Z",
        "url": "https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.1",
        "project": "Vuejs",
        "version": "1.0.0-alpha.1"
    },
    {
        "date": "2015-08-26T09:09:20Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.12",
        "project": "Vuejs",
        "version": "0.12.12"
    },
    {
        "date": "2015-08-25T16:58:49Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.11",
        "project": "Vuejs",
        "version": "0.12.11"
    },
    {
        "date": "2015-08-10T03:46:19Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.10",
        "project": "Vuejs",
        "version": "0.12.10"
    },
    {
        "date": "2015-07-31T20:35:12Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.9",
        "project": "Vuejs",
        "version": "0.12.9"
    },
    {
        "date": "2015-07-23T17:22:34Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.8",
        "project": "Vuejs",
        "version": "0.12.8"
    },
    {
        "date": "2015-07-07T18:59:18Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.7",
        "project": "Vuejs",
        "version": "0.12.7"
    },
    {
        "date": "2015-07-05T07:59:03Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.6",
        "project": "Vuejs",
        "version": "0.12.6"
    },
    {
        "date": "2015-07-02T15:46:03Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.5",
        "project": "Vuejs",
        "version": "0.12.5"
    },
    {
        "date": "2015-06-25T22:28:22Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.4",
        "project": "Vuejs",
        "version": "0.12.4"
    },
    {
        "date": "2015-06-25T17:39:58Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.3",
        "project": "Vuejs",
        "version": "0.12.3"
    },
    {
        "date": "2015-06-25T14:53:16Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.2",
        "project": "Vuejs",
        "version": "0.12.2"
    },
    {
        "date": "2015-06-14T05:29:08Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.1",
        "project": "Vuejs",
        "version": "0.12.1"
    },
    {
        "date": "2015-06-12T17:35:13Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0",
        "project": "Vuejs",
        "version": "0.12.0"
    },
    {
        "date": "2015-06-04T19:15:08Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-rc2",
        "project": "Vuejs",
        "version": "0.12.0-rc2"
    },
    {
        "date": "2015-06-01T21:03:45Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-rc",
        "project": "Vuejs",
        "version": "0.12.0-rc"
    },
    {
        "date": "2015-05-30T02:45:22Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-beta5",
        "project": "Vuejs",
        "version": "0.12.0-beta5"
    },
    {
        "date": "2015-05-26T15:31:57Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-beta4",
        "project": "Vuejs",
        "version": "0.12.0-beta4"
    },
    {
        "date": "2015-05-22T20:14:34Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-beta3",
        "project": "Vuejs",
        "version": "0.12.0-beta3"
    },
    {
        "date": "2015-05-16T18:22:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.12.0-beta2",
        "project": "Vuejs",
        "version": "0.12.0-beta2"
    },
    {
        "date": "2015-05-07T19:07:01Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.10",
        "project": "Vuejs",
        "version": "0.11.10"
    },
    {
        "date": "2015-05-06T21:19:22Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.9",
        "project": "Vuejs",
        "version": "0.11.9"
    },
    {
        "date": "2015-04-21T20:12:55Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.8",
        "project": "Vuejs",
        "version": "0.11.8"
    },
    {
        "date": "2015-04-21T03:24:55Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.7",
        "project": "Vuejs",
        "version": "0.11.7"
    },
    {
        "date": "2015-04-18T07:18:21Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.6",
        "project": "Vuejs",
        "version": "0.11.6"
    },
    {
        "date": "2015-02-05T21:32:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.5",
        "project": "Vuejs",
        "version": "0.11.5"
    },
    {
        "date": "2014-12-07T21:01:27Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.4",
        "project": "Vuejs",
        "version": "0.11.4"
    },
    {
        "date": "2014-12-02T17:31:06Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.3",
        "project": "Vuejs",
        "version": "0.11.3"
    },
    {
        "date": "2014-12-02T02:45:12Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.2",
        "project": "Vuejs",
        "version": "0.11.2"
    },
    {
        "date": "2014-12-01T00:25:18Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.1",
        "project": "Vuejs",
        "version": "0.11.1"
    },
    {
        "date": "2014-11-07T02:30:08Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.0",
        "project": "Vuejs",
        "version": "0.11.0"
    },
    {
        "date": "2014-10-24T04:25:18Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.0-rc3",
        "project": "Vuejs",
        "version": "0.11.0-rc3"
    },
    {
        "date": "2014-10-07T17:27:40Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.0-rc2",
        "project": "Vuejs",
        "version": "0.11.0-rc2"
    },
    {
        "date": "2014-09-27T01:25:50Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.11.0-rc",
        "project": "Vuejs",
        "version": "0.11.0-rc"
    },
    {
        "date": "2014-07-29T04:02:52Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.6",
        "project": "Vuejs",
        "version": "v0.10.6"
    },
    {
        "date": "2014-06-06T19:40:24Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.5",
        "project": "Vuejs",
        "version": "v0.10.5"
    },
    {
        "date": "2014-04-25T19:59:37Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.4",
        "project": "Vuejs",
        "version": "v0.10.4"
    },
    {
        "date": "2014-03-26T23:43:48Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.3",
        "project": "Vuejs",
        "version": "v0.10.3"
    },
    {
        "date": "2014-03-25T04:21:52Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.2",
        "project": "Vuejs",
        "version": "v0.10.2"
    },
    {
        "date": "2014-03-24T08:13:34Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.1",
        "project": "Vuejs",
        "version": "v0.10.1"
    },
    {
        "date": "2014-03-23T19:00:35Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.10.0",
        "project": "Vuejs",
        "version": "v0.10.0"
    },
    {
        "date": "2014-03-17T17:34:22Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.10.0-rc",
        "project": "Vuejs",
        "version": "0.10.0-rc"
    },
    {
        "date": "2014-03-03T00:51:31Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.9.3",
        "project": "Vuejs",
        "version": "v0.9.3"
    },
    {
        "date": "2014-02-25T22:31:01Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.9.2",
        "project": "Vuejs",
        "version": "v0.9.2"
    },
    {
        "date": "2014-02-25T15:36:12Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.9.1",
        "project": "Vuejs",
        "version": "v0.9.1"
    },
    {
        "date": "2014-02-25T06:34:14Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.9.0",
        "project": "Vuejs",
        "version": "v0.9.0"
    },
    {
        "date": "2014-02-20T23:47:51Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.8",
        "project": "Vuejs",
        "version": "v0.8.8"
    },
    {
        "date": "2014-02-20T23:46:53Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.7",
        "project": "Vuejs",
        "version": "v0.8.7"
    },
    {
        "date": "2014-02-14T07:12:55Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.6",
        "project": "Vuejs",
        "version": "v0.8.6"
    },
    {
        "date": "2014-02-10T22:27:32Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.5",
        "project": "Vuejs",
        "version": "v0.8.5"
    },
    {
        "date": "2014-02-09T02:50:18Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.4",
        "project": "Vuejs",
        "version": "v0.8.4"
    },
    {
        "date": "2014-02-06T02:25:25Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.3",
        "project": "Vuejs",
        "version": "v0.8.3"
    },
    {
        "date": "2014-02-03T22:20:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.2",
        "project": "Vuejs",
        "version": "v0.8.2"
    },
    {
        "date": "2014-02-03T14:23:39Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.1",
        "project": "Vuejs",
        "version": "v0.8.1"
    },
    {
        "date": "2014-01-27T05:48:09Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.8.0",
        "project": "Vuejs",
        "version": "v0.8.0"
    },
    {
        "date": "2014-01-19T03:52:58Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.6",
        "project": "Vuejs",
        "version": "v0.7.6"
    },
    {
        "date": "2014-01-13T21:06:05Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.5",
        "project": "Vuejs",
        "version": "v0.7.5"
    },
    {
        "date": "2014-01-10T23:23:58Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.4",
        "project": "Vuejs",
        "version": "v0.7.4"
    },
    {
        "date": "2014-01-06T21:04:35Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.3",
        "project": "Vuejs",
        "version": "v0.7.3"
    },
    {
        "date": "2013-12-28T05:50:05Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.2",
        "project": "Vuejs",
        "version": "v0.7.2"
    },
    {
        "date": "2013-12-27T02:25:13Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.1",
        "project": "Vuejs",
        "version": "v0.7.1"
    },
    {
        "date": "2013-12-24T01:27:31Z",
        "url": "https://github.com/vuejs/vue/releases/tag/v0.7.0",
        "project": "Vuejs",
        "version": "v0.7.0"
    },
    {
        "date": "2013-12-07T23:04:42Z",
        "url": "https://github.com/vuejs/vue/releases/tag/0.6.0",
        "project": "Vuejs",
        "version": "0.6.0"
    }
];

export default data;