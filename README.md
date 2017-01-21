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

### 多个组件 (实现一个可复用的组件)

* 使用 `@Component` 装饰器创建元数据,在元数据中，我们指定选择器的名字，用以标记此组件的元素。 然后，我们导出这个组件类，以便其它组件可以使用它。
* 命名约定: 中线命名法(也叫 烤串命名法 ),所有组件名都以 Component 结尾,所有组件的文件名都以 .component 结尾. 比如， SpecialSuperHeroService 服务应该被定义在 special-super-hero.service.ts 文件中。
* @Input() hero: Hero 写在 export class HeroDetailComponent{ }中
* 新添加的组件 HeroDetailComponent 要写进 app.module.ts 中,添加 HeroDetailComponent 到 NgModule 装饰器中的 declarations 数组。这个数组包含了所有属于本应用模块的，由我们亲自创建的组件、管道和指令。
>  单独创建了一个 hero.ts 文件,用以传递选中的 Hero (why?思考)answer: 这是规定了一个Hero 类，规范数据类型

### 服务
* 我们可改进的地方至少有两个：首先，定义英雄的数据不该是该组件的任务。其次，想把这份英雄列表的数据共享给其它组件和视图可不那么容易。
* 在 app 目录下创建一个名叫 hero.service.ts 的文件
* *@Injectable()* 装饰器使用这个函数。
* *@Injectable()* 标识一个类可以被注入器实例化。
不要忘了写**圆括号**！ 如果忘了建议为每个服务类都添加@Injectable()，包括那些没有依赖严格来说并不需要它的。因为：
面向未来: 没有必要记得在后来添加依赖的时候添加 @Injectable()。
一致性:所有的服务都遵循同样的规则，不需要考虑为什么某个地方少了一个。写，就会导致一个很难诊断的错误
不要忘了写**圆括号**！ 如果忘了写，就会导致一个很难诊断的错误
* 添加一个名叫 ·getHeros· 的桩方法。  改为 getHeroes  (修改文档错误,提PR)
* 继续学习服务内容
* 想要在列表组件appComponent中调用HeroService提供的数据，需要在当前文件中`import {HeroService} form './hero.service'`
* 使用 constructor(private heroservice: HeroService){ }

>
不要把NgModel（或FORMS_DIRECTIVES）加到AppModule元数据的declarations`数据中！

这些指令属于FormsModule。 组件、指令和管道只能属于一个模块。

永远不要再次声明属于其它模块的类。

小吐槽，模块化的各种自有新概念有点多

https://angular.cn/docs/ts/latest/tutorial/toh-pt6.html  这正是将数据访问委托组*(给)*一个服务的目的

AppModule中的 imports 与Conta*c*tModule的 imports 互不相干
---
### 十一放假
---

继续用官网教程练习模块部分
>正在看烹饪宝典中的FAQ部分
继续学习angular2
>1.21