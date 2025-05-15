FROM node:20-alpine

# 앱 실행 디렉토리 설정
WORKDIR /app

# package.json, lock 파일만 먼저 복사 (의존성 캐싱 최적화)
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 코드 전체 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 포트 열기
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
