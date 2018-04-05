'use strict';

const token = 'user:pass';

const fetchOptions = {
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	headers: {
		Authorization: `Basic ${window.btoa(token)}`,
		'content-type': 'application/json'
	},
	method: 'GET', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors' // no-cors, cors, *same-origin
};

const fechMultipleURLs = urls =>
	Promise.all(
		urls.map(url => fetch(url, fetchOptions).then(response => response.json()))
	);

const getDataFromGitHubReleases = (project, urls) =>
	fechMultipleURLs(urls)
		.then(page => page.reduce((a, b) => a.concat(b), []))
		.then(releases =>
			releases.map(item => ({
				url: item.html_url,
				version: item.tag_name,
				project: project,
				date: item.created_at
			}))
		);

const fetchCommitsAndMergeWithTags = tags => {
	return fechMultipleURLs(tags.map(tag => tag.commit.url)).then(commits =>
		commits.map(commit => {
			const indexInTag = tags.map(tag => tag.commit.sha).indexOf(commit.sha);
			return { ...commit, version: tags[indexInTag].name };
		})
	);
};

const getDataFromGitHubTags = (project, urls) =>
	fechMultipleURLs(urls)
		.then(page => page.reduce((a, b) => a.concat(b), []))
		.then(tags => fetchCommitsAndMergeWithTags(tags))
		.then(commits =>
			commits.map(commit => ({
				url: commit.html_url,
				version: commit.version,
				project: project,
				date: commit.commit.committer.date
			}))
		);

const frameworks = [
	{
		name: 'VueJS',
		urls: [
			'https://api.github.com/repos/vuejs/vue/releases?per_page=100&page=1',
			'https://api.github.com/repos/vuejs/vue/releases?per_page=100&page=2'
		]
	},
	{
		name: 'React',
		urls: [
			'https://api.github.com/repos/facebook/react/releases?per_page=100&page=1'
		]
	},
	{
		name: 'Polymer',
		urls: [
			'https://api.github.com/repos/Polymer/polymer/releases?per_page=100&page=1'
		]
	},
	{
		name: 'D3',
		urls: [
			'https://api.github.com/repos/d3/d3/releases?per_page=100&page=1',
			'https://api.github.com/repos/d3/d3/releases?per_page=100&page=2'
		]
	},
	{
		name: 'Angular',
		urls: [
			'https://api.github.com/repos/angular/angular/tags?per_page=100&page=1',
			'https://api.github.com/repos/angular/angular/tags?per_page=100&page=2',
			'https://api.github.com/repos/angular/angular/tags?per_page=100&page=3',
			'https://api.github.com/repos/angular/angular.js/tags?per_page=100&page=1',
			'https://api.github.com/repos/angular/angular.js/tags?per_page=100&page=2'
		]
	},
	{
		name: 'JQuery',
		urls: [
			'https://api.github.com/repos/jquery/jquery/tags?per_page=100&page=1',
			'https://api.github.com/repos/jquery/jquery/tags?per_page=100&page=2'
		]
	}
];




export default Promise.all(
	frameworks.map(
		framework =>
			framework.urls[0].includes('tags')
				? getDataFromGitHubTags(framework.name, framework.urls)
				: getDataFromGitHubReleases(framework.name, framework.urls)
	)
);
