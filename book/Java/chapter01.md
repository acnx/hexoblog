### 第一章 认识Java

#### 1.1 什么是Java

#### 1.2 搭建开发平台

#### 1.3 一个Java程序

#### 1.4 疑难问题解析





### 第二章

#### 2.1 认识Java代码

```java

public class Kai {

	int a1 = 127;
	int s1 = a1*a1;
	
	public static void main(String args[]){
		//长方形面积
		double a2 = 7.1;
		double b2 = 4.3;
		double s2 = a2*b2;
		System.out.println("长方形的面积为"+s2);
		//三角形面积
		double a3 = 5;
		double b3 = 6.7;
		double s3 = a3*b3/2;
		System.out.println("三角形的面积"+s3);
	}
}

output:
长方形的面积为30.529999999999998
三角形的面积16.75


```



#### 2.2 标识符和注释

java中规定

标识符组成：

1. 大小写字母
2. 数字
3. 下划线
4. 美元符号$组成
5. 不能数字开头
6. 没有最大长度限制



```java
public class JieShi{
    public static void main(String args[]){
        flower1 f1 = new flower1();
        flower1 f2 = new flower1();
        f1.setcolor("红色");
    }
}
```

```
eclipse r 替换一个字符
```

```java
public class JieShi{
	//注释
	public static void main(String args[]){
		System.out.println("1");
		System.out.println("2");
		//System.out.println("3");
		System.out.println("4");
		System.out.println("5");
		/*
		 *	System.out.println("6");
		 *	System.out.println("7");
		 */
		System.out.println("8");
		System.out.println("9");
		
  }

}
output:
1
2
4
5
8
9

```



#### 2.3 变量和常量

```java
public class JieShi{
	//注释
	public static void main(String args[]){	
		//varType varNane = value;
		int a = 100;
		System.out.println(a);
  }

}
output:
100
```

note:方法内变量是局部变量，方法外类内变量是全局变量，在方法中可以改变值

###### 常量

```java
final double PI = value;
```

```java
public class JieShi{
	public static void main(String args[]){	
		final double PI = 3.14;
		System.out.println(PI *2);
  }
}

```



#### 2.4 数据类型

1. byte(字符类型)
2. short(短整型)
3. int(整型)
4. long(长整型)
5. float(单精度浮点型)
6. double（双精度浮点型）
7. char(字符型)
8. boolean(布尔型)

```java
public class Test {
	public static void main(String[] args) {
		double R = 45.24;
		final double PI = 3.1415926;
		double area = PI*R*R;
		System.out.println("area is :" + area);
	}

}
output:
area is :6429.76437089376
```

```java
public class Test {
	public static void main(String[] args) {
		char a = '\u0011';
		char b = '\u0894';
		char c = '\uffff';
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}

}
```

```java
public class Test {
	public static void main(String[] args) {
		int a = 5;
		boolean b = (a==5);
		System.out.println(b);
	}

}
output:
true
```



#### 2.5 数据之间的转换

 强制类型转换

```java
public class Test {
	public static void main(String[] args) {

		int a = 586;
		byte b = (byte)a;
		System.out.println(a);
		System.out.println(b);
	}

}
output:
586
74

```



#### 2.6 运算符与表达式









### 第三章 程序控制结构

for

```java
public class Test {
	public static void main(String[] args) {

		for (int i = 0; i < 9; i++) {
	    System.out.println(i);
    }
		
	}

}

0
1
2
3
4
5
6
7
8

```

if

```java
public class Test {
	public static void main(String[] args) {

		int a = 2;
		if (a == 2){
			System.out.println("a=2");
		}
		
	}

}

a=2

```

if - else

```java
public class Test {
	public static void main(String[] args) {

		int a = 3;
		if (a == 2){
			System.out.println("a=2");
		}else{
			System.out.println("a!=2");
		}
		
	}

}

a!=2

```

		if -else -if

```java
public class Test {
	public static void main(String[] args) {

		int a = 7;
		if(a>1&&a<5){
			System.out.println("a>1&&a<5");
		}else if(a>=5&&a<10){
			System.out.println("a>=5&&a<10");
		}else{
			System.out.println("other");
		}

	}

}

a>=5&&a<10

```

switch

```java
public class Test {
	public static void main(String[] args) {

		int a = 3;
		switch(a){
		case 1:
			System.out.println("1");
			break;
		case 2:
			System.out.println("2");
			break;
		case 3:
			System.out.println("3");
			break;
		default:
			System.out.println("other");
		
		
		}


	}

}

3

```

while

