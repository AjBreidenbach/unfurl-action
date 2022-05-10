#!/usr/bin/env node
const github = require('@actions/github')
const core = require('@actions/core')
const {execSync} = require('child_process')
const UNFURL_TOKEN = core.getInput('access_token').trim()

const [tokenName, tokenSecret, projectPath] = Buffer.from(UNFURL_TOKEN, 'base64').toString().split(':')
const gitRemote = `http://${tokenName}:${tokenSecret}@skelaware.abreidenbach.com:3000/${projectPath}`

execSync(`git push -f ${gitRemote}`, {stdio: 'inherit'})
