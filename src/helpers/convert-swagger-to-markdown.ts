import * as fs from "fs";
import * as path from "path";
import * as widdershins from "widdershins";

async function convertSwaggerToMarkdown() {
  const swaggerSpecPath = path.join(__dirname, "../../swagger.json");
  const readmePath = path.join(__dirname, "../../README.md");

  if (!fs.existsSync(swaggerSpecPath)) {
    console.error("swagger.json not found!", swaggerSpecPath);
    return;
  }

  const swaggerJson = JSON.parse(fs.readFileSync(swaggerSpecPath, "utf8"));

  const options = {
    codeSamples: true,
    httpsnippet: false,
    language_tabs: [
      { shell: "Shell" },
      { http: "HTTP" },
      { javascript: "JavaScript" },
    ],
    toc_footers: [],
    search: true,
    sample: true,
    shallowSchemas: false,
    headings: 2,
    omitHeader: true,
  };

  widdershins
    .convert(swaggerJson, options)
    .then((markdownContent) => {
      let readmeContents = "";

      if (fs.existsSync(readmePath)) {
        readmeContents = fs.readFileSync(readmePath, "utf8");
      } else {
        readmeContents =
          "# Project Title\n\nDescription\n\n<!-- SWAGGER-DOC-START -->\n<!-- SWAGGER-DOC-END -->";
      }

      const updatedReadme = readmeContents.replace(
        /<!-- SWAGGER-DOC-START -->(.|\s)*<!-- SWAGGER-DOC-END -->/,
        `<!-- SWAGGER-DOC-START -->\n${markdownContent}\n<!-- SWAGGER-DOC-END -->`
      );

      fs.writeFileSync(readmePath, updatedReadme);
      console.log("Successfully updated README.md with API documentation.");
    })
    .catch((error) => {
      console.error("Error converting Swagger to Markdown:", error);
    });
}

convertSwaggerToMarkdown();
