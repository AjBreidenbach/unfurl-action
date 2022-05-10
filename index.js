#!/usr/bin/env node
const github = require('@actions/github')
const core = require('@actions/core')
const {execSync} = require('child_process')
const UNFURL_TOKEN = core.getInput('access_token').trim()

console.log(UNFURL_TOKEN, UNFURL_TOKEN.length)

const [tokenName, tokenSecret, projectPath] = Buffer.from(UNFURL_TOKEN, 'base64').toString().split(':')
const command = `git push http://${tokenName}:${tokenSecret}@skelaware.abreidenbach.com:3000/${projectPath}`
console.log({tokenName, tokenSecret, projectPath, command})
execSync(command)
