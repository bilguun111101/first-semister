#include<iostream>
using namespace std;

int main()
{
    int i = 0, j = 0;
    char a[] = "Hello ";
    char b[] = "World";
    for (int i = 0; a[i] != 0; i++)
    {
        j++;
    }
    for (int i = 0; b[i] != 0; i++)
    {
        a[j] = b[i];
        j++;
    }
    b[j] = 0;
    cout << a << endl;
}