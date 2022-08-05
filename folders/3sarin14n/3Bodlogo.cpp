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
    int c[3][3],p[3][3], m[3][3];
    int l = 0;
    for (int i = 0; i < 3; i++)
    {
        cout << "[";
        for (int j = 0; j < 3; j++)
        {
            for (int k = 0; k < 3; k++)
            {
                l = l + (a[i][k] * b[k][j]);
            }
            cout << l << " ";
            l = 0;
        }
        cout << "]";
        cout << endl;
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