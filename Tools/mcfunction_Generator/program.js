// JavaScript source code


function download() {
    var pack_name = document.getElementById("pack_name").value;
    var function_name = document.getElementById("function_name").value;
    var function_code = document.getElementById("function").value;
    var image_data = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAgRJREFUeNrtmrlKQ0EUhvM0goWlC8G4LxgtFA0uKMYoxuWKilGwUUQkIAhBwTSCC+IuxhUCYtDCxoe6tvc/QobDJI3zF19zZ3LmzDdwmCWh1EvUD7L21gOsPHcB0xf1RVl8aAfGj6sB764F2PgYAOT4czdNQPIyAsxeNwITp7VAb6YCWLhvBUIUQAGOC1h97faDyAR38yPAVq4P2H7qB4YjlcDMVQOQOKsDpKCDr0kgU4gDckHkhGX+Utj8bTNAARTguoC99zE/iJzA0Y8HTJ2HAVmE5O+Xch2AbJdFeLMQA/Y/E0D2OwnIeIPZKiB+UgPI/hRAAa4LkB88zwNku2T5sRMw9ZfIIijb5cZFtq/HwoBpPNmfAijAdQGHXtQPIjvI9vzOKCAHMMXTJmxaIFO+FEABFFBcgCkhGVArTDtBrTBTf4lcQAqgANcFyA/agOl0GtAmYBpf21+7QBRAAa4LsE1YWyS1RbPU8SmAAigABdgG1LabNjK2E9aORwEU4LoA2wsF20tJW2w3ShRAARSgK2K2hxmTYFN87UbJdFijAApwXUCpDxfaIiQfOrQbIe3DzJ8/SFAABTguwDagrZByYyqqFEABFKDbCElSQ22A7QWHaWNkOlxpL20pgAJcF2CbkPYSUnv4sV0gCqAACrATYPsYarqQKPfjp/VpkAIo4H8L+AVfB6pPaEnxqAAAAABJRU5ErkJggg=="

    var manifest =
    {
        "format_version": 1,
        "header": {
            "description": "by mcfunction Generator",
            "name": "name",
            "uuid": "466709fb-dc16-4c02-9707-1d13ba320e2e",
            "version": [
                1,
                0,
                0
            ]
        },
        "modules": [
            {
                "description": "",
                "type": "data",
                "uuid": "6e903c88-0dd4-4d52-bf2f-bc30de78c506",
                "version": [
                    1,
                    0,
                    0
                ]
            }
        ]
    }

    manifest.header.name = pack_name
    manifest.header.uuid = uuid()
    manifest.modules[0].uuid = uuid()
    var mmanifest = JSON.stringify(manifest, null, 4)
    var zip = new JSZip();
    zip.folder(pack_name).file("manifest.json", mmanifest);
    zip.folder(pack_name).file("pack_icon.png", image_data, { base64: true });
    zip.folder(pack_name).folder("functions").file(`${function_name}.json`, function_code);
    zip.generateAsync({ type: "blob" }).then(blob => {
        let dlLink = document.createElement("a");
        const dataUrl = URL.createObjectURL(blob);
        dlLink.href = dataUrl;
        dlLink.download = `${pack_name}.mcpack`;
        document.body.insertAdjacentElement("beforeEnd", dlLink);
        dlLink.click();
        dlLink.remove();
        setTimeout(function () {
            window.URL.revokeObjectURL(dataUrl);
        }, 1000);
    });
}

function uuid() {
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}