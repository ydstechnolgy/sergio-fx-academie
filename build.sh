#!/bin/sh
# Reconstruit index.html à partir des fichiers de src/
cd "$(dirname "$0")" && python3 -c "
p='src/';out=open(p+'head.part').read()
for f in ['lv1a.js','lv1b.js','lv1c.js','lv23.js']: out+=open(p+f).read()+'\n'
out+=open(p+'svg.part').read()+open(p+'engine.part').read()
open('index.html','w').write(out)"
