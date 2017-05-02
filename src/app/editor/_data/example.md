### 使用三级标题作为最高级标题

![图片的alt会成为对应的`<figure>`](http://insights.thoughtworkers.org/wp-content/uploads/2017/03/1-excellent-Developer-1024x576.png)

用\`\`仅表示代码。

> 支持引用

支持多行代码片段，并可以指定语言

```bash
  #!/bin/bash
  sudo rm -fr /
```

使用markdown-it作为转换库，支持的全部语法参见<https://markdown-it.github.io/>。支持下列插件：

```typescript
markdown.use(require('markdown-it-abbr'));
markdown.use(require('markdown-it-deflist'));
markdown.use(require('markdown-it-emoji'));
markdown.use(require('markdown-it-footnote'));
markdown.use(require('markdown-it-ins'));
markdown.use(require('markdown-it-mark'));
markdown.use(require('markdown-it-sub'));
markdown.use(require('markdown-it-sup'));
markdown.use(require('markdown-it-implicit-figures'), {
  dataType: true,
  figcaption: true,
});
markdown.use(require('markdown-it-table-of-contents'));
```
