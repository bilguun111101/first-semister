#include<iostream>
using namespace std;

int main(){

    int n, b, c = 0, i = 2, j = 1, m = 1, k = 1, l = 1, p;
    cin >> n >> b;
    if (n > b){
        m = n;
    }
    else{
        m = b;
    }
    for (int i = 2; i <= m; i++)
    {
        if (n % i == 0)
        {
            if (b % i == 0)
            {
                j = j * i;
            }
        }
    }
    for (int c = 2; c <= n; c++)
    {
        if (n % c == 0)
        {
            l = l * c;
        }
    }
    for (k = 2; k <= b; k++)
    {
        if (b % k == 0)
        {
            m = m * k;
        }
    }
    p = (m * l) / j;
    cout << p << endl;

    return 0;
}