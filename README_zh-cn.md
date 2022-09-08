# hexo-theme-freemind-plus

## 简介

## 特性

## 依赖

- `Hexo`版本 >= 3.0
- `hexo-tag-bootstrap`版本 >= 0.0.8

## 安装

### 下载

- 主题
  ```sh
  $> cd your-blog
  $> git clone git@github.com:myyerrol/hexo-theme-freemind-plus.git themes/freemind-plus
  ```

- 插件
  ```sh
  $> npm install hexo-tag-bootstrap hexo-generator-search hexo-wordcount --save
  ```

### 配置

- 修改博客目录下`_config.yml`中的`theme`为`freemind-plus`。
  ```yml
  theme: freemind-plus
  ```

- 复制主题目录下`_config_temp.yml`并将新文件命名为`_config.yml`，根据模板文件中的内容对主题进行个性化定制。

- 在`your-blog/source`目录下依次创建`about`、`categories`和`tags`文件夹，并在每个文件夹下均创建一个`index.html`文件，文件内容分别如下所示：
  ```yml
  ---
  title: 关于
  layout: about
  ---
  ```
  ```yml
  ---
  title: 分类
  layout: categories
  ---
  ```
  ```yml
  ---
  title: 标签
  layout: tags
  ---
  ```

### 更新

```sh
$> cd your-blog/themes/freemind-plus
$> git pull
```

## 配置


## 反馈

## 贡献

## 感谢
