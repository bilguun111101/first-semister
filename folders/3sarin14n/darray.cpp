#include<iostream>
using namespace std;

int main()
{
    int row = 0, col = 0;
    int arr2d[3][4] = {
        {1, 2, 3, 4}, 
        {5, 6, 7, 8}, 
        {9, 10, 11, 12}
        };
    for (row = 0; row < 3; row++)
    {
        for (col = 0; col < 4; col++)
        {
            cout << arr2d[row][col] << " ";
        }
        cout << endl;
        
    }
    
}