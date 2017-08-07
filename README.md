# pig-rain10
自動發送雨量警報
# Get started
```
git clone https://github.com/aldy120/pig-rain10.git
cd pig-rain10
npm install
touch routes/mailset.js
npm start
```
# data source
- 中央氣象局
  - [十分鐘雨量資料](http://www.cwb.gov.tw/V7/observe/rainfall/A136.htm)
  - [測站資訊](http://e-service.cwb.gov.tw/wdps/obs/state.htm)
# Data
1. Detail description: ./data/README.md
2. Variable data in AWS DynamoDB, program: ./lib/connect.js
3. Static data in ./data
