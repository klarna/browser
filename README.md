# Browser

Just a couple of browser detection helpers.

The motivation is to have these helpers tested on "actual" browsers, so we have more confidence that they work.

Before installing this, think deeply if you can't do with [feature detection instead](https://modernizr.com/).

### Testing

Set ENV variables for SAUCE\_USERNAME and SAUCE\_ACCESS\_KEY and run:

```
BROWSER=___ npm test
```

The list of available browsers is on `sagui.conf.js`

### Required reading

To understand the mess we're in [read this reddit](https://www.reddit.com/r/webdev/comments/2cd46k/eli5_why_are_user_agent_strings_so_broken_and/).