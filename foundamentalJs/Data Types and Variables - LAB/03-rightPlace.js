function rightPlace(str, sym, res) {
    let result = str.replace("_", sym);
    let output = result === res ? "Matched" : "Not Matched";
    console.log(output);

}
rightPlace(
    'Str_ng',
    'i',
    'String')