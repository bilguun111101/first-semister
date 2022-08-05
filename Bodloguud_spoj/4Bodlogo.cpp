#include<iostream>
using namespace std;

int main(){

    int n, i = 1, j = 1, m;
    bool l = true;
    cin >> n;
    for(i = 1; i <= n; i++){
        j = j * i;
        if(n == j){
            cout << i;
            l = true;
            break;
        }
        if(n != j){
            l = false;
        }
    }
    if (l == false)
    {
        cout << "No";
    }
    
    return 0;
}