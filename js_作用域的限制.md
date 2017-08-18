在javascripts中，允许给未经声明的变量赋值。

如果不使用var声明，则这个变量会变为一个全局变量；

```
var old = aHero()
var fun = function(){
  newfun = aff()
}
```

 newfun这个新变量未经var声明，而且整个程序都没有声明，如果按例子中那样赋值，第一次赋值时它将自动添加到全局作用域，而并非赋值所在作用域。
