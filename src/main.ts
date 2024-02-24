import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFileSync } from "fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("App example")
    .setDescription("The app's API description")
    .setVersion("1.0")
    .addTag("app")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.argv.includes("--generate-swagger-json")) {
    writeFileSync("swagger.json", JSON.stringify(document, null, 2));
    console.log("Swagger JSON documentation generated");
    return;
  } else {
    SwaggerModule.setup("api", app, document);
    await app.listen(3000);
  }
}
bootstrap();
