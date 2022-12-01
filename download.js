import { unzip1 } from "https://code4fukui.github.io/address-japan/unzip1.js";

const url = "https://catalog.registries.digital.go.jp/rsc/supports.zip";
const bin = new Uint8Array(await (await fetch(url)).arrayBuffer());
await Deno.writeFile("supports.zip", bin);
console.log(bin);

const org = unzip1(bin);
console.log(org);
await Deno.writeFile("supports.json", org);
