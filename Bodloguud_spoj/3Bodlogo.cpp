#include <iostream>
using namespace std;

int main() {
	
	int n, i = 0, k;
	cin >> n;
	while(n % 3 == 0){
		if(n % 3 == 0){
			n = n / 3;
		}
	}
	cout << n << endl;

	return 0;
}