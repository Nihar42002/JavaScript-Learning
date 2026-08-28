const company = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"];

company.shift();

company.splice(2, 1, "Ola");

company.push("Amazon");

console.log(company);
