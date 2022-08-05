#include<iostream>
#include<cstring>
using namespace std;

int add(int a, int b)
{
    return a * b;
}
void answer(int a)
{
    cout << "hariult n : " << a << endl;
}
int main()
{
    int a, b;
    cout << "Ta ymar negen too oruulna uu : ";
    cin >> a;
    cout << "Ta dahin ymar negen too oruulna uu : ";
    cin >> b;
    int r = add(a, b);
    answer(r);
    return 0;
}