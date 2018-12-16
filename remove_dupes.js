 let remove_duplicates_from_array = (array) => {
	// Output free of duplicates
	let out = [];

	//  
	array.forEach((element, index) => {
		// Check if element already exists
		if (out.indexOf(element) == -1) 
			out.push(element);

	});

	return out;

}

let out2 = remove_duplicates_from_array(["habeeb", "habeeb", "deepak"]);

console.log("Output is", out2);


let remove_special_characters = (array) => {

	// output array
	let out = [];
	array.forEach((element, index) => {
		// Replace all the characters that are not after the ^ symbol
		let a = element.replace(/[^a-zA-Z0-9_\s]/g, "");
		// If string begins with one or more spaces OR ends with 1 more spaces 
		 	a = a.replace(/^\s+ | \s+$/g, "");

		out.push(a);

	});

	return out; 
}
let out3 = remove_special_characters(["  deepak()_'+abs_1  "]);
console.log("Output is:", out3);

