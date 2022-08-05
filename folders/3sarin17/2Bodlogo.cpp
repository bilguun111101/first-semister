#include<iostream>
#include<cstring>
using namespace std;

int urt(string a)
{
    int i = 0;
    while (a[i] != 0)
    {
        i++;
    }
    cout << "Tanii oruulsan murtiin urt : " << i << endl;
    return 0;
}
int main()
{
    string a;
    cout << "Ta ymar negen murt bichne uu : ";
    cin >> a;
    urt(a);
    return 0;
}