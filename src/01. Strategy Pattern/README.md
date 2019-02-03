# Strategy Pattern

The **Strategy Pattern** focuses on the _composition_ of Object behaviour by allowing algorithms/functions to be injected at runtime as required by the central _strategy_.

## Overview

### Rationale

> **"Define a family of algorithms, encapsulate each one, and make them interchange­able. Strategy lets the algorithm vary independently from clients that use it."**  
> _- Design Patterns: Elements of Reusable Object-Oriented Software. (1995)_

By separating functionality from Class implementations into their own Behaviour Object. These behaviours can then be prescribed to Clients at runtime (i.e. via Interfaces). This allows each _"Client"_ (individual instances of Classes) to be configured via Dependency Injection to make use of the necessary Behaviour to meet their own contracts.

### Use Cases

- Allows dynamic implementation of functions/algorithms at runtime
- Allows "horizontal" sharing of code where typical Inheritance creates issues
- Allows greater flexibility/reusability of behaviour
- Avoids implementing multiple algorithms on _each_ Client
- Avoids compile time implementation dependencies, i.e. each Client is independent of Behaviour

### Drawbacks

- Lack of hard-coded implementations can create uncertainty where implementations are cross-dependent
- Creates complex relationships between Classes/Behaviour (not unnecessary)
- Extra logic required to decide between chosen Strategy

## Notes

### Sources

- [W3 Design](http://w3sdesign.com/?gr=b09&ugr=proble)
- [Christopher Okhravi](https://www.youtube.com/watch?v=v9ejT8FO-7I)

### Also Known As

- Policy Pattern
