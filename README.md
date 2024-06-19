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

## CountDown
```jsx
import React, {useState} from 'react';
import {CountDown} from "react-common-use-components";

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


## InfiniteScroll
```jsx
import React, {useState,useEffect} from 'react';
import {InfiniteScroll} from "react-common-use-components";
import {getList} from "services"
const YourComponent = () => {
    const [list, setList] = useState([])
    const [total,setTotal] = useState(0)
    const [page, setPage] = useState(0)
    useEffect(() => {
        //get list data
        getList({page:page,limit:10}).then((res) => {
            if (res.data.code === 0) {
                if (page === 0){
                    setList(res.data.list)
                }else  {
                    setList([...list,...res.data.list])
                }
            }
        })
    },[page])
    function loadMore() {
        if (page * 10 > total) {
            return;
        }
        let nextPage = page + 1
        setPage(nextPage)
    }
    return (
          <InfiniteScroll loadMore={loadMore}
                          hasMore={list.length < total}
                          dataLength={list.length}
                          total={total}
                          threshold={25}
          >
              {list.map((item, index) => {
                  return (
                      <YourChildComponent  key={index}/>
                  )
              })}
          </InfiniteScroll>
    );
};

export default YourComponent;

```

## InfiniteScroll props

| name                           | type                 | description                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **loadMore**                   | function             | load more callback functions |
| **hasMore**                    | boolean              | Do you have any more data |
| **dataLength**                 | number               | list or data length |
| **total**                      | number               | list or data total |
| **threshold**                  | number               | The distance from the bottom of the container, triggered by the callback function when touching the bottom, in pixels |
| **end**                        | reactNode            | end component |
| **loading**                    | reactNode            | loading component |

## Toast
```jsx
//App.js
import React, {useState} from 'react';
import {ToastProvider} from "react-common-use-components";
const App = () => {
    return (
          <ToastProvider>
              {/*Your child pages or child components*/}
              <ChildComponent/>
          </ToastProvider>
    );
};

export default App;

//Home.js
import React, {useState} from 'react';
import {Toast} from "react-common-use-components";
const Home = () => {
    return (
        <div onClick={() => Toast.show({text:'hello',type:'success',duration:2000})}>
           home page
        </div>
    );
};

export default Home;
```

## Toast props

| name             |     params                     | type        | description                                                                                                                                                                                                                                                                                                                                   |
| -----------------|--------------------------------| ----------  | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **show**         |  {text,type,duration}          | function    | open toast function |
| **text**         |       'hello'                  | string      | open toast text |
| **type**         |  success,fail,warning,loading  | string      | toast status |
| **duration**     |  2000                          | number      | Prompt duration, if 0, will not automatically close, default to 2000  |
| **show**         |  {timeout}                     | function    | Close the current toast |
| **timeout**      |  2000                          | number      | Delaying Toast shutdown time  |

## Modal
```jsx
//App.js
import React, {useState} from 'react';
import {Modal} from "react-common-use-components";
const App = () => {
    const [modal, setModal] = useState(false)
    return (
          <div>
              <Modal position={"center"} onClose={() => { setModal(false) }} openModal={modal} >
                  {/*Your modal child components*/}
              </Modal>
              {/*Your child pages or child components*/}
              <ChildComponent/>
          </div>
    );
};

export default App;

```

## Modal props

| name             |     params                     | type        | description                                                                                                                                                                                                                                                                                                                                   |
| -----------------|--------------------------------| ----------  | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **openModal**    |     false                      | boolean     | open modal  |
| **position**     |    top,right,bottom,left       | string      | modal position|
| **onClose**      |  success,fail,warning,loading  | function    | close the current modal |
| **style**        |  {background:'rgba(0,0,0,0.5)'}| number      | Modal container style  |

## Uploader
```jsx
//App.js
import React, {useState} from 'react';
import {Uploader} from "react-common-use-components";
const App = () => {
    const callback = (file) => {
      console.log('file:',file)
    }
    return (
          <div>
              <Uploader accept={'image/*'} id={'upload-img'} style={{width:"1.5rem",height:"3rem",}} onSuccess={(file) => {
                  callback(file)}}>
                  <ChildComponent/>
              </Uploader>
          </div>
    );
};

export default App;

```

## Uploader props

| name             |     params                     | type        | description                                                                                                                                                                                                                                                                                                                                   |
| -----------------|--------------------------------| ----------  | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**           |     'uploader_1'               | string      | uploader id |
| **accept**       |    'image/*                    | string      | input attribute, restricting file types|
| **onSuccess**    |  (file) => {}                  | function    | callback function for successful file selection |
| **style**        |  {background:'rgba(0,0,0,0.5)'}| object      | Uploader container style  |

## FlexBox
```jsx
//App.js
import React, {useState} from 'react';
import {FlexBox} from "react-common-use-components";
const App = () => {
    return (
          <div>
              <FlexBox  style={{justifyContent: "flex-start",}} onClick={(file) => {}}>
                  <ChildComponent/>
              </FlexBox>
          </div>
    );
};

export default App;

```

## Uploader props

| name             |     params                     | type        | description      |                                                                                                                                                      
| -----------------|--------------------------------| ----------  | ---------------- |
| **onClick**      |  () => {}                      | function    | click function  |
| **style**        |  {background:'rgba(0,0,0,0.5)'}| object      | FlexBox style  |


## LICENSE

[MIT](LICENSE)
