import {
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
// import { AuthDto } from '../src/auth/dto';
// import {
//   CreateBookmarkDto,
//   EditBookmarkDto,
// } from '../src/bookmark/dto';
import { PrismaService } from '../src/prisma/prisma.service';
// import { EditUserDto } from '../src/user/dto';

describe('App e2e', () => {

  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    // await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {

    describe('Signup', () => {
      it.todo('should Signup');
    });

    describe('Signin', () => { });

  });

  describe('User', () => {

    describe('Get me', () => { });

    describe('Edit user', () => { });

  });

  describe('Bookmarks', () => {

    describe('Create Bookmark', () => { });

    describe('Get Bookmarks', () => { });

    describe('Get Bookmark by id', () => { });

    describe('Edit Bookmark', () => { });

    describe('Delete Bookmark', () => { });

  });

});
