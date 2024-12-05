
export const generateRandomNumber = () => {
    const min = 10000000;
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function isFunction(value:Function) {
    return typeof value === 'function';
}

export const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };

}

export const range = (number:number) => {
    let newArray = []
    for (let i =0;i<number;i++) {
        newArray.push(i)
    }
    return newArray
}

export function getPlatform() {

    // 判断是否是 iOS
    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
        return 'iOS';
    }

    // 判断是否是 Android
    if (/Android/i.test(navigator.userAgent)) {
        return 'Android';
    }

    // 默认返回未知平台
    return 'Unknown';
}
