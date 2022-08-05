#include<iostream>
#include<cmath>
using namespace std;

int main(){
    double a, b, c, l = 0;
    cin >> a >> b;
    c = sqrt(a * a + b * b);
    int d = c;
    if (d > 0){
        while (d != 0)
        {
            l++;
            d = d / 10;
        }
        cout << l << endl;
        cout.precision(l + 1);
        cout << c;
    }
    if (d == 0)
    {
        cout.precision(2);
        cout << c;
    }                               

    return 0;
}