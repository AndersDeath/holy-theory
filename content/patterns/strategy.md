---
title: Strategy
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Strategy

```typescript
// Step 1: Define the Strategy interface (common interface for all strategies)
interface PaymentStrategy {
    pay(amount: number): void;  // Method that all strategies must implement
}

// Step 2: Create concrete strategy classes implementing different algorithms

// Concrete strategy for credit card payment
class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    // Implementation of payment via credit card
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card: ${this.cardNumber}`);
    }
}

// Concrete strategy for PayPal payment
class PayPalPayment implements PaymentStrategy {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    // Implementation of payment via PayPal
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal: ${this.email}`);
    }
}

// Concrete strategy for Bitcoin payment
class BitcoinPayment implements PaymentStrategy {
    private walletAddress: string;

    constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    // Implementation of payment via Bitcoin
    pay(amount: number): void {
        console.log(`Paid $${amount} using Bitcoin Wallet: ${this.walletAddress}`);
    }
}

// Step 3: Create the Context class that uses a PaymentStrategy

class PaymentContext {
    private strategy: PaymentStrategy;  // Reference to the current strategy

    // Set the strategy dynamically at runtime
    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    // Execute the payment using the currently set strategy
    makePayment(amount: number): void {
        if (!this.strategy) {
            console.log("Payment strategy not set.");
            return;
        }
        this.strategy.pay(amount);  // Delegate payment to the strategy
    }
}

// Step 4: Client code

function clientCode() {
    // Create a payment context
    const paymentContext = new PaymentContext();

    // Choose CreditCardPayment strategy
    paymentContext.setStrategy(new CreditCardPayment("1234-5678-9012-3456"));
    paymentContext.makePayment(100);  // Pay $100 using credit card

    // Choose PayPalPayment strategy
    paymentContext.setStrategy(new PayPalPayment("user@example.com"));
    paymentContext.makePayment(200);  // Pay $200 using PayPal

    // Choose BitcoinPayment strategy
    paymentContext.setStrategy(new BitcoinPayment("1BitcoinAddressXYZ"));
    paymentContext.makePayment(300);  // Pay $300 using Bitcoin
}

clientCode();

```
