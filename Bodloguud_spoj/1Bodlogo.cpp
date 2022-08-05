#include <iostream>
using namespace std;

int main() {
	
	int n, i = 0, b = 0, a = 0, j = 0, k;
	cin >> n;
	k = n;
	while(n != 0){
		n = n / 10;
		b++;
	}
	for(i = 0; i < b; i++){
		a = (a * 10) + (k % 10);
		k = k / 10;
	}
	cout << a;

	return 0;
}