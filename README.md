<h1>
    <p align="center">An more powerful bootstrap theme for hexo</p>
</h1>

<p align="center">
    <a title="Hexo Version" target="_blank" href="https://hexo.io">
        <img alt="Hexo Version" src="https://img.shields.io/badge/Hexo-%3E%3D3.0-brightgreen" />
    </a>
    <a title="Node Version" target="_blank" href="https://nodejs.org">
        <img alt="Node Version" src="https://img.shields.io/badge/Node-%3E%3D10.24.1-blue" />
    </a>
    <a title="License" target="_blank" href="https://github.com/myyerrol/hexo-theme-freemind-plus/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/myyerrol/hexo-theme-freemind-plus.svg" />
    </a>
    <br/>
    <a title="GitHub Watchers" target="_blank" href="https://github.com/myyerrol/hexo-theme-freemind-plus/watchers">
        <img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/myyerrol/hexo-theme-freemind-plus.svg?label=Watchers&style=social" />
    </a>
    <a title="GitHub Stars" target="_blank" href="https://github.com/myyerrol/hexo-theme-freemind-plus/stargazers">
        <img alt="GitHub Stars" src="https://img.shields.io/github/stars/myyerrol/hexo-theme-freemind-plus.svg?label=Stars&style=social" />
    </a>
    <a title="GitHub Forks" target="_blank" href="https://github.com/myyerrol/hexo-theme-freemind-plus/network/members">
        <img alt="GitHub Forks" src="https://img.shields.io/github/forks/myyerrol/hexo-theme-freemind-plus.svg?label=Forks&style=social" />
    </a>
</p>

<p align="center">🇬🇧 English  |  <a title="Chinese" href="README_zh-cn.md">🇨🇳 中文简体</a></p>

<p align="center">
    <span>Preview: </span>
    <a target="_blank" href="https://myyerrol.github.io">myyerrol's personal website</a>
</p>

## Features

- Built in web page access statistics
- Built in article word count statistics
- Built in multiple comment plug-ins
- Built in article local search
- Support multiple theme styles
- Support Chinese English bilingual configuration
- Support complex mathematical formulas
- Support multiple code highlighting schemes
- Support automatic following of article directory
- Add title below article picture
- Add a custom about page
- Update all source codes in the theme file
- Fix some errors in the theme file

## Requirements

- `Hexo` version >= 3.0
- `hexo-tag-bootstrap` version >= 0.0.8

## Installation

### Download

- Theme
  ```sh
  $> cd your-blog
  $> git clone git@github.com:myyerrol/hexo-theme-freemind-plus.git themes/freemind-plus
  ```

- Plugins
  ```sh
  $> npm install hexo-tag-bootstrap hexo-generator-search hexo-wordcount --save
  ```

### Configuration

- Modify `theme` to `freemind-plus` in the `_config.yml` file under the blog directory.
  ```yml
  theme: freemind-plus
  ```

- Copy the `_config_temp.yml` file in the theme directory and name the new file `_config.yml`. Customize the theme according to the content in the template file.

- Create `about`, `categories` and `tags` folders in sequence under the `your-blog/source` directory, and create a `index.html` file under each folder. The contents of the file are as follows:
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

### Update

```sh
$> cd your-blog/themes/freemind-plus
$> git pull
```

## Configuration

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

## Feedback

- Submit errors or optimization suggestions on GitHub issues of this project.
- You can send your thoughts or suggestions on the future development of the project to my [e-mail](mailto:myyerrol@126.com).

## Contribution

At present, the developer of this project is only myself. I welcome open source enthusiasts all over the world to participate in the follow-up development process of this project. If you are interested in this project and are willing to share your creative ideas, please submit GitHub issues or send e-mail to me. Thank you very much!

## Thanks

- [Hexo](https://hexo.io)
- [Bootstrap](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com)
- [Waline](https://waline.js.org)
- [Gitalk](https://gitalk.github.io)
- [comment.js](https://www.hahack.com/comment.js)
- [hexo-theme-freemind](https://github.com/wzpan/hexo-theme-freemind)
