# RequestUtils

## Overview
Simply XHR.

## Installation
```
npm install --save https://www.myget.org/F/tkpphr-npm-feed/npm/request-utils/-/1.0.0.tgz
```

## Usage

### get
```typescript
import * as RequestUtils from "request-utils";

async ()=>{
    try{
        const blob = await RequestUtils.get("http://example.com/image.jpg","blob");
        return blob;
    }catch(error){
        throw error;
    }
}
```

## License
Released under the MIT License.
See LICENSE File.