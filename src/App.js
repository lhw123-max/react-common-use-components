import React from 'react';
import PreviewVideo from "./commen/PreVideo/PreviewVideo"
import Button from  "./commen/Button/Button"
const App = () => {
    return (
        <div>
            <PreviewVideo autoPlay={false} url={'https://bbs-xk.oss-cn-chengdu.aliyuncs.com/84742211_1717626575057'} >
                <Button type={'primary'} onClick={() => {

                }} isDebounce={true}>预览</Button>
            </PreviewVideo>
        </div>
    );
};

export default App;
