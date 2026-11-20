#!/bin/sh
# Reconstruit index.html : src/shell.html + les scripts de src/
cd "$(dirname "$0")" && python3 -c "
p='src/';js='\n'.join(open(p+f).read() for f in ['schema.js','m1.js','m2.js','m3.js','m4.js','m5.js','m6.js','m7.js','quiz.js','engine.js'])
open('index.html','w').write(open(p+'shell.html').read().replace('/*SCRIPT*/',js))"
