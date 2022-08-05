#include<iostream>
using namespace std;

int main()
{
    int n, b = 0;
    cout << "Hemjeegee oruulna uu : ";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            b = b + 1;
            cout << b << " ";
        }
        cout << endl;
    }
    
}