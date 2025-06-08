# Web-development-templates

LoXi 个人网站开发风格习惯模板

## 开发要求

本项目推荐使用 `pnpm` 作为包管理工具，并运行在 `Node.js` 环境下

建议的 Node.js 版本为 LTS 版本

## 内置支持

- 主题色（4 种）
- 主要文字颜色（1 种）
- 字体（3 种）
- 部分需要调整的样式修改（修改变量）
- UI 组件（Mdui2）
- 国际化（预装：简体中文/繁体中文/英文）
- 单页面路由（Router）
- 状态管理（Pinia）
- CSS 动画（简单）
- Mdui2 图标（outlined）
- 单页面标题切换（自制）

```css
--mdui-shape-corner-medium: 8px !important;
--mdui-shape-corner-full: 5px !important;
--mdui-shape-corner-extra-large: 8px !important;
--mdui-color-shadow-dark: 255, 255, 255 !important;
--theme-color-1: #ffb144;
--theme-color-1-oc: #ffb144c7;
--theme-color-1-oc-up: #ffb1444d;
--theme-color-2: #4056B0;
--theme-color-2-oc: #4056B0c7;
--theme-color-2-oc-up: #4056B04d;
--theme-color-3: #ff7a7a;
--theme-color-3-oc: #ff7a7ac7;
--theme-color-3-oc-up: #ff7a7a4d;
--theme-color-4: #00C0D1;
--theme-color-4-oc: #00C0D1c7;
--theme-color-4-oc-up: #00C0D14d;
--text-color: #2b3d4f;
--text-color-oc: #2b3d4fc7;
--text-color-oc-up: #2b3d4f25;
--card-border-radius: 8px;
```

## 依赖包

本项目用到了以下依赖包：

- [animate.css](https://animate.style) - CSS 动画库，提供跨浏览器动画效果
- [axios](https://axios-http.com) - 基于 Promise 的 HTTP 客户端
- [mdui](https://mdui.org) - Material Design 风格的 UI 组件库
- [vue](https://vuejs.org) - 渐进式 JavaScript 框架
- [pinia](https://pinia.vuejs.org) - Vue 官方推荐的状态管理库
- [vue-i18n](https://vue-i18n.intlify.dev) - Vue 国际化解决方案
- [vue-router](https://router.vuejs.org) - Vue 官方路由管理器

## 许可证

该项目使用 [MIT许可证](LICENSE) 进行许可
