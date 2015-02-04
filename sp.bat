@echo off

rem * IBM Confidential
rem * OCO Source Materials
rem * 5724-O03
rem *
rem * Copyright IBM Corp. 2014
rem *
rem * The source code for this program is not published or otherwise
rem * divested of its trade secrets, irrespective of what has been
rem * deposited with the U.S. Copyright Office.

if not defined JAVA_HOME goto no_java_home

set SP_CMDLN_HOME=%~dp0
set LIBS=%SP_CMDLN_HOME%lib

set CLASSPATH=%LIBS%\commons-codec-1.6.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\commons-logging-1.1.3.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\fluent-hc-4.3.5.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\httpclient-4.3.5.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\httpclient-cache-4.3.5.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\httpcore-4.3.2.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\httpmime-4.3.5.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\JSON4J.jar
set CLASSPATH=%CLASSPATH%;%LIBS%\sp_cmdln.jar

"%JAVA_HOME%\bin\java" -classpath "%CLASSPATH%" com.ibm.scriptportlet.CommandLine %*
goto end

:no_java_home
echo Please set JAVA_HOME to the path where the JRE (6.0 or higher) is installed.

:end