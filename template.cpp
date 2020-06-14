#include<bits/stdc++.h>
#define watch(x) cout << (#x) << " is " << (x) << endl

using namespace std;

void print(std::vector<int> v);

int main(){
    typedef long  long int ll;
    ll n,t;
    cin>>n;

    vector<int> v;

    for (ll i=0; i<n; i++){
        cin>>t;
        v.push_back(t);
    }



    return 0;
}

void print(std::vector<int> v)
{
	for (int i = 0; i < v.size(); i++) {
		cout << v.at(i) << ' ';
	}
    cout<<"\n" ;
}
