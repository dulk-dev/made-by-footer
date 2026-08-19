# made-by-footer

页脚组件：`Made by <名字>` + 一排社媒品牌图标（simple-icons 官方 SVG path + 品牌色）。
不传任何 props 时默认渲染作者 **hi超纯** 的社媒信息（小红书 / X / GitHub；抖音无值，默认隐藏，`showEmpty=true` 时置灰占位）。

> 内置默认配置是作者本人的社媒链接，仅作开箱即用的演示；实际使用请通过 `name` / `links` props 换成你自己的信息。

## 安装

```bash
npm install github:dulk-dev/made-by-footer#v0.3.1
```

- 通过 git tag 安装，安装时自动跑 `prepare` 构建 `dist`，无需手动发版。
- 升级：改 package.json 里的 tag 后重新安装即可（注意裸 `npm install` 可能不会更新 git 依赖，可用 `npm install '@hichaochun/made-by-footer@github:dulk-dev/made-by-footer#v新版本号'` 强制指定）。

## 用法

### Vue

```vue
<script setup>
import { MadeByFooter } from '@hichaochun/made-by-footer'
</script>

<template>
  <MadeByFooter />
</template>
```

### React

```tsx
import { MadeByFooter } from '@hichaochun/made-by-footer/react'

export function App() {
  return <MadeByFooter />
}
```

### 框架无关核心（core）

图标数据、品牌色、默认社媒配置、排序逻辑都在 core 层，可自行渲染：

```ts
import { brandIcons, defaultLinks, resolveLinks } from '@hichaochun/made-by-footer/core'
// 也可用子路径 '@hichaochun/made-by-footer/core' 避免加载任何框架代码
```

## Props（Vue / React 一致）

| Prop | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `string` | `'hi超纯'` | 「Made by」后显示的名字 |
| `links` | `SocialLink[]` | 内置默认配置 | 社媒链接列表，见下 |
| `showEmpty` | `boolean` | `false` | 无值平台是否以置灰 icon 占位显示；`false` 则隐藏 |

`SocialLink`：`{ label: string; url?: string; path: string; color: string }`

- `url` 留空 = 该平台无值：默认直接隐藏；`showEmpty=true` 时 icon 置灰、不可点、hover 显示「暂未开通」tooltip。
- 排序规则：有值的在前，无值的固定在队列尾部（各自保持相对顺序）。
- `path` 是 24x24 SVG path，可从 `brandIcons`（小红书 / X / 抖音 / GitHub）或 `simple-icons` 包取。

注意：simple-icons 未收录抖音，`brandIcons.douyin` 借用 TikTok 的音符字形作占位。

## 目录结构

```
src/
├── core/            # 框架无关：类型、品牌图标、默认配置、resolveLinks 排序（含单测）
├── vue/             # Vue 壳（scoped CSS，构建时注入 JS）
└── react/           # React 壳（同款样式，运行时注入 <style data-mbf>）
```

- 两个壳都只是渲染层，逻辑改动只动 `core/`。
- 包不依赖 Tailwind 等任何 CSS 框架，样式自带。

## 开发

```bash
npm install
npm test        # vitest，core 层单测
npm run build   # vite（JS + Vue CSS 注入）+ vue-tsc / tsc（类型声明）
```

## 发布新版本

本项目通过 GitHub tag 分发（不发 npm）：

```bash
# 1. 改 package.json 的 version
# 2. 提交后打 tag 并推送
git tag v<x.y.z> && git push origin master --tags
# 3. 消费方显式指定新 tag 重装（仅改 package.json 再跑裸 npm install 可能不会更新 git 依赖）
npm install '@hichaochun/made-by-footer@github:dulk-dev/made-by-footer#v<x.y.z>'
# 4. Vite 项目需重启 dev server（必要时加 --force 重建依赖预构建缓存）
```

## 图标与品牌声明

品牌图标路径与颜色来自 [simple-icons](https://github.com/simple-icons/simple-icons)（CC0 1.0 / MIT）。各品牌图标及名称为其各自所有者的商标，使用时请遵守对应品牌的指南；本项目与所列品牌无任何关联、赞助或背书关系。simple-icons 未收录抖音，`brandIcons.douyin` 借用 TikTok 的音符字形作占位。

## License

[MIT](./LICENSE) © 2026 Chaochun