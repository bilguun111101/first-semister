#include<iostream>
using namespace std;

int main()
{
    char a[] = "Hi";
    char b[] = "Hello world";
    int i = 0;
    while (a[i] != 0 || b[i] != 0)
    {
        b[i] = a[i];
        i++;
    }
    cout << b << endl;
}