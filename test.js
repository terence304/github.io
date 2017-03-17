function saveTextAsFile( _fileName, _text ) {
    var textFileAsBlob = new Blob([_text], {type:'text/plain'});

    var downloadLink = document.createElement("a");
    downloadLink.download = _fileName;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function test_str(text) {
    var str = "hello";
    str = str.concat(" ", text);
    document.getElementById("demo").innerHTML = str;
}

function test_array(text) {
    var str = [1, 2];
    str.toString();
    document.getElementById("demo").innerHTML = str;
}


(function() {
  class Test {
    constructor() { this.reset(); }

    reset() {
        this.log = "";
    }

    test_array(text) {
        var str = [1, 2];
        str.toString();
        this.log = this.log.concat(" ", text);
        document.getElementById("demo").innerHTML = this.log;
    }
  }

  window.test = new Test();
})();
