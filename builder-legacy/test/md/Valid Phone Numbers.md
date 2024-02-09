
# Valid Phone Numbers

```bash

# Read from the file file.txt and output all valid phone numbers to stdout.

grep -E "^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}\-[0-9]{4}$" file.txt

```

The command uses the `grep` utility with the `-E` flag to enable extended regular expressions. It searches for lines in the file "file.txt" that match a specific pattern, which corresponds to phone numbers in a specific format.

The regular expression `^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}\-[0-9]{4}$` is used to match phone numbers in the format "###-###-####" or "(###) ###-####". Here's the breakdown of the regular expression:

- `^`: Anchors the start of the line.
- `(`: Matches an opening parenthesis.
- `[0-9]{3}`: Matches exactly three digits (0-9).
- `)`: Matches a closing parenthesis.
- ` |`: Alternation operator, matches either the pattern before or after it.
- `[0-9]{3}\-`: Matches three digits followed by a hyphen.
- `[0-9]{3}\-`: Matches another three digits followed by a hyphen.
- `[0-9]{4}`: Matches four digits.
- `$`: Anchors the end of the line.

The command searches each line in "file.txt" and displays only the lines that match the specified phone number pattern. This pattern is commonly used to match valid US phone numbers in different formats.
