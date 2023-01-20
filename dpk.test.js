const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the passed partionKey value with a object input", () => {
    const event = {
      partitionKey: "12345",
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("12345");
  });

  it("Returns sha3-512 when given simple input", () => {
    const trivialKey = deterministicPartitionKey("1");
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the passed partionKey value parsed to string with a object input", () => {
    const event = {
      partitionKey: 12345,
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("12345");
  });

  it("Returns a proper size partitionKey with a object input", () => {
    const event = {
      partitionKey:
        "EmS6aHTYXrjjcthFwkNpnet6U2yW8HUg4PfLpU7ikN26aDzAUhJtZRSevTiA2EJWmDZJiCmtceDP9YFbN3d9a6bpXWzCLzZ3HYwqfq48hDBMjq92jXrnfGiUk4r79Y23yVzatnTH3FGQQSJKV2KWVM57PnxVt5gu94A6Szeqm8mT82vmFE7zEfc3Ca7dHSmKV5xvCEaFMFEXgTVNkgrWuQd6rwY4wum5uWb85nHPBmDjmLP27vY9SR5wZrnmfCZMZyFSP47v7tGqd7B5WBcCJ5cZWrNPnYQCB9hw5T26aLPtftuqVJ3xTaBUarnfpBaGuMKeLuHB5jYWhJPT6nrHCK24SUB4VT3zrGmtMmV5z4DjNjthfaZfCBFzwSTWCePrT7z7V",
    };

    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });
});
