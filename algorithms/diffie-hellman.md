---
title: Diffie hellman algorithm
tags: ["algorithms", "security", "encrypt", "decrypt"]
languages: ["javascript"]
sort: 800
ignore: true
---

# Diffie hellman algorithm

The Diffie-Hellman algorithm is a method of securely exchanging cryptographic keys over a public channel. The key idea is that two parties (Alice and Bob) can agree on a shared secret key, which they can use for secure communication, even though they only exchange information over a public network.

In your code, the `DiffieHellman` function demonstrates the key exchange process. However, there’s an error in the `power` function which will return incorrect results when `b` equals `1`. The `power` function should calculate `(a^b) % p`, and it should not return `1` if `b === 1`.

```javascript
function power(a: number, b: number, p: number) {
  // Calculate (a^b) % p
  let result = 1;
  a = a % p;
  
  while (b > 0) {
    // If b is odd, multiply a with result
    if (b % 2 == 1) {
      result = (result * a) % p;
    }
    // b must be even now
    b = Math.floor(b / 2);
    a = (a * a) % p;
  }
  return result;
}

function DiffieHellman() {
  let P = 23; // A prime number P
  let G = 9;  // A primitive root modulo P
  
  console.log("The value of P:", P);
  console.log("The value of G:", G);

  let a = 4; // Alice's private key
  console.log("The private key a for Alice:", a);

  let x = power(G, a, P); // Alice's public key
  console.log("Alice's public key (x):", x);

  let b = 3; // Bob's private key
  console.log("The private key b for Bob:", b);

  let y = power(G, b, P); // Bob's public key
  console.log("Bob's public key (y):", y);

  // Both Alice and Bob calculate the shared secret key
  let ka = power(y, a, P); // Alice's secret key
  let kb = power(x, b, P); // Bob's secret key

  console.log("Secret key for Alice is:", ka);
  console.log("Secret key for Bob is:", kb);
}

DiffieHellman();
```

### Explanation
1. **Prime Number (P)**: Both Alice and Bob agree on a large prime number `P`.
2. **Primitive Root (G)**: Both parties agree on a primitive root `G` modulo `P`.
3. **Private Keys (a and b)**: Each party (Alice and Bob) generates a private key. Alice's private key is `a`, and Bob's private key is `b`.
4. **Public Keys (x and y)**:
   - Alice computes her public key `x = (G^a) % P` and sends it to Bob.
   - Bob computes his public key `y = (G^b) % P` and sends it to Alice.
5. **Secret Keys (ka and kb)**:
   - Alice computes the shared secret key `ka = (y^a) % P` using Bob's public key.
   - Bob computes the shared secret key `kb = (x^b) % P` using Alice's public key.
   
Since `ka` and `kb` end up as the same value, both parties now share a common secret key for secure communication.