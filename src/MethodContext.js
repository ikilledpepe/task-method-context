import { EventEmitter } from './EventEmitter';

let clickHandler;

export const obj = {
    count: 0,
    subscribe() {
        clickHandler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', clickHandler);
    },
    unsubscribe() {
        EventEmitter.off('click', clickHandler);
    },
};

export const obj1 = {
    first(...args) {
        return this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};