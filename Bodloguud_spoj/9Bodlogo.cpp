#include <iostream>
#include <cmath>
using namespace std;
int main() {
	
	float a, b = 0, h = 0;
	cin >> a;
	int l = a;
	for (int i = 0; i < a; i++)
    {
        b = sqrt(b + 2);
    }
	while(l != 0){
		l = l / 10;
		h++;
	}
	cout.precision(h + 8);
    cout << b;

	return 0;
}