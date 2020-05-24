# S3でWebApp開発

## サイトのURL

<https://www.tkm-webapp.ml/>

## メモ

### 環境構築

#### 静的ホスティング開始まで

微妙に情報が少ないのでまとめておく

1. Freenomでドメイン名を取得する（example.com）
2. S3で1で取得したDNS名のバケットを構築する（example.com）
3. S3で2で作成したバケットのサブドメインのバケットを構築する（www.example.com）
4. testページを作成してアップロード
5. 静的ホスティング設定にあるURLでアクセス
6. Route 53でS3 EndpointのAレコードを作成
7. FreenomでNameserverをAWSのものに変更
8. しばらくしてからブラウザでアクセス（http）

#### API GatewayやCloud Front

* Qiitaの記事とかで十分設定可能

### TypeScriptのビルド

* tsフォルダで```npm run build```をすれば良い
* もちろん、npmとか必要なモジュールはtsフォルダに導入済みであることが前提

### 困ったときに使ったサイト

* S3構築手順
  - <https://qiita.com/Ichiro_Tsuji/items/c174d580587a622d3358#s3-backet%E3%82%92web%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B>
* バケットポリシー失敗理由
  - <https://forums.aws.amazon.com/thread.jspa?threadID=218943>
* Route 53でAレコード登録したけど名前解決できなかった理由
  - <https://dev.classmethod.jp/cloud/aws/mesoko-r53-cdn/>
* 例: 独自ドメインを使用して静的ウェブサイトをセットアップする
  - <https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-before-you-begin>
* DNSレコード一覧
  - <https://ja.wikipedia.org/wiki/DNS%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E4%B8%80%E8%A6%A7>
* S3のファイルをPythonで取得する
  - <https://shinonono.net/entry/aws-lambda-json-s3>
* API GatewayをカスタムドメインでHTTPS化する
  - <https://dev.classmethod.jp/cloud/api-gateway-custom-domain-ssl/>
* API GatewayをProxyで使うと502になる
  - <https://qiita.com/_mogaming/items/4e9d8c62739399b076b7>
* [JavaScript] ボタンクリックイベントを強制的に起こす
  - <https://javascript.programmer-reference.com/js-action-click/>
* letとvarの違い
  - <https://qiita.com/y-temp4/items/289686fbdde896d22b5e>
* あの手この手でTypeScriptからJSON形式データをimportする
  - <https://qiita.com/oganyanATF/items/65dfcc4dd25c028ea403>
* JavaScriptよさらば。「TypeScript」で始めるECMAScript 2015
  - <https://www.tcmobile.jp/dev_blog/devtool/javascript%E3%82%88%E3%81%95%E3%82%89%E3%81%B0%E3%80%82%E3%80%8Ctypescript%E3%80%8D%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8Becmascript-2015/>
* JavaScriptでidから要素を取得する方法：getElementById()
  - <https://uxmilk.jp/11593>
* Webpackについて
  - <https://qiita.com/IgnorantCoder/items/d26083d9f886ca66d4ae>
* Object is possibly 'null'.の対応
  - <https://teratail.com/questions/130598>
* jQueryのインストール
  - <https://stackoverflow.com/questions/38283236/typescript-and-jquery-compile-error-cannot-find-name/41095886>
* node_modulesをgit pushしてしまった時の対処git rm
  - <https://techacademy.jp/magazine/10252>
* TypeScriptで書いてwebpackでビルドしたjsファイルのエラーをわかりやすくする
  - <https://qiita.com/paranishian/items/2983560350169b42b666>
* Cludfront + API Gateway + Lambda の環境でうまくいかない場合のレスポンスとその原因
  - <https://qiita.com/snaka/items/b92d13908d1950d01a40>
* TypeScriptで document.getElementById("hoge").value をすると出るThe property ‘hoge' does not exist on value of type 'HTMLElement' というエラーを解消する
  - <https://qiita.com/Sekky0905/items/a88721f2af41050c93f2>
* Ajaxの雛形パターン
  - <https://qiita.com/makoto1219/items/74afcf2e80c34c746768>