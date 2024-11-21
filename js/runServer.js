// const { exec } = require('child_process');  // Importa exec desde child_process
// const path = require('path');  // Importa el módulo path de Node.js

// function startJsonServer() {
//   // Definir la ruta al archivo db.json (está en la raíz, pero el script está en js/)
//   const dbFilePath = path.resolve(__dirname, '../db.json');  // Ruta relativa al archivo db.json

//   // Definir el comando para ejecutar json-server, pasando la ruta completa a db.json
//   const command = `json-server --watch ${dbFilePath} --port 3000`;

//   // Ejecutar el comando
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error al ejecutar el comando: ${error.message}`);
//       return;
//     }
//     if (stdout) {
//       console.log(`stdout: ${stdout}`);
//     }
//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//     }
//   });
// }

// // Llamar a la función para ejecutar el servidor
// startJsonServer();
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ruta al archivo db.json (asegúrate de que esté en la raíz del proyecto)
const dbFilePath = path.resolve(__dirname, '../db.json');

// Ruta para guardar el PID (Process ID) del proceso del servidor
const pidFile = path.resolve(__dirname, 'server.pid');

// Iniciar el servidor JSON Server
const startJsonServer = () => {
  const command = `json-server --watch ${dbFilePath} --port 3000`;

  // Ejecutar el comando para iniciar el servidor
  const serverProcess = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return;
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });

  console.log('Servidor JSON Server iniciado...');

  // Guardar el PID del proceso en un archivo (esto nos permitirá detenerlo luego)
  fs.writeFileSync(pidFile, serverProcess.pid.toString());
};

startJsonServer();
