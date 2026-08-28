// Strings examples: basics, length, template literals, interpolation,
// and common string methods (toUpperCase, toLowerCase, trim, slice,
// concat, replace, charAt).

// 1) Basic string and length
const raw = "  Hello, JavaScript World!  ";
console.log('Original string:[' + raw + ']');
console.log('Length (including spaces):', raw.length);

// 2) Template literals & interpolation
const user = 'Alice';
const items = 3;
console.log(`Template literal: Hello ${user}, you have ${items} items.`);

// 3) Case conversion
console.log('toUpperCase ->', raw.toUpperCase());
console.log('toLowerCase ->', raw.toLowerCase());

// 4) trim (remove leading/trailing whitespace)
console.log('trim -> [' + raw.trim() + '] (length:', raw.trim().length + ')');

// 5) slicing (slice)
// Note: positions are 0-based. Here we remove the leading two spaces first.
const trimmed = raw.trim();
console.log('slice(0,5) ->', trimmed.slice(0, 5));
console.log('slice(-6) ->', trimmed.slice(-6));

// 6) concat
const a = 'Hello';
const b = 'there';
console.log('concat ->', a.concat(', ', b, '!'));

// 7) replace
// replace only replaces the first occurrence unless using a global regex
console.log('replace ->', trimmed.replace('JavaScript', 'JS'));
console.log('replace (regex global) ->', trimmed.replace(/a/g, '@'));

// 8) charAt
console.log('charAt(0) ->', trimmed.charAt(0));
console.log('charAt(6) ->', trimmed.charAt(6));

// Small summary output to group results when running
console.log('\n--- Summary Outputs ---');
console.log('Original:', raw);
console.log('Trimmed:', trimmed);
console.log('Upper:', trimmed.toUpperCase());
console.log('Lower:', trimmed.toLowerCase());
console.log('First 5 chars:', trimmed.slice(0,5));
console.log('Concatenated:', a + ' ' + b);

