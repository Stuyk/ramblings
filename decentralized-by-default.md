# Decentralized by Default

I recently wrote something called [ChronoLibrary](https://github.com/allinbits/chronolibrary) and it was created after having several talks with other developers. It was built very quickly, and effectively within the timespan of two weeks.

The library itself does not solve any problems on its own, instead it highlights an issue with blockchain as a whole and proposes a solution that evolves for everyone. Smart contracts only exist on very specific platforms. 

However, the one common denominator across all blockchains is the `memo` field.

The `memo` field allows you to write a little note about the transaction you're executing and usually takes a certain amount of gas to execute the transaction.

Or dare I say, it takes you a certain amount of gas to store some data in the memo.

This solution was born from the limitations in existing blockchains.

## Decentralizing Everything

Now that every blockchain has been around for a very long period of time, we can write applications on top of the memo field.

We can use the `event sourcing` pattern to specify an instruction to a shared application that re-creates the state on client-side.

This means that the user is in full control of the instructions and how they're operated.

You can imagine the instructions looking similar to this:

```
1. Register the Application Epoch Block
2. Post Message
3. Add Reply to Posted Message
4. Remove Reply from Posted Message
5. Like Post Message
6. etc.
```

These instructions can then be taken from the client and re-constructed in whatever way they want to see them.

Which means the state of the application can be shared based on how you interpreted it with others.

## Client First Mentality

With the state being shared this means that the clients can see the raw unfiltered instructions that built their application.

This allows for a few benefits:

- Better Debugging
- Fully Transparent Application Data
- Full Controllable Application Data
- Fully Customizable Application Data
- Uncensorable

## How Customizable?

An initial program writer will write the core instructions for a given protocol.

Then the core instructions can be expanded upon by its community.

An example being if someone wanted to store usernames for addresses.

They could use the same namespace for an action, and then a function call to store the display name.

They could have rules like no duplicate display names, first come first serve, minimum fee of `1.000000 ATONE` to register a display name.

## How Uncensorable?

That's a question that has yet to be poked and prodded correctly but I believe in the next few years we'll see the true colors of every blockchain if these applications gain any footing.
