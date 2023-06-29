#!/usr/bin/env node
const fs = require("fs");
const SwaggerParser = require("@apidevtools/swagger-parser");
const ejs = require("ejs");
const { resolve } = require("path");
const { isNullAndUnDef } = require("@pureadmin/utils");
const myAPI = "http://localhost:5002/swagger/All%20Groups/swagger.json";

const pathResolve = dir => {
  return resolve(__dirname, ".", dir);
};

// 判斷目錄是否存在
const createDirIfNotExist = (lastPath = "") => {
  const privatePath = lastPath;
  const stat = fs.existsSync(privatePath);
  if (!stat) {
    fs.mkdirSync(privatePath);
  }
};

const writeFile = (files, fullPath, dir, templateData) => {
  files.forEach(t => {
    const filePath = pathResolve(
      "./src/templates/" + (dir == null ? t : dir + "/" + t)
    );
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
          const filesCh = fs.readdirSync(filePath);
          writeFile(filesCh, fullPath + "/" + t, t, templateData);
          return;
        }
        const html = ejs.render(data, {
          data: {
            config: templateData
          }
        });
        createDirIfNotExist(fullPath);
        fs.writeFileSync(fullPath + "/" + t.replace(".txt", ""), html, {
          encoding: "utf8"
        });
      });
    }
  });
};

const createTemplateData = (tag, api) => {
  const keys = Object.keys(api.paths);
  const data = {
    componentName: tag,
    formItems: []
  };
  keys.forEach(t => {
    const methods = Object.keys(api.paths[t]);
    methods.forEach(m => {
      const value = api.paths[t][m];
      const tag1 = value.tags[0].toString();
      if (tag1.toLowerCase() === tag.toLowerCase()) {
        const lowerCase = value.operationId.toLowerCase();
        if (lowerCase.endsWith("searchconfigget")) {
          data.searchConfigApi = value.operationId;
        }
        if (lowerCase.endsWith("searchpost")) {
          data.searchApi = value.operationId;
          const refV =
            value.responses[200].content["application/json"].schema[
              "$ref"
            ].toString();
          data.responseName = refV.substring(refV.lastIndexOf("_") + 1);
          const properties =
            api.components.schemas[data.responseName].properties;
          const propertyKeys = Object.keys(properties);
          propertyKeys.forEach(tt => {
            if (
              !isNullAndUnDef(properties[tt].type) &&
              (properties[tt].type !== "array" ||
                properties[tt].type !== "object")
            ) {
              data.formItems.push({
                description: properties[tt].description,
                type: properties[tt].type,
                name: tt,
                nullable: properties[tt].nullable
              });
            }
          });
        }
        if (lowerCase.endsWith(tag.toLowerCase() + "put")) {
          data.updateApi = value.operationId;
        }
        if (lowerCase.endsWith(tag.toLowerCase() + "get")) {
          data.detailApi = value.operationId;
        }
        if (lowerCase.endsWith(tag.toLowerCase() + "post")) {
          data.createApi = value.operationId;
        }
        if (lowerCase.endsWith(tag.toLowerCase() + "delete")) {
          data.deleteApi = value.operationId;
        }
      }
    });
  });
  return data;
};

const generate = (path, tag) => {
  SwaggerParser.parse(myAPI, (err, api) => {
    if (err) {
      console.error(err);
    } else {
      const fullPath = pathResolve("./src/views/" + path);
      createDirIfNotExist(fullPath);
      const files = fs.readdirSync(pathResolve("./src/templates"));
      writeFile(files, fullPath, null, createTemplateData(tag, api));
    }
  });
};

require("yargs")
  .scriptName("gen")
  .usage("$0 <cmd> [args]")
  .command(
    "view [path] [tag]",
    "welcome use gen!",
    yargs => {
      yargs.positional("path", {
        type: "string",
        default: "",
        describe: "the path to template"
      });
      yargs.positional("tag", {
        type: "string",
        default: "",
        describe: "generate api tag"
      });
    },
    function (argv) {
      console.log(argv.path, argv.tag, "welcome to yargs!");
      const path = argv.path;
      generate(path, argv.tag);
    }
  )
  .help().argv;
