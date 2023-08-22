# Number of Segments in a String

```typescript

function countSegments(s: string): number {
   s = s.trim();
    if(s.length == 0) {
        return 0
    } else { 
        return s.replace(/  +/g, ' ').trim().split(' ').length
    }
};

```

The `countSegments` function takes a string `s` as input and returns the number of segments in the string, where a segment is defined as a contiguous sequence of non-space characters.

Here's how the function works:

1. It trims the input string `s` using the `trim` method to remove leading and trailing whitespace.

2. It checks if the trimmed string has a length of 0. If it does, it means there are no segments, so the function returns 0.

3. Otherwise, it uses regular expressions to replace multiple consecutive spaces with a single space using the `replace` method and the regular expression `/  +/g`. This ensures that there is only one space between each segment.

4. It then trims the modified string again to remove any leading or trailing spaces.

5. Finally, it splits the trimmed string into an array of segments using the `split` method with a space (' ') as the delimiter. The length of the resulting array is the number of segments, and this value is returned.

**Techniques Used:**

- **String Manipulation:** The function uses string manipulation techniques such as trimming, replacing, and splitting to process the input string and count the segments.

- **Regular Expressions:** Regular expressions are used to replace multiple consecutive spaces with a single space.

**Summary:**

The `countSegments` function effectively counts the number of segments in a given string by trimming, processing, and splitting the string based on spaces. It uses string manipulation and regular expressions to achieve this.


