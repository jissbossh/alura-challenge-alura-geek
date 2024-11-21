const fs = require('fs');
const process = require('process');

// Ruta al archivo donde guardamos el PID del proceso
const pidFile = './js/server.pid';

const stopJsonServer = () => {
  if (fs.existsSync(pidFile)) {
    // Leer el PID del archivo
    const pid = fs.readFileSync(pidFile, 'utf-8');

    try {
      // Matar el proceso con el PID
      process.kill(pid);
      console.log(`Servidor JSON Server detenido (PID: ${pid})`);

      // Eliminar el archivo PID después de detener el servidor
      fs.unlinkSync(pidFile);
    } catch (err) {
      console.error(`Error al intentar detener el servidor: ${err.message}`);
    }
  } else {
    console.log('No se encontró el archivo PID. Asegúrate de que el servidor esté corriendo.');
  }
};

stopJsonServer();
