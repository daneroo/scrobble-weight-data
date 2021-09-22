
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)

const {_id, values} = json
console.log(`fetched data for ${json._id}: (${values.length})`)

const imperialValues = values.map(({value,stamp}) => ({ 
  stamp,
  lbs: Number(value/1000).toFixed(1)
}));
await writeJSON('imperial.json', imperialValues) // create a new JSON file with just the Bitcoin price
console.log("Wrote imperial values")

const metricValues = values.map(({value,stamp}) => ({ 
  stamp,
  kg: Number(value/2205).toFixed(1)
}));
await writeJSON('metric.json', imperialValues) // create a new JSON file with just the Bitcoin price
console.log("Wrote metric values")

// Optionally delete the original file
// await removeFile(filename)
