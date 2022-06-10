import {createServer} from 'http';
import {readFile} from 'fs';
import {resolve} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import {parse} from 'querystring'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((request, response) => {
    switch(request.url) {

        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify({
                status:'Okay',
            }));
            response.end();
            break;
        }

        case '/authenticate':{
            let data = ''

            request.on('data', (chuck) => {data += chuck} );
            request.on('end', () => {
                const params = parse(data)
                response.end()
            })
            break;
        }

        default: {
            response.writeHead(404, 'Service not found');
            response.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(PORT, HOSTNAME, () => {
    console.log('hello');
});