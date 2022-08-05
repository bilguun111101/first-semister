#include<iostream>
#include<cstring>
using namespace std;

int c(string a, char b)
{
    int i = 0, j = 0;
    while (a[i] != 0)
    {
        if (a[i] == b)
        {
            j++;
        }
        i++;
    }
    cout << "Tanii say oruulsan useg " << j << " shirheg baina" << endl;
    return 0;
}
int main()
{
    string a = "Hello nest academy";
    char b;
    cout << "Ta ymar neg useg oruulna uu : ";
    cin >> b;
    c(a, b);
}