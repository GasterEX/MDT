function generate() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var entry = document.getElementById("entry").value;
  if(!name || !description || !entry) alert("error")


  var manifest = 
  {
    "format_version": 2,
    "header": {
      "name": "",
      "description": "",
      "uuid": "",
      "platform_locked": false,
      "version": [0, 1, 0],
      "min_engine_version": [1, 18, 20],
      "pack_scope": "world"
    },
    "modules": [
      {
        "description": "",
        "type": "javascript",
        "uuid": "",
        "version": [0, 0, 1],
        "language": "Javascript",
        "entry": ""
      }
    ],
    "dependencies": [
        {
            "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
            "version": [ 0, 1, 0 ]
        },
        {
            "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
            "version": [ 0, 1, 0 ]
        },
        {
            "uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
            "version": [ 0, 1, 0 ]
        }
    ]
  }


  manifest.header.name = name;
  manifest.header.description = description;
  manifest.header.uuid = uuid();
  manifest.modules[0].uuid = uuid();
  manifest.modules[0].entry = entry;
  document.getElementById("manifest").value = JSON.stringify(manifest, null, 4)

}
//thanks for kinji
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
    alert('コピーしました!');
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

  //test commit