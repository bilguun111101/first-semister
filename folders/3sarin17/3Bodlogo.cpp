#include<iostream>
#include<cstring>
using namespace std;

int p(string a, char b)
{
    int i = 0, j = -1;
    while (a[i] != 0)
    {
        if (a[i] == b)
        {
            j = i;
            break;
        }
        i++;
    }
    return j;
}
int main()
{
    string a = "Hello World";
    char b;
    cout << "Ta haih demdegtee bichne uu : ";
    cin >> b;
    p(a, b);
}