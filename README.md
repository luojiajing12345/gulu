# 轱辘 - 一个 Vue 组件
[![Build Status](https://travis-ci.org/luojiajing12345/gulu.svg?branch=master)](https://travis-ci.org/luojiajing12345/gulu)
## 介绍
这是我在学习 Vue 过程中做的一个UI框架，希望对你有用。
## 开始使用
1. 添加 CSS 样式  
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    IE 8 及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量（后续会改成 SCSS 变量）
    ```
    :root{
        --button-height:32px;
        --font-size:14px;
        --button-bg: white;
        --button-active-bg:#eee;
        --border-radius:4px;
        --color:#333;
        --border-color:#999;
        --border-color-hover:#666;
    }
    ```
    IE 15 及以上浏览器都支持此样式
    
2. 安装 gulu
   ```angular2
   npm install -save luojj-gulu
   ```
3. 引入 gulu
   ``` 
    import {Button,ButtonGroup,Icon} from 'luojj-gulu'
    import 'luojj-gulu/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        HelloWorld,
        'g-button': Button,
        'g-cion': Icon
      }
    }
    ```
4. 引入 svg symbols

## 文档
## 提问

## 变更记录

## 联系方式
## 贡献代码



作者： 罗嘉嘉

