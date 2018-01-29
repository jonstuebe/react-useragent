# React User Agent

## Install

npm

```shell
npm i --save react-useragent
```

or yarn

```shell
yarn add react-useragent
```

## Importing

### ES6

```javascript
import { UserAgent } from "react-useragent";
```

### ES5 (CommonJS)

```javascript
const { UserAgent } = require("react-useragent");
```

### ES5 (UMD Build)

```html
<head>
  <!-- make sure and also include react and react-dom -->
  <script src="https://unpkg.com/mobile-detect@1.4.1/mobile-detect.js" />
  <script src="https://unpkg.com/react-useragent@1.1.1/lib/index.js" />
</head>
```

```javascript
var UserAgent = ReactUserAgent.UserAgent;
```

## Usage

### Children Function

```javascript
import React, { Component } from 'react';
import { UserAgent } from 'react-useragent';

class App extends Component {
  render() {
    <div>
      <UserAgent>
        {({ ua }) => {
          return ua.mobile ? <input type="date" /> : <input type="text" />>;
        }}
      </UserAgent>
    </div>
  }
}

export default App;
```

### Render Prop

```javascript
import React, { Component } from 'react';
import { UserAgent } from 'react-useragent';

class App extends Component {
  render() {
    <div>
      <UserAgent render={({ ua }) => {
        return ua.mobile ? <input type="date" /> : <input type="text" />>;
      }} />
    </div>
  }
}

export default App;
```

### HOC

```javascript
import React, { Component } from "react";
import { withUserAgent } from "react-useragent";

class App extends Component {
  render() {
    <div>
      {this.props.ua.mobile ? <input type="date" /> : <input type="text" />}
    </div>;
  }
}

export default withUserAgent(App);
```

## API

This utility uses mobile-detect for user agent parsing. The following object is exposed to the component through props/args (depending on the usage). The key "md" is the actual mobile-detect constructor and is available to call any mobile-detect methods that are not included by default.

```json
{
  "mobile": null,
  "phone": null,
  "tablet": null,
  "os": null,
  "md": {
    "ua":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
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
