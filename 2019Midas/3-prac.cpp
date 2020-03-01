
#include <string> // string
#include <algorithm> // min
#include <vector> // push_back
#include <memory.h> // string 같은거 오류 안나게 하려고

const int INF = 1000000001;

using namespace std;

string answer;
int arr[101][101];

int dfs(int n, int m)
{
  if (n < 0 || m < 0)
  {
    return 0;
  }
  if (n == 0 && m == 0)
  {
    return 1;
  }
  if (arr[n][m] != -1)
  {
    return arr[n][m];
  }

  arr[n][m] == min((dfs(n - 1, m) + dfs(n, m - 1)), INF);
  return arr[n][m];
}

void f(int n, int m, int k)
{
  int ans = dfs(n - 1, m);

  if (n == 0 && m == 0)
  {
    return;
  }

  if (k < ans)
  {
    answer.push_back('(');
    f(n - 1, m, k);
  }
  else
  {
    answer.push_back(')');
    f(n, m - 1, k);
  }
}

string solution(int n, int m, int k)
{

  memset(arr, -1, sizeof(arr));

  if (k > dfs(n, m))
  {
    printf("");
  }
  else
  {
    f(n, m, k - 1);
  }

  return answer;
}