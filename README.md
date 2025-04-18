<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## NestPrismaProject

NestJS와 Prisma를 사용하여 구축된 프로젝트입니다. 이 프로젝트는 빠르고 효율적인 백엔드 애플리케이션 개발을 목표로 합니다.

### 주요 기능

- **NestJS**: 모듈 기반 아키텍처를 제공하는 Node.js 프레임워크.
- **Prisma**: 데이터베이스 ORM으로, 간단하고 강력한 데이터베이스 관리 기능 제공.
- **TypeScript**: 정적 타입을 지원하는 JavaScript의 상위 집합 언어.

### 설치 및 실행

1. 프로젝트 클론:
   ```bash
   git clone <repository-url>
   cd NestPrismaProject
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 데이터베이스 설정:
   `prisma/schema.prisma` 파일을 수정하여 데이터베이스 연결을 설정합니다.

4. 마이그레이션 실행:
   ```bash
   npx prisma migrate dev
   ```

5. 애플리케이션 실행:
   ```bash
   npm run start
   ```