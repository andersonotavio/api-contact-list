import { readFile, writeFile } from "fs/promises";

const dataSource = "./data/list.txt";

export const getContact = async () => {
  let list: string[] = [];
  try {
    const data = await readFile(dataSource, { encoding: "utf-8" });
    list = data.split("\n");
  } catch (err) {}

  return list;
};

export const createContact = async (name: string) => {
  let list = await getContact();
  list.push(name);
  await writeFile(dataSource, list.join("\n"));
};

export const deleteContact = async (name: string) => {
  let list = await getContact();

  list = list.filter((item) => item.toLowerCase() !== name.toLowerCase());
  await writeFile(dataSource, list.join("\n"));
};
