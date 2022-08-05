#include<iostream>
#include<cstring>
using namespace std;

int add(int a, int b)
{
    return a + b;
}
int multiple(int a, int b)
{
    return a * b;
}
int hasah(int a, int b)
{
    return a - b;
}
int huvaah(int a, int b)
{
    return a / b;
}
void add1(int a, int b, int m)
{
    cout << a << " + " << b << " = " << m << endl;
}
void multiple1(int a, int b, int l)
{
    cout << a << " + " << b << " = " << l << endl;
}
void hasah1(int a, int b, int p)
{
    cout << a << " + " << b << " = " << p << endl;
}
void huvaah1(int a, int b, int s)
{
    cout << a << " / " << b << " = " << s << endl;;
}
int main()
{
    int a, b, m, l, p, s;
    cout << "Ta ymar neegen too oruulna uu : ";
    cin >> a;
    cout << "Ta dahin ymar negen too oruulna uu : ";
    cin >> b;
    m = add(a, b);
    add1(a, b, m);
    l = multiple(a, b);
    multiple1(a, b, l);
    p = hasah(a, b);
    hasah1(a, b, p);
    s = huvaah(a, b);
    huvaah1(a, b, s);
    return 0;
}