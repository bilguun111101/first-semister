#include<iostream>
using namespace std;

int main()
{
    int n;
    cout << "Ta hemjeegee oruulna uu : ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int i = 0; i < n; i++)
        {
            if (i < n / 2)
            {
                cout << "* ";
            }
            if (i == n / 2)
            {
                cout << "+ ";
            }
            if (i > n / 2)
            {
                cout << "* ";
            }
        }
        cout << endl;
    }
}