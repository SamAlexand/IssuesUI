#!/bin/sh

# * IBM Confidential
# * OCO Source Materials
# * 5724-O03
# *
# * Copyright IBM Corp. 2014
# *
# * The source code for this program is not published or otherwise
# * divested of its trade secrets, irrespective of what has been
# * deposited with the U.S. Copyright Office.

if hash java 2>/dev/null; then
    MYJAVA=java
elif [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]];  then
    MYJAVA="$JAVA_HOME/bin/java"
else
    echo "Please set JAVA_HOME to the path where the JRE (6.0 or higher) is installed"
    echo "or add the java executable to your PATH."
fi

SP_CMDLN_HOME=$( cd "$( dirname "$0" )" && pwd )

SP_CLASSPATH="."
for i in `ls ${SP_CMDLN_HOME}/lib/*.jar`
do
  SP_CLASSPATH=${SP_CLASSPATH}:${i}
done

$MYJAVA -classpath ${SP_CLASSPATH} com.ibm.scriptportlet.CommandLine $@
