class LanguageMap {
    private map: Map<any, number>;
  
    constructor() {
      this.map = new Map();
    }
  
    set(element: any): void {
      if (element) {
        this.map.set(element, (this.map.get(element) || 0) + 1);
      }
    }
  
    setFromArr(arr: any[]): void {
      for (const element of arr) {
        this.set(element);
      }
    }
  
    get(): Map<any, number> {
      return this.map;
    }
  
    getObj(): { [key: string]: number } {
      const obj: { [key: string]: number } = {};
      for (const [key, value] of this.map.entries()) {
        obj[String(key)] = value;
      }
      return obj;
    }
  }
  
  export { LanguageMap };
  