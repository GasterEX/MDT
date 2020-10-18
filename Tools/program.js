function generate() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var type = document.getElementById("type").value
  var version1 = document.getElementById("version1").value
  var version2 = document.getElementById("version2").value
  var version3 = document.getElementById("version3").value

  var manifest = 
  {
    "format_version": 1,
    "header": {
      "description": "description",
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


  manifest.header.name = name
  manifest.header.description = description
  manifest.modules[0].type = type
  manifest.header.uuid = uuid()
  manifest.modules[0].uuid = uuid()
  delete manifest.header.version
  manifest.header.version = [version1,version2,version3].map( str => parseInt(str, 10) )
  delete manifest.modules[0].version
  manifest.modules[0].version = [version1,version2,version3].map( str => parseInt(str, 10) )

  document.getElementById("manifest").value = JSON.stringify(manifest, null, 4)

}

function uuid(){
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

function execCopy(string){

  // 空div 生成
  var tmp = document.createElement("div");
  // 選択用のタグ生成
  var pre = document.createElement('pre');
  
  // 親要素のCSSで user-select: none だとコピーできないので書き換える
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';

  tmp.appendChild(pre).textContent = string;

  // 要素を画面外へ
  var s = tmp.style;
  s.position = 'fixed';
  s.right = '200%';

  // body に追加
  document.body.appendChild(tmp);
  // 要素を選択
  document.getSelection().selectAllChildren(tmp);

  // クリップボードにコピー
  var result = document.execCommand("copy");

  // 要素削除
  document.body.removeChild(tmp);
  
  return result;
}

var textarea = document.getElementById('textarea');
var button = document.getElementById('button');

function copy(){
  if(execCopy(document.getElementById("manifest").value)){
    alert('copied!');
  }
  else {
    alert('It does not support your browser.');
  }
};

function download() {
  var blob = new Blob(
    [document.getElementById("manifest").value],
    { "type": "text/plain" })
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'manifest.json'
    link.click()
  }