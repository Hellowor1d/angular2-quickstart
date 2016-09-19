# learn-angular2
a repository for my study record

### angular2-quickStart
了解一下 angular2的基本文件结构,以及 `typescript` 所需要的一些设置
* npm start 执行编译
* npm lite 打开本地 server
* 发现 angular-cn 的文档有错误,顺便提交了个 PR

### Hero's Editor

* 以angular2-quickStart 的文件为基础,添加 `FormsModule` 模块以增加双向绑定功能
* 不同于 angualr1.x, `ngModel`指令要写在  `[()]` 之中
* app.component.ts 中的 template 可以直接写 html 模板,但是要写在 \`\`两个反引号之中,
  叫做多行模板字符串

### Tour of Heroes (主从结构)
* 这一阶段,添加了多个英雄的数据 HEROES,用 `*ngFor`来遍历数组,语法如下,类似于ngRepeat
```html
<li *ngFor="let hero in heroes"> 这里是一个英雄的内容</li>
```
* 属性绑定,类似ngClass的使用,[]中括号不可以省略
```
 [class.selected="hero === selectedHero"]
```
* (click) 绑定click事件

* app.component.ts中 @Component 中设置 **styles** 只对组件内元素起效
