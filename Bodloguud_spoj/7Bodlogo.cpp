#include<iostream>
#include<math.h>
using namespace std;

int main()
{
    int n;
    float a, p = 1;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        a = 1 + 1 / (i * i);
        p = p * a;
    }
    cout << p;
}