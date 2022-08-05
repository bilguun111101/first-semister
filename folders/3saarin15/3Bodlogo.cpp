#include<iostream>
using namespace std;

int main()
{
    int i = 0;
    bool a = true;
    char b[] = "Hello ndemy";
    char c[] = "Hello nest academy";
    while (b[i] != 0 && c[i] != 0)
    {
        if (b[i] == c[i])
        {
            a = true;
        }
        else
        {
            cout << "No" << endl;
            a = false;
            break;
        }
        i++;
    }
    if (a == true)
    {
        cout << "Yes";
    }
    cout << endl;
    
}