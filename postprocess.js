
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)

const {_id, values} = json
console.log(`fetched data for ${json._id}: (${values.length})`)

// Convert units, rouding to 2 decimals, back to Number
const toLbs = v=>Number(Number(v*/1000).toFixed(2))
const toKg = v=>Number(Number(v*/2204.6226218).toFixed(2))

const formattedValues = values.map(({value,stamp}) => ({ 
  stamp,
  lbs: toLbs(value),
  kg: toKg(value)
}));
await writeJSON('formatted.json', formattedValues) // create a new JSON file with just the Bitcoin price
console.log("Wrote formatted values")

// Optionally delete the original file
// await removeFile(filename)
