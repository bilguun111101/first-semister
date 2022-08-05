#include<iostream>
#include<cstring>
using namespace std;

int c(string a, string b)
{
    bool l = true;
    int i = 0;
    while (a[i] != 0 || b[i] != 0)
    {
        if (a[i] == b[i])
        {
            l = true;
        }
        else
        {
            l = false;
            break;
        }
        i++;
    }
    return l;
}
int main()
{
    string a, b;
    cout << "Ta ymar negen murt bichne uu : ";
    getline(cin ,a);
    cout << "Ta dahin neg murt bichne u : ";
    getline(cin, b);
    c(a, b);
}