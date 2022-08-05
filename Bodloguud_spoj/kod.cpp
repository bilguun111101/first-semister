#include<iostream>
using namespace std;

int main(){
    int a, b, d = 0;
    cin >> a >> b;
    int c[a];
    for(int i = 0; i < a; i++){
        cin >> c[i];
    }

    for(int j = 0; j < a; j++){
        
        if (c[d] + c[j] == b)
        {
            cout << d << " " << j;
        }
        d++;
    }
}