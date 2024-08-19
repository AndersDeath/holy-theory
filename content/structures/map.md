---
title: Map
tags: ["theory", "structures", "data structures"]
languages: ["typescript"]
---

# Map

A **Map** (or Dictionary in some programming languages) is a data structure that stores key-value pairs, where each unique **key** is associated with a **value**. It allows efficient retrieval, updating, and deletion of values based on their keys.

### Key Characteristics of a Map:
- **Keys are unique**: Each key can appear only once in a Map, but multiple keys can map to the same value.
- **Key-value association**: Each key maps to a specific value. When you query the key, you retrieve the associated value.
- **Unordered** (in some implementations): The order of key-value pairs is not necessarily preserved, although some variations (like LinkedHashMap in Java or `OrderedDict` in Python) maintain insertion order.
- **Efficient operations**: Maps typically provide efficient insertion, deletion, and lookup operations, usually with a time complexity of O(1) for common operations like search, insert, and delete in hash-based implementations.

### Operations on a Map:
1. **Insertion**: You can add a key-value pair to the Map.
   ```typescript
   map.add("key", "value")
   ```
2. **Retrieval**: You can get the value associated with a specific key.
   ```typescript
   value = map.get("key")
   ```
3. **Deletion**: You can remove a key-value pair by key.
   ```typescript
   map.delete("key")
   ```
4. **Update**: You can update the value associated with a key.
   ```typescript
   map.add("key", "value")
   ```

### Use Cases:
- Storing and retrieving configuration settings (e.g., key-value pairs for user preferences).
- Caching data for fast lookups.
- Counting occurrences of items (e.g., word frequency counts).

Maps are widely used in various programming languages, including:
- **Python**: `dict`
- **Java**: `HashMap`, `TreeMap`
- **C++**: `std::map`, `std::unordered_map`
- **JavaScript**: `Map`

Maps provide an efficient and flexible way to organize data when fast key-based lookups are required.

**Custom implementations**

```typescript
export class Map {
  private collection: any = {};

  public add(key: any, value: any) {
    this.collection[key] = value;
  }

  public delete(key: any) {
    delete this.collection[key];
  }

  public get(key: any) {
    return this.collection[key];
  }

  public has(key: any) {
    return Object.keys(this.collection).includes(key);
  }

  public values() {
    return Object.values(this.collection);
  }

  public size() {
    return Object.keys(this.collection).length;
  }

  public clear() {
    this.collection = [];
  }
}
```
