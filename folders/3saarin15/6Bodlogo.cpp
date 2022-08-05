#include<iostream>
using namespace std;

int main()
{
    char b[] = "Hello";
    int j = 4;
    while (b[j] != 0)
    {
        for (int j = 4; j >= 0; j--)
        {
            cout << b[j];
        }
        j++;
    }
}