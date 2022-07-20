import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(session({
    name:"Nest-JS-Session",
    secret:"knkvnsdvvdsnvskdvnsdndskldv",
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:600000
        }
  }))
  app.use(passport.initialize())
  app.use(passport.session())

  const config = new DocumentBuilder()
    .setTitle('Nestjs with Postgres')
    .setVersion('1.0')
    .addTag('nest-postgres')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
