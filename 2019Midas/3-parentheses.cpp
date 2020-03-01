#include <string> // string
#include <algorithm> // for min()
#include <vector>    // push_back
#include <memory.h> // string 같은 것 쓸 때 오류 안나게 하려고

const int INF = 1000000001;

using namespace std; // std::string or std::vector를 생략시켜줌
int K;// 안 썼네
int N, M;// 안 썼네
int arr[101][101]; // cache (momoization)
string answer;

int dfs(int n, int m) // 1 2
{
  if (n < 0 || m < 0)
    return 0;
  if (n == 0 && m == 0)
    return 1;
  if (arr[n][m] != -1)
    return arr[n][m];

  arr[n][m] = min((dfs(n - 1, m) + dfs(n, m - 1)), INF); // 1 2 , 0 2 + 1 1 // 0 2, -1 2 + 0 1
  return arr[n][m];
}

void f(int n, int m, int k) // 2 2 5
{
  int ans = dfs(n - 1, m); // 1 2 5 // ( VS  나머지 3개

  if (n == 0 && m == 0)
  {
    return;
  }
  if (k < ans) // ans의 경우의 수 안에 k가 있음
  {
    answer.push_back('(');
    f(n - 1, m, k); // (
  }
  else // k > ans
  {
    answer.push_back(')'); // ) vs 나머지
    f(n, m - 1, k - ans);  // 위의 if 에서 경우의 수가 충족되지 않으니까 빼줌
  }
}

string solution(int n, int m, int k)
{
  memset(arr, -1, sizeof(arr)); // 2차원 배열 arr[101][101]의 모든 값에 -1 세팅
  if (k > dfs(n, m))            // 찾는 값 k보다 크면 '' return(dfs 의 23번째 줄 실행 후 return 값이 k보다 작으면)
  {
    printf('');
  }
  else
  {
    f(n, m, k - 1); // 시뮬레이션 돌아감
  }

  return answer;
}