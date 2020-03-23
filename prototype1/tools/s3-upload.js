const s3 = require('s3');
const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');

module.exports = task('upload', () => Promise.resolve()
    .then(() => Uploader));

const Uploader = new Promise((resolve, reject) => {
    const client = s3.createClient({
        s3Options: {
            accessKeyId: 'AKIARFMGIT7SJWQM2O6J',
            secretAccessKey: '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',
            region: 'us-west-2',
            sslEnabled: true,
        }
    });
    const uploader = client.uploadDir({
        localDir: 'public/',
        deleteRemoved: true,
        s3Params: {
            Bucket: 'prototype-one'
        },
    });
    uploader.on('error', reject);
    uploader.on('end', resolve);
});