var input = document.getElementById("in");
var output = document.getElementById("out");
var button = document.getElementById("btn");
var alert = document.getElementById("alrt");
var temp = "";
var letter = "";


button.onclick = function() {
	output.innerHTML = "";
	temp = "";
  emoji.replace_mode = 'unified';
emoji.allow_native = true;
  output.innerHTML = emoji.replace_colons(':clap: ' + input.value.replace(/ /g, ' :clap: '));
	output.innerHTML = output.innerHTML.split("\\").join("");
	output.select();
	document.execCommand("copy");
	input.select();
	alert.innerHTML = "Copied To Clipboard";
};

input.select();