```java

public class Test {
	public static void main(String[] args) {

		
		int a = 0;
		while(a<10){
			System.out.println(a);
			a++;
		}


	}

}
0
1
2
3
4
5
6
7
8
9

```

do - while

```java
public class Test {
	public static void main(String[] args) {

		
		int a = 2;
		do{
			a = a - 5;
			System.out.println(a);
		}while(a>=5);

	}

}

-3

```

菱形

```java
public class Test {
	public static void main(String[] args) {

		int n = 7;
		int o = (n/2);
		int t = 1;
		int step = 2;
		for(int i = 0;i<n;i++){
			for(int j = 0;j<Math.abs(o);j++){
				System.out.print((char)32);
			}
			o--;
			for(int k=1;k<=t;k++){
				System.out.print("*");
			}
			t = t + step;
			if(t == n){
				step = -step;
			}
			System.out.println();
		}

	}

}

   *
  ***
 *****
*******
 *****
  ***
   *

```



```java
//倒三角
public class Test {
	public static void main(String[] args) {

		for (int i = 9; i >= 1; i--) {
			for (int j = i; j >=1; j--) {
	      System.out.print(j + " ");
      }
	    System.out.println();
    }

	}

}

9 8 7 6 5 4 3 2 1 
8 7 6 5 4 3 2 1 
7 6 5 4 3 2 1 
6 5 4 3 2 1 
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1 

```

```java
//3.4 跳转语句
//3.4.1 break跳转语句
//1 无标号退出循环

public class Test {
	public static void main(String[] args) {

		/*
		 * for语句中的break
		 * 
		 */
		for(int d = 0;d<9;d++){
			if(d==2){
				break;
			}
			System.out.println(d);
		}
		/*
		 * while语句中的break
		 */
		int i = 0;
		while(i<9){
			if(i==2){
				break;
			}
			System.out.println(i);
			i++;
		}
		/*
		 * do - while 语句中的break
		 */
		int j = 0;
		do{
			if (j==2){
				break;
			}
			System.out.println(j);
			j++;
		}
		while(j<9);
	}

}
0
1
0
1
0
1

```

```java

public class Test {
	public static void main(String[] args) {

		//有标号退出循环
		out:for(int a=0;a<10;a++){
			System.out.println(a);
			for(int b=0;b<10;b++){
				if(b==5){
					break out;
				}
				System.out.println(b);
			}
		}
	}

}
0
0
1
2
3
4
```

```java
public class Test {
	public static void main(String[] args) {

		for(int a=0;a<19;a++){
			System.out.print(a);
			if(a%3==0){
				continue;
			}
			System.out.println("$");
		}
		
	}

}
01$
2$
34$
5$
67$
8$
910$
11$
1213$
14$
1516$
17$
18
```

```java
//eclipse按住shift + { + enter = 双括号
```

```java
public class Test {
	public static void main(String[] args) {
		//return
		Cat c1 = new Cat(1,2,3);
		Cat c2 = new Cat(1,2,3);
		System.out.println(c1.equals(c2));
	}
}
class Cat{
	int colour;
	int height,weight;
	public Cat(int colour,int height,int weight){
		this.colour = colour;
		this.height = height;
		this.weight = weight;
		
	}
	public boolean equals(Object obj){
		if(obj==null){ 
			return false;
			}else if(obj instanceof Cat){
				Cat c = (Cat)obj;
				if((c.colour==colour)&&(c.height==height)&&(c.weight==weight)){
					return true;
				}
			}
		return false;
	}
}
true

```

### 第四章 数组



```java
//声明一维数组

int[] array
int array[]
boolean[] array;
float[] array;
double[];

```

```java
int[] a={2,4,6,7,8}
```

```java
public class Test{
	public static void main(String[] args) {
	  int[] a1 = {
	  		12,13,14,17,18,19
	  };
	  int[] a2;
	  a2 = a1;
	  for (int i = 0; i < a1.length; i++) {
	    a2[i]++;
	    System.out.println("a1[" + i + "]=" + a1[i]);
	    System.out.println("a2[" + i + "]=" + a2[i]);
    }
  }
}
a1[0]=13
a2[0]=13
a1[1]=14
a2[1]=14
a1[2]=15
a2[2]=15
a1[3]=18
a2[3]=18
a1[4]=19
a2[4]=19
a1[5]=20
a2[5]=20

```



```java
//二维数组
float A[][];
char B[][];

```

```java
int A[][]={1,3,5,7},{2,4,6,8};
Array[i-1][j-1]
```



```
参考书：Java Web编程自学手册 扶松柏 笔记
```