# React User Agent

## Install

```
$ yarn add react-useragent
```

## Usage

### Children Function

```
import React, { Component } from 'react';
import { UserAgent } from 'react-useragent';

class App extends Component {
  render() {
    <div>
      <UserAgent>
        {({ ua }) => {
          return ua.mobile ? <input type="date" /> : <input type="text">;
        }}
      </UserAgent>
    </div>
  }
}

export default App;
```

### Render Prop

```
import React, { Component } from 'react';
import { UserAgent } from 'react-useragent';

class App extends Component {
  render() {
    <div>
      <UserAgent render={({ ua }) => {
        return ua.mobile ? <input type="date" /> : <input type="text">;
      }} />
    </div>
  }
}

export default App;
```

### HOC

```
import React, { Component } from 'react';
import { withUserAgent } from 'react-useragent';

class App extends Component {
  render() {
    <div>
        {this.props.ua.mobile ? (
        <input type="date" />
        ) : (
        <input type="text" />
        )}
    </div>
  }
}

export default withUserAgent(App);
```

## API

This utility uses mobile-detect for user agent parsing. The following object is exposed to the component through props/args (depending on the usage). The key "md" is the actual mobile-detect constructor and is available to call any mobile-detect methods that are not included by default.

```
{
  "mobile": null,
  "phone": null,
  "tablet": null,
  "os": null,
  "md": {
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
    "_cache": {
      "phone": null,
      "tablet": null,
      "mobile": null,
      "os": null
    },
    "maxPhoneWidth": 600
  }
}
```
