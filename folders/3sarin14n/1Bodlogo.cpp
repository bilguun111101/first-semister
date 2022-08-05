#include<iostream>
using namespace std;

int main()
{
    int a[3][3] = {{9, 8, 7},
                   {3, 4, 9},
                   {1, 2, 3}
                   };
    int b[3][3] = {{1, 2, 3},
                   {3, 4, 9},
                   {9, 4, 3}
                   };
    int d = 0, e = 0;
    int c[3][3];
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            c[i][j] = a[i][j] + a[i][j + 1] + a[i][j + 2];
        }
    }
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << c[i][j] << " ";
        }
        cout << endl;
    }
}