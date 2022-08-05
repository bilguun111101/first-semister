#include<iostream>
using namespace std;

int main()
{
    int c = 0, m = 0, p = 0;
    int a[3][3] = {{9, 8, 7},
                   {3, 4, 9},
                   {1, 2, 3}
                   };
    int b[3][3] = {{1, 2, 3},
                   {3, 4, 9},
                   {9, 4, 3}
                   };
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            c = c + a[i][j];
            m = m + b[i][j];
        }
        p = c + m;
    }
    cout << p << endl;
    
}