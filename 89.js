#!/usr/bin/env node

var d8 = require('./88.js');
var program = require('commander');
var rp = require('range-selection-parser');
var slug = require('limax');
var fs = require('fs');
var ProgressBar = require('progress');
const request = require('request');


program
    .version('0.0.1')
    .usage('[command] <id>')
    .arguments('get [id]', 'Download all video files from [id]')
    .arguments('list [id]', 'List all episode of [id]')
    .action(function(cmd, id) {
        d8.getEpisodeList(id).then(function(result) {
            console.log(result);
        });
    });


program
    .command('get [id]').alias('g').description('Download all video files from [id]')
    .option('-i, --index [index]', 'Only get specific indexes (ex: 1,3,4,5,7,9-12)')
    .action(function(id, options){
        var indexes = null
        if(options.index != null) {
            indexes = rp.parseSelectionString(options.index);
        }

        d8.getEpisodeList(id).then(function(result){
            var episodes = null;
            
            if(indexes) {
                episodes = [];
                indexes.forEach(function(index, item) {
                    found = result.episodes.find(function(elem) {
                        if(elem.index == index) {
                            return true;
                        }
                        return false;
                    });
                    
                    if(found != null) {
                        episodes.push(found);
                    }
                });
            } else {
                episodes = result.episodes;
            }

            if(episodes == null || episodes.length ==0 ) {
                reject(Error('Nothing to download'));
                return;
            }

            let promises = [];

            var dir = result.title;
            promises.push(new Promise(function(resolve, reject) {
                fs.access(dir, fs.R_OK | fs.W_OK, (err) => {
                    if(err) {
                        console.log('mkdir ' + dir);
                        fs.mkdirSync(result.title);
                    }
                    resolve();
                });
            }));

            promises.concat(episodes.map(function(elem) {
                return new Promise(function(resolve, reject) {
                    d8.findVideoUrl(elem.id).then(function(result) {
                        var file = dir + "/" + slug(elem.name) + ".mp4";
                       
                        var bar = null;

                        //console.log('Start download ' + result + ' to ' + file);
                        
                        request(result)
                            .on('response', function(response) {
                                var len = parseInt(response.headers['content-length'], 10);
                                
                                bar = new ProgressBar('  downloading ' + file + ' [:bar] :percent :etas', {
                                    complete: '=',
                                    incomplete: ' ',
                                    width: 20,
                                    total: len
                                });
                                response.on('data', function (chunk) {
                                    bar.tick(chunk.length);
                                });

                                response.on('end', function () {
                                    console.log('end');
                                    resolve();
                                });
                            })
                            .on('error', function(err) {
                                console.log('111');
                                reject(err);
                            })
                            .pipe(fs.createWriteStream(file));                       
                    }, function(error) {
                        reject(error);
                    });
                });
            }));

            Promise.all(promises).then(function(result) {
                console.log('-----');
            })
            .catch(function(error) {
                console.log(error);
            });
        }, function(error){
            console.log("Error occured: " + error);
        });
    });

program
    .command('list [id]').alias('l').description('List all episode of [id]')
    .action(function(id){
        d8.getEpisodeList(id).then(function(result){
            console.log(result);
        }, function(error){
            console.log("Error occured: " + error);
        });
    });

program.parse(process.argv);
if (!program.args.length) program.help();
