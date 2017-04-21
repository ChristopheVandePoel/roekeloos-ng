import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app.server';
import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';
import * as express from 'express';
import { ngUniversalEngine } from './universal-engine';

enableProdMode();

const app = express();

app.engine('html', ngUniversalEngine({
	baseUrl: 'http://localhost:8000',
	bootstrap: [AppServerModuleNgFactory],
}));

app.set('view engine', 'html');
app.set('views','.');

app.get('/', (req, res) => {
	res.render('index-aot.html', {req});
});

app.get('/home*', (req, res) => {
	res.render('index-aot.html', {req});
});

app.get('/post/:id', (req, res) => {
	res.render('index-aot.html', {req});
});

app.use(express.static('.'));

app.listen(80,() => {
	console.log('listening on 80...');
});