function compile() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;
    const code = document.getElementById("output").contentWindow.document;

    code.open();
    code.write(`${html}<style>${css}</style><script>${js}<\/script>`);
    code.close();
}

document.body.onkeyup = compile;

function copyContent(id) {
    navigator.clipboard.writeText(document.getElementById(id).value)
        .then(() => console.log('Copied successfully'))
        .catch(() => console.error('Copy failed'));
}