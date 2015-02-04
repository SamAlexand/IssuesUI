# IssuesUI
![Alt text](screenshot_ui.png?raw=true "Screenshot")

The beginnings of a simple Single Page Application for a Defect Tracking system written with Backbone.JS and using Bootstrap for styling. It depends upon and calls the IssuesService REST service available in project https://github.com/SamAlexand/IssuesService .

This application is part of my 2015 IBM ConnectED presentation entitled AD203: "Building Digital Experiences in the Cloud with BlueMix and WebSphere Portal Tools"  Although it will run standalone with any HTTP server, the applcation is also designed so that it runs inside the IBM Script Portlet.

<h3>
Dependencies
</h3>
- <a href="https://github.com/SamAlexand/IssuesService"> IssuesService</a> should be deployed on Bluemix. Verify that you can manually call the REST service. For example http://<myservicename>.mybluemix.net/api/issues
- Make note of your REST endpoint URL; you'll need it when you configure the UI to make AJAX requests.
- Requires Portal 8.5
- Requires IBM Script Portlet.  Get it <a href="https://greenhouse.lotus.com/plugins/plugincatalog.nsf/assetDetails.xsp?action=editDocument&documentId=DDB5C467D991413285257C67002476E0 ">from here</a> and follow the installation steps <a href="http://www-01.ibm.com/support/knowledgecenter/SSHRKX_8.5.0/welcome/script_welcome.html">here.</a>

<h3>Installation with the IBM Script Portlet</h3>
- Clone or download this IssuesUI project
- Add an instance of the Script Portlet to a portal page.
- Install and configure the Script Portlet <a href="http://www-01.ibm.com/support/knowledgecenter/SSHRKX_8.5.0/script/script-portlet/cmd_line_push_ovr.dita">command-line application</a>. Be sure to read this entire section which will show you how to push the IssuesUI to an instance of the Script Portlet via the command line. 
- Update the issues_api_url variable in issues.js to point to your IssuesService rest endpoint
- Assuming you read and configured the Script Portlet Command Line application correctly and you've configured a valid sp_config.json, run "sp.bat push" (Windows) or "sp.sh push" (Linux) to push IssuesUI to the Script Portlet instance.

** Note that this application is for demonstration purposes only and is not supported by my employer. **
