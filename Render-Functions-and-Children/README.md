# Render Functions and Children

We don't have access to features like v-for in our render functions, so for rendering elements with children we can use arrays and `map`:

```js
return createElement('div', {}, [
	createElement('h1', {}, 'Your Contacts'),
	createElement(
		'ul',
		{},
		this.contacts.map(contact => {
			return createElement('li', {}, `${contact.name.first} ${contact.name.last}`);
		})
	),
]);
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
