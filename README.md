# 信号機
`Start`ボタンを押すと自動で信号が変わるもの。

# アクセス方法
[natsuozawa.github.ioで見る](https://natsuozawa.github.io/traffic-light/)

または、リポジトリをクローン
```
$ git clone https://github.com/natsuozawa/traffic-light.git
```
Production buildは`docs`ディレクトリに入っている。
```
$ cd docs
$ start index.html
```

# 開発方法
依存をインストール
```
$ npm install
```

Webpack-dev-serverを使う。
```
$ npm start
```

Production buildにコンパイルする場合：
```
$ npm run build
```