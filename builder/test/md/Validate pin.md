# Validate pin

```typescript
const validatePin = (pin: string): boolean  => {
    if(pin.length !== 4 && pin.length !== 6) return false;
    return /^[0-9]{4}$|^[0-9]{6}$/gm.test(pin)
  }
```
**Source: https://codewars.com**
* [Go back](../readme.md)