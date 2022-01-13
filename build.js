const fs = require("fs");
const glob = require("glob");

(()=> {
    const findLessFiles = () => {
        return new Promise((resolve, reject) => {
          glob("src/**/*.less", (err, files) => {
            if (err) {
              reject(err);
            } else {
              resolve(files);
            }
          });
        });
    }
    
    const prepareLessFiles = async () => {
        const files = await findLessFiles();
        const writer = fs.createWriteStream("src/index.less");
        for (const file of files) {
           writer.write(`@import \"${file}\"; \n`)
        }
        writer.close(()=>{console.log(`Wrote ${files.length} Files to index.less`)})
    }
    
    const build = () => {
        prepareLessFiles();
    }
    
    build();
})();