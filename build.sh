#!/bin/sh
# Reconstruit index.html à partir des fichiers de src/
cd "$(dirname "$0")" && python3 -c "
p='src/';out=open(p+'head.part').read()
out+=open(p+'svg.part').read()+'\n'
for f in ['lv1a.js','lv1b.js','lv1c.js','old.js','lv2.js','lv3.js','lv4.js','lv5.js','lv6.js','quiz.js']: out+=open(p+f).read()+'\n'
out+=open(p+'engine.part').read()
open('index.html','w').write(out)"
