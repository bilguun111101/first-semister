#include<iostream>
using namespace std;

int main()
{
    int i = 0, j = 0, c = 0;
    string a;
    cout << "Ta ymar negen too oruulna uu : ";
    cin >> a;
    while (a[i] != 0)
    {
        i++;
    }
    if (i <= 100)
    {

        for (int j = 0; j < i; j++)
        {
            for (int c = i - 1; c >= 0; c--)
            {
                cout << a[c];
            }
            break;
        }
    }
    else
    {
        cout << "100 orongoos ih baina" << endl;
    }
}