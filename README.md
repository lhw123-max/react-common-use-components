# react-common-use-components [![npm](https://img.shields.io/npm/dt/react-common-use-components.svg?style=flat-square)](https://www.npmjs.com/package/react-common-use-components) [![npm](https://img.shields.io/npm/v/react-common-use-components.svg?style=flat-square)](https://www.npmjs.com/package/react-common-use-components)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A library of commonly used React components,Contains the following components: FlexBox, CountDown,InfiniteScroll,Modal,ToastProvider,Toast,Uploader

## Install

```bash
  npm install --save react-common-use-components

  or

  yarn add react-common-use-components

  // in code ES6
  import InfiniteScroll from 'react-common-use-components';
  // or commonjs
  var InfiniteScroll = require('react-common-use-components');
```

## Using

```jsx
import React, {useState} from 'react';
import FlexBox from "react-common-use-components";

const YourComponent = () => {
   const [startTimer, setStartTimer] = useState(false)
   const onClick = () => {
     setStartTimer(true)
   }
  return (
         <div>
           <CountDown style={{
             width: "8rem",
             height: "1.25rem",
             borderRadius: "0.375rem",
             textAlign: 'center',
             lineHeight: "1.25rem",
             fontsize:"1.25rem !important",
             marginRight:"0.25rem",
             backgroundColor:"#F8F8F8",
             color:'#3370DA',
             cursor:"pointer"
           }} onClick={onClick}  status={startTimer}/>
         </div>
  );
};

export default YourComponent;

```

## CountDown props

| name                           | type                 | description                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **startTimer**                 | boolean              | timer switch |
| **onClick**                    | function             | callback function |
| **style**                      | object               | countdown style |

## LICENSE

[MIT](LICENSE)
