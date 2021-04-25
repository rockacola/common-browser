# Common Browser

A JavaScript library to provide the most common User Agents used on the Internet.

## Installation

Install the package directly from GitHub

```sh
$ npm i --save rockacola/common-browser
```

## Quick Start

Use it as a stateless function with TypeScript.

### Get random user agent string

```ts
import { CommonUserAgent } from 'common-browser'

const userAgent = CommonUserAgent.getRandom()
console.log('userAgent:', userAgent)
```

To see more TypeScript example usages, please check out the `/examples` directory.
