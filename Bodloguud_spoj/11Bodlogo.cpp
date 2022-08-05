#include <iostream>
#include<cmath>
using namespace std;

int main() {
	
	int a;
	int i = 0, d = 0;
	cin >> a;
	double b = 0;
	while(i < a){
		b += sqrt(2 + b);
		i++;
	}
	int c = b;
	while (c != 0)
	{
		c = c / 10;
		d++;
	}

	cout.precision(d + 9);
	cout << b;

	return 0;
}