export const generateRandomNumber = () => {
    const min = 10000000; // 最小值（包含）
    const max = 99999999; // 最大值（包含）

    // 使用 Math.random() 生成 0 到 1 之间的随机小数，
    // 然后乘以 (max - min + 1) 得到一个 0 到 (max - min) 之间的随机数，
    // 再加上 min，将随机数范围调整为 min 到 max。
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function isFunction(value:Function) {
    return typeof value === 'function';
}
