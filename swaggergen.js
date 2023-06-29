const { resolve } = require("path");
const { generateApi } = require("swagger-typescript-api");
/**  npx swagger-typescript-api --templates ./src/api-templates -p https://localhost:5001/swagger/All%20Groups/swagger.json  -o ./src/api-services -n samApi.ts */
/** 路径查找 */
const pathResolve = dir => {
  return resolve(__dirname, ".", dir);
};

// generateTemplates({
//   output: pathResolve("./src/api-services/templates"),
//   modular: true,
//   httpClientType: "axios",
//   generateClient: true,
//   generateResponses: true,
//   generateUnionEnums: true,
//   unwrapResponseData: true,
//   enumNamesAsValues: true,
//   extractEnums: true
// });

const generate = () => {
  setTimeout(async () => {
    await generateApi({
      name: "SamApi.ts",
      url: "http://localhost:5002/swagger/All%20Groups/swagger.json",
      output: pathResolve("./src/api-services"),
      modular: true,
      templates: pathResolve("./src/api-services/templates"),
      httpClientType: "axios",
      generateClient: true,
      generateResponses: true,
      generateUnionEnums: true,
      unwrapResponseData: true,
      enumNamesAsValues: true,
      extractEnums: true
    });
    console.log("生成完成");
    process.exit(0);
  }, 500);
};
generate();
