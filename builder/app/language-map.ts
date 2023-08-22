class LanguageMap {
  private map: Map<any, number>;

  constructor() {
    this.map = new Map();
  }

  set(element: any): void {
    if (element && this.map.get(element)) {
      this.map.set(element, this.map.get(element)! + 1);
    } else {
      element ? this.map.set(element, 1) : null;
    }
  }

  setFromArr(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
      this.set(arr[i]);
    }
  }

  get(): Map<any, number> {
    return this.map;
  }

  getObj(): { [key: string]: number } {
    return Object.fromEntries(this.map);
  }
}

export { LanguageMap };
