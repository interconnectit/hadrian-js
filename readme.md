# Hadrian

[![build status](https://img.shields.io/travis/interconnectit/hadrian-js.svg?style=flat-square)](https://travis-ci.org/interconnectit/hadrian-js)
[![code style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

This is where your description should go. Try and limit it to a paragraph or two.

## Install

### NPM

Make sure all dependencies have been installed before moving on:

* [Node](https://nodejs.org/en/) >= 6.11
* [Npm](https://www.npmjs.com/get-npm) >= 5.5

``` bash
$ npm install --save @interconnectit/hadrian
```

### CDN

``` html
<script src="//cdn.jsdelivr.net/npm/@interconnectit/hadrian/dist/hadrian.min.js"></script>
```

## Usage

``` js
Hadrian.config
    .site('your-site-uuid')
    .payload({
        post_id: 1,
        post_title: 'Lorem ipsum dolor sit amet',
        ...
    })

Hadrian.requirements
    .on({user: {subscription: 'gold'}}, function () {
        $('.popup_subscription_gold').show()
    })
    .on({user: {subscription: 'silver'}}, function () {
        $('.popup_subscription_silver').show()
    })
    ...
```

## Testing

``` bash
$ npm run lint
$ npm run test
```

## Security

If you discover any security related issues, please email support@interconnectit.con instead of using the issue tracker.

## Credits

- [interconnect/it](https://interconnectit.com/)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](license.md) for more information.
