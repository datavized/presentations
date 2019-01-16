var fsNames = [
	'requestFullscreen',
	'mozRequestFullScreen',
	'msRequestFullscreen',
	'webkitRequestFullscreen'
];
function fs() {
	var i;
	for (i = 0; i < fsNames.length; i++) {
		if (document.body[fsNames[i]]) {
			document.body[fsNames[i]]();
			return;
		}
	}
}
document.body.addEventListener('dblclick', fs, false);