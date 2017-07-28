#!/bin/bash
cd `dirname $0`
find -name *.js |xargs -i sh -c "echo 'uglify {}';uglifyjs {} -m -o {}"
