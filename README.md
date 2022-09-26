# examples-starter

一个基于 `pnpm` `monorepo`、`vue3`、`vite`、多页的快速启动模版，主要用于写一些例子等

## 使用步骤

### 1.安装依赖

```shell
pnpm install
```

项目使用的 `pnpm` 作为包管理工具，如未安装 `pnpm` 的话需要安装 `pnpm`

```shell
npm install -g pnpm
```

### 2.初始化 `package.json`

```shell
pnpm init-pkg
```

### 3.更改`README.md`

### 4.更改[`CHANGELOG.md`](CHANGELOG.md)

### 5.添加页面

1. [`pages`](pages)目录下根据需要选择页面类型, 并添加相应的 page 目录
2. 在根目录下的[`index.html`](index.html)添加 page 入口

### 6.更新[`LICENSE`](LICENSE)

[`package.json`](package.json)里面有`license`, 根目录下也有个文件[`LICENSE`](LICENSE)需要更新。