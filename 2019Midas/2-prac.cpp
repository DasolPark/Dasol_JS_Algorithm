queue
vector

using namespace std;

queue<pair<int,int > > Q;

int dy[8]={0,1,1,1,0,-1,-1,-1};
int dx[8]={1,1,0,-1,-1,-1,0,1};
int chk[51][51];
char arr[51][51];
int ans[51][51];

vector<string> solution(vector<string> board, int y, int x){
  vector<string> answer;
  int Ny = board.size();
  int Nx = board[0].size();
  for(int i=0; i<board.size(); i++){
    for(int j=0; j<board[i].size(); j++){
      arr[i][j]=board[i][j];
    }
  }
  Q.push(make_pair(y,x));

  if(arr[y][x]=='M'){
    for(int i=0; i<board.size(); i++){
      string s;
      for(int j=0; j<board[i].size(); j++){
        if(arr[i][j]=='M'){
          if(i==y&&j==x){
            s.push_back('X');
          }else{
            s.push_back('M');
          }
        }else{
          s.push_back('E');
        }
      }
      answer.push_back(s);
    }
  }else{
    chk[y][x]=1;
    while(!Q.empty()){
      int Size = Q.size();
      while(Size--){
        int y=Q.front().first;
        int x=Q.front().second;
        int cnt=0;
        int flag=0;
        Q.pop();

        for(int i=0; i<8; i++){
          int ny=y+dy[i];
          int nx=x+dx[i];
          if(nx<0||ny<0||nx>Nx-1||ny>Ny-1){
            continue;
          }
          if(arr[ny][nx]=='M'){
            cnt++;
            flag=1;
          }
        }
        if(flag==0){
          ans[y][x]=-1;
        }else{
          ans[y][x]=cnt;
        }
        for(int i=0; i<8; i++){
          int ny=y+dy[i];
          int nx=x+dx[i];
          if(nx<0||ny<0||nx>Nx-1||ny>Ny-1){
            continue;
          }
          if(arr[ny][nx]=='M'){
            continue;
          }
          if(chk[ny][nx]==1){
            continue;
          }
          chk[ny][nx]=1;
          Q.push(make_pair(ny,nx));
        }
      }
    }
    for(int i=0; i<Ny; i++){
      string s;
      for(int j=0; j<Nx; j++){
        char buf[2]={0,};
        if(ans[i][j]==-1){
          s.push_back('B');
        }else if(ans[i][j]==0){
          s.push_back('E');
        }else{
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
}