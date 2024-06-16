# Installation Guide

## Introduction

This guide provides instructions to set up and use the Holy Theory project. Follow the steps below to get started.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Bun](https://bun.sh/)
- [Pandoc](https://pandoc.org/)
- [Homebrew](https://brew.sh/) (for macOS)

## Installation

### Step 1: Clone the Repository

Clone the repository from GitHub:

```sh
git clone https://github.com/AndersDeath/holy-theory.git
cd holy-theory
```

### Step 2: Install Node.js Dependencies

Install the necessary Node.js packages:

```sh
npm install
```

### Step 3: Install Bun

Install Bun as per the official instructions at [bun.sh](https://bun.sh/).

### Step 4: Install Pandoc (for PDF Generation)

#### macOS:

1. Install Pandoc:

```sh
brew install pandoc
```

2. Install additional Pandoc tools:

```sh
brew install pandoc-highlighting
brew install pandoc-plot
```

3. Install TinyTeX for LaTeX support:

```sh
curl -sL "https://yihui.org/tinytex/install-bin-unix.sh" | sh
```

4. Update TinyTeX:

```sh
tlmgr update --self
```

5. Install necessary LaTeX packages:

```sh
tlmgr install framed
```

6. Install BasicTeX:

```sh
brew install basictex
```

## Author

Vladimir Bolshakov

- Email: [andersdeath@gmail.com](mailto:andersdeath@gmail.com)
- GitHub: [AndersDeath](https://github.com/AndersDeath)

## Additional Resources

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Pandoc](https://pandoc.org/)
- [Homebrew](https://brew.sh/)

Thank you for using Holy Theory!