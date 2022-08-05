#include<iostream>
using namespace std;

int main()
{
    char b[] = "Hello ";
    char n;
    int l;
    cout << "Ta ymar useg haihaa bichne uu : ";
    cin >> n;
    for (int i = 0; i < 6; i++)
    {
        if (b[i] == n)
        {
            l++;
        }
    }
    cout << "Tanii oruulsan " << n << " useg " << l << " shirheg baina.";
    cout << endl;
    
}