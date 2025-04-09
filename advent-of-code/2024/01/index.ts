// load the file and seperate the two lists into two arrays
import { readFile } from "node:fs/promises";

async function getInput(path: string) {
  try {
    const filePath = new URL(path, import.meta.url);
    const contents = await readFile(filePath, { encoding: "utf8" });
    return contents;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const input = await getInput(
    "/Users/bruno/Development/Learning/Learning monorepo/learning/advent-of-code/2024/01/input.txt",
  );
  const col1: string[] = [];
  const col2: string[] = [];
  const temp = input?.split("\n");
  temp?.forEach(item => {
    const [str1, str2] = item.split("   ");
    col1.push(str1);
    col2.push(str2);
  });
  console.log(col1);
  console.log(col2);
}

// sort the arrays

// create a valiable called total distance
// loop through them and tally up the distances between the numbers (the absolute value of their difference)
// return the final number
main();
