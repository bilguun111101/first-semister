#include<iostream>
using namespace std;

int main()
{
    int i = 0, j = 0, c = 0;
    char a[] = "Battsengel Bilguun";
    char b[] = "";
    //cout << "Ta buten neree oruulna uu : ";
    //cin >> a;
    while (a[c] != 0)
    {
        c++;
    }
    while (a[i] != 0)
    {
        if (a[i] == 32)
        {
            break;
        }
        i++;
    }
    cout << a[0] << ".";
    while (a[i] != 0)
    {
        i++;
        cout << a[i];
    }
    
}