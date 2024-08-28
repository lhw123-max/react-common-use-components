
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
