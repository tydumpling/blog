# angular学习

## 基础概念

```typescript
// app.module.ts 是 angular 应用的根模块
// 它用来描述应用的各个部分如何组合在一起
// 每个应用至少有一个根模块，习惯上叫做 AppModule

// app.module.ts 中需要做以下几件事：
1. 导入外部模块 (imports 数组)
2. 声明组件 (declarations 数组) 
3. 提供服务 (providers 数组)
4. 指定根组件 (bootstrap 数组)
```

## 装饰器说明

```typescript
// 常用装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 输入输出装饰器
@Input() hero: Hero;  // 接收外部数据
@Output() deleted = new EventEmitter<Hero>();  // 向外发送事件

// 服务装饰器
@Injectable({
  providedIn: 'root'
})
```

## 指令

```typescript
// 常用指令
1. *ngFor="let item of items"  // 循环
2. *ngIf="condition"           // 条件渲染
3. [ngClass]="{'active': isActive}"  // 动态类名
4. [ngStyle]="{'color': color}"      // 动态样式
5. [(ngModel)]="value"               // 双向绑定
```

## 管道

```typescript
// 内置管道
{{ value | uppercase }}  // 转大写
{{ value | date }}      // 日期格式化
{{ value | currency }}  // 货币格式化

// 自定义管道
@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
```

## 路由

```typescript
// 基本路由配置
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent }
];

// 路由链接
<a routerLink="/heroes">Heroes</a>

// 路由出口
<router-outlet></router-outlet>
```


