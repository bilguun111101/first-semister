#include<iostream>
#include<cstring>
using namespace std;

int main()
{
    int j = 0;
    string a;
    cout << "Ta ymar negen murt aildana uu : ";
    getline(cin, a);
    while (a[j] != 0)
    {
        j++;
    }
    bool l = true;
    for (int i = 0; i < j / 2; i++)
    {
        if (a[i] != a[j - i - 1])
        {
            l = false;
            break;
        }
        else
        {
            l = true;
        }
    }
    if (l == true)
    {
        cout << "Tanii bichsen 2 murt palidrom baina" << endl;
    }
    else
    {
        cout << "Tanii aildsan murt palidrom bish baina" << endl;
    }
    
    
}