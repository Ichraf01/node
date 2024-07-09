var fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) console.log(err)
  else console.log('Saved!');
});

 fs.readFile("./welcome.txt",{encoding:'utf8'},(error,data)=>
  {if(error)console.log(error)
     else console.log(data)
      })