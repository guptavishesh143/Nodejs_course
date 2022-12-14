import yargs from "yargs";
import { hideBin } from "yargs/helpers";

//console.log(yargs(hideBin(process.argv)).argv);
// yargs.version('1.1.0')

//Add Command

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Adding command",
    handler: function () {
      console.log("Adding notes");
    },
  })
  .parse();

//New Command Remove

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Remove a note",
    handler: function () {
      console.log("Remove notes");
    },
  })
  .parse();

//list command
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "Print the placeholder text message",
    handler: function () {
      console.log(`My name is vishesh gupta`);
    },
  })
  .parse();

//read command
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "Print the placeholder message ",
    handler: function () {
      console.log("You can read the message from here.");
    },
  })
  .parse();
