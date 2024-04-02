---
title: Tenth Line
tags: ["training", "task"]
languages: ["bash"]
---

# Tenth Line

```bash
# Read from the file file.txt and output the tenth line to stdout.

head -n 10 file.txt | tail -n +10
```

The shell command `head -n 10 file.txt | tail -n +10` is used to display lines from a file in a specific range. Let's break down how this command works:

1. `head -n 10 file.txt`: This part of the command uses the `head` command to display the first 10 lines of the file named `file.txt`. The `-n` option specifies the number of lines to display.

2. `|`: This is known as a pipe operator. It takes the output from the command on its left and uses it as the input for the command on its right.

3. `tail -n +10`: This part of the command uses the `tail` command to display lines from the 10th line onwards. The `-n` option specifies the number of lines to display, and the `+10` means starting from the 10th line.

In summary, the combination of `head -n 10 file.txt` extracts the first 10 lines from the file, and then the output of this is piped to `tail -n +10`, which displays lines starting from the 10th line of the extracted lines. This effectively shows lines 10 to the end from the original file.
