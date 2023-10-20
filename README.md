# Hadrian

[![build status](https://img.shields.io/travis/interconnectit/hadrian-js.svg?style=flat-square)](https://travis-ci.org/interconnectit/hadrian-js)
[![code style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

This Library is used to send a payload to Hadrian and handle the evaluated response.

## Install

include via NPM

``` bash
$ npm install --save @interconnectit/hadrian
```

Pull via CDN

``` html
<script src="https://cdn.jsdelivr.net/gh/interconnectit/hadrian-js/dist/hadrian.min.js"></script>
```

or you can pull a specific version

``` html
<script src="https://cdn.jsdelivr.net/gh/interconnectit/hadrian-js@2.0.0/dist/hadrian.min.js">
```

## Usage

``` js
hadrian()
    .on({user: {subscription: 'gold'}}, function () {
        $('.popup_subscription_gold').show()
    })
    .on({user: {subscription: 'silver'}}, function () {
        $('.popup_subscription_silver').show()
    })
    ...
    .evaluate({
        post_id: 1,
        post_title: 'Lorem ipsum dolor sit amet',
        ...
    })
```

## Compile

``` bash    
$ npm run build
```

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email support@interconnectit.com instead of using the issue tracker.

## Credits

- [interconnect/it](https://interconnectit.com)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
