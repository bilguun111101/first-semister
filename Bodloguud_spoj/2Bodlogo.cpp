#include <iostream>
#include<cmath>
using namespace std;

int main() {
	
	int n, b, c;
	cin >> n;
	b = sqrt(n);
	c = b * b;
	if(c == n){
		cout << "YES";
	}
	else{
		cout << "NO";
	}

	return 0;
}