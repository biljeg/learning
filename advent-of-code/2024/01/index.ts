// this is the first part of the challenge done
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
  const input = await getInput("./input.txt");
  const col1: number[] = [];
  const col2: number[] = [];
  const stringArr = input?.split("\n");
  stringArr?.pop();

  let totalDistance = 0;
  stringArr?.forEach(item => {
    const [str1, str2] = item.split("   ");
    col1.push(parseInt(str1));
    col2.push(parseInt(str2));
  });
  col1.sort();
  col2.sort();
  for (let i = 0; i < col1.length; i++) {
    const difference = Math.abs(col1[i] - col2[i]);
    totalDistance += difference;
  }
  return totalDistance;
}

main();
