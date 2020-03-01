#include <stdio.h> // sprintf
#include <vector> // push_back, push
#include <string> // string
#include <queue>    // queue
#include <stdlib.h> // sprintf

using namespace std; // Q or ..

queue<pair<int, int>> Q; // Q=[[int, int], [int, int]]

int dy[8] = {0, 1, 1, 1, 0, -1, -1, -1};
int dx[8] = {1, 1, 0, -1, -1, -1, 0, 1};
int chk[51][51]; // [[]] 행렬 51x51

char arr[51][51];
int ans[51][51];

vector<string> solution(vector<string> board, int y, int x)
{
  vector<string> answer;                 // [['string'], ['string']]
  int Ny = board.size();                 //  행
  int Nx = board[0].size();              // 열
  for (int i = 0; i < board.size(); i++) // arr로 옮겨담기
  {
    for (int j = 0; j < board[i].size(); j++)
    {
      arr[i][j] = board[i][j]; // vector가 불편해서 array로 변환
    }
  }
  Q.push(make_pair(y, x)); // 2,0 시작 좌표

  if (arr[y][x] == 'M') // 누른 버튼이 지뢰일 때
  {
    for (int i = 0; i < board.size(); i++)
    {
      string s;
      for (int j = 0; j < board[i].size(); j++)
      {
        if (arr[i][j] == 'M') // 지금 좌표가 지뢰고
        {
          if (i == y && j == x) // 내가 찍은 좌표면
          {
            s.push_back('X');
          }
          else
          {
            s.push_back('M');
          }
        }
        else
        {
          s.push_back('E');
        }
      }
      answer.push_back(s);
    }
  }
  else
  {
    chk[y][x] = 1;     // (2,0) = 1
    while (!Q.empty()) // Q에는 뭐가 들어가 있나?
    {
      int Size = Q.size(); // Size 몇? 1

      while (Size--)
      {
        int y = Q.front().first; // 뭐가 나오냐 front.first???? 밑으로 쭉 이해 불가
        int x = Q.front().second;
        int flag = 0;
        int cnt = 0;
        Q.pop(); // 2,0 가 pop

        for (int i = 0; i < 8; i++)
        {
          int ny = y + dy[i];
          int nx = x + dx[i];
          if (nx < 0 || ny < 0 || nx > Nx - 1 || ny > Ny - 1)
          {
            continue;
          }
          if (arr[ny][nx] == 'M')
          {
            cnt++;
            flag = 1;
          }
        }
        if (flag == 0)
        {
          ans[y][x] = -1; // B라고 생각(현 좌표에 -1이 들어감)
        }
        else
        {
          ans[y][x] = cnt;
        }

        ///////////////////////////////////////////////////////////////주위에 지뢰가 몇개 있는지 검사(위의 for문)/////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////주위에 지뢰가 없으면 밑에 for문 시작///////////////////////////////////////////////////////////////

        for (int i = 0; i < 8; i++)
        {
          int ny = y + dy[i];
          int nx = x + dx[i];
          if (nx < 0 || ny < 0 || nx > Nx - 1 || ny > Ny - 1)
          {
            continue;
          }
          if (arr[ny][nx] == 'M')
          {
            continue;
          }
          if (chk[ny][nx] == 1)
          {
            continue;
          }
          chk[ny][nx] = 1;
          Q.push(make_pair(ny, nx));
        }
      }
    }

    //////////////// 위의 for 문 확장
    //////////////// 아래 for 문 답 도출

    for (int i = 0; i < Ny; i++)
    {
      string s;
      for (int j = 0; j < Nx; j++)
      {
        char buf[2] = {
            0,
        };
        if (ans[i][j] == -1)
        {
          s.push_back('B');
        }
        else if (ans[i][j] == 0) // 전역은 모두 0으로 초기화됨
        {
          s.push_back('E');
        }
        else
        {
          sprintf(buf, "%d", ans[i][j]);
          s.push_back(buf[0]);
        }
      }
      answer.push_back(s);
      printf("%s", answer[i].c_str());
      printf("\n");
    }
  }

  return answer;
  // answer.push_back(s); 한 번에 배열 1 씩인가? 맞음
}