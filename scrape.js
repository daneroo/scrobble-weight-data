
const url = "https://weight.v.imetrical.com/api/observations";
const observationFileName = "observationdata.json";
const formattedFileName = "formatted.json";

const response = await fetch(url);
const rawData = await response.json();

const { _id:id, values } = rawData;
console.log(`- Fetched observation data for ${id}: (${values.length})`);
await Deno.writeTextFile(observationFileName, JSON.stringify(rawData, null, 2));
console.log(`- Wrote observation data to ${observationFileName}`);

// Convert units, rounding to 2 decimals, back to Number
const toLbs = (v) => Number(Number(v / 1000).toFixed(2));
const toKg = (v) => Number(Number(v / 2204.6226218).toFixed(2));

const formattedValues = values.map(({ value, stamp }) => ({
  stamp,
  lbs: toLbs(value),
  kg: toKg(value),
}));
await Deno.writeTextFile(formattedFileName, JSON.stringify(formattedValues, null, 2));
console.log(`- Wrote formatted values to ${formattedFileName}`);