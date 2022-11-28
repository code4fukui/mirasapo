import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "./supports.json"
const data = JSON.parse(await Deno.readTextFile(url));
console.log(data);
const items = data.items;
for (const d of items) {
  for (const name in d) {
    if (typeof d[name] == "object") {
      d[name] = JSON.stringify(d[name]);
    }
  }
}
items.sort((a, b) => -a.publish_date.localeCompare(b.publish_date));
await Deno.writeTextFile("supports.csv", CSV.stringify(items));
