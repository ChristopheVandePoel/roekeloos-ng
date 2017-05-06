import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app.server';
// TODO: next line does not resolve, because it depends on a preceding build-step. Will find a solution eventually
import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';
import * as express from 'express';
import { ngUniversalEngine } from './universal-engine';
import { environment } from '../environments/environment';

var path = require("path");
var compression = require('compression');

const port = (environment.production) ? "80" : "8000";

enableProdMode();

const app = express();

app.use(compression());

app.engine('html', ngUniversalEngine({
	baseUrl: 'http://localhost:' + port,
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

app.get('/post/:id/:slug', (req, res) => {
	res.render('index-aot.html', {req});
});

app.use(express.static('.'));

app.use(function(req, res){
       res.sendFile('index-aot.html', {root: './'});
   });

app.listen(port,() => {
	console.log(`listening on ${port}...`);
});