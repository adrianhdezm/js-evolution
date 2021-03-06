'use strict';

const data = [
	[
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.17-beta.0',
			version: 'v2.5.17-beta.0',
			project: 'VueJS',
			date: '2018-03-23T23:29:04Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.16',
			version: 'v2.5.16',
			project: 'VueJS',
			date: '2018-03-13T22:14:21Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.15',
			version: 'v2.5.15',
			project: 'VueJS',
			date: '2018-03-10T23:36:44Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.14',
			version: 'v2.5.14',
			project: 'VueJS',
			date: '2018-03-09T21:41:49Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.13',
			version: 'v2.5.13',
			project: 'VueJS',
			date: '2017-12-19T19:06:52Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.12',
			version: 'v2.5.12',
			project: 'VueJS',
			date: '2017-12-19T14:54:15Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.11',
			version: 'v2.5.11',
			project: 'VueJS',
			date: '2017-12-14T16:56:02Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.10',
			version: 'v2.5.10',
			project: 'VueJS',
			date: '2017-12-12T23:16:40Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.9',
			version: 'v2.5.9',
			project: 'VueJS',
			date: '2017-11-27T17:43:32Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.8',
			version: 'v2.5.8',
			project: 'VueJS',
			date: '2017-11-21T14:42:18Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.7',
			version: 'v2.5.7',
			project: 'VueJS',
			date: '2017-11-20T19:49:24Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.6',
			version: 'v2.5.6',
			project: 'VueJS',
			date: '2017-11-18T19:44:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.5',
			version: 'v2.5.5',
			project: 'VueJS',
			date: '2017-11-17T16:36:55Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.4',
			version: 'v2.5.4',
			project: 'VueJS',
			date: '2017-11-16T19:53:23Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.3',
			version: 'v2.5.3',
			project: 'VueJS',
			date: '2017-11-03T21:11:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.2',
			version: 'v2.5.2',
			project: 'VueJS',
			date: '2017-10-13T20:21:00Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.1',
			version: 'v2.5.1',
			project: 'VueJS',
			date: '2017-10-13T14:14:32Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.5.0',
			version: 'v2.5.0',
			project: 'VueJS',
			date: '2017-10-13T03:07:14Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.4.4',
			version: 'v2.4.4',
			project: 'VueJS',
			date: '2017-09-14T15:32:41Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.4.3',
			version: 'v2.4.3',
			project: 'VueJS',
			date: '2017-09-13T07:57:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.4.2',
			version: 'v2.4.2',
			project: 'VueJS',
			date: '2017-07-21T04:28:42Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.4.1',
			version: 'v2.4.1',
			project: 'VueJS',
			date: '2017-07-13T06:40:24Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.4.0',
			version: 'v2.4.0',
			project: 'VueJS',
			date: '2017-07-13T05:58:37Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.3.4',
			version: 'v2.3.4',
			project: 'VueJS',
			date: '2017-06-08T04:54:13Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.3.3',
			version: 'v2.3.3',
			project: 'VueJS',
			date: '2017-05-09T16:57:08Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.3.2',
			version: 'v2.3.2',
			project: 'VueJS',
			date: '2017-05-02T10:29:59Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.3.1',
			version: 'v2.3.1',
			project: 'VueJS',
			date: '2017-05-02T07:58:53Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.3.0',
			version: 'v2.3.0',
			project: 'VueJS',
			date: '2017-04-27T06:22:09Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.6',
			version: 'v2.2.6',
			project: 'VueJS',
			date: '2017-03-27T02:46:09Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.5',
			version: 'v2.2.5',
			project: 'VueJS',
			date: '2017-03-24T04:53:32Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.4',
			version: 'v2.2.4',
			project: 'VueJS',
			date: '2017-03-13T15:08:09Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.3',
			version: 'v2.2.3',
			project: 'VueJS',
			date: '2017-03-13T08:07:59Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.2',
			version: 'v2.2.2',
			project: 'VueJS',
			date: '2017-03-09T02:32:39Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.1',
			version: 'v2.2.1',
			project: 'VueJS',
			date: '2017-02-26T13:10:52Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.2.0',
			version: 'v2.2.0',
			project: 'VueJS',
			date: '2017-02-26T04:28:15Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.10',
			version: 'v2.1.10',
			project: 'VueJS',
			date: '2017-01-17T17:17:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.9',
			version: 'v2.1.9',
			project: 'VueJS',
			date: '2017-01-16T23:48:07Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.8',
			version: 'v2.1.8',
			project: 'VueJS',
			date: '2016-12-28T05:54:35Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.7',
			version: 'v2.1.7',
			project: 'VueJS',
			date: '2016-12-24T16:36:17Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.6',
			version: 'v2.1.6',
			project: 'VueJS',
			date: '2016-12-13T17:22:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.5',
			version: 'v2.1.5',
			project: 'VueJS',
			date: '2016-12-13T03:09:29Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.4',
			version: 'v2.1.4',
			project: 'VueJS',
			date: '2016-12-02T03:01:19Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.3',
			version: 'v2.1.3',
			project: 'VueJS',
			date: '2016-11-24T00:22:03Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.2',
			version: 'v2.1.2',
			project: 'VueJS',
			date: '2016-11-23T23:42:05Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.1',
			version: 'v2.1.1',
			project: 'VueJS',
			date: '2016-11-23T21:00:42Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.1.0',
			version: 'v2.1.0',
			project: 'VueJS',
			date: '2016-11-22T16:15:07Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.8',
			version: 'v2.0.8',
			project: 'VueJS',
			date: '2016-11-20T03:14:59Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.7',
			version: 'v2.0.7',
			project: 'VueJS',
			date: '2016-11-16T21:54:25Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.6',
			version: 'v2.0.6',
			project: 'VueJS',
			date: '2016-11-15T23:05:02Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.5',
			version: 'v2.0.5',
			project: 'VueJS',
			date: '2016-11-05T03:47:26Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.4',
			version: 'v2.0.4',
			project: 'VueJS',
			date: '2016-11-04T20:47:03Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.3',
			version: 'v2.0.3',
			project: 'VueJS',
			date: '2016-10-13T09:27:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.2',
			version: 'v2.0.2',
			project: 'VueJS',
			date: '2016-10-12T04:54:07Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.1',
			version: 'v2.0.1',
			project: 'VueJS',
			date: '2016-09-30T21:12:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0',
			version: 'v2.0.0',
			project: 'VueJS',
			date: '2016-09-30T18:32:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.8',
			version: 'v2.0.0-rc.8',
			project: 'VueJS',
			date: '2016-09-27T21:08:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.28',
			version: 'v1.0.28',
			project: 'VueJS',
			date: '2016-09-27T20:45:35Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.7',
			version: 'v2.0.0-rc.7',
			project: 'VueJS',
			date: '2016-09-23T22:24:50Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.27',
			version: 'v1.0.27',
			project: 'VueJS',
			date: '2016-09-23T19:51:31Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.6',
			version: 'v2.0.0-rc.6',
			project: 'VueJS',
			date: '2016-09-13T13:21:02Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.5',
			version: 'v2.0.0-rc.5',
			project: 'VueJS',
			date: '2016-09-08T11:29:48Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.4',
			version: 'v2.0.0-rc.4',
			project: 'VueJS',
			date: '2016-08-29T19:49:00Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.3',
			version: 'v2.0.0-rc.3',
			project: 'VueJS',
			date: '2016-08-20T18:04:54Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.2',
			version: 'v2.0.0-rc.2',
			project: 'VueJS',
			date: '2016-08-16T03:39:07Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-rc.1',
			version: 'v2.0.0-rc.1',
			project: 'VueJS',
			date: '2016-08-11T05:43:09Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.8',
			version: 'v2.0.0-beta.8',
			project: 'VueJS',
			date: '2016-08-10T04:55:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.7',
			version: 'v2.0.0-beta.7',
			project: 'VueJS',
			date: '2016-08-05T22:14:22Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.6',
			version: 'v2.0.0-beta.6',
			project: 'VueJS',
			date: '2016-08-01T19:31:13Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.5',
			version: 'v2.0.0-beta.5',
			project: 'VueJS',
			date: '2016-07-27T04:25:41Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.4',
			version: 'v2.0.0-beta.4',
			project: 'VueJS',
			date: '2016-07-26T02:07:27Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.3',
			version: 'v2.0.0-beta.3',
			project: 'VueJS',
			date: '2016-07-24T02:48:10Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.2',
			version: 'v2.0.0-beta.2',
			project: 'VueJS',
			date: '2016-07-17T05:53:45Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-beta.1',
			version: 'v2.0.0-beta.1',
			project: 'VueJS',
			date: '2016-07-07T21:53:22Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.26',
			version: 'v1.0.26',
			project: 'VueJS',
			date: '2016-06-28T20:58:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.8',
			version: 'v2.0.0-alpha.8',
			project: 'VueJS',
			date: '2016-06-28T09:03:11Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.7',
			version: 'v2.0.0-alpha.7',
			project: 'VueJS',
			date: '2016-06-28T02:25:13Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.6',
			version: 'v2.0.0-alpha.6',
			project: 'VueJS',
			date: '2016-06-22T19:33:54Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.5',
			version: 'v2.0.0-alpha.5',
			project: 'VueJS',
			date: '2016-06-17T18:22:51Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.25',
			version: 'v1.0.25',
			project: 'VueJS',
			date: '2016-06-16T22:29:31Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.4',
			version: 'v2.0.0-alpha.4',
			project: 'VueJS',
			date: '2016-06-16T17:00:55Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.3',
			version: 'v2.0.0-alpha.3',
			project: 'VueJS',
			date: '2016-06-15T18:22:40Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.2',
			version: 'v2.0.0-alpha.2',
			project: 'VueJS',
			date: '2016-06-13T23:36:47Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.1',
			version: 'v2.0.0-alpha.1',
			project: 'VueJS',
			date: '2016-06-10T23:25:16Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.24',
			version: 'v1.0.24',
			project: 'VueJS',
			date: '2016-05-11T21:57:29Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.23',
			version: 'v1.0.23',
			project: 'VueJS',
			date: '2016-05-11T16:20:50Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.22',
			version: 'v1.0.22',
			project: 'VueJS',
			date: '2016-05-07T21:59:16Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.21',
			version: 'v1.0.21',
			project: 'VueJS',
			date: '2016-04-07T22:08:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.20',
			version: 'v1.0.20',
			project: 'VueJS',
			date: '2016-03-26T21:20:06Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.19',
			version: 'v1.0.19',
			project: 'VueJS',
			date: '2016-03-25T07:19:18Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.18',
			version: 'v1.0.18',
			project: 'VueJS',
			date: '2016-03-18T00:37:42Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.17',
			version: 'v1.0.17',
			project: 'VueJS',
			date: '2016-02-29T01:17:19Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.16',
			version: 'v1.0.16',
			project: 'VueJS',
			date: '2016-01-30T09:41:39Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.15',
			version: 'v1.0.15',
			project: 'VueJS',
			date: '2016-01-18T19:43:44Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.14',
			version: 'v1.0.14',
			project: 'VueJS',
			date: '2016-01-11T20:12:26Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.13',
			version: 'v1.0.13',
			project: 'VueJS',
			date: '2015-12-24T22:39:37Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.12',
			version: 'v1.0.12',
			project: 'VueJS',
			date: '2015-12-17T23:12:09Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.11',
			version: 'v1.0.11',
			project: 'VueJS',
			date: '2015-12-10T05:00:07Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.10',
			version: 'v1.0.10',
			project: 'VueJS',
			date: '2015-11-23T19:59:13Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v1.0.9',
			version: 'v1.0.9',
			project: 'VueJS',
			date: '2015-11-23T19:29:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.8',
			version: '1.0.8',
			project: 'VueJS',
			date: '2015-11-12T21:58:49Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.7',
			version: '1.0.7',
			project: 'VueJS',
			date: '2015-11-06T16:37:59Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.6',
			version: '1.0.6',
			project: 'VueJS',
			date: '2015-11-05T19:52:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.5',
			version: '1.0.5',
			project: 'VueJS',
			date: '2015-11-05T19:36:21Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.4',
			version: '1.0.4',
			project: 'VueJS',
			date: '2015-10-31T20:39:36Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.3',
			version: '1.0.3',
			project: 'VueJS',
			date: '2015-10-29T02:13:44Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.2',
			version: '1.0.2',
			project: 'VueJS',
			date: '2015-10-29T01:46:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.1',
			version: '1.0.1',
			project: 'VueJS',
			date: '2015-10-27T17:58:27Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0',
			version: '1.0.0',
			project: 'VueJS',
			date: '2015-10-27T01:40:11Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-rc.2',
			version: '1.0.0-rc.2',
			project: 'VueJS',
			date: '2015-10-23T00:43:31Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-rc.1',
			version: '1.0.0-rc.1',
			project: 'VueJS',
			date: '2015-10-15T21:14:04Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-beta.4',
			version: '1.0.0-beta.4',
			project: 'VueJS',
			date: '2015-10-11T00:47:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-beta.3',
			version: '1.0.0-beta.3',
			project: 'VueJS',
			date: '2015-10-02T20:17:37Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-beta.2',
			version: '1.0.0-beta.2',
			project: 'VueJS',
			date: '2015-09-25T20:53:08Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.6',
			version: '1.0.0-alpha.6',
			project: 'VueJS',
			date: '2015-09-25T20:34:50Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.16',
			version: '0.12.16',
			project: 'VueJS',
			date: '2015-09-25T20:19:56Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-beta.1',
			version: '1.0.0-beta.1',
			project: 'VueJS',
			date: '2015-09-21T19:11:47Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.5',
			version: '1.0.0-alpha.5',
			project: 'VueJS',
			date: '2015-09-19T22:14:37Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.15',
			version: '0.12.15',
			project: 'VueJS',
			date: '2015-09-19T21:33:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.4',
			version: '1.0.0-alpha.4',
			project: 'VueJS',
			date: '2015-09-11T18:27:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.14',
			version: '0.12.14',
			project: 'VueJS',
			date: '2015-09-11T18:16:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.3',
			version: '1.0.0-alpha.3',
			project: 'VueJS',
			date: '2015-09-07T20:21:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.13',
			version: '0.12.13',
			project: 'VueJS',
			date: '2015-09-07T20:10:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.2',
			version: '1.0.0-alpha.2',
			project: 'VueJS',
			date: '2015-09-01T20:24:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/1.0.0-alpha.1',
			version: '1.0.0-alpha.1',
			project: 'VueJS',
			date: '2015-08-31T20:59:20Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.12',
			version: '0.12.12',
			project: 'VueJS',
			date: '2015-08-26T08:48:20Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.11',
			version: '0.12.11',
			project: 'VueJS',
			date: '2015-08-25T16:57:59Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.10',
			version: '0.12.10',
			project: 'VueJS',
			date: '2015-08-10T03:39:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.9',
			version: '0.12.9',
			project: 'VueJS',
			date: '2015-07-31T20:30:56Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.8',
			version: '0.12.8',
			project: 'VueJS',
			date: '2015-07-23T15:23:27Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.7',
			version: '0.12.7',
			project: 'VueJS',
			date: '2015-07-07T18:51:05Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.6',
			version: '0.12.6',
			project: 'VueJS',
			date: '2015-07-05T07:48:14Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.5',
			version: '0.12.5',
			project: 'VueJS',
			date: '2015-07-02T15:04:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.4',
			version: '0.12.4',
			project: 'VueJS',
			date: '2015-06-25T22:26:13Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.3',
			version: '0.12.3',
			project: 'VueJS',
			date: '2015-06-25T17:38:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.2',
			version: '0.12.2',
			project: 'VueJS',
			date: '2015-06-25T14:51:52Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.1',
			version: '0.12.1',
			project: 'VueJS',
			date: '2015-06-14T05:28:05Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0',
			version: '0.12.0',
			project: 'VueJS',
			date: '2015-06-12T17:34:29Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-rc2',
			version: '0.12.0-rc2',
			project: 'VueJS',
			date: '2015-06-04T19:00:19Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-rc',
			version: '0.12.0-rc',
			project: 'VueJS',
			date: '2015-06-01T20:56:45Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-beta5',
			version: '0.12.0-beta5',
			project: 'VueJS',
			date: '2015-05-30T02:27:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-beta4',
			version: '0.12.0-beta4',
			project: 'VueJS',
			date: '2015-05-26T15:21:17Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-beta3',
			version: '0.12.0-beta3',
			project: 'VueJS',
			date: '2015-05-22T20:07:50Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.12.0-beta2',
			version: '0.12.0-beta2',
			project: 'VueJS',
			date: '2015-05-16T17:52:42Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.10',
			version: '0.11.10',
			project: 'VueJS',
			date: '2015-05-07T19:00:36Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.9',
			version: '0.11.9',
			project: 'VueJS',
			date: '2015-05-06T20:40:03Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.8',
			version: '0.11.8',
			project: 'VueJS',
			date: '2015-04-21T20:10:40Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.7',
			version: '0.11.7',
			project: 'VueJS',
			date: '2015-04-21T03:19:46Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.6',
			version: '0.11.6',
			project: 'VueJS',
			date: '2015-04-18T07:11:19Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.5',
			version: '0.11.5',
			project: 'VueJS',
			date: '2015-02-05T21:26:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.4',
			version: '0.11.4',
			project: 'VueJS',
			date: '2014-12-07T20:43:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.3',
			version: '0.11.3',
			project: 'VueJS',
			date: '2014-12-02T17:22:05Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.2',
			version: '0.11.2',
			project: 'VueJS',
			date: '2014-12-02T02:37:44Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.1',
			version: '0.11.1',
			project: 'VueJS',
			date: '2014-12-01T00:24:21Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.0',
			version: '0.11.0',
			project: 'VueJS',
			date: '2014-11-07T01:52:42Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.0-rc3',
			version: '0.11.0-rc3',
			project: 'VueJS',
			date: '2014-10-24T04:11:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.0-rc2',
			version: '0.11.0-rc2',
			project: 'VueJS',
			date: '2014-10-07T17:07:26Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.11.0-rc',
			version: '0.11.0-rc',
			project: 'VueJS',
			date: '2014-09-27T01:23:47Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.6',
			version: 'v0.10.6',
			project: 'VueJS',
			date: '2014-07-29T02:43:36Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.5',
			version: 'v0.10.5',
			project: 'VueJS',
			date: '2014-06-06T19:09:35Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.4',
			version: 'v0.10.4',
			project: 'VueJS',
			date: '2014-04-25T19:47:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.3',
			version: 'v0.10.3',
			project: 'VueJS',
			date: '2014-03-26T23:13:02Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.2',
			version: 'v0.10.2',
			project: 'VueJS',
			date: '2014-03-25T04:19:30Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.1',
			version: 'v0.10.1',
			project: 'VueJS',
			date: '2014-03-24T08:11:38Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.10.0',
			version: 'v0.10.0',
			project: 'VueJS',
			date: '2014-03-23T18:53:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.10.0-rc',
			version: '0.10.0-rc',
			project: 'VueJS',
			date: '2014-03-19T21:17:03Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.9.3',
			version: 'v0.9.3',
			project: 'VueJS',
			date: '2014-03-02T23:22:14Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.9.2',
			version: 'v0.9.2',
			project: 'VueJS',
			date: '2014-02-25T22:29:48Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.9.1',
			version: 'v0.9.1',
			project: 'VueJS',
			date: '2014-02-25T15:33:56Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.9.0',
			version: 'v0.9.0',
			project: 'VueJS',
			date: '2014-02-25T06:16:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.8',
			version: 'v0.8.8',
			project: 'VueJS',
			date: '2014-02-20T22:56:26Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.7',
			version: 'v0.8.7',
			project: 'VueJS',
			date: '2014-02-20T19:02:45Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.6',
			version: 'v0.8.6',
			project: 'VueJS',
			date: '2014-02-14T07:42:14Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.5',
			version: 'v0.8.5',
			project: 'VueJS',
			date: '2014-02-11T19:13:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.4',
			version: 'v0.8.4',
			project: 'VueJS',
			date: '2014-02-09T02:39:23Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.3',
			version: 'v0.8.3',
			project: 'VueJS',
			date: '2014-02-07T13:29:28Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.2',
			version: 'v0.8.2',
			project: 'VueJS',
			date: '2014-02-03T22:18:24Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.1',
			version: 'v0.8.1',
			project: 'VueJS',
			date: '2014-02-02T05:49:01Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.8.0',
			version: 'v0.8.0',
			project: 'VueJS',
			date: '2014-01-27T05:15:47Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.6',
			version: 'v0.7.6',
			project: 'VueJS',
			date: '2014-01-19T03:42:55Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.5',
			version: 'v0.7.5',
			project: 'VueJS',
			date: '2014-01-13T21:04:45Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.4',
			version: 'v0.7.4',
			project: 'VueJS',
			date: '2014-01-10T21:56:34Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.3',
			version: 'v0.7.3',
			project: 'VueJS',
			date: '2014-01-06T19:13:12Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.2',
			version: 'v0.7.2',
			project: 'VueJS',
			date: '2013-12-28T05:43:40Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.1',
			version: 'v0.7.1',
			project: 'VueJS',
			date: '2013-12-24T21:58:33Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/v0.7.0',
			version: 'v0.7.0',
			project: 'VueJS',
			date: '2013-12-24T03:31:05Z'
		},
		{
			url: 'https://github.com/vuejs/vue/releases/tag/0.6.0',
			version: '0.6.0',
			project: 'VueJS',
			date: '2013-12-08T00:32:17Z'
		}
	],
	[
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.3.1',
			version: 'v16.3.1',
			project: 'React',
			date: '2018-04-04T00:34:12Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.3.0',
			version: 'v16.3.0',
			project: 'React',
			date: '2018-03-29T20:08:25Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.2.0',
			version: 'v16.2.0',
			project: 'React',
			date: '2017-11-28T21:30:20Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.6.2',
			version: 'v15.6.2',
			project: 'React',
			date: '2017-09-26T00:06:00Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.1.1',
			version: 'v16.1.1',
			project: 'React',
			date: '2017-11-13T16:11:15Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.1.0',
			version: 'v16.1.0',
			project: 'React',
			date: '2017-11-09T15:04:27Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v16.0.0',
			version: 'v16.0.0',
			project: 'React',
			date: '2017-09-26T17:17:36Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.6.1',
			version: 'v15.6.1',
			project: 'React',
			date: '2017-06-15T00:24:04Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.6.0',
			version: 'v15.6.0',
			project: 'React',
			date: '2017-06-13T16:05:41Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.5.4',
			version: 'v15.5.4',
			project: 'React',
			date: '2017-05-01T16:18:08Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.5.3',
			version: 'v15.5.3',
			project: 'React',
			date: '2017-05-01T16:17:31Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.5.2',
			version: 'v15.5.2',
			project: 'React',
			date: '2017-05-01T16:16:50Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.5.1',
			version: 'v15.5.1',
			project: 'React',
			date: '2017-05-01T16:13:35Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.5.0',
			version: 'v15.5.0',
			project: 'React',
			date: '2017-04-07T21:21:27Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.4.2',
			version: 'v15.4.2',
			project: 'React',
			date: '2017-01-06T19:52:54Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.4.1',
			version: 'v15.4.1',
			project: 'React',
			date: '2016-11-23T01:47:12Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.4.0',
			version: 'v15.4.0',
			project: 'React',
			date: '2016-11-16T14:16:57Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.3.2',
			version: 'v15.3.2',
			project: 'React',
			date: '2016-09-19T17:35:00Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.3.1',
			version: 'v15.3.1',
			project: 'React',
			date: '2016-08-19T18:42:05Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.3.0',
			version: 'v15.3.0',
			project: 'React',
			date: '2016-07-29T18:26:23Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.2.1',
			version: 'v15.2.1',
			project: 'React',
			date: '2016-07-08T22:15:02Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.2.0',
			version: 'v15.2.0',
			project: 'React',
			date: '2016-07-01T18:31:05Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.1.0',
			version: 'v15.1.0',
			project: 'React',
			date: '2016-05-20T22:54:35Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.0.2',
			version: 'v15.0.2',
			project: 'React',
			date: '2016-04-30T00:32:43Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.0.1',
			version: 'v15.0.1',
			project: 'React',
			date: '2016-04-08T18:12:25Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v15.0.0',
			version: 'v15.0.0',
			project: 'React',
			date: '2016-04-08T15:36:13Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.8',
			version: 'v0.14.8',
			project: 'React',
			date: '2016-03-29T16:24:19Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.7',
			version: 'v0.14.7',
			project: 'React',
			date: '2016-01-28T19:28:26Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.4',
			version: 'v0.14.4',
			project: 'React',
			date: '2015-12-29T21:51:43Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.5',
			version: 'v0.14.5',
			project: 'React',
			date: '2015-12-29T22:37:06Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.6',
			version: 'v0.14.6',
			project: 'React',
			date: '2016-01-06T23:26:33Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.3',
			version: 'v0.14.3',
			project: 'React',
			date: '2015-11-19T02:08:52Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.2',
			version: 'v0.14.2',
			project: 'React',
			date: '2015-11-02T19:45:57Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.1',
			version: 'v0.14.1',
			project: 'React',
			date: '2015-10-28T21:21:05Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.14.0',
			version: 'v0.14.0',
			project: 'React',
			date: '2015-10-07T17:19:56Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.3',
			version: 'v0.13.3',
			project: 'React',
			date: '2015-05-08T20:53:49Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.9.0-rc1',
			version: 'v0.9.0-rc1',
			project: 'React',
			date: '2014-02-17T01:38:52Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.10.0-rc1',
			version: 'v0.10.0-rc1',
			project: 'React',
			date: '2014-03-19T05:09:32Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.11.0-rc1',
			version: 'v0.11.0-rc1',
			project: 'React',
			date: '2014-07-13T02:50:45Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.12.0-rc1',
			version: 'v0.12.0-rc1',
			project: 'React',
			date: '2014-10-16T21:56:50Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.0-rc1',
			version: 'v0.13.0-rc1',
			project: 'React',
			date: '2015-02-22T21:26:13Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.0-rc2',
			version: 'v0.13.0-rc2',
			project: 'React',
			date: '2015-03-03T19:46:01Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.0',
			version: 'v0.13.0',
			project: 'React',
			date: '2015-03-10T21:45:29Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.1',
			version: 'v0.13.1',
			project: 'React',
			date: '2015-03-16T23:50:30Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.13.2',
			version: 'v0.13.2',
			project: 'React',
			date: '2015-04-18T22:28:48Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.12.2',
			version: 'v0.12.2',
			project: 'React',
			date: '2014-12-18T20:45:02Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.12.1',
			version: 'v0.12.1',
			project: 'React',
			date: '2014-11-18T08:30:26Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.12.0',
			version: 'v0.12.0',
			project: 'React',
			date: '2014-10-28T18:23:41Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.11.2',
			version: 'v0.11.2',
			project: 'React',
			date: '2014-09-16T18:09:36Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.11.1',
			version: 'v0.11.1',
			project: 'React',
			date: '2014-07-25T18:29:12Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.11.0',
			version: 'v0.11.0',
			project: 'React',
			date: '2014-07-17T20:47:06Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.10.0',
			version: 'v0.10.0',
			project: 'React',
			date: '2014-03-21T20:34:02Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.9.0',
			version: 'v0.9.0',
			project: 'React',
			date: '2014-02-20T06:50:30Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.8.0',
			version: 'v0.8.0',
			project: 'React',
			date: '2013-12-19T18:41:03Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.5.2',
			version: 'v0.5.2',
			project: 'React',
			date: '2013-12-18T22:52:57Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.4.2',
			version: 'v0.4.2',
			project: 'React',
			date: '2013-12-18T06:00:17Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.5.1',
			version: 'v0.5.1',
			project: 'React',
			date: '2013-10-29T18:46:46Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.5.0',
			version: 'v0.5.0',
			project: 'React',
			date: '2013-10-16T18:44:37Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.4.1',
			version: 'v0.4.1',
			project: 'React',
			date: '2013-07-26T22:33:52Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.4.0',
			version: 'v0.4.0',
			project: 'React',
			date: '2013-07-17T18:33:31Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.3.0',
			version: 'v0.3.0',
			project: 'React',
			date: '2013-05-29T19:46:11Z'
		},
		{
			url: 'https://github.com/facebook/react/releases/tag/v0.3.3',
			version: 'v0.3.3',
			project: 'React',
			date: '2013-06-20T22:14:18Z'
		}
	],
	[
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.6.0',
			version: 'v2.6.0',
			project: 'Polymer',
			date: '2018-03-22T19:01:18Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.11.3',
			version: 'v1.11.3',
			project: 'Polymer',
			date: '2018-02-12T23:49:45Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.5.0',
			version: 'v2.5.0',
			project: 'Polymer',
			date: '2018-02-02T23:32:51Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.4.0-rc.1',
			version: 'v2.4.0-rc.1',
			project: 'Polymer',
			date: '2017-12-20T22:28:06Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.11.2',
			version: 'v1.11.2',
			project: 'Polymer',
			date: '2017-12-15T01:21:39Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.3.1',
			version: 'v2.3.1',
			project: 'Polymer',
			date: '2017-12-07T17:10:16Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.3.0',
			version: 'v2.3.0',
			project: 'Polymer',
			date: '2017-12-05T23:21:56Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.11.1',
			version: 'v1.11.1',
			project: 'Polymer',
			date: '2017-12-05T22:20:02Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.11.0',
			version: 'v1.11.0',
			project: 'Polymer',
			date: '2017-10-18T19:47:51Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.2.0',
			version: 'v2.2.0',
			project: 'Polymer',
			date: '2017-10-18T18:57:41Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.10.1',
			version: 'v1.10.1',
			project: 'Polymer',
			date: '2017-09-28T22:25:27Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.1.1',
			version: 'v2.1.1',
			project: 'Polymer',
			date: '2017-09-28T22:10:32Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.1.0',
			version: 'v2.1.0',
			project: 'Polymer',
			date: '2017-09-19T17:58:02Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.10.0',
			version: 'v1.10.0',
			project: 'Polymer',
			date: '2017-09-19T17:42:19Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.9.3',
			version: 'v1.9.3',
			project: 'Polymer',
			date: '2017-07-20T17:47:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.2',
			version: 'v2.0.2',
			project: 'Polymer',
			date: '2017-07-15T00:02:16Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.9.2',
			version: 'v1.9.2',
			project: 'Polymer',
			date: '2017-06-15T21:10:15Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.1',
			version: 'v2.0.1',
			project: 'Polymer',
			date: '2017-05-25T21:07:50Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0',
			version: 'v2.0.0',
			project: 'Polymer',
			date: '2017-05-15T18:25:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.9',
			version: 'v2.0.0-rc.9',
			project: 'Polymer',
			date: '2017-05-13T03:36:45Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.8',
			version: 'v2.0.0-rc.8',
			project: 'Polymer',
			date: '2017-05-12T00:45:17Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.7',
			version: 'v2.0.0-rc.7',
			project: 'Polymer',
			date: '2017-04-19T22:35:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.6',
			version: 'v2.0.0-rc.6',
			project: 'Polymer',
			date: '2017-04-18T01:10:23Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.9.1',
			version: 'v1.9.1',
			project: 'Polymer',
			date: '2017-04-17T23:50:58Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.5',
			version: 'v2.0.0-rc.5',
			project: 'Polymer',
			date: '2017-04-14T00:43:42Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.9.0',
			version: 'v1.9.0',
			project: 'Polymer',
			date: '2017-04-14T00:21:53Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.4',
			version: 'v2.0.0-rc.4',
			project: 'Polymer',
			date: '2017-04-12T22:35:05Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.3',
			version: 'v2.0.0-rc.3',
			project: 'Polymer',
			date: '2017-03-15T04:24:13Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.2',
			version: 'v2.0.0-rc.2',
			project: 'Polymer',
			date: '2017-03-07T22:18:17Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.1',
			version: 'v2.0.0-rc.1',
			project: 'Polymer',
			date: '2017-03-04T01:55:37Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.8.1',
			version: 'v1.8.1',
			project: 'Polymer',
			date: '2017-02-27T22:14:35Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.8.0',
			version: 'v1.8.0',
			project: 'Polymer',
			date: '2017-02-07T00:15:16Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.7.1',
			version: 'v1.7.1',
			project: 'Polymer',
			date: '2016-12-14T18:46:31Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.7.0',
			version: 'v1.7.0',
			project: 'Polymer',
			date: '2016-09-28T19:22:43Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.6.1',
			version: 'v1.6.1',
			project: 'Polymer',
			date: '2016-08-01T18:31:58Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.6.0',
			version: 'v1.6.0',
			project: 'Polymer',
			date: '2016-06-29T18:37:33Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.5.0',
			version: 'v1.5.0',
			project: 'Polymer',
			date: '2016-05-31T16:53:33Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.4.0',
			version: 'v1.4.0',
			project: 'Polymer',
			date: '2016-03-18T17:42:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.3.1',
			version: 'v1.3.1',
			project: 'Polymer',
			date: '2016-03-02T18:06:54Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.3.0',
			version: 'v1.3.0',
			project: 'Polymer',
			date: '2016-02-22T19:35:03Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.2.4',
			version: 'v1.2.4',
			project: 'Polymer',
			date: '2016-01-27T22:12:37Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.2.3',
			version: 'v1.2.3',
			project: 'Polymer',
			date: '2015-11-17T01:07:22Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.2.2',
			version: 'v1.2.2',
			project: 'Polymer',
			date: '2015-11-13T00:53:12Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.2.1',
			version: 'v1.2.1',
			project: 'Polymer',
			date: '2015-10-29T22:33:06Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.2.0',
			version: 'v1.2.0',
			project: 'Polymer',
			date: '2015-10-23T00:43:35Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.5',
			version: 'v1.1.5',
			project: 'Polymer',
			date: '2015-10-08T21:09:14Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.4',
			version: 'v1.1.4',
			project: 'Polymer',
			date: '2015-09-25T22:53:25Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.3',
			version: 'v1.1.3',
			project: 'Polymer',
			date: '2015-09-05T00:26:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.2',
			version: 'v1.1.2',
			project: 'Polymer',
			date: '2015-08-28T23:41:42Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.7',
			version: 'v1.0.7',
			project: 'Polymer',
			date: '2015-07-16T21:38:03Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.8',
			version: 'v1.0.8',
			project: 'Polymer',
			date: '2015-07-23T23:08:19Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.9',
			version: 'v1.0.9',
			project: 'Polymer',
			date: '2015-08-08T00:49:13Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.1',
			version: 'v1.1.1',
			project: 'Polymer',
			date: '2015-08-20T22:32:22Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.1.0',
			version: 'v1.1.0',
			project: 'Polymer',
			date: '2015-08-14T00:02:10Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.6',
			version: 'v1.0.6',
			project: 'Polymer',
			date: '2015-07-09T22:18:00Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.5',
			version: 'v1.0.5',
			project: 'Polymer',
			date: '2015-06-25T23:49:18Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.2',
			version: 'v1.0.2',
			project: 'Polymer',
			date: '2015-05-29T05:23:30Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.1',
			version: 'v1.0.1',
			project: 'Polymer',
			date: '2015-05-29T02:34:09Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v1.0.0',
			version: 'v1.0.0',
			project: 'Polymer',
			date: '2015-05-27T21:55:56Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.9.0',
			version: 'v0.9.0',
			project: 'Polymer',
			date: '2015-05-14T20:46:53Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.5',
			version: '0.5.5',
			project: 'Polymer',
			date: '2015-02-18T01:25:26Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.4',
			version: '0.5.4',
			project: 'Polymer',
			date: '2015-01-24T00:15:54Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.3',
			version: '0.5.3',
			project: 'Polymer',
			date: '2015-01-21T21:51:29Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.2',
			version: '0.5.2',
			project: 'Polymer',
			date: '2014-12-11T20:46:30Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.1',
			version: '0.5.1',
			project: 'Polymer',
			date: '2014-11-12T22:32:22Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.5.0',
			version: '0.5.0',
			project: 'Polymer',
			date: '2014-11-10T23:30:48Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.4.2',
			version: '0.4.2',
			project: 'Polymer',
			date: '2014-10-02T23:05:25Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.4.1',
			version: '0.4.1',
			project: 'Polymer',
			date: '2014-09-18T20:02:12Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.4.0',
			version: '0.4.0',
			project: 'Polymer',
			date: '2014-08-28T22:40:51Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.5',
			version: '0.3.5',
			project: 'Polymer',
			date: '2014-08-08T00:13:03Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.4',
			version: '0.3.4',
			project: 'Polymer',
			date: '2014-07-11T18:52:54Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.3',
			version: '0.3.3',
			project: 'Polymer',
			date: '2014-06-20T00:33:34Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.2',
			version: '0.3.2',
			project: 'Polymer',
			date: '2014-06-09T19:24:50Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.1',
			version: '0.3.1',
			project: 'Polymer',
			date: '2014-05-30T19:46:48Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.3.0',
			version: '0.3.0',
			project: 'Polymer',
			date: '2014-05-27T23:53:32Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.2.4',
			version: '0.2.4',
			project: 'Polymer',
			date: '2014-05-12T19:45:27Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.2.3',
			version: '0.2.3',
			project: 'Polymer',
			date: '2014-04-18T20:33:42Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.2.2',
			version: '0.2.2',
			project: 'Polymer',
			date: '2014-03-31T21:30:36Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.2.1',
			version: '0.2.1',
			project: 'Polymer',
			date: '2014-03-07T19:27:06Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.2.0',
			version: '0.2.0',
			project: 'Polymer',
			date: '2014-02-15T01:15:57Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.1.4',
			version: '0.1.4',
			project: 'Polymer',
			date: '2014-01-27T18:53:05Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.1.3',
			version: '0.1.3',
			project: 'Polymer',
			date: '2014-01-17T00:27:32Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.1.2',
			version: '0.1.2',
			project: 'Polymer',
			date: '2014-01-10T01:17:30Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.1.1',
			version: '0.1.1',
			project: 'Polymer',
			date: '2013-12-12T01:24:03Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/0.1.0',
			version: '0.1.0',
			project: 'Polymer',
			date: '2013-11-27T01:40:07Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20131107',
			version: 'v0.0.20131107',
			project: 'Polymer',
			date: '2013-11-07T21:44:49Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20131025',
			version: 'v0.0.20131025',
			project: 'Polymer',
			date: '2013-10-25T18:11:46Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20131010',
			version: 'v0.0.20131010',
			project: 'Polymer',
			date: '2013-10-10T22:49:07Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20131003',
			version: 'v0.0.20131003',
			project: 'Polymer',
			date: '2013-10-03T22:29:47Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130912',
			version: 'v0.0.20130912',
			project: 'Polymer',
			date: '2013-09-12T23:43:03Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130905',
			version: 'v0.0.20130905',
			project: 'Polymer',
			date: '2013-09-05T19:39:20Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130829',
			version: 'v0.0.20130829',
			project: 'Polymer',
			date: '2013-08-28T00:20:27Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130816',
			version: 'v0.0.20130816',
			project: 'Polymer',
			date: '2013-08-15T21:32:04Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130815',
			version: 'v0.0.20130815',
			project: 'Polymer',
			date: '2013-08-15T21:32:04Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130808',
			version: 'v0.0.20130808',
			project: 'Polymer',
			date: '2013-08-08T22:05:59Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130801',
			version: 'v0.0.20130801',
			project: 'Polymer',
			date: '2013-08-01T19:50:27Z'
		},
		{
			url: 'https://github.com/Polymer/polymer/releases/tag/v0.0.20130711',
			version: 'v0.0.20130711',
			project: 'Polymer',
			date: '2013-07-11T21:03:12Z'
		}
	],
	[
		{
			url: 'https://github.com/d3/d3/releases/tag/v5.0.0-rc.1',
			version: 'v5.0.0-rc.1',
			project: 'D3',
			date: '2018-01-28T19:29:39Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.13.0',
			version: 'v4.13.0',
			project: 'D3',
			date: '2018-01-29T13:33:48Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v5.0.0',
			version: 'v5.0.0',
			project: 'D3',
			date: '2018-03-22T17:30:10Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.12.2',
			version: 'v4.12.2',
			project: 'D3',
			date: '2017-12-26T21:52:07Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.12.1',
			version: 'v4.12.1',
			project: 'D3',
			date: '2017-12-26T19:51:25Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.12.0',
			version: 'v4.12.0',
			project: 'D3',
			date: '2017-11-21T22:03:49Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.11.0',
			version: 'v4.11.0',
			project: 'D3',
			date: '2017-10-03T17:24:17Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.10.2',
			version: 'v4.10.2',
			project: 'D3',
			date: '2017-09-03T18:25:46Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.10.1',
			version: 'v4.10.1',
			project: 'D3',
			date: '2017-09-02T22:31:45Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.10.0',
			version: 'v4.10.0',
			project: 'D3',
			date: '2017-07-14T21:03:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.9.1',
			version: 'v4.9.1',
			project: 'D3',
			date: '2017-05-16T14:50:13Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.9.0',
			version: 'v4.9.0',
			project: 'D3',
			date: '2017-05-15T19:20:34Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.8.0',
			version: 'v4.8.0',
			project: 'D3',
			date: '2017-04-15T05:35:56Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.7.4',
			version: 'v4.7.4',
			project: 'D3',
			date: '2017-03-24T16:07:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.7.3',
			version: 'v4.7.3',
			project: 'D3',
			date: '2017-03-13T16:10:29Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.7.2',
			version: 'v4.7.2',
			project: 'D3',
			date: '2017-03-10T18:29:59Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.7.1',
			version: 'v4.7.1',
			project: 'D3',
			date: '2017-03-02T20:35:19Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.7.0',
			version: 'v4.7.0',
			project: 'D3',
			date: '2017-02-28T20:22:40Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.6.0',
			version: 'v4.6.0',
			project: 'D3',
			date: '2017-02-19T17:00:37Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.5.0',
			version: 'v4.5.0',
			project: 'D3',
			date: '2017-01-29T05:37:09Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.4.4',
			version: 'v4.4.4',
			project: 'D3',
			date: '2017-01-23T18:49:16Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.4.3',
			version: 'v4.4.3',
			project: 'D3',
			date: '2017-01-20T23:09:13Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.4.2',
			version: 'v4.4.2',
			project: 'D3',
			date: '2017-01-18T10:00:38Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.4.1',
			version: 'v4.4.1',
			project: 'D3',
			date: '2017-01-06T17:12:26Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.4.0',
			version: 'v4.4.0',
			project: 'D3',
			date: '2016-11-23T01:31:45Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.3.0',
			version: 'v4.3.0',
			project: 'D3',
			date: '2016-10-27T18:43:19Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.8',
			version: 'v4.2.8',
			project: 'D3',
			date: '2016-10-20T17:50:30Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.7',
			version: 'v4.2.7',
			project: 'D3',
			date: '2016-10-11T15:54:56Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.6',
			version: 'v4.2.6',
			project: 'D3',
			date: '2016-09-22T17:30:22Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.5',
			version: 'v4.2.5',
			project: 'D3',
			date: '2016-09-20T20:12:56Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.4',
			version: 'v4.2.4',
			project: 'D3',
			date: '2016-09-19T18:55:44Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.3',
			version: 'v4.2.3',
			project: 'D3',
			date: '2016-09-12T23:35:35Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.2',
			version: 'v4.2.2',
			project: 'D3',
			date: '2016-08-16T04:19:25Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.1',
			version: 'v4.2.1',
			project: 'D3',
			date: '2016-08-03T00:42:13Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.2.0',
			version: 'v4.2.0',
			project: 'D3',
			date: '2016-07-29T23:02:36Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.1.1',
			version: 'v4.1.1',
			project: 'D3',
			date: '2016-07-11T02:47:51Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.1.0',
			version: 'v4.1.0',
			project: 'D3',
			date: '2016-07-02T05:27:51Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v4.0.0',
			version: 'v4.0.0',
			project: 'D3',
			date: '2016-06-28T15:01:50Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.17',
			version: 'v3.5.17',
			project: 'D3',
			date: '2016-05-05T00:29:22Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.16',
			version: 'v3.5.16',
			project: 'D3',
			date: '2016-02-18T01:39:31Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.15',
			version: 'v3.5.15',
			project: 'D3',
			date: '2016-02-11T20:02:58Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.14',
			version: 'v3.5.14',
			project: 'D3',
			date: '2016-01-27T17:32:46Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.13',
			version: 'v3.5.13',
			project: 'D3',
			date: '2016-01-20T17:56:00Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.12',
			version: 'v3.5.12',
			project: 'D3',
			date: '2015-12-17T16:55:32Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.11',
			version: 'v3.5.11',
			project: 'D3',
			date: '2015-12-14T19:16:48Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.10',
			version: 'v3.5.10',
			project: 'D3',
			date: '2015-11-30T02:40:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.9',
			version: 'v3.5.9',
			project: 'D3',
			date: '2015-11-16T16:02:34Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.8',
			version: 'v3.5.8',
			project: 'D3',
			date: '2015-11-10T16:34:27Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.7',
			version: 'v3.5.7',
			project: 'D3',
			date: '2015-11-10T03:57:55Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.6',
			version: 'v3.5.6',
			project: 'D3',
			date: '2015-07-04T03:03:19Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.5',
			version: 'v3.5.5',
			project: 'D3',
			date: '2015-02-10T16:36:24Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.4',
			version: 'v3.5.4',
			project: 'D3',
			date: '2015-02-07T20:31:28Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.3',
			version: 'v3.5.3',
			project: 'D3',
			date: '2014-12-30T17:05:39Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.2',
			version: 'v3.5.2',
			project: 'D3',
			date: '2014-12-09T18:11:40Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.1',
			version: 'v3.5.1',
			project: 'D3',
			date: '2014-12-08T18:50:45Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.5.0',
			version: 'v3.5.0',
			project: 'D3',
			date: '2014-12-06T22:29:04Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.13',
			version: 'v3.4.13',
			project: 'D3',
			date: '2014-10-17T12:02:17Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.12',
			version: 'v3.4.12',
			project: 'D3',
			date: '2014-10-08T15:23:37Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.11',
			version: 'v3.4.11',
			project: 'D3',
			date: '2014-07-17T22:58:25Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.10',
			version: 'v3.4.10',
			project: 'D3',
			date: '2014-07-12T06:01:23Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.9',
			version: 'v3.4.9',
			project: 'D3',
			date: '2014-06-30T17:17:06Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.8',
			version: 'v3.4.8',
			project: 'D3',
			date: '2014-05-19T18:26:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.6',
			version: 'v3.4.6',
			project: 'D3',
			date: '2014-04-14T03:55:37Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.5',
			version: 'v3.4.5',
			project: 'D3',
			date: '2014-04-08T04:43:39Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.4',
			version: 'v3.4.4',
			project: 'D3',
			date: '2014-03-25T03:45:53Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.3',
			version: 'v3.4.3',
			project: 'D3',
			date: '2014-02-27T15:50:28Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.2',
			version: 'v3.4.2',
			project: 'D3',
			date: '2014-02-18T16:39:41Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.1',
			version: 'v3.4.1',
			project: 'D3',
			date: '2014-01-13T19:42:10Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.4.0',
			version: 'v3.4.0',
			project: 'D3',
			date: '2014-01-10T22:18:17Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.13',
			version: 'v3.3.13',
			project: 'D3',
			date: '2013-12-16T17:25:37Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.12',
			version: 'v3.3.12',
			project: 'D3',
			date: '2013-12-14T00:07:31Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.11',
			version: 'v3.3.11',
			project: 'D3',
			date: '2013-11-30T01:15:43Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.10',
			version: 'v3.3.10',
			project: 'D3',
			date: '2013-11-19T17:20:15Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.9',
			version: 'v3.3.9',
			project: 'D3',
			date: '2013-10-25T22:36:58Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.8',
			version: 'v3.3.8',
			project: 'D3',
			date: '2013-10-14T15:56:40Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.7',
			version: 'v3.3.7',
			project: 'D3',
			date: '2013-10-11T00:19:13Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.6',
			version: 'v3.3.6',
			project: 'D3',
			date: '2013-09-26T21:44:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.5',
			version: 'v3.3.5',
			project: 'D3',
			date: '2013-09-21T18:49:14Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.4',
			version: 'v3.3.4',
			project: 'D3',
			date: '2013-09-19T03:52:52Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.3',
			version: 'v3.3.3',
			project: 'D3',
			date: '2013-09-05T19:26:47Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.2',
			version: 'v3.3.2',
			project: 'D3',
			date: '2013-08-27T05:42:08Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.1',
			version: 'v3.3.1',
			project: 'D3',
			date: '2013-08-23T21:22:35Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.3.0',
			version: 'v3.3.0',
			project: 'D3',
			date: '2013-08-22T04:09:09Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.8',
			version: 'v3.2.8',
			project: 'D3',
			date: '2013-08-01T14:38:00Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.7',
			version: 'v3.2.7',
			project: 'D3',
			date: '2013-07-19T03:30:42Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.0.0',
			version: 'v2.0.0',
			project: 'D3',
			date: '2011-08-23T19:53:32Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.1.0',
			version: 'v2.1.0',
			project: 'D3',
			date: '2011-08-29T18:57:05Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.2.0',
			version: 'v2.2.0',
			project: 'D3',
			date: '2011-09-18T03:35:51Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.3.0',
			version: 'v2.3.0',
			project: 'D3',
			date: '2011-09-27T22:00:34Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.4.0',
			version: 'v2.4.0',
			project: 'D3',
			date: '2011-10-11T04:40:19Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.5.0',
			version: 'v2.5.0',
			project: 'D3',
			date: '2011-11-05T02:37:00Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.6.0',
			version: 'v2.6.0',
			project: 'D3',
			date: '2011-11-23T21:00:47Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.7.0',
			version: 'v2.7.0',
			project: 'D3',
			date: '2011-12-09T02:06:44Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.8.0',
			version: 'v2.8.0',
			project: 'D3',
			date: '2012-02-25T03:19:48Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.9.0',
			version: 'v2.9.0',
			project: 'D3',
			date: '2012-04-15T21:43:01Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v2.10.0',
			version: 'v2.10.0',
			project: 'D3',
			date: '2012-08-10T03:12:08Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.4',
			version: 'v3.0.4',
			project: 'D3',
			date: '2013-01-15T18:01:15Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.3',
			version: 'v3.0.3',
			project: 'D3',
			date: '2013-01-11T00:43:06Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.2',
			version: 'v3.0.2',
			project: 'D3',
			date: '2013-01-01T23:52:59Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.1',
			version: 'v3.0.1',
			project: 'D3',
			date: '2012-12-28T17:19:41Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.5',
			version: 'v3.0.5',
			project: 'D3',
			date: '2013-01-24T17:58:58Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.6',
			version: 'v3.0.6',
			project: 'D3',
			date: '2013-02-06T19:04:53Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.7',
			version: 'v3.0.7',
			project: 'D3',
			date: '2013-03-03T17:11:31Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.8',
			version: 'v3.0.8',
			project: 'D3',
			date: '2013-03-03T18:29:06Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.1',
			version: 'v3.1.1',
			project: 'D3',
			date: '2013-03-21T23:46:38Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.2',
			version: 'v3.1.2',
			project: 'D3',
			date: '2013-03-21T23:52:36Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.3',
			version: 'v3.1.3',
			project: 'D3',
			date: '2013-03-22T22:40:20Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.4',
			version: 'v3.1.4',
			project: 'D3',
			date: '2013-03-24T23:51:10Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.5',
			version: 'v3.1.5',
			project: 'D3',
			date: '2013-04-07T02:29:54Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.6',
			version: 'v3.1.6',
			project: 'D3',
			date: '2013-04-30T23:09:55Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.7',
			version: 'v3.1.7',
			project: 'D3',
			date: '2013-05-15T23:14:55Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.8',
			version: 'v3.1.8',
			project: 'D3',
			date: '2013-05-20T17:40:25Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.9',
			version: 'v3.1.9',
			project: 'D3',
			date: '2013-05-20T20:37:25Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.6',
			version: 'v3.2.6',
			project: 'D3',
			date: '2013-07-12T16:39:03Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.5',
			version: 'v3.2.5',
			project: 'D3',
			date: '2013-07-12T00:21:38Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.10',
			version: 'v3.1.10',
			project: 'D3',
			date: '2013-05-28T23:00:04Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.4',
			version: 'v3.2.4',
			project: 'D3',
			date: '2013-07-06T03:13:41Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.1',
			version: 'v3.2.1',
			project: 'D3',
			date: '2013-06-19T17:55:08Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.2',
			version: 'v3.2.2',
			project: 'D3',
			date: '2013-06-26T15:03:08Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.3',
			version: 'v3.2.3',
			project: 'D3',
			date: '2013-07-01T18:10:13Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.0.0',
			version: 'v3.0.0',
			project: 'D3',
			date: '2012-12-21T17:18:47Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.1.0',
			version: 'v3.1.0',
			project: 'D3',
			date: '2013-03-21T22:55:39Z'
		},
		{
			url: 'https://github.com/d3/d3/releases/tag/v3.2.0',
			version: 'v3.2.0',
			project: 'D3',
			date: '2013-06-13T22:48:01Z'
		}
	],
	[
		{
			url:
				'https://github.com/angular/angular/commit/f2f52860206ecea6679001b1355ef01c07ed9cb3',
			version: 'patch_sync',
			project: 'Angular',
			date: '2017-08-23T16:34:52Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f3d2623f0ffe2d0d320e06cda68683aee75c3f5e',
			version: '6.0.0-rc.2',
			project: 'Angular',
			date: '2018-04-05T17:55:25Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a30728ca5a7e82541544d0457ecc02dc99816d8d',
			version: '6.0.0-rc.1',
			project: 'Angular',
			date: '2018-03-30T21:10:20Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/73261a8b7080b03caff1ee813f791bdb72668937',
			version: '6.0.0-rc.0',
			project: 'Angular',
			date: '2018-03-21T06:01:02Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f258ec67bf20974362c33f59ec2be79fa9f8b9c8',
			version: '6.0.0-beta.8',
			project: 'Angular',
			date: '2018-03-17T05:20:21Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/8ad4ae0a0709fad0968ca579b479a55483851f6e',
			version: '6.0.0-beta.7',
			project: 'Angular',
			date: '2018-03-07T22:59:33Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e751a0a2bbde3f402908657c3b17505a68817154',
			version: '6.0.0-beta.6',
			project: 'Angular',
			date: '2018-02-28T23:17:30Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5fc630a9da2c1d7f2d47bc4ef1493d747ab93138',
			version: '6.0.0-beta.5',
			project: 'Angular',
			date: '2018-02-22T01:08:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/fa7d8907d0d0150128461c086225dfcb50cdedeb',
			version: '6.0.0-beta.4',
			project: 'Angular',
			date: '2018-02-14T05:35:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5b06069fd921df30a5af13de94a05b6d500169a9',
			version: '6.0.0-beta.3',
			project: 'Angular',
			date: '2018-02-07T19:25:45Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/61abba4bed7f45e6821aeaa7ddb9a05d4b59177a',
			version: '6.0.0-beta.2',
			project: 'Angular',
			date: '2018-01-31T21:15:40Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d08785d2e17fef5859d354087160ef6daeb222b3',
			version: '6.0.0-beta.1',
			project: 'Angular',
			date: '2018-01-25T06:01:19Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/8503cc1db72b0639f3bc697b2f1add0e1dca2c97',
			version: '6.0.0-beta.0',
			project: 'Angular',
			date: '2018-01-17T18:10:18Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5298b2bda34a8766b28c8425e447f94598b23901',
			version: '5.2.9',
			project: 'Angular',
			date: '2018-03-14T21:59:27Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2a236b40666c1714cee35efc42bb059761a24a40',
			version: '5.2.8',
			project: 'Angular',
			date: '2018-03-07T22:45:07Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a10bf344716e4c4b7e04ab10ef615ac6c248683d',
			version: '5.2.7',
			project: 'Angular',
			date: '2018-02-28T23:01:38Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7c3b95b4abab2a88ab077d00e2f44a1b0ce5e9bd',
			version: '5.2.6',
			project: 'Angular',
			date: '2018-02-22T00:45:10Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/106b4352979adfda61e0c6af8eb0cdb99929709b',
			version: '5.2.5',
			project: 'Angular',
			date: '2018-02-14T05:07:53Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/530b824faa29460a87c2401bc61d22a7fb56f939',
			version: '5.2.4',
			project: 'Angular',
			date: '2018-02-07T18:19:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/579bed1a7a438684f96e075df255fe7a3f810f36',
			version: '5.2.3',
			project: 'Angular',
			date: '2018-01-31T20:47:02Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/3aaf43f73c17570f61d3d0cc672a01695b716499',
			version: '5.2.2',
			project: 'Angular',
			date: '2018-01-25T05:26:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/af4eb00c9191f3eedfbb2b0bc6c471cd55f892a6',
			version: '5.2.1',
			project: 'Angular',
			date: '2018-01-17T17:39:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/04dd9713f090ae7a9710b08b6a23b3619112fb3d',
			version: '5.2.0',
			project: 'Angular',
			date: '2018-01-10T01:00:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/cdc66f616467e8623e04b49c2a029ba207a073bd',
			version: '5.2.0-rc.0',
			project: 'Angular',
			date: '2018-01-04T00:12:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/abca7c0243f8e7e4cef2f3d6cdd261e44aae855c',
			version: '5.2.0-beta.1',
			project: 'Angular',
			date: '2017-12-20T21:42:24Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6e2a8a2ba44b95636d975a249d52ebadc80d8347',
			version: '5.2.0-beta.0',
			project: 'Angular',
			date: '2017-12-13T19:43:12Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d138b38bdb5d20338d9cb000c46a58a6e3977271',
			version: '5.1.3',
			project: 'Angular',
			date: '2018-01-03T23:54:57Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6353b77f891d4a74953b23afcf5dd6f64db09a09',
			version: '5.1.2',
			project: 'Angular',
			date: '2017-12-20T20:50:50Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e3140ae888ac4037a5f119efaec7b1eaf8726286',
			version: '5.1.1',
			project: 'Angular',
			date: '2017-12-13T19:26:01Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c2dbc55f115eb259a6d90e2b45ed61c329258c22',
			version: '5.1.0',
			project: 'Angular',
			date: '2017-12-06T20:17:04Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d34f0bf573b40cc3960b86d3f29fa892c61e95b0',
			version: '5.1.0-rc.1',
			project: 'Angular',
			date: '2017-12-01T22:55:51Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/60a30818efc5c7796eed36573ab1608dc7f46937',
			version: '5.1.0-rc.0',
			project: 'Angular',
			date: '2017-12-01T05:38:52Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/330bb2a360397e37cb8bf287fca0d8fec71bc4d5',
			version: '5.1.0-beta.2',
			project: 'Angular',
			date: '2017-11-22T21:34:53Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4064cbe94544e421e3af1c5c76a63347637c8c3e',
			version: '5.1.0-beta.1',
			project: 'Angular',
			date: '2017-11-16T22:04:25Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/78ba39bfe20fe2b187108bfd92641505ff955c58',
			version: '5.1.0-beta.0',
			project: 'Angular',
			date: '2017-11-08T19:32:48Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9dc310eb50f022b25184e84a3a9abc016e4a2451',
			version: '5.0.5',
			project: 'Angular',
			date: '2017-12-01T22:40:05Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/cbd93fe0d0624ce5920f966027df534fd9b50b85',
			version: '5.0.4',
			project: 'Angular',
			date: '2017-12-01T05:13:58Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/65a40e659bf2f62ec5964dca186e68c067014734',
			version: '5.0.3',
			project: 'Angular',
			date: '2017-11-22T21:09:12Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/b1f8eb14c8cd1f415b07d72e09d14bed77c8d4ac',
			version: '5.0.2',
			project: 'Angular',
			date: '2017-11-16T19:24:02Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9de45fa65069af5015c33fee439776c1bf560af6',
			version: '5.0.1',
			project: 'Angular',
			date: '2017-11-08T18:29:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5775376bcf7e35017444e60cd7f9e4f5a1959572',
			version: '5.0.0',
			project: 'Angular',
			date: '2017-11-01T17:50:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f5b7f2b9a5bf7e8d8f4ba645d97bd214d1df0fe2',
			version: '5.0.0-rc.9',
			project: 'Angular',
			date: '2017-10-31T04:09:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/85e95cc32ba4e7d1093f236f3f2bdec508e481d7',
			version: '5.0.0-rc.8',
			project: 'Angular',
			date: '2017-10-28T06:31:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5542517b9cb756795e291f0bb3509435f431b13f',
			version: '5.0.0-rc.7',
			project: 'Angular',
			date: '2017-10-27T02:03:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/47bc6f105dd9167954e99740115d7ab044966575',
			version: '5.0.0-rc.6',
			project: 'Angular',
			date: '2017-10-25T21:34:42Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f1108fea766167f06e229bfd7992d4119838a3d4',
			version: '5.0.0-rc.5',
			project: 'Angular',
			date: '2017-10-24T06:28:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/bde57016c6338f9961405ee0064ef44e0ef234f3',
			version: '5.0.0-rc.4',
			project: 'Angular',
			date: '2017-10-24T00:35:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/230b98d4ddffee4df25f62ff3c9ac39a2329abf6',
			version: '5.0.0-rc.3',
			project: 'Angular',
			date: '2017-10-19T00:23:09Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/522ec9a25b411cc7596df2348c364867a8bce819',
			version: '5.0.0-rc.2',
			project: 'Angular',
			date: '2017-10-12T20:43:49Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/81e9bdc010573a68f675de465e0343a6da7811a0',
			version: '5.0.0-rc.1',
			project: 'Angular',
			date: '2017-10-06T01:11:09Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/30d5a2ca83c9cf44f602462597a58547b05b75dd',
			version: '5.0.0-rc.0',
			project: 'Angular',
			date: '2017-09-28T23:29:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/42c69d3ba6576c8a2244ac7958f4a1c7dfc19add',
			version: '5.0.0-beta.7',
			project: 'Angular',
			date: '2017-09-13T20:43:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/fa6b802be4c79f57aa8484fe47f0c860f1226683',
			version: '5.0.0-beta.6',
			project: 'Angular',
			date: '2017-09-02T14:42:40Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2e714f9f2a0bc6b35d59a64ea3b3b4799900a655',
			version: '5.0.0-beta.5',
			project: 'Angular',
			date: '2017-08-28T22:58:42Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9aa05211fffb1cb8b4840e7c99c6a115a78bd15c',
			version: '5.0.0-beta.4',
			project: 'Angular',
			date: '2017-08-16T20:01:52Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/cea02414b0302b9e3f5f43f2b3f05c03f5206238',
			version: '5.0.0-beta.3',
			project: 'Angular',
			date: '2017-08-09T23:07:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1e1af7ffcbac2b547706296af93b51d417d853f7',
			version: '5.0.0-beta.2',
			project: 'Angular',
			date: '2017-08-02T20:23:27Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/58081533590c57ba84b84ffe56582295f961025d',
			version: '5.0.0-beta.1',
			project: 'Angular',
			date: '2017-07-27T21:59:24Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/54ea5b6ffd2bf47bc8e848863cda37c0bc05f79c',
			version: '5.0.0-beta.0',
			project: 'Angular',
			date: '2017-07-19T20:16:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7231f5e26a9d319730373ed6ea871d7d7eb2dc6c',
			version: '4.4.6',
			project: 'Angular',
			date: '2017-10-18T23:14:53Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/912068e71c652f72dcf87ff71e0bda0068b38d95',
			version: '4.4.5',
			project: 'Angular',
			date: '2017-10-12T17:26:21Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d489ad595de1e128ec6f96d2383fef696c78217b',
			version: '4.4.4',
			project: 'Angular',
			date: '2017-09-28T19:18:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e2e8ba6ffa382319c4f8b8cc4bc43814e7c0f97c',
			version: '4.4.3',
			project: 'Angular',
			date: '2017-09-19T22:22:05Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/49d122e560df9c2722e1b085b406688ec46bae5a',
			version: '4.4.2',
			project: 'Angular',
			date: '2017-09-19T04:14:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/818f4a751ecbb9b637389909f01373208dd16f0d',
			version: '4.4.1',
			project: 'Angular',
			date: '2017-09-15T22:35:25Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4e7d2bd5bfc329704e0577f7c987970a708c8c15',
			version: '4.4.0',
			project: 'Angular',
			date: '2017-09-15T21:58:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/aeb98dbcdfec5a2e0f7b6ae167a10bd3e15f5096',
			version: '4.4.0-RC.0',
			project: 'Angular',
			date: '2017-09-02T05:01:41Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f09a266e01e746c802c4d0e132f78a05612ea177',
			version: '4.3.6',
			project: 'Angular',
			date: '2017-08-23T20:01:42Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7e9440527154b5c3f0c8a65816cb819885c97a6a',
			version: '4.3.5',
			project: 'Angular',
			date: '2017-08-16T17:51:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/06e479ff66c4fd91208311334f57c7d21b36d554',
			version: '4.3.4',
			project: 'Angular',
			date: '2017-08-10T16:40:01Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/24db1ed9384827989fea1100dc4b2173d70cac32',
			version: '4.3.3',
			project: 'Angular',
			date: '2017-08-02T20:00:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/8de2ace80a99709897542019a9f313a83156b2d8',
			version: '4.3.2',
			project: 'Angular',
			date: '2017-07-27T20:51:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/54be25a7a1b481482b5956719e1ce4f8c0d4e8cc',
			version: '4.3.1',
			project: 'Angular',
			date: '2017-07-19T19:54:45Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a0b06befb6972e96ce5b724c14a65f5382bd4eee',
			version: '4.3.0',
			project: 'Angular',
			date: '2017-07-14T20:12:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/cc611c93b6748717f660bc99124bb4f8b9bc0fa3',
			version: '4.3.0-rc.0',
			project: 'Angular',
			date: '2017-07-08T05:10:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1ac9085b0ae89755afd839cdd0e779855da3774e',
			version: '4.3.0-beta.1',
			project: 'Angular',
			date: '2017-06-29T21:41:40Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1fc0d055651f94cf60419ab102b96801ca9bec9e',
			version: '4.3.0-beta.0',
			project: 'Angular',
			date: '2017-06-22T00:21:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/b69f0faee65e4a05950a6be76a09b53aa21109f3',
			version: '4.2.6',
			project: 'Angular',
			date: '2017-07-08T04:48:49Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/61e66184297d02652dd554d454173d7dbdbca2eb',
			version: '4.2.5',
			project: 'Angular',
			date: '2017-06-30T00:17:00Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/8a09015211ff790cdb96460c27ccb9e7a16a3157',
			version: '4.2.4',
			project: 'Angular',
			date: '2017-06-22T00:01:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/8a547eeee0ca995f798bdb95688eb6cda15ad9c0',
			version: '4.2.3',
			project: 'Angular',
			date: '2017-06-16T16:41:51Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/bd58e129cf666abe5044638d93378d9681488667',
			version: '4.2.2',
			project: 'Angular',
			date: '2017-06-12T22:36:19Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/15090a8ad4a23dbe947ec48b581f1bf6a2da411e',
			version: '4.2.1',
			project: 'Angular',
			date: '2017-06-09T23:11:29Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1c04b83ea3076ebafb95c5d42bd4608a0ddaad64',
			version: '4.2.0',
			project: 'Angular',
			date: '2017-06-08T22:13:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/82ec02daf8858a0c2bf933bdb1c7cbe84a10f1d5',
			version: '4.2.0-rc.2',
			project: 'Angular',
			date: '2017-06-01T21:27:41Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/51d7a65a2b672a009340ed7a50780b6357eb86b8',
			version: '4.2.0-rc.1',
			project: 'Angular',
			date: '2017-05-26T21:38:41Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/3d382dc7509880cbb8d945c28090c1a5eac336b8',
			version: '4.2.0-rc.0',
			project: 'Angular',
			date: '2017-05-19T23:03:18Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/71f2189f97e72e14f984b1357f291095610a6e65',
			version: '4.2.0-beta.1',
			project: 'Angular',
			date: '2017-05-10T23:11:12Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/cd28df627c2affb1032aa2dab3267420bdde857b',
			version: '4.2.0-beta.0',
			project: 'Angular',
			date: '2017-05-04T21:41:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7edc5e96f373d7c74092b92874fa6c69b308d8dc',
			version: '4.1.3',
			project: 'Angular',
			date: '2017-05-17T22:44:25Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/62a8618536d836f7cacc109e54b9d3bbdf2bf817',
			version: '4.1.2',
			project: 'Angular',
			date: '2017-05-10T22:44:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1f5dce2128bddfa1c00afb15906b47e866cbda53',
			version: '4.1.1',
			project: 'Angular',
			date: '2017-05-04T21:22:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/b9723f9765c15dfb3f7fc797bb5cdf4a7a9e2c9a',
			version: '4.1.0',
			project: 'Angular',
			date: '2017-04-26T15:52:42Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d855e90524d079a5fa3b2f98595f7d4f4a4353b1',
			version: '4.1.0-rc.0',
			project: 'Angular',
			date: '2017-04-21T05:15:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9cb5964b4dc9e9c220beaa3733584c4336b08d83',
			version: '4.1.0-beta.1',
			project: 'Angular',
			date: '2017-04-12T21:49:29Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/67719f218560d94ff1accaeae67b857c6f89ec5a',
			version: '4.1.0-beta.0',
			project: 'Angular',
			date: '2017-03-29T23:56:11Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6ccb93728e454b2ecc69f1dda7071cd50e6f3c3d',
			version: '4.0.3',
			project: 'Angular',
			date: '2017-04-21T04:41:41Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/14a2d1a6f7528c672c15244399ee7188cd2b10d3',
			version: '4.0.2',
			project: 'Angular',
			date: '2017-04-11T21:56:13Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc',
			version: '4.0.1',
			project: 'Angular',
			date: '2017-03-29T23:27:40Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7a715b2403867aa3adfab1c87acd22af4fd8697b',
			version: '4.0.0',
			project: 'Angular',
			date: '2017-03-23T23:48:54Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ee03418b10dced73acb931d1bc499ee2d869df63',
			version: '4.0.0-rc.6',
			project: 'Angular',
			date: '2017-03-23T06:09:47Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2d78c8cc05514e278a7e8bbda681ba076a1958cb',
			version: '4.0.0-rc.5',
			project: 'Angular',
			date: '2017-03-17T17:18:16Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/b7212f5afeb229f1036a68b8e10e7634f5ab694c',
			version: '4.0.0-rc.4',
			project: 'Angular',
			date: '2017-03-17T03:10:54Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d17d4a3b549a7278f027a7774bbc3af57912fa14',
			version: '4.0.0-rc.3',
			project: 'Angular',
			date: '2017-03-10T20:26:19Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/180b705227284c80b06c7e0ed8f8dc1ee57bf524',
			version: '4.0.0-rc.2',
			project: 'Angular',
			date: '2017-03-02T06:46:11Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/da79ad3cecee73f98d7a33ea350841cdd96d464b',
			version: '4.0.0-rc.1',
			project: 'Angular',
			date: '2017-02-25T02:03:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1bdf7061b8d3758842cf10bb7181a2fbde2f1d68',
			version: '4.0.0-beta.8',
			project: 'Angular',
			date: '2017-02-18T23:00:33Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/09b4bd0dfbfda800796f7dac0b0206e49243b23c',
			version: '4.0.0-beta.7',
			project: 'Angular',
			date: '2017-02-09T17:41:18Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/559cf9d19284f697c8cbacfc3affa0d140bfc562',
			version: '4.0.0-beta.6',
			project: 'Angular',
			date: '2017-02-03T05:19:27Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c4e7c083e2a5dca2467e4b2ccaabd5df4f531fa4',
			version: '4.0.0-beta.5',
			project: 'Angular',
			date: '2017-01-25T23:49:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/992647dc433b9be2431c24afccb336c2d81de9d2',
			version: '4.0.0-beta.4',
			project: 'Angular',
			date: '2017-01-19T00:51:31Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2c294d5dff9f026fbb3f463bbfb7c871f26fe86f',
			version: '4.0.0-beta.3',
			project: 'Angular',
			date: '2017-01-11T22:42:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ccb65893bf548fed62042f9ff9988ef133c3fd9a',
			version: '4.0.0-beta.2',
			project: 'Angular',
			date: '2017-01-06T01:18:21Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f114e402121d6dc486c6e4cba01179904ab89d84',
			version: '4.0.0-beta.1',
			project: 'Angular',
			date: '2016-12-22T00:48:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/fa9e21e83ca1fce0ce9b3efdb22c095f6e20604e',
			version: '4.0.0-beta.0',
			project: 'Angular',
			date: '2016-12-14T23:36:49Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6b57928d35730c3833e62581960a474b644770cd',
			version: '2.4.10',
			project: 'Angular',
			date: '2017-03-17T02:26:58Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/80fe41a88ecc90ab8b08318c6bee0238b2f5f46d',
			version: '2.4.9',
			project: 'Angular',
			date: '2017-03-02T07:11:26Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4f93ac8762667e2787e12c3b4a07d1fec50c5378',
			version: '2.4.8',
			project: 'Angular',
			date: '2017-02-18T21:55:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e90661aaee5ff6580a52711e1b75795b75cc9700',
			version: '2.4.7',
			project: 'Angular',
			date: '2017-02-09T04:28:11Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/343ee8a3a23dfcd171b018b8dfe85d571afccd6b',
			version: '2.4.6',
			project: 'Angular',
			date: '2017-02-03T04:04:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7ed39ebaafa077cba61c980570092e345f7ba43a',
			version: '2.4.5',
			project: 'Angular',
			date: '2017-01-25T21:48:29Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/84542d8ae7b600602ffb9bb84c4f6cef787f4e2d',
			version: '2.4.4',
			project: 'Angular',
			date: '2017-01-19T00:35:54Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a7d28044c5681417771cc23fcb0009c732c07580',
			version: '2.4.3',
			project: 'Angular',
			date: '2017-01-11T21:38:23Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/03b35d2e8f1e1bcd58c6795e275a362690211796',
			version: '2.4.2',
			project: 'Angular',
			date: '2017-01-06T20:40:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/28a92b2bcd182eab71914b687f9a201d55e0b7ed',
			version: '2.4.1',
			project: 'Angular',
			date: '2016-12-21T22:26:13Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6efdf84d3e66a9a6ea0c5ccd0d67304fc3022d1a',
			version: '2.4.0',
			project: 'Angular',
			date: '2016-12-20T01:42:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/540b1197a6936f94b963b0d6e237daedcf7b0e37',
			version: '2.3.1',
			project: 'Angular',
			date: '2016-12-15T02:22:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/13b41bd6310dd8c10d76deef45f157e0527b1707',
			version: '2.3.0',
			project: 'Angular',
			date: '2016-12-07T21:54:22Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c066281bada8dfdd8d59ccbe31de1676be82b1b1',
			version: '2.3.0-rc.0',
			project: 'Angular',
			date: '2016-11-30T23:42:56Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4553948cadf5d8186b7661edab01d1b4f3ce874e',
			version: '2.3.0-beta.1',
			project: 'Angular',
			date: '2016-11-22T23:10:47Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4e047302f2b8e617e0a40a4b9ab159077c87eb2d',
			version: '2.3.0-beta.0',
			project: 'Angular',
			date: '2016-11-17T19:59:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9a9a7ac7b523cce7fa9d9def0201c75cb935ea6d',
			version: '2.2.4',
			project: 'Angular',
			date: '2016-11-30T23:18:38Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/380377139b5123d67b3dc5df4e0c87e091da5a59',
			version: '2.2.3',
			project: 'Angular',
			date: '2016-11-23T21:00:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/11ed8f56ab4cf8290c9cfa9dc178fae301fe7139',
			version: '2.2.2',
			project: 'Angular',
			date: '2016-11-22T22:36:49Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/933caacad34a2be2cef696eecf21438fc5f7377a',
			version: '2.2.1',
			project: 'Angular',
			date: '2016-11-17T00:38:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2524d510bc1dd1a156c3e6ac01e7532c230e5410',
			version: '2.2.0',
			project: 'Angular',
			date: '2016-11-14T19:26:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/953cb50fa56fabd33fa8b97e2f221b59834252ed',
			version: '2.2.0-rc.0',
			project: 'Angular',
			date: '2016-11-02T23:28:29Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ec0acf9a1b15303d8368393dce36ad393cd16de1',
			version: '2.2.0-beta.1',
			project: 'Angular',
			date: '2016-10-27T16:28:07Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/69ad99dca6bebf6d26a8e9e5dd6772069ecc37f6',
			version: '2.2.0-beta.0',
			project: 'Angular',
			date: '2016-10-20T21:36:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/19273a89b6f3fbab1f8fd46c912800c701dc66aa',
			version: '2.1.2',
			project: 'Angular',
			date: '2016-10-27T18:28:13Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7a1f964201ef04d66ce3a53c37faa52538ea9e43',
			version: '2.1.1',
			project: 'Angular',
			date: '2016-10-20T22:36:02Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/07bd4b0630d9d14f5abc6d5156462cc579bcaaa2',
			version: '2.1.0',
			project: 'Angular',
			date: '2016-10-12T20:19:31Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ef621a2f00f1776616fb2f0cee01adf2c21a28b9',
			version: '2.1.0-rc.0',
			project: 'Angular',
			date: '2016-10-06T13:43:17Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2045268cec02336db06b7dcf109497388c8427c6',
			version: '2.1.0-beta.0',
			project: 'Angular',
			date: '2016-09-23T18:41:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/91f7aa3b154e93e72e16e40b003919f5ff9acd8b',
			version: '2.0.2',
			project: 'Angular',
			date: '2016-10-05T23:25:04Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/712d1a7c37b5dcd2878f814e64cfe44744f30f28',
			version: '2.0.1',
			project: 'Angular',
			date: '2016-09-23T18:28:36Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ffe5c49c3ebb51d534a339e0d85a0aa7967923dc',
			version: '2.0.0',
			project: 'Angular',
			date: '2016-09-14T23:49:10Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/fa994810d521913ec2a9484f76a816baaa398885',
			version: '2.0.0-rc.7',
			project: 'Angular',
			date: '2016-09-13T06:25:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/0ddae9b727240a111bf64d60615a75aebb711f4a',
			version: '2.0.0-rc.6',
			project: 'Angular',
			date: '2016-08-31T23:49:14Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ebcd14f8e911759242196b11f974bbe7b98d299a',
			version: '2.0.0-rc.5',
			project: 'Angular',
			date: '2016-08-09T17:34:07Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1608d91728af707d9740756a80e78cfb1148dd5a',
			version: '2.0.0-rc.4',
			project: 'Angular',
			date: '2016-06-30T17:16:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/bdbbe5aa20b76509f4e6739f06ff775ecb9679b7',
			version: '2.0.0-rc.3',
			project: 'Angular',
			date: '2016-06-21T23:34:48Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/933f45ef31d40f7769a1e18cc2186ed900bd8093',
			version: '2.0.0-rc.2',
			project: 'Angular',
			date: '2016-06-15T16:38:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6eac4b68bc445b4bc41e321bc3fd99b9759c341f',
			version: '2.0.0-rc.1',
			project: 'Angular',
			date: '2016-05-03T21:28:45Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/00d3b6083c8212ca74add314bd9b68ae02fa8f2d',
			version: '2.0.0-rc.0',
			project: 'Angular',
			date: '2016-05-02T22:06:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/0700c8a2527e542c726bcc9c0d724505720f4908',
			version: '2.0.0-beta.17',
			project: 'Angular',
			date: '2016-04-28T18:47:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/969b55326c8281a9e4a3d850ee7e368a276c9d13',
			version: '2.0.0-beta.16',
			project: 'Angular',
			date: '2016-04-26T05:08:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1cebd318e5b31df5491ef1017a6abf3444f901f4',
			version: '2.0.0-beta.15',
			project: 'Angular',
			date: '2016-04-13T20:47:09Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/06ad112998e3e3fed888fd7d911822496524c3f0',
			version: '2.0.0-beta.14',
			project: 'Angular',
			date: '2016-04-07T17:19:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/27a4d0ce111fbafb2dacb39a741d23787ac7abad',
			version: '2.0.0-beta.13',
			project: 'Angular',
			date: '2016-03-31T00:23:38Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/0898bca9398f851573743af706b456bd699e86f8',
			version: '2.0.0-beta.12',
			project: 'Angular',
			date: '2016-03-23T22:56:38Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c194f6695d3a00330ddfbefdc3ba393b0dce0dab',
			version: '2.0.0-beta.11',
			project: 'Angular',
			date: '2016-03-18T21:42:31Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/94a3f99ba363325c7f63af39103e8bdf9aa59b12',
			version: '2.0.0-beta.10',
			project: 'Angular',
			date: '2016-03-17T22:01:44Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f34fdaf1623f8dfd0a653d0275e8558332001d5b',
			version: '2.0.0-beta.9',
			project: 'Angular',
			date: '2016-03-09T22:56:08Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2830df4190e98d05bad396993776d31ba6efa6e2',
			version: '2.0.0-beta.8',
			project: 'Angular',
			date: '2016-03-02T19:32:38Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/2f5a2ba67116280ff3e755b43c6345a99b8f4d06',
			version: '2.0.0-beta.7',
			project: 'Angular',
			date: '2016-02-18T21:28:10Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e72dc16dbe4afa3428c4524901cbd2501a84a98b',
			version: '2.0.0-beta.6',
			project: 'Angular',
			date: '2016-02-12T00:03:00Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/185c679563591c02bce390f9603d2975c2132501',
			version: '2.0.0-beta.5',
			project: 'Angular',
			date: '2016-02-11T00:16:05Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/e6c8637cb8fe4260df927848b676021b59095287',
			version: '2.0.0-beta.4',
			project: 'Angular',
			date: '2016-02-10T23:34:13Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4f1f29d7d24ee24c5fdbf3838d602dde48b8e40f',
			version: '2.0.0-beta.3',
			project: 'Angular',
			date: '2016-02-03T18:11:37Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/4945e735886581075f193f241c45af4da892c4dd',
			version: '2.0.0-beta.2',
			project: 'Angular',
			date: '2016-01-28T19:34:11Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/046758cf6196e928b747ea5787280cd3c5a943a9',
			version: '2.0.0-beta.1',
			project: 'Angular',
			date: '2016-01-08T20:09:34Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f50affaf9cd2415693d958ae224af5378764a117',
			version: '2.0.0-beta.0',
			project: 'Angular',
			date: '2015-12-15T18:54:10Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a45b27e7f9c0c23e5bc3786e0a9ea16ec591950e',
			version: '2.0.0-alpha.55',
			project: 'Angular',
			date: '2015-12-15T17:57:05Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/059e09c3be57722a2572157d89826b72018c4ca1',
			version: '2.0.0-alpha.54',
			project: 'Angular',
			date: '2015-12-15T11:04:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/892f9e19bc1a481038181b18319c54c90b72e62d',
			version: '2.0.0-alpha.53',
			project: 'Angular',
			date: '2015-12-13T01:59:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c8d6ad27189eae9cbf458f0ac1aaed7a5015f3a7',
			version: '2.0.0-alpha.52',
			project: 'Angular',
			date: '2015-12-10T08:48:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f1741b10f296e688caf8bb3d5cd1596208bdeabd',
			version: '2.0.0-alpha.51',
			project: 'Angular',
			date: '2015-12-10T03:28:52Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/214148d58a424717f7a08c8a73ceeb9a02cde525',
			version: '2.0.0-alpha.50',
			project: 'Angular',
			date: '2015-12-09T03:07:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/90c67b4b11c544ff5270968b29bd2b894e876a5e',
			version: '2.0.0-alpha.49',
			project: 'Angular',
			date: '2015-12-09T01:41:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/a090843b84f4ab2e0b5789ccce089ce2c3439083',
			version: '2.0.0-alpha.48',
			project: 'Angular',
			date: '2015-12-05T01:12:22Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/015faeeaf2c0bc43c93531a01ae692ff82900e62',
			version: '2.0.0-alpha.47',
			project: 'Angular',
			date: '2015-12-01T19:43:45Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/ed12e17b0062433d093a3c9f239e767d8699ece4',
			version: '2.0.0-alpha.46',
			project: 'Angular',
			date: '2015-11-11T02:20:34Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7196243628f1a37801a8ae8e64f71e298286a2d5',
			version: '2.0.0-alpha.45',
			project: 'Angular',
			date: '2015-10-29T00:36:56Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/52564571440a35ba49d1a53e8e3992bc1d178f95',
			version: '2.0.0-alpha.44',
			project: 'Angular',
			date: '2015-10-15T23:38:08Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/9fc24b9c52ae110d2ffcfc686bf824e3de63c706',
			version: '2.0.0-alpha.42',
			project: 'Angular',
			date: '2015-10-13T23:04:27Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d02b794af2ff9d418165f763b8db39788e5e3104',
			version: '2.0.0-alpha.41',
			project: 'Angular',
			date: '2015-10-13T19:52:33Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/35a61b449a809f268df2b2db9de73d9d9d959bb0',
			version: '2.0.0-alpha.40',
			project: 'Angular',
			date: '2015-10-09T01:46:46Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7d5c3eb001b25ff06143dfab03c9422f56ebb10d',
			version: '2.0.0-alpha.39',
			project: 'Angular',
			date: '2015-10-06T19:13:35Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f77234e6bd1d75bcfa846728971cc1588bdf8cd3',
			version: '2.0.0-alpha.38',
			project: 'Angular',
			date: '2015-10-03T00:29:59Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7374153db562fecad3490f5bf8ad8193523ab21a',
			version: '2.0.0-alpha.37',
			project: 'Angular',
			date: '2015-09-09T23:21:13Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/77ccc1ca0c5642c7d4aacc9b8eda649fcccd2a26',
			version: '2.0.0-alpha.36',
			project: 'Angular',
			date: '2015-08-31T19:46:36Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/5f7d4faa8872f784f895248dcae795cdbaf58d8a',
			version: '2.0.0-alpha.35',
			project: 'Angular',
			date: '2015-08-18T20:32:43Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/450d3630cc2eb5afdbb535334d647a830badf91c',
			version: '2.0.0-alpha.34',
			project: 'Angular',
			date: '2015-08-05T00:29:32Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/aae5a4cece5a5185cbde63bb49f53ea5281815be',
			version: '2.0.0-alpha.33',
			project: 'Angular',
			date: '2015-07-29T14:56:30Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6f4a39c337f85a63d379da349855814a623ce28e',
			version: '2.0.0-alpha.32',
			project: 'Angular',
			date: '2015-07-21T21:39:28Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/34993f76917e229048343cb8a41699487412da78',
			version: '2.0.0-alpha.31',
			project: 'Angular',
			date: '2015-07-14T17:52:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/6c933a448531751d138df1437ccd0299c6b6ed11',
			version: '2.0.0-alpha.30',
			project: 'Angular',
			date: '2015-07-08T04:39:10Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/46bb4e37ba23866eaf71b4288130962897bd5350',
			version: '2.0.0-alpha.29',
			project: 'Angular',
			date: '2015-07-01T23:29:03Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/19a9dc67bddd411c0e1a2ae5b9d743e962e4ca4f',
			version: '2.0.0-alpha.28',
			project: 'Angular',
			date: '2015-06-24T23:20:57Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f93aae4802e514ab77912d05794bf650e82524cc',
			version: '2.0.0-alpha.27',
			project: 'Angular',
			date: '2015-06-17T04:34:47Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/d53c898499a544d08f0db7494bac2d22f66c270f',
			version: '2.0.0-alpha.26',
			project: 'Angular',
			date: '2015-06-04T00:36:12Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/c28952c707ff15a522b8f80336da61038ce39a59',
			version: '2.0.0-alpha.25',
			project: 'Angular',
			date: '2015-05-22T00:37:45Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/adaa157317da4305e659c41e44f664023aacc12d',
			version: '2.0.0-alpha.24',
			project: 'Angular',
			date: '2015-05-19T21:47:59Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7dc524ed5888c217ba40f721ccc1494193432d66',
			version: '2.0.0-alpha.23',
			project: 'Angular',
			date: '2015-05-12T22:06:00Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/f0ef72d6cc95802ea62b233323e239f5dbbe8d9a',
			version: '2.0.0-alpha.22',
			project: 'Angular',
			date: '2015-05-07T23:04:06Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/b72eb0783b24a785c34d4f74e667c224adb36b12',
			version: '2.0.0-alpha.21',
			project: 'Angular',
			date: '2015-04-28T05:15:48Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/fe70c2647a2c30b49d17a5a53b85672afcf55aef',
			version: '2.0.0-alpha.20',
			project: 'Angular',
			date: '2015-04-21T00:53:29Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/7d29636087dbb9964f6c5a2bfe61032bed73db39',
			version: '2.0.0-alpha.19',
			project: 'Angular',
			date: '2015-04-13T23:15:12Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/dbffa88dc2ba6ab49c706c6fe1e5dcb0f3b19ed9',
			version: '2.0.0-alpha.18',
			project: 'Angular',
			date: '2015-03-28T00:16:22Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/50f8892c6bb8e33ec888fc4fd987d8b1bab19c54',
			version: '2.0.0-alpha.17',
			project: 'Angular',
			date: '2015-03-27T23:21:41Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/acce69da754bfdd6eaf4a7fe0ff75e4e6c11a849',
			version: '2.0.0-alpha.16',
			project: 'Angular',
			date: '2015-03-26T20:29:47Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/81e6d13241d143b6e72a09530314db5a9e24aeaa',
			version: '2.0.0-alpha.15',
			project: 'Angular',
			date: '2015-03-24T14:50:39Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/1c9938ed9868259955b2d12c8ae541bf6dcbf09a',
			version: '2.0.0-alpha.14',
			project: 'Angular',
			date: '2015-03-24T00:14:55Z'
		},
		{
			url:
				'https://github.com/angular/angular/commit/da4862a0c82866e117ee3727f80b205c00da0710',
			version: '2.0.0-alpha.13',
			project: 'Angular',
			date: '2015-03-14T03:49:51Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c3c5c5eea2eeff82b1ae6c855a4508f8ff51cedc',
			version: 'v1.6.9',
			project: 'Angular',
			date: '2018-02-02T10:19:32Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/8302981a08cf9f75c654b7f8494b2fe0e576023e',
			version: 'v1.6.8',
			project: 'Angular',
			date: '2017-12-18T14:17:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b168aef86122caa9fdba608729cc5704ae5d0a52',
			version: 'v1.6.7',
			project: 'Angular',
			date: '2017-11-24T17:44:04Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/4a34c8e1b8bce0612c1e35e1b41bb76ca2e562ca',
			version: 'v1.6.6',
			project: 'Angular',
			date: '2017-08-18T13:12:44Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/19a0c9324c5875ac59c9451c73162b41f7f66483',
			version: 'v1.6.5',
			project: 'Angular',
			date: '2017-07-03T19:34:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b4d1e5e492df43c49c9e4215ea75d9155fd8ba88',
			version: 'v1.6.4',
			project: 'Angular',
			date: '2017-03-31T08:48:25Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/30cd764b6d04e58b6cd1fa4da09ffed62d800795',
			version: 'v1.6.3',
			project: 'Angular',
			date: '2017-03-08T11:44:24Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d7422da7d7b73cac0bade4152a802532157c9f1c',
			version: 'v1.6.2',
			project: 'Angular',
			date: '2017-02-05T15:58:25Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2a2ac5f53a46791ae38e18fb2ad1d39d55d34a72',
			version: 'v1.6.1',
			project: 'Angular',
			date: '2016-12-23T10:38:58Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/4c5afb5cc2f72e966be9ee4f80732dd6e143d91d',
			version: 'v1.6.0',
			project: 'Angular',
			date: '2016-12-08T11:07:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/dcfcf8189361fc1359583525ee48fce1fa2e9de1',
			version: 'v1.6.0-rc.2',
			project: 'Angular',
			date: '2016-11-24T21:30:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/fc4afd0c1b317c38fc81aeb0d3121a8474292060',
			version: 'v1.6.0-rc.1',
			project: 'Angular',
			date: '2016-11-21T13:27:47Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1cf01d6fa7fcfb45bef46e4a800845ae8ab90b06',
			version: 'v1.6.0-rc.0',
			project: 'Angular',
			date: '2016-10-27T19:28:09Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f73a651461f06d61895c4de05a01c2191e78e944',
			version: 'v1.5.11',
			project: 'Angular',
			date: '2017-01-12T09:22:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/11fbc17f65926df18e4da788b7148cc5d0554aeb',
			version: 'v1.5.10',
			project: 'Angular',
			date: '2016-12-16T10:27:04Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/7fa2fdba3b22b1a99f80eebafe4fa4464149fb9a',
			version: 'v1.5.9',
			project: 'Angular',
			date: '2016-11-24T09:27:57Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/22b669407c3547f1e7c62a32d401a4f60528ad7c',
			version: 'v1.5.8',
			project: 'Angular',
			date: '2016-07-22T15:01:46Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/cfbe1a701a7692aeaf31e08dc7099b4253634531',
			version: 'v1.5.7',
			project: 'Angular',
			date: '2016-06-14T15:08:25Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/60689afe1cf5451f6c0a18484e2705e609a5c484',
			version: 'v1.5.6',
			project: 'Angular',
			date: '2016-05-25T16:00:13Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/25d4e5cca4fa615e49d65976223c6deb5b485b4c',
			version: 'v1.5.5',
			project: 'Angular',
			date: '2016-04-15T13:09:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f276ad0d5195a2956d9368556cfd20881b53d1de',
			version: 'v1.5.4',
			project: 'Angular',
			date: '2016-04-14T08:13:48Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/514639b585affc218a6899f1b1755863647fa5a8',
			version: 'v1.5.3',
			project: 'Angular',
			date: '2016-03-25T20:01:45Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f665968dafdc2e1f8fdd3ee466feecbdb137ee5d',
			version: 'v1.5.2',
			project: 'Angular',
			date: '2016-03-18T22:37:43Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a4e60cb6970d8b6fa9e0af4b9f881ee3ba7fdc99',
			version: 'v1.5.1',
			project: 'Angular',
			date: '2016-03-14T14:45:29Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/39eecd136f5782e85a92f611cf3e73ac6b97caf2',
			version: 'v1.5.0',
			project: 'Angular',
			date: '2016-02-05T10:04:17Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5a3504abdce38b9ebb01b1f5a6e45e675ae4488c',
			version: 'v1.5.0-rc.2',
			project: 'Angular',
			date: '2016-01-28T09:51:01Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b77e14beea02599e61c496d04a446cdfd69fb043',
			version: 'v1.5.0-rc.1',
			project: 'Angular',
			date: '2016-01-15T20:31:08Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/23c4ae522ae72fe20114c3283ea90cefb3101bcc',
			version: 'v1.5.0-rc.0',
			project: 'Angular',
			date: '2015-12-09T13:50:58Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ca7f4a387c140199ca3d6de6459b4ddcde42ec81',
			version: 'v1.5.0-beta.2',
			project: 'Angular',
			date: '2015-11-17T23:57:27Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/6b123a0419d6cd2009f148e2f1c6be3b5465373f',
			version: 'v1.5.0-beta.1',
			project: 'Angular',
			date: '2015-09-29T20:59:34Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f8cf28a788f8a5b6c08849061e2216bf60674ba7',
			version: 'v1.5.0-beta.0',
			project: 'Angular',
			date: '2015-09-17T12:42:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/6a7d715944b9b6f8fc3de2968c479fec3b7695d7',
			version: 'v1.4.14',
			project: 'Angular',
			date: '2016-10-11T13:11:08Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/693d1334566f78987f5a361a100db4f889f35abd',
			version: 'v1.4.13',
			project: 'Angular',
			date: '2016-10-10T21:02:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/996c901ff9f24d0a93bba8eb9fdee943cc5150ad',
			version: 'v1.4.12',
			project: 'Angular',
			date: '2016-06-07T08:44:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0d764b581d8b494190fa280f8870eee8fd039933',
			version: 'v1.4.11',
			project: 'Angular',
			date: '2016-05-24T14:44:11Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/8dee8f1b9e0568cdeefd0b01dda1da31eca5e183',
			version: 'v1.4.10',
			project: 'Angular',
			date: '2016-03-14T21:27:49Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a84393eadb3fef6dce5d424978e27adec296eca2',
			version: 'v1.4.9',
			project: 'Angular',
			date: '2016-01-20T18:11:04Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/75e876424da5f569481488d03cf3a61441341513',
			version: 'v1.4.8',
			project: 'Angular',
			date: '2015-11-19T22:52:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2f61145475e495e0f477fca091c51674f5cff935',
			version: 'v1.4.7',
			project: 'Angular',
			date: '2015-09-29T20:54:51Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/19ecdb54bf85fc4e7bd3cde453aa6843f869a1ab',
			version: 'v1.4.6',
			project: 'Angular',
			date: '2015-09-14T20:43:55Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1d18e60ef7776c53716622c18f6a127284a58d92',
			version: 'v1.4.5',
			project: 'Angular',
			date: '2015-08-28T19:06:35Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b497f3e47fbf93cfc2d8f184fd1c4dc26fbec9b7',
			version: 'v1.4.4',
			project: 'Angular',
			date: '2015-08-13T18:15:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1622182737a41cf4619a514fd71529e07e82d594',
			version: 'v1.4.3',
			project: 'Angular',
			date: '2015-07-15T01:26:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1f5e42e8821217026ef36a46d36f84d7cd32830a',
			version: 'v1.4.2',
			project: 'Angular',
			date: '2015-07-02T11:36:49Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/46b7cf7464ef7f37b3d2919847627e58ff7fdca8',
			version: 'v1.4.1',
			project: 'Angular',
			date: '2015-06-15T18:50:59Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/291d7c467fba51a9cb89cbeee62202d51fe64b09',
			version: 'v1.4.0',
			project: 'Angular',
			date: '2015-05-27T00:34:50Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0681a5400e4150a961f9c8651e55623ca23b0cc2',
			version: 'v1.4.0-rc.2',
			project: 'Angular',
			date: '2015-05-07T21:33:28Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c10b249e3d08b3bf27a871138d7f587a46b244cb',
			version: 'v1.4.0-rc.1',
			project: 'Angular',
			date: '2015-04-24T18:26:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b6afe1b208d7b49cca3695b2bdd1c7b7c2ff635d',
			version: 'v1.4.0-rc.0',
			project: 'Angular',
			date: '2015-04-10T17:44:35Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d8492f43319f95c4b03123142697f5d6e1b2e358',
			version: 'v1.4.0-beta.6',
			project: 'Angular',
			date: '2015-03-15T21:00:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/958bc1ab77860220f51c62006cbc817904291222',
			version: 'v1.4.0-beta.5',
			project: 'Angular',
			date: '2015-02-24T17:22:13Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9d53e5a38dd369dec82d82e13e078df3d6054c8a',
			version: 'v1.4.0-beta.4',
			project: 'Angular',
			date: '2015-02-07T10:26:21Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2e5a7e52a0385575bbb55a801471b009afafeca3',
			version: 'v1.4.0-beta.3',
			project: 'Angular',
			date: '2015-02-03T18:46:22Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/76df11657410a8246466ade36361fdf2b81d8570',
			version: 'v1.4.0-beta.2',
			project: 'Angular',
			date: '2015-01-26T22:50:48Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d435464c51d3912f56cfc830d86bfc64a1578327',
			version: 'v1.4.0-beta.1',
			project: 'Angular',
			date: '2015-01-20T18:42:59Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1a7e9de8d8efcb1b2453b5553fa4aad36521750f',
			version: 'v1.4.0-beta.0',
			project: 'Angular',
			date: '2015-01-14T20:44:32Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2a65c3deb76566b8810807267788c8983f1a36d4',
			version: 'v1.3.20',
			project: 'Angular',
			date: '2015-09-29T20:54:03Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e201f9040fd61255a623e34dfa1d443eb4508c0a',
			version: 'v1.3.19',
			project: 'Angular',
			date: '2015-09-15T12:34:09Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f7622dcc0d686b08e85b16d9bfc984911403cdec',
			version: 'v1.3.18',
			project: 'Angular',
			date: '2015-08-18T22:14:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/7e6155a6f1b3ba35b61c4f051ca26833d416fcf3',
			version: 'v1.3.17',
			project: 'Angular',
			date: '2015-07-01T19:16:14Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5a1b4a06f47ae9d8324385d5f809b33ddd832595',
			version: 'v1.3.16',
			project: 'Angular',
			date: '2015-06-05T20:29:27Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/874392464bad6efce805c683190826fceb5d2ab7',
			version: 'v1.3.15',
			project: 'Angular',
			date: '2015-03-15T21:01:49Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/59205d7809630fb061c849171aad9c6b2a22f09a',
			version: 'v1.3.14',
			project: 'Angular',
			date: '2015-02-24T17:22:45Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ce49d4d61bd02464b6c6376af8048f6eb09330a8',
			version: 'v1.3.13',
			project: 'Angular',
			date: '2015-02-07T18:21:53Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/923b6aba0d156bf58d072a7577f31de2fa3b585c',
			version: 'v1.3.12',
			project: 'Angular',
			date: '2015-02-02T14:03:17Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ef6fed3ef87802260b5efae6d2ebac09399c35bd',
			version: 'v1.3.11',
			project: 'Angular',
			date: '2015-01-26T22:20:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d01cae2a0dd8bae3c8b8bd5792816d0c466355d1',
			version: 'v1.3.10',
			project: 'Angular',
			date: '2015-01-20T18:31:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e4adebd07ad1e960b7deed1791278eef97c2d56a',
			version: 'v1.3.9',
			project: 'Angular',
			date: '2015-01-13T19:29:29Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/47a55ca767688fb6e1c5383c1bb0287f3b92f8e9',
			version: 'v1.3.8',
			project: 'Angular',
			date: '2014-12-19T21:22:00Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0524e92d2eae89b52460ade4a884f9b404da6558',
			version: 'v1.3.7',
			project: 'Angular',
			date: '2014-12-15T13:46:21Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/6ad109e7457031463e1241db64d7f3075629f936',
			version: 'v1.3.6',
			project: 'Angular',
			date: '2014-12-08T21:29:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9fa73cb4e7190b4d00b65f2f8f9f7d37607308ba',
			version: 'v1.3.5',
			project: 'Angular',
			date: '2014-12-01T18:54:14Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9474ec120acc425103516f1018e63ae39d7d629b',
			version: 'v1.3.4',
			project: 'Angular',
			date: '2014-11-24T23:05:18Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/4d4e6036a9bdb1a119959f3227fb330fd337d78c',
			version: 'v1.3.3',
			project: 'Angular',
			date: '2014-11-17T17:32:21Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9e305948e4965fb86b0c79985dc6e8c59a9c66af',
			version: 'v1.3.2',
			project: 'Angular',
			date: '2014-11-07T18:22:01Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ed6e91b31824b57a084b33b4fc7f869c8d5909be',
			version: 'v1.3.1',
			project: 'Angular',
			date: '2014-10-31T16:28:58Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/399a7afafefb8818f255d5b9e6a42b2b57aabf97',
			version: 'v1.3.0',
			project: 'Angular',
			date: '2014-10-13T22:27:20Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e6ece7d993c846889bf58cb384d759235e345450',
			version: 'v1.3.0-rc.5',
			project: 'Angular',
			date: '2014-10-08T22:51:30Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/10644432ca9d5da69ce790a8d9e691640f333711',
			version: 'v1.3.0-rc.4',
			project: 'Angular',
			date: '2014-10-02T00:37:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/de38899f747f3883eccc79c167a1124670fe3201',
			version: 'v1.3.0-rc.3',
			project: 'Angular',
			date: '2014-09-24T01:47:24Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/14a92a5982bc516ab7fffe3e170bc33c6efc7308',
			version: 'v1.3.0-rc.2',
			project: 'Angular',
			date: '2014-09-16T21:52:25Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c54990ca6e1edfa02a6d1e08819ec8c3ef8fc11e',
			version: 'v1.3.0-rc.1',
			project: 'Angular',
			date: '2014-09-09T22:45:51Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/202aed77700b44777516d453ca88196b1b916191',
			version: 'v1.3.0-rc.0',
			project: 'Angular',
			date: '2014-08-30T01:22:46Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/fc8d6d75ab899870499d7ff740c717c3ce643423',
			version: 'v1.3.0-beta.19',
			project: 'Angular',
			date: '2014-08-22T22:57:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2d678f1d0a3714fdd49e582b92787312af129947',
			version: 'v1.3.0-beta.18',
			project: 'Angular',
			date: '2014-08-11T15:54:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/86340a59bf9eb7bdfc4f99000cecf628cd10d9c8',
			version: 'v1.3.0-beta.17',
			project: 'Angular',
			date: '2014-07-25T15:37:53Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/bd2fb3d9c0012c7d47bfebbfb554350f99b557ce',
			version: 'v1.3.0-beta.16',
			project: 'Angular',
			date: '2014-07-18T19:18:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d15cea48c3b795d7eb65bc5b4f9689effaab5737',
			version: 'v1.3.0-beta.15',
			project: 'Angular',
			date: '2014-07-11T18:15:42Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2e6144670d5bba6ac8ad000056c6c4cf349ec151',
			version: 'v1.3.0-beta.14',
			project: 'Angular',
			date: '2014-06-30T16:52:32Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/6addac397d82119bd9caaf35c762f908c6a71dce',
			version: 'v1.3.0-beta.13',
			project: 'Angular',
			date: '2014-06-16T17:47:09Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/16dfcb61aed28cdef3bfbed540e2deea6d9e9632',
			version: 'v1.3.0-beta.12',
			project: 'Angular',
			date: '2014-06-13T20:41:18Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ebf59b4206afd801e3effd440e8d930063f1f8f3',
			version: 'v1.3.0-beta.11',
			project: 'Angular',
			date: '2014-06-06T19:22:50Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/3ec4af941390800bd317579bd0ae34d3fc309569',
			version: 'v1.3.0-beta.10',
			project: 'Angular',
			date: '2014-05-23T22:08:36Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/819dd5df92ad73b48e370c00d6e8cea10bf08e63',
			version: 'v1.3.0-beta.9',
			project: 'Angular',
			date: '2014-05-16T22:14:12Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/562c4e424b0ed5f8d4bffba0cd18e66db2059043',
			version: 'v1.3.0-beta.8',
			project: 'Angular',
			date: '2014-05-09T13:42:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/ff03d7b3234a2ed027366a85a6ad7b14aac47feb',
			version: 'v1.3.0-beta.7',
			project: 'Angular',
			date: '2014-04-25T22:00:17Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/7bcaf39437968dc5721fc81927463fdaf746cad3',
			version: 'v1.3.0-beta.6',
			project: 'Angular',
			date: '2014-04-21T22:57:08Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/8e2c62ae9dedc9aef1d2926068de8f63a62a578c',
			version: 'v1.3.0-beta.5',
			project: 'Angular',
			date: '2014-04-03T21:46:15Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/876df046069eea93fc744e84d531a3f2f47cdd3b',
			version: 'v1.3.0-beta.4',
			project: 'Angular',
			date: '2014-03-28T21:43:17Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/3f2d7565322a0c8bf72a1ed9da90885a8707161c',
			version: 'v1.3.0-beta.3',
			project: 'Angular',
			date: '2014-03-21T18:16:35Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9bfbb16e235767aeb8f50855b38626159fa35278',
			version: 'v1.3.0-beta.2',
			project: 'Angular',
			date: '2014-03-14T23:26:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f08bf6f1f77079dbd3bc28fcae207086f887434f',
			version: 'v1.3.0-beta.1',
			project: 'Angular',
			date: '2014-03-08T00:23:14Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b8a0ecdd6189fb111734eb5b6d4d473d0dcf4c36',
			version: 'v1.2.32',
			project: 'Angular',
			date: '2016-10-11T12:48:38Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a5f4d32d013c9869d1d28b4a50253e6d50a3e2af',
			version: 'v1.2.31',
			project: 'Angular',
			date: '2016-10-11T06:48:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2687c26140585d9e3716f9f559390f5d8d598fdf',
			version: 'v1.2.30',
			project: 'Angular',
			date: '2016-07-20T20:17:37Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c95f8677e1071801fd987d26475d5dc630296781',
			version: 'v1.2.29',
			project: 'Angular',
			date: '2015-09-29T20:18:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/37310e024d6dd6894ed3ac6a3e2a84da6d6bbd1a',
			version: 'v1.2.28',
			project: 'Angular',
			date: '2014-12-14T02:28:02Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/17d8a520caeecdafd55d26326ef869c888493176',
			version: 'v1.2.27',
			project: 'Angular',
			date: '2014-11-20T22:34:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/07d62426f6e1bfbabdb29bcb35f21c456df439aa',
			version: 'v1.2.26',
			project: 'Angular',
			date: '2014-10-02T16:46:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f6f0791867777f91e609130ca0ed047de83d56b6',
			version: 'v1.2.25',
			project: 'Angular',
			date: '2014-09-16T22:05:22Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d396f42537959cd05dd8ee3ba2b095a3421f616b',
			version: 'v1.2.24',
			project: 'Angular',
			date: '2014-09-09T23:21:16Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/00456a8f93b0b168393041dae4460bf0b0acc04c',
			version: 'v1.2.23',
			project: 'Angular',
			date: '2014-08-22T22:56:49Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/93b0c2d8925e354159cc421e5be1bca9582f7b70',
			version: 'v1.2.22',
			project: 'Angular',
			date: '2014-08-11T16:04:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/cd9afd99615fff72e87971700f1346525ba76c59',
			version: 'v1.2.21',
			project: 'Angular',
			date: '2014-07-25T16:01:43Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/eba192b8638192168e6ba44bdd887172e5321281',
			version: 'v1.2.20',
			project: 'Angular',
			date: '2014-07-11T18:26:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b586bfdfab3331b3adb879ba43636ecbd8cab296',
			version: 'v1.2.19',
			project: 'Angular',
			date: '2014-06-30T23:58:15Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f0904cf12e4f01daa2d4fcbb20c762050125ca55',
			version: 'v1.2.18',
			project: 'Angular',
			date: '2014-06-13T20:55:33Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/6acc73f3e04cf7fed5faaaac75bbef4e805e8c1e',
			version: 'v1.2.17',
			project: 'Angular',
			date: '2014-06-06T19:13:16Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/fef0cfc8374c6e61a2711dd63df2ccc8e606e6bd',
			version: 'v1.2.16',
			project: 'Angular',
			date: '2014-04-03T21:42:19Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a9b5a1087ddea10c95318981c20c386a56ca19f7',
			version: 'v1.2.15',
			project: 'Angular',
			date: '2014-03-21T21:58:48Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/729fb13c9ef4181cce0a2d96529ec3a8479601be',
			version: 'v1.2.14',
			project: 'Angular',
			date: '2014-03-01T17:51:19Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c086f831fbcb4e658993c2d7136d52eed04e486c',
			version: 'v1.2.13',
			project: 'Angular',
			date: '2014-02-15T00:41:02Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5cc5cc13b9beb996e0173e97db5c0e04d0204dfb',
			version: 'v1.2.12',
			project: 'Angular',
			date: '2014-02-07T22:00:28Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d5eedf38db6e6b49fb646cd7443556790c67207d',
			version: 'v1.2.11',
			project: 'Angular',
			date: '2014-02-03T17:40:03Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/451bde124497a4fdae19a4f7e89c42cd3715ac09',
			version: 'v1.2.10',
			project: 'Angular',
			date: '2014-01-24T23:28:28Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/07ee29c5639dbabfba97c1c9096aa5f04d0b43d7',
			version: 'v1.2.9',
			project: 'Angular',
			date: '2014-01-15T18:02:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0f9a1c21e6d7c57dc02842efa9612a1a70993146',
			version: 'v1.2.8',
			project: 'Angular',
			date: '2014-01-10T20:37:49Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c6d04b3a3d06c94f0a3479b9dd750f3b224920fd',
			version: 'v1.2.7',
			project: 'Angular',
			date: '2014-01-03T18:28:30Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/98ee3719f98959cddf669586ce6339f20f08ce57',
			version: 'v1.2.6',
			project: 'Angular',
			date: '2013-12-19T23:50:07Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/3468ad1b61d7440a1727048d7e7c2a7795e1656b',
			version: 'v1.2.5',
			project: 'Angular',
			date: '2013-12-13T18:52:13Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/78ba429e6a3269594afbffcca2980e76281c43e0',
			version: 'v1.2.4',
			project: 'Angular',
			date: '2013-12-06T18:14:56Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/38fb542838324dc0e66b2f5eced70a4b5e682abc',
			version: 'v1.2.3',
			project: 'Angular',
			date: '2013-11-27T10:04:59Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/3efdeebcb7ef112e17dc9bf2b7e8994eae41c4da',
			version: 'v1.2.2',
			project: 'Angular',
			date: '2013-11-22T17:05:42Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a3eb6baf58f779c0ac9780eb8949d11fba40e483',
			version: 'v1.2.1',
			project: 'Angular',
			date: '2013-11-15T06:33:20Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/907f71597affff552a4b79a1d913404fad68df11',
			version: 'v1.2.0',
			project: 'Angular',
			date: '2013-11-08T17:40:09Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e16c9362e7e24dbed2c45cb40bc501754b4c75ff',
			version: 'v1.2.0rc1',
			project: 'Angular',
			date: '2013-08-13T18:50:32Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0d63ad5ccf11637eb7737d4d0a7c9edaaece6845',
			version: 'v1.2.0-rc.3',
			project: 'Angular',
			date: '2013-10-14T17:36:23Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c0ad2efb24e4fffff6cb503ca821fe7e0bd4618b',
			version: 'v1.2.0-rc.2',
			project: 'Angular',
			date: '2013-09-04T12:50:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9a7035e8154fa7d39a42eb14eaa05a36439f34ac',
			version: 'v1.1.5',
			project: 'Angular',
			date: '2013-05-22T08:05:11Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5e3ee0a99b590cf8d9786df29a94ad8833183cd0',
			version: 'v1.1.4',
			project: 'Angular',
			date: '2013-04-04T01:54:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/de6d4ca1da2920f41017899149e064b7e849a7a4',
			version: 'v1.1.3',
			project: 'Angular',
			date: '2013-02-20T20:54:44Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/574573499128f18dabc29dbd2cbd54a59f5a4f0e',
			version: 'v1.1.2',
			project: 'Angular',
			date: '2013-01-23T18:54:35Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2ee0f56c546fcc018c264e7c00df4d06f369b42e',
			version: 'v1.1.1',
			project: 'Angular',
			date: '2012-11-27T00:45:35Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d0c0eadeddf6382cc8d8996fc9ac1f5cddf4d97a',
			version: 'v1.1.0',
			project: 'Angular',
			date: '2012-09-04T18:11:09Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/56817e9faa5cb9ece762bb3d6332eb9fb98f9d59',
			version: 'v1.0.8',
			project: 'Angular',
			date: '2013-08-22T18:20:23Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/dc6f149973ef8ff2f86ad8a13e85375630863383',
			version: 'v1.0.7',
			project: 'Angular',
			date: '2013-05-22T08:05:53Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/4b8629b6b842c8a33282bc82276552308ea0cd5b',
			version: 'v1.0.6',
			project: 'Angular',
			date: '2013-04-04T17:48:05Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d2a769e19627c9b69d990d309b5fb474beb16d0a',
			version: 'v1.0.5',
			project: 'Angular',
			date: '2013-02-20T20:58:02Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/652feebd8678d27cb3c1f2bbd72de07a375f328a',
			version: 'v1.0.4',
			project: 'Angular',
			date: '2013-01-23T18:57:51Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a03e370a09083961f79883846c75bbfcd527fd2f',
			version: 'v1.0.3',
			project: 'Angular',
			date: '2012-11-27T00:44:46Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/da984ad1878434e5a1653800e844fa609c742141',
			version: 'v1.0.2',
			project: 'Angular',
			date: '2012-09-04T18:08:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9bef436b22f0cd57c294f1db1958f46e64fcfed1',
			version: 'v1.0.1',
			project: 'Angular',
			date: '2012-06-25T16:30:57Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/519bef4f3d1cdac497c782f77457fd2f67184601',
			version: 'v1.0.0',
			project: 'Angular',
			date: '2012-06-14T17:50:22Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/7fa1995e08a4b34302f1084af4f5f38190e3fe20',
			version: 'v1.0.0rc12',
			project: 'Angular',
			date: '2012-06-12T08:46:02Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/068f2f9d43cb88bee1b7637f13ff6847f143bbdf',
			version: 'v1.0.0rc11',
			project: 'Angular',
			date: '2012-06-11T07:03:01Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5fdf42ce3949ccf5a2e1f2beee50b6b57279f53e',
			version: 'v1.0.0rc10',
			project: 'Angular',
			date: '2012-05-24T04:05:21Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d70223e53e46d2860d5c836036df37847cc04e35',
			version: 'v1.0.0rc9',
			project: 'Angular',
			date: '2012-05-15T05:13:15Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/8ba1fd87e1ccba6953a6ec34c9af515749200f13',
			version: 'v1.0.0rc8',
			project: 'Angular',
			date: '2012-05-07T07:09:20Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/76afa406b1be0105149290d4716b735457518a47',
			version: 'v1.0.0rc7',
			project: 'Angular',
			date: '2012-04-30T23:32:45Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1d26acb8746533433d247f986128a142e627c320',
			version: 'v1.0.0rc6',
			project: 'Angular',
			date: '2012-04-20T22:06:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9260b4937d501d7fcab8c3e38bd9bdf15e6696c2',
			version: 'v1.0.0rc5',
			project: 'Angular',
			date: '2012-04-12T10:56:28Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/bd4a4d390c9f2c9d015c5e72e53c2b9cafea9f2c',
			version: 'v1.0.0rc4',
			project: 'Angular',
			date: '2012-04-05T18:46:36Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/20687aa5f632f99aa94f5e6f7a5803beae94f6b4',
			version: 'v1.0.0rc3',
			project: 'Angular',
			date: '2012-03-29T23:10:40Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/c5f8edfe03c8c9d2273a852f06dfc3fe02069113',
			version: 'v1.0.0rc2',
			project: 'Angular',
			date: '2012-03-20T22:38:57Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/25cd774abf4e704fc697efda61666dcc9e3dd8dd',
			version: 'v1.0.0rc1',
			project: 'Angular',
			date: '2012-03-14T08:00:46Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/b00262fffe61f642ce29739387e38b0a356eb4ca',
			version: 'v0.10.6',
			project: 'Angular',
			date: '2012-01-17T21:54:18Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f5ef3724cef5a998eeb9c607b73bd4a409319c99',
			version: 'v0.10.5',
			project: 'Angular',
			date: '2011-11-08T12:29:07Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/eabedba34d4df74f764dd3fd9c72e2f985bdb82f',
			version: 'v0.10.4',
			project: 'Angular',
			date: '2011-10-23T04:39:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/fe65dd926cd500ff182395c01a627fd20b81f0e5',
			version: 'v0.10.3',
			project: 'Angular',
			date: '2011-10-14T15:31:39Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/f6a8ad87eee69c5cee45e30ac6a5b5aa081f1f1b',
			version: 'v0.10.2',
			project: 'Angular',
			date: '2011-10-08T16:18:19Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/17d1aef66afebc074db95dbe05937a98710dfb1d',
			version: 'v0.10.1',
			project: 'Angular',
			date: '2011-09-09T08:01:46Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/8bae2a5ecbb2ed554fad4fcea9bfe80a4655fe08',
			version: 'v0.10.0',
			project: 'Angular',
			date: '2011-09-02T18:32:29Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/710a27030ef869900ebd05a24ff2e7dd049a914d',
			version: 'v0.9.19',
			project: 'Angular',
			date: '2011-08-21T08:12:34Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/aacd5b672e8836b30c5921fb77b167de827f48b0',
			version: 'v0.9.18',
			project: 'Angular',
			date: '2011-07-29T23:30:24Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d7e0915e625c5e424d75a8b6e2521158b9ea1c2d',
			version: 'v0.9.17',
			project: 'Angular',
			date: '2011-06-30T16:10:59Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/a4dd9ca769c62cf5f65fadc8da0d23d865116046',
			version: 'v0.9.16',
			project: 'Angular',
			date: '2011-06-07T23:11:01Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/cfc18efd2837ccfd6932ea29d6e80e04243df129',
			version: 'v0.9.15',
			project: 'Angular',
			date: '2011-04-11T21:23:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0b8cf8539ddaced216a7350fe5824e9e2bc7106e',
			version: 'v0.9.14',
			project: 'Angular',
			date: '2011-04-01T19:26:04Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/69e6379d1998aaa21b07ddf7d43664a4e01a8c68',
			version: 'v0.9.13',
			project: 'Angular',
			date: '2011-03-14T05:48:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/fd409bd2dfd1434d937476b49ace706560113711',
			version: 'v0.9.12',
			project: 'Angular',
			date: '2011-03-04T07:14:43Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e1cfb99ae92d322257a38cbef8c969329eec63f6',
			version: 'v0.9.11',
			project: 'Angular',
			date: '2011-02-09T01:47:31Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9f947e5b8b7a6a792176615be9a91fa520052b44',
			version: 'v0.9.10',
			project: 'Angular',
			date: '2011-01-27T07:51:06Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/d3d2a3a37436ef752a4dc5b5a71cbe6d472169c2',
			version: 'v0.9.9',
			project: 'Angular',
			date: '2011-01-14T06:08:27Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/7989c7d24ad9862f3138a45f81b9fcb59e055ef7',
			version: 'v0.9.7',
			project: 'Angular',
			date: '2010-12-11T01:08:52Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/e4d33917e39b1c77492aca1fcddfa0e3a7b0f514',
			version: 'v0.9.6',
			project: 'Angular',
			date: '2010-12-07T05:11:10Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5bde02a8ca3f0a97fe4d4102bd1b03e9cc331bf7',
			version: 'v0.9.5',
			project: 'Angular',
			date: '2010-11-25T18:11:26Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/9b53b25f15d8c1e28b7bda6331d4a26b54025ccd',
			version: 'v0.9.4',
			project: 'Angular',
			date: '2010-11-19T06:40:01Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/5f0af2cd0e76e641927e06b5a2a80fdc6cfdf365',
			version: 'v0.9.3',
			project: 'Angular',
			date: '2010-11-11T06:15:16Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/04624220891bab17e5a873e1a8535ad4e061d9d9',
			version: 'v0.9.2',
			project: 'Angular',
			date: '2010-11-03T20:06:45Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/0ffb47bdb6ea9c17e8adb6740aa70cc5299ea235',
			version: 'v0.9.1',
			project: 'Angular',
			date: '2010-10-27T05:18:25Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/2a9579a0ea72be0d03296eca08d481acbc9d55c5',
			version: 'v0.9.0',
			project: 'Angular',
			date: '2010-10-20T22:51:36Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1faafa31582c4e9413f48dc7d12f5b681f9fe9fd',
			version: 'g3-v1.0.0rc1',
			project: 'Angular',
			date: '2012-03-16T19:06:29Z'
		},
		{
			url:
				'https://github.com/angular/angular.js/commit/1faafa31582c4e9413f48dc7d12f5b681f9fe9fd',
			version: 'g3-v1.0.0rc1',
			project: 'Angular',
			date: '2012-03-16T19:06:29Z'
		}
	],
	[
		{
			url:
				'https://github.com/jquery/jquery/commit/32b00373b3f42e5cdcb709df53f3b08b7184a944',
			version: '3.3.1',
			project: 'JQuery',
			date: '2018-01-20T17:24:40Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/3ebfa938d4ca68523b41f2a30bd23c1592319637',
			version: '3.3.0',
			project: 'JQuery',
			date: '2018-01-19T19:00:47Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f71eeda0fac4ec1442e631e90ff0703a0fb4ac96',
			version: '3.2.1',
			project: 'JQuery',
			date: '2017-03-20T19:00:06Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/63e5d534d1ebdb84ee99365c70a7521a86b4ee76',
			version: '3.2.0',
			project: 'JQuery',
			date: '2017-03-16T21:26:42Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ee2e377494a882f043e6d8abc67ac6370ee83d9c',
			version: '3.1.1',
			project: 'JQuery',
			date: '2016-09-22T22:30:16Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d0d2d9b9b004cf0c6763c871646e01ca67579253',
			version: '3.1.0',
			project: 'JQuery',
			date: '2016-07-07T21:44:57Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c25cd3c4ba60daf166dfcee729f0bc69fd52a565',
			version: '3.0.0',
			project: 'JQuery',
			date: '2016-06-09T18:03:19Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/fed61fb5b4d622908d033d2ec8ebc0bf7901eda4',
			version: '3.0.0-rc1',
			project: 'JQuery',
			date: '2016-05-20T18:53:42Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/81b34284a3d5e7dda0a2aff82dbee0e0ffca41b4',
			version: '3.0.0-beta1',
			project: 'JQuery',
			date: '2016-01-14T23:07:42Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f9846aec1dadc4bc80ca2df47d3ecc1b9f7a4f84',
			version: '3.0.0-alpha1',
			project: 'JQuery',
			date: '2015-07-13T19:25:49Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ef64d82ec3d1717478979cba986d896aa0dda617',
			version: '3.0.0-alpha1+compat',
			project: 'JQuery',
			date: '2015-07-13T19:21:06Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f5416725afefb0c8ff3beb4ed4ff4b8ab3d22f0d',
			version: '2.2.4',
			project: 'JQuery',
			date: '2016-05-20T17:23:46Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/18c9efdafae6ec6f959e9bfa3537b83706e4aaa2',
			version: '2.2.3',
			project: 'JQuery',
			date: '2016-04-05T19:26:30Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/742610f10e071865fb56907027f9d62bc646562b',
			version: '2.2.2',
			project: 'JQuery',
			date: '2016-03-17T17:51:34Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/73c6a233e64c9669c24aa195ee37bddeeb8d568e',
			version: '2.2.1',
			project: 'JQuery',
			date: '2016-02-22T19:11:28Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/33b548c8e3d43b2ebdfb129fd8086a3b0c905919',
			version: '2.2.0',
			project: 'JQuery',
			date: '2016-01-08T20:02:39Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/7751e69b615c6eca6f783a81e292a55725af6b85',
			version: '2.1.4',
			project: 'JQuery',
			date: '2015-04-28T16:03:04Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8f2a9d9272d6ed7f32d3a484740ab342c02541e0',
			version: '2.1.3',
			project: 'JQuery',
			date: '2014-12-18T15:11:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/a04f5ff9795fd6292117563623db44cf3f875868',
			version: '2.1.2',
			project: 'JQuery',
			date: '2014-12-17T14:02:02Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4dec426aa2a6cbabb1b064319ba7c272d594a688',
			version: '2.1.1',
			project: 'JQuery',
			date: '2014-05-01T17:11:50Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c2fdcaaacd4d7f8479b2196525330c1738e30cd3',
			version: '2.1.1-rc2',
			project: 'JQuery',
			date: '2014-04-21T20:27:55Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/6ba4c8def1f9b0d03c5e8de1d64a78ae36646fb6',
			version: '2.1.1-rc1',
			project: 'JQuery',
			date: '2014-04-18T15:23:38Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/130f395eb8906e16db8506571f125a6beb28327a',
			version: '2.1.1-beta1',
			project: 'JQuery',
			date: '2014-03-24T17:01:24Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9434e03193c45d51bbd063a0edd1a07a6178d33f',
			version: '2.1.0',
			project: 'JQuery',
			date: '2014-02-19T22:59:56Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/dea4e5fc6c47a27865de65ec6feef3429dbf13b9',
			version: '2.1.0-rc1',
			project: 'JQuery',
			date: '2014-01-16T19:51:53Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/dfb03b41baa583ec79bd28c110278ce0268b4704',
			version: '2.1.0-beta3',
			project: 'JQuery',
			date: '2013-12-20T22:31:45Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/adf904ccfaf3b34134ac2bbcec0db83e43d43be8',
			version: '2.1.0-beta2',
			project: 'JQuery',
			date: '2013-11-15T16:19:43Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/1185427c4c35ea57e3634ca735422e23d2e55751',
			version: '2.1.0-beta1',
			project: 'JQuery',
			date: '2013-09-19T20:15:38Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f852e631ba85af7da4ad7594785e122504e7b233',
			version: '2.0.3',
			project: 'JQuery',
			date: '2013-07-03T13:30:16Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/617d181a45cff58586888550955a9c7fe2eb8b41',
			version: '2.0.2',
			project: 'JQuery',
			date: '2013-05-30T21:25:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/873bfd84860f946ddca86d4ac87e422abf19ec1d',
			version: '2.0.1',
			project: 'JQuery',
			date: '2013-05-24T16:44:44Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/a55c5eeb709b584f58a1f3d8d0bc9f1432cd998a',
			version: '2.0.0',
			project: 'JQuery',
			date: '2013-04-18T20:52:00Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4cbc235c0d6c9ef5e11c4fc243275e38e9044cb4',
			version: '2.0.0b2',
			project: 'JQuery',
			date: '2013-03-01T18:50:10Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2cc06af007ad2f85b52ee757296d235fcf93337a',
			version: '2.0.0b1',
			project: 'JQuery',
			date: '2013-01-15T04:19:18Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/baa50b5e1709dc66354c647e14ac819338cdf5b9',
			version: '2.0.0-beta3',
			project: 'JQuery',
			date: '2013-04-09T12:10:08Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f55d0ec8f28d648ac6429d03f1e2102d85912e86',
			version: '1.12.4',
			project: 'JQuery',
			date: '2016-05-20T17:17:57Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/07f1502f4769dd7aa41e79730da25eecb5595af3',
			version: '1.12.3',
			project: 'JQuery',
			date: '2016-04-05T19:16:30Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/3cacdd0aca727175752e7137788569c61e3b26ef',
			version: '1.12.2',
			project: 'JQuery',
			date: '2016-03-17T17:45:15Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ca5abaf2f39f572465b37e016cb9d5e3285c1d54',
			version: '1.12.1',
			project: 'JQuery',
			date: '2016-02-22T19:07:22Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/35c40247a489dcb6c1c7d2050fc6c24c19c0a5ea',
			version: '1.12.0',
			project: 'JQuery',
			date: '2016-01-08T19:56:59Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/1472290917f17af05e98007136096784f9051fab',
			version: '1.11.3',
			project: 'JQuery',
			date: '2015-04-28T16:20:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9690801db01709bfbff5f977d07fb7cc14472908',
			version: '1.11.2',
			project: 'JQuery',
			date: '2014-12-17T15:28:04Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/0d5ec2d8ac94a419ee47a39319c43ff9a7326b50',
			version: '1.11.1',
			project: 'JQuery',
			date: '2014-05-01T17:42:26Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/b50c9a8d92f94f310138f4528e3a36b5336539a1',
			version: '1.11.1-rc2',
			project: 'JQuery',
			date: '2014-04-21T20:58:37Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/baa21ff7a91ca165b63a5f900313da14c36fe255',
			version: '1.11.1-rc1',
			project: 'JQuery',
			date: '2014-04-18T15:33:46Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/b6c4e50fb8f24dcf7bf38e053e68c4d0e7f059e8',
			version: '1.11.1-beta1',
			project: 'JQuery',
			date: '2014-03-24T17:22:09Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/91cd1587ed4a1d4f3834227e8eb3cc30cb385409',
			version: '1.11.0',
			project: 'JQuery',
			date: '2014-02-19T22:59:34Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/5c62f3cd019218e1b401ce2cf4cad644772e387f',
			version: '1.11.0-rc1',
			project: 'JQuery',
			date: '2014-01-16T20:28:13Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/5bb568cd61cb127ef4ebcc63bb48a37cd5af562d',
			version: '1.11.0-beta3',
			project: 'JQuery',
			date: '2013-12-20T22:44:36Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/02cb5be0bb5a49cda3a187d169d89d91874bbf1e',
			version: '1.11.0-beta2',
			project: 'JQuery',
			date: '2013-11-15T15:59:01Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/b44595824c3f23441eab2f34551587c5ae6fd31c',
			version: '1.11.0-beta1',
			project: 'JQuery',
			date: '2013-09-19T20:04:29Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/16b079b164d62bd807c612806842a13bf9b04d17',
			version: '1.10.2',
			project: 'JQuery',
			date: '2013-07-03T13:48:24Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/935eb19d87063ec30b717b3d45368d3c73cb591d',
			version: '1.10.1',
			project: 'JQuery',
			date: '2013-05-30T21:49:05Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2c62b787b2cafb32af14edadc963b8ba3cb847b8',
			version: '1.10.0',
			project: 'JQuery',
			date: '2013-05-24T18:39:24Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/3a8fcde250da0db237396e9ab97fb099eb68c624',
			version: '1.10.0-beta1',
			project: 'JQuery',
			date: '2013-05-10T01:16:49Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d71f6a53927ad02d728503385d15539b73d21ac8',
			version: '1.9.1',
			project: 'JQuery',
			date: '2013-02-05T00:56:06Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/6361fdf2f30e41f565a953eb120f795774c65c4e',
			version: '1.9.0',
			project: 'JQuery',
			date: '2013-01-15T03:54:13Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/11eb1c4e4844650fde794e08d149a09a359e2cda',
			version: '1.9.0rc1',
			project: 'JQuery',
			date: '2013-01-09T02:06:04Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d2262fbd9b26d9ac53b88a7f4eea246f7bac1776',
			version: '1.9.0b1',
			project: 'JQuery',
			date: '2012-12-17T00:54:45Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/e7136682e89f358915994f4a2167fcdea395358e',
			version: '1.8.3+1',
			project: 'JQuery',
			date: '2013-01-04T15:19:15Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/869704ba067c9b444bb052140581a426a45baaf5',
			version: '1.8.3',
			project: 'JQuery',
			date: '2012-11-13T13:20:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9e6393b0bcb52b15313f88141d0bd7dd54227426',
			version: '1.8.2',
			project: 'JQuery',
			date: '2012-09-21T01:12:38Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/adc1841f8032c33c647d061815d4455d968baa2d',
			version: '1.8.1',
			project: 'JQuery',
			date: '2012-08-30T21:17:08Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/a0a3e5ee7f8025a498ba6daf26c2823518e96b2e',
			version: '1.8.0',
			project: 'JQuery',
			date: '2012-08-09T20:24:36Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/e02e61ca87e58beb8a05708b686bca74e54a07dd',
			version: '1.8rc1',
			project: 'JQuery',
			date: '2012-07-27T02:26:25Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/a7df439e24e9b087a540ef7c658e5fec65d538c8',
			version: '1.8b2',
			project: 'JQuery',
			date: '2012-07-10T21:22:44Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2236c55b9135dc9867218cc35b713bacdd0a8350',
			version: '1.8b1',
			project: 'JQuery',
			date: '2012-06-22T17:28:03Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/17eeebb3c04c72e5d00520c191cce858844aedec',
			version: '1.7.2',
			project: 'JQuery',
			date: '2012-03-21T19:46:34Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/968e750673e9d1e16dfd4963e4fc934be488bdb0',
			version: '1.7.2rc1',
			project: 'JQuery',
			date: '2012-03-09T18:42:24Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/7a463c08139ce195883da6e8e847957de04b2bb9',
			version: '1.7.2b1',
			project: 'JQuery',
			date: '2012-02-01T01:11:27Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/84dd5fbd2fd29e8fd174d0fd074ac87eaa15c084',
			version: '1.7.1',
			project: 'JQuery',
			date: '2011-11-22T02:11:03Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8485e420dfcb0bba67d3e437b3f3722a9c90165b',
			version: '1.7.1rc1',
			project: 'JQuery',
			date: '2011-11-18T00:06:35Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/5876377b700b1bd26390a0a6d81e978dd822af14',
			version: '1.7.0',
			project: 'JQuery',
			date: '2011-11-03T20:18:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/5876377b700b1bd26390a0a6d81e978dd822af14',
			version: '1.7.0',
			project: 'JQuery',
			date: '2011-11-03T20:18:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/cae1b6174917df3b4db661f20ef4745dd6e7f305',
			version: '1.7rc2',
			project: 'JQuery',
			date: '2011-10-28T19:31:58Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8e64b937eae1cadcfc088cc5ab6e2ef278435a5f',
			version: '1.7rc1',
			project: 'JQuery',
			date: '2011-10-24T22:18:17Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/787ef720abc10ee8d3b29c4b83d1bfbc9ac37ad8',
			version: '1.7b2',
			project: 'JQuery',
			date: '2011-10-14T01:12:55Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9a51bc648f303a1c308b0de3ea31f2e9b4304135',
			version: '1.7b1',
			project: 'JQuery',
			date: '2011-09-28T19:50:22Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2888caeba9ea9bbd3f9a5c97c2af6e89319a6329',
			version: '1.6.4',
			project: 'JQuery',
			date: '2011-09-12T22:54:48Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/215d096310663e2df302e0b13e82216a3ddde920',
			version: '1.6.4rc1',
			project: 'JQuery',
			date: '2011-09-09T14:54:43Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/03bc3023a6bcc9db10bb522a10149d41a9071be6',
			version: '1.6.3',
			project: 'JQuery',
			date: '2011-09-01T15:40:27Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2fc6205fc7b9a6cfa0dd85f5ba24bc0953366e82',
			version: '1.6.3rc1',
			project: 'JQuery',
			date: '2011-08-29T17:38:26Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/0bf007679f10e34104d4657a35c3d13057eaab8f',
			version: '1.6.2',
			project: 'JQuery',
			date: '2011-06-30T18:16:56Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d443e533aa83e89e6a1b02280dfc77f741cb4db6',
			version: '1.6.2rc1',
			project: 'JQuery',
			date: '2011-06-14T21:54:23Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8c1ea08ae01a676ea442d5e880ac7b01bed1434b',
			version: '1.6.1',
			project: 'JQuery',
			date: '2011-05-12T19:04:36Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/344af56868642b551de944a534493e6a72dd4776',
			version: '1.6.1rc1',
			project: 'JQuery',
			date: '2011-05-10T17:50:35Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c2c017bc1527d350bbd80ea27976d9db71a2f591',
			version: '1.6.0',
			project: 'JQuery',
			date: '2011-05-02T17:50:00Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c2c017bc1527d350bbd80ea27976d9db71a2f591',
			version: '1.6.0',
			project: 'JQuery',
			date: '2011-05-02T17:50:00Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/455edf197add9a9ea21ac7cf4266784a083c74ef',
			version: '1.6rc1',
			project: 'JQuery',
			date: '2011-04-26T20:21:45Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/19ceebd0f4817ddb2b6593d172e36e96d384aabb',
			version: '1.6b1',
			project: 'JQuery',
			date: '2011-04-14T20:29:14Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/dbce0ce6445a930a73a141ea0ec5193a4f8f1231',
			version: '1.5.2',
			project: 'JQuery',
			date: '2011-03-31T19:28:23Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2d80710ab00a4f3e8420b315ce5e5137d562afda',
			version: '1.5.2rc1',
			project: 'JQuery',
			date: '2011-03-25T00:12:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/916e094290202ce8017d6d6e000b444817b7cfa0',
			version: '1.5.1',
			project: 'JQuery',
			date: '2011-02-23T18:55:29Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/13e11987545a67f9b4dabbe839c89b3f63c982a5',
			version: '1.5.1rc1',
			project: 'JQuery',
			date: '2011-02-18T18:57:25Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/675226eea749826a354d07295ff7f7bf0b613f28',
			version: '1.5.0',
			project: 'JQuery',
			date: '2011-01-31T13:31:29Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/675226eea749826a354d07295ff7f7bf0b613f28',
			version: '1.5.0',
			project: 'JQuery',
			date: '2011-01-31T13:31:29Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9d306bd73bb47562cd52f0fc4cc158c534cfdfdf',
			version: '1.5rc1',
			project: 'JQuery',
			date: '2011-01-24T22:14:04Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/bcdd4f817378d5c6c95646ef556e0ff4215bcb5f',
			version: '1.5b1',
			project: 'JQuery',
			date: '2011-01-14T19:56:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9b20df0375f37cc0997bd8ed3d1892a23967d3d5',
			version: '1.4.4',
			project: 'JQuery',
			date: '2010-11-12T00:04:53Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/50708c070704c607a0ddc51679b93845c8fee5e1',
			version: '1.4.4rc3',
			project: 'JQuery',
			date: '2010-11-10T16:14:53Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4d7f7453dca8e385cfb02089a8d5b2c47371bba3',
			version: '1.4.4rc2',
			project: 'JQuery',
			date: '2010-11-03T19:46:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c22623602ee3c9ff70df9e6f51132931d19bab04',
			version: '1.4.4rc1',
			project: 'JQuery',
			date: '2010-10-25T20:25:10Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/07458abcaf02b5e991223953081bb0dd5240e2c1',
			version: '1.4.3',
			project: 'JQuery',
			date: '2010-10-15T03:10:06Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/3e5520fbdc7231b3f38e145020b40524c1e6654d',
			version: '1.4.3rc2',
			project: 'JQuery',
			date: '2010-10-12T19:44:36Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/66a788ab837fd9b483740ee0b44c1e76f846aadd',
			version: '1.4.3rc1',
			project: 'JQuery',
			date: '2010-10-11T03:09:04Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9e4beb5ac258bfc834913c1781891ef49b2deb93',
			version: '1.4.2',
			project: 'JQuery',
			date: '2010-02-14T03:33:48Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/15d261b9673e153f9e9710da897de62c306afe53',
			version: '1.4.1',
			project: 'JQuery',
			date: '2010-01-26T00:43:33Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4ce38155a8978c053f0b5938ef3e3f8729381e38',
			version: '1.4.0',
			project: 'JQuery',
			date: '2010-01-13T20:23:05Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4ce38155a8978c053f0b5938ef3e3f8729381e38',
			version: '1.4.0',
			project: 'JQuery',
			date: '2010-01-13T20:23:05Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/857d8afd6917775b7cef6fd22e57dd9acec77f01',
			version: '1.4rc1',
			project: 'JQuery',
			date: '2010-01-12T16:06:32Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f745357baec82e0be59c651f70d1e489f237c398',
			version: '1.4a2',
			project: 'JQuery',
			date: '2009-12-19T00:58:11Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c90a1cb61b41a5686bc3764f144a156e734ed459',
			version: '1.4a1',
			project: 'JQuery',
			date: '2009-12-04T17:51:47Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/13e9cde0efeadbbc5b3a375ee642bed394dd3a59',
			version: '1.3.2',
			project: 'JQuery',
			date: '2009-02-19T22:34:21Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/6df57d1b82c88ea85d2be081ee8f2362e1c362b7',
			version: '1.3.1',
			project: 'JQuery',
			date: '2009-01-22T01:42:16Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8b79ea13656727e2449807a812dd0fd8c2783aad',
			version: '1.3.1rc1',
			project: 'JQuery',
			date: '2009-01-22T00:30:13Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9dc7a3a7d20c0e75b927c956cba8de4dc30db077',
			version: '1.3.0',
			project: 'JQuery',
			date: '2009-01-13T17:50:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/9dc7a3a7d20c0e75b927c956cba8de4dc30db077',
			version: '1.3.0',
			project: 'JQuery',
			date: '2009-01-13T17:50:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/869afc46cd8229f41d82380f01830dd59a0084f7',
			version: '1.3rc1',
			project: 'JQuery',
			date: '2009-01-12T02:05:50Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/c786f1097ee26095f2f7eb721a450c550775ba84',
			version: '1.3b2',
			project: 'JQuery',
			date: '2009-01-05T23:33:56Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/df1f656aae019bab1c0e84b41aca26714b4d0d5c',
			version: '1.3b1',
			project: 'JQuery',
			date: '2008-12-22T17:31:22Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ee931edfea95a0ed49aa4382b5c09cae6f7dafdb',
			version: '1.2.6',
			project: 'JQuery',
			date: '2008-05-24T18:22:17Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/456d8a62ccf3244c58ace2b315694ad54cfc05e3',
			version: '1.2.5',
			project: 'JQuery',
			date: '2008-05-21T03:14:54Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2db27efd662693dd90fbf89ea1e4bbee7c9fb929',
			version: '1.2.4',
			project: 'JQuery',
			date: '2008-05-18T20:19:46Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/44a6f5d0cb7f1124cd80e9b72d1fff9a46fe4c0b',
			version: '1.2.4b',
			project: 'JQuery',
			date: '2008-05-14T04:53:25Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/1ba2865b089fc06242004b7003b4f8dcfd92dc13',
			version: '1.2.4a',
			project: 'JQuery',
			date: '2008-04-10T01:17:07Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d9a3c4fefaf84db7eba9b1f8204d1e134266b823',
			version: '1.2.3',
			project: 'JQuery',
			date: '2008-02-06T01:03:41Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2c07690377522119891784ec11c89e87f0a12545',
			version: '1.2.3b',
			project: 'JQuery',
			date: '2008-02-03T21:46:47Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/32ba00081ddd56c00655d0a7b7825ac947247cc6',
			version: '1.2.3a',
			project: 'JQuery',
			date: '2008-01-28T19:37:46Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/6c81082a6b20880cbd5d35ec5c50d4270f3af2ce',
			version: '1.2.2',
			project: 'JQuery',
			date: '2008-01-14T22:56:07Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/3f839a69c5682419c921a1a2110289c8941556b0',
			version: '1.2.2b2',
			project: 'JQuery',
			date: '2007-12-20T15:07:37Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/13a5fdb6a1571012c3e065a991fb4eff083057fb',
			version: '1.2.2b',
			project: 'JQuery',
			date: '2007-12-17T02:28:37Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/456da2d4a805012003df3c1b173148368d3536f7',
			version: '1.2.1',
			project: 'JQuery',
			date: '2007-09-17T03:42:06Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ce256312d518e16a6ee7df5f7f301b8bf9a1caf2',
			version: '1.2',
			project: 'JQuery',
			date: '2007-09-10T18:51:39Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/557ec9a92f40f97254e48240825fcb9be5a08e20',
			version: '1.1.4',
			project: 'JQuery',
			date: '2007-08-24T01:49:27Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/f70010b0ad13e3e4d6366287fd79636a9ceca1cd',
			version: '1.1.3.1',
			project: 'JQuery',
			date: '2007-07-05T04:43:24Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/fdd437800d983346c5936abedcf292c2a612b892',
			version: '1.1.3',
			project: 'JQuery',
			date: '2007-07-01T12:54:38Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/19f5cf0c893aa2ba2ffb00c00c7efc1db4383f3e',
			version: '1.1.3a',
			project: 'JQuery',
			date: '2007-05-21T00:48:44Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/92973279ea26c415f505d187276460115c668f17',
			version: '1.1.2',
			project: 'JQuery',
			date: '2007-02-27T22:00:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2550b1ea6a6eb6ba50d378a5dcfbc8146ca88bff',
			version: '1.1.1',
			project: 'JQuery',
			date: '2007-01-22T05:40:01Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/2aa67026ebe6bea90fd137fc99b4c9422977e3f0',
			version: '1.1',
			project: 'JQuery',
			date: '2007-01-15T02:25:29Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/d1390665b6e7d475d237cafcf8948440c9adfbf8',
			version: '1.1b',
			project: 'JQuery',
			date: '2007-01-11T07:41:56Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/8bcb016dfaa029a5e98cc3c25b9f999053217f36',
			version: '1.1a',
			project: 'JQuery',
			date: '2007-01-08T04:51:39Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/ed37ca66e5f79b4250f38cbd7a7f809ebfc15a20',
			version: '1.0.4',
			project: 'JQuery',
			date: '2006-12-13T01:23:23Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/4e3da33c59fafe34e237585743e86e24ba81046e',
			version: '1.0.3',
			project: 'JQuery',
			date: '2006-10-28T03:02:47Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/dbee06de85859af59591813d3004e6695b8bb278',
			version: '1.0.2',
			project: 'JQuery',
			date: '2006-10-10T01:59:20Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/bcc8a837055fe720579628d758b7034d6b520f2e',
			version: '1.0.1',
			project: 'JQuery',
			date: '2006-08-31T17:26:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/bcc8a837055fe720579628d758b7034d6b520f2e',
			version: '1.0.1',
			project: 'JQuery',
			date: '2006-08-31T17:26:31Z'
		},
		{
			url:
				'https://github.com/jquery/jquery/commit/73f55becc5e056ad28f6aec22ec014ffb3ab913b',
			version: '1.0a',
			project: 'JQuery',
			date: '2006-07-01T14:05:50Z'
		}
	]
];

export default function() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 1000);
	});
}
