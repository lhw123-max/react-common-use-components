import React, {CSSProperties, useEffect, useMemo, useState} from 'react';
import {generateRandomNumber, isFunction} from "../../utils";

interface Items {
    key:string,
    label:string
}

interface TabsProps {
    items:Items[],
    activeKey:string,
    onChange:(key:string) => void,
    defaultActiveKey:string,
    activeLineColor:string,
    containerStyle:CSSProperties,
    itemStyle:CSSProperties
}

const Tabs = ({items,activeKey,onChange,defaultActiveKey,activeLineColor,containerStyle,itemStyle}:TabsProps) => {
    const [selectKey,setSelectKey] = useState(activeKey?activeKey:(defaultActiveKey?defaultActiveKey:''))
    useEffect(() => {
        if (onChange && isFunction(onChange)){
            onChange(selectKey)
        }
    },[selectKey])
    const initId = useMemo(() => {
        return 	generateRandomNumber()
    },[items])
    return (
        <div id={'tabs_' + initId} style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width: "20.5rem",
            padding:"0.5rem 1rem",
            borderBottom: '1px solid #F3F3F3',
            backgroundColor: '#FFFFFF',
            ...containerStyle
        }}>

            {
                items.length>0 &&  items.map((item,index) => {
                    return (
                        <div onClick={() => {setSelectKey(item.key)}} style={{
                            padding: "0.25rem 0",
                            margin:'0 0.5rem',
                            fontSize: "1rem",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"column",
                            ...itemStyle
                        }} key={index}>
                            {item.label}
                            <div style={{
                                width:"2rem",
                                height:"0.15rem",
                                marginTop:"0.25rem",
                                backgroundColor:item.key===selectKey ?(activeLineColor?activeLineColor:'#1677ff'):"#FFFFFF",
                                transition:"all 0.5s ease"
                            }}/>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default Tabs;

