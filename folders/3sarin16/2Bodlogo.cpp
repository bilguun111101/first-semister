#include<iostream>
using namespace std;

int main()
{
    int i = 0;
    string a, b;
    bool c = true;
    cout << "Ehnii muruu oruulna uu : ";
    cin >> a;
    cout << "2 dahi muruu oruulna uu : ";
    cin >> b;
    while (a[i] != 0 && b[i] != 0)
    {
        if (a[i] == b[i])
        {
            c = true;
        }
        else
        {
            cout << "Ene 2 mur adilhan bish baina";
            c = false;
            break;
        }
        i++;
    }
    if (c)
    {
        cout << "Ene 2 mur adilhan baina" << endl;
    }
    
}