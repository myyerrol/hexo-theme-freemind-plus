# hexo-theme-freemind-plus

## 简介

## 特性

- 内置网页访问统计
- 内置文章字数统计
- 内置多款评论插件
- 内置文章本地搜索
- 支持多种主题风格
- 支持中英双语配置
- 支持复杂数学公式
- 支持多种代码高亮方案
- 支持文章目录自动跟随
- 添加文章图片下方标题
- 添加自定义的关于页面
- 更新主题文件中的所有源码
- 修复主题文件中的部分错误

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

```yml
# 网站统计设置
# Website statistics settings
analytics:
    baidu:
        enable: false
        # 站点标识
        # Site ID
        siteid:
    google:
        enable: false
        # 站点标识
        # Site ID
        siteid:

# 网站外观设置
# Website appearance settings
appearance:
    # 开启Fancybox支持
    # Turn on Fancybox support
    fancybox: true
    # 网站图标
    # Favicon
    favicon: xxx.ico
    # 主题反向配色
    # Theme inverse color
    inverse: true
    # 主题样式（包含有bootstrap、cerulean、cosmo、cyborg、darkly、flatly、journal、
    # lumen、paper、readable、sandstone、simplex、slate、spacelab、superhero、
    # united、yeti）
    # Theme style(bootstrap, cerulean, cosmo, cyborg, darkly, flatly, journal,
    # lumen, paper, readable, sandstone, simplex, slate, spacelab, superhero,
    # united, yeti)
    theme: bootstrap

# 网站文章设置
# Website article settings
article:
    # 开启MathJax支持
    # Turn on MathJax support
    mathjax: true
    # 显示版权信息
    # Show copyright information
    copyright: true

# 网站评论设置
# Website comments settings
comments:
    waline:
        enable: true
        # Waline服务端地址
        # Waline server URL
        serverURL: "https://xxx.vercel.app"
        # 多语言支持（zh、zh-CN、zh-TW、en、en-US、jp、jp-JP、pt-BR、ru、ru-RU）
        # Multiple language support(zh, zh-CN, zh-TW, en, en-US, jp, jp-JP,
        # pt-BR, ru, ru-RU)
        lang: "zh-CN"
        # 暗夜模式
        # Dark mode
        dark: false
        # 评论者相关属性
        # Commentator related attributes
        meta: ["nick", "mail", "link"]
        # 必填项
        # Required field
        requiredMeta: ["nick", "mail"]
        # 登录模式状态（enable、disable、force）
        # Login model status(enable, disable, force)
        login: "enable"
        # 评论字数限制（设置为0时无限制）
        # Comment word limit(When set to 0, there is no limit)
        wordLimit: 0
        # 评论列表分页的条数
        # Number of comment list pages
        pageSize: 10
        # 显示页脚版权信息
        # Show footer copyright information
        copyright: true
    commentjs:
        enable: false
        # 评论后端的站点（目前仅支持GitHub）
        # The site of comments backend(only support GitHub)
        type: github
        # GitHub用户名称
        # GitHub user's name
        user: xxx
        # GitHub仓库名称（不是仓库地址）
        # GitHub repository's name(not repository's address)
        repo: "xxx"
        # GitHub应用客户端标识
        # GitHub application client id
        clientID: xxx
        # GitHub应用客户端密钥
        # GitHub application client secret
        clientSecret: xxx
        # 最近评论显示的条数
        # The number of recent comments
        count: 10
    gitalk:
        enable: false
        # GitHub应用客户端标识
        # GitHub application client id
        clientID: xxx
        # GitHub应用客户端密钥
        # GitHub application client secret
        clientSecret: xxx
        # GitHub仓库
        # GitHub repository
        repo: "xxx"
        # GitHub仓库所有者，可以是个人或者组织
        # GitHub repository owner, it can be an individual or an organization
        owner: xxx
        # GitHub仓库的所有者和合作者（对这个仓库有写权限的用户）
        # GitHub repository owner and collaborator(uers with write permission
        # this repository)
        admin: xxx
        # 评论框的语言
        # Language of comment box
        language: "zh-CN"
        # 类似Facebook评论框的全屏遮罩效果
        # Full screen mask effect similar to Facebook comment box
        distractionFreeMode: true
    disqus:
        enable: false
        # 评论后端的简称
        # Short name of comments backend
        shortName:

# 网站内容设置
# Webiste contents settings
contents:
    # 网站的标语
    # Website's slogan
    slogan: "xxx"
    # 网站的菜单
    # Website's menu
    menu:
        - title: "归档"
          url: "archives/"
          intro: "所有的文章"
          icon: "fa fa-archive"
        - title: "分类"
          url: "categories/"
          intro: "所有的分类"
          icon: "fa fa-folder"
        - title: "标签"
          url: "tags/"
          intro: "所有的标签"
          icon: "fa fa-tags"
        - title: "关于"
          url: "about/"
          intro: "关于"
          icon: "fa fa-user"
    # 网站的外链
    # Website's links
    links:
          # 标题
          # Title
        - title: "myyerrol的个人网站"
          # 网址
          # Website's url
          url: "https://myyerrol.github.io"
          # 简介
          # Brief introduction
          intro: "myyerrol的个人网站"
          # 图标
          # Shape of icon
          icon: "fa fa-globe"
    # 网站的关于
    # Website's about
    about:
        # 关于中的介绍A（支持Markdown语法）
        # Introduction A in aboout(support Markdown syntax)
        introA: "嗨！我叫**xxx**，昵称为**xxx。**"
        # 关于中的介绍B（支持Markdown语法）
        # Introduction B in aboout(support Markdown syntax)
        introB: "我是一个崇尚开源精神的**创客**，欢迎访问我的<a href='https://github.com/xxx' title='xxx的GitHub' target='_blank'>GitHub</a>主页进行查看。"
        # 已解锁的技能
        # Unlocked skills
        skillDone100:
            - xxx
            - yyy
        # 已了解的技能
        # Learned skills
        skillDone075:
            - zzz
        # 正解锁的技能
        # Skills being unlocked
        skillDone050:
            - zzz
        # 社交信息
        # Social information
        social:
              # 标题
              # Title
            - title: "项目"
              # 网址
              # Website's url
              url: "https://github.com/xxx"
              # 简介
              # Brief introduction
              intro: "我的GitHub"
              # 图标形状
              # Shape of icon
              icon: "fa fa-github-alt"
              # 图标背景
              # Background color of icon
              colorBg: "btn-default"
            - title: "知乎"
              url: "https://www.zhihu.com/people/xxx"
              intro: "我的知乎"
              icon: "fa fa-link"
              colorBg: "btn-primary"
            - title: "B站"
              url: "https://space.bilibili.com/xxx"
              intro: "我的B站"
              icon: "fa fa-video-camera"
              colorBg: "hotpink"
              colorFt: "white"
            - title: "邮箱"
              url: "mailto:xxx@xxx.com"
              intro: "我的邮箱"
              icon: "fa fa-envelope"
              colorBg: "btn-success"
        # 时间线
        # Timeline
        timeline:
              # 图标形状
              # Shape of icon
            - icon: "fa fa-lightbulb-o"
              # 图标背景
              # Background color of icon
              colorBg: "gold"
              # 日期
              # Date
              date: "刚才"
              # 内容（支持Markdown语法）
              # Content(support Markdown syntax)
              content: "$> 正在编写代码。。。"
            - date: "xxx年"
            - icon: "fa fa-globe"
              colorBg: "#CD3700"
              date:
                  - "xxxx年xx月xx日"
                  - "xxxx年xx月xx日"
              content: "xxx"

# 网站推送设置
# Website push settings
push:
    # 网站验证码
    # Website verification code
    vertify:
        baidu: xxx
        bing: xxx
        google: xxx

# 网站检索设置
# Website search settings
search:
    swiftype:
        enable: false
        # 密钥
        # Secret key
        key:

# 网站插件设置
# Website widgets settings
widgets:
    - search
    - category
    - tagcloud
    - recent_posts
    - links
    - recent_comments
```

## 反馈

- 在本项目的GitHub Issues上提交错误或优化建议。
- 可以给我的电子[邮箱](mailto:myyerrol@126.com)发送你对本项目未来发展的想法或建议。

## 贡献

目前本项目的开发者只有我自己，我非常欢迎全世界的开源爱好者能够参与到本项目后续的开发过程中，如果你对本项目感兴趣并且愿意分享你的创意想法，请向我提交GitHub Issues或发送电子邮件，非常感谢！

## 感谢

- [Hexo](https://hexo.io)
- [Bootstrap](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com)
- [Waline](https://waline.js.org)
- [Gitalk](https://gitalk.github.io)
- [comment.js](https://www.hahack.com/comment.js)
- [hexo-theme-freemind](https://github.com/wzpan/hexo-theme-freemind)
