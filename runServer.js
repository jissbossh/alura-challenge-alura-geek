const { exec } = require('child_process');  // Importar exec desde child_process

function startJsonServer() {
  const command = 'json-server --watch db.json --port 3000';


  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar json-server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

startJsonServer();
