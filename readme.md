# S3でWebApp開発

## メモ

### 環境構築

1. Freenomでドメイン名を取得する（example.com）
2. S3で1で取得したDNS名のバケットを構築する（example.com）
3. S3で2で作成したバケットのサブドメインのバケットを構築する（www.example.com）
4. testページを作成してアップロード
5. 静的ホスティング設定にあるURLでアクセス
6. Route 53でS3 EndpointのAレコードを作成
7. FreenomでNameserverをAWSのものに変更
8. しばらくしてからブラウザでアクセス（http）

### git

* 参考サイト  <https://qiita.com/mountcedar/items/682743c95fd3b8fc274b>

* github上に作成したリポジトリとローカルで同期する

~~~powershell
git fetch git@github.com:tkm1988/myReposName
~~~

* README.mdのPush

~~~powershell
git add .\readme.md
git commit -m "Commit Message"
git push -u origin master
~~~

### 困ったときに使ったサイト

* S3構築手順  <https://qiita.com/Ichiro_Tsuji/items/c174d580587a622d3358#s3-backet%E3%82%92web%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B>

* バケットポリシー失敗理由  <https://forums.aws.amazon.com/thread.jspa?threadID=218943>

* Route 53でAレコード登録したけど名前解決できなかった理由  <https://dev.classmethod.jp/cloud/aws/mesoko-r53-cdn/>

* 例: 独自ドメインを使用して静的ウェブサイトをセットアップする  <https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-before-you-begin>

* DNSレコード一覧  <https://ja.wikipedia.org/wiki/DNS%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E4%B8%80%E8%A6%A7>
