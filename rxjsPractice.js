const rxjs = require('rxjs');
const  log = console.log;


rxjs.interval(7000).subscribe(data => {
    log(data);
});