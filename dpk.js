const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");

    if (event.partitionKey) {
      candidate = typeof event.partitionKey === "string" ? event.partitionKey : JSON.stringify(event.partitionKey);
    }
  
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
  }

  return candidate;
};

/*
The above code was refactored by taking out all of the unnecessary conditional pieces, what made the code more difficult to read.
The same logic was mantained, however what was supposed to be the else's, are now the default values and the if's were relocated 
to be only called when necessary, leaving the code cleaner and easier to read :)
*/
