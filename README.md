# @hichaochun/made-by-footer

页脚组件：`Made by <名字>` + 一排社媒品牌图标（simple-icons 官方 SVG path + 品牌色）。
不传任何 props 时默认渲染 **hi超纯** 的社媒信息（小红书 / X / GitHub，抖音置灰占位）。

私有包，不发布到 npm，通过 GitHub git URL 安装。

## 安装

```bash
npm install github:dulk-dev/made-by-footer#v0.2.0
```

- 私有仓库，机器需要有 GitHub 凭据（git credential）。
- 安装时会自动跑 `prepare` 构建 `dist`，无需手动发版。
- 升级：改版本号 tag 重新 `npm install`（见「发布新版本」）。

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
| `showEmpty` | `boolean` | `true` | 无值平台是否以置灰 icon 占位显示；`false` 则隐藏 |

`SocialLink`：`{ label: string; url?: string; path: string; color: string }`

- `url` 留空 = 该平台无值：icon 置灰、不可点、hover 显示「暂未开通」tooltip。
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

```bash
# 1. 改 package.json 的 version
# 2. 提交后打 tag 并推送
git tag v<x.y.z> && git push origin master --tags
# 3. 消费方把依赖里的 tag 改成新版本，重新 npm install
```
