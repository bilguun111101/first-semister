#include<iostream>
using namespace std;

int main()
{
    int j = 0;
    string a, b, c;
    cout << "sanaand orson neg murtuu oruulna uu : ";
    getline(cin, a);
    while (a[j] != 0)
    {
        if (a[j] >= 'A' && a[j] <= 'Z')
        {
            a[j] = a[j] + 32;
        }
        if (a[j] == 32)
        {
            cout << " ";
        }
        
        j++;
    }
    cout << a << endl;
    while (a[j] != 0)
    {
        if (a[j] >= 'a' && a[j] <= 'z')
        {
            a[j] = a[j] - 32;
        }
        if (a[j] == 32)
        {
            cout << " ";
        }
        
        j++;
    }
    cout << a << endl;
}