class LanguageMap {

    constructor() {
        this.map = new Map();
    }

    set(element) {
        if (element && this.map.get(element)) {
            this.map.set(element, this.map.get(element) + 1);
        } else {
            element ? this.map.set(element, 1) : null;
        }
    }

    setFromArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.set(arr[i]);
        }
    }

    get() {
        return this.map;
    }
    getObj() {
        return Object.fromEntries(this.map);
    }
}

export {LanguageMap};