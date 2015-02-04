/*
 * Single page web application for viewing a list of issues
 *
*/
'use strict';
 
var railsissues = railsissues || {};
 
(function ($) { 

	railsissues.Constants = {
		//"issues_api_url": "http://issues-svc-3.mybluemix.net/api/issues",	// change to other repos if desired
		"issues_api_url": "http://localhost:8000/api/issues"	// change to other repos if desired
	};
	 
	// View for the List View
	railsissues.RailsIssuesListView = Backbone.View.extend({

		// Page location to act upon
		el: "#rails-app-target",

		// Template to apply to above page location
		template : _.template($('#template-rails-issues').html()),

		// Events for this view
		events : {
			"click .issue_row": "goToDetails"
		},

		initialize: function(options) {
			this.options = options;
		},

		// Render the current view
		render: function() {
			
			var that = this;
			
			// Only render the page when we have data
			this.collection.fetch().done(function() {
				that.$el.html(that.template({
					collection: that.collection.toJSON()
				}));
			});
			
			return this; 
		},

		// Render the Details of a selected Issue from the list
		goToDetails: function(e) {
			var issueNum = $(e.currentTarget).data("issue-no");
			router.navigate("#issue/" + issueNum, {trigger: true});
		}
	});  

	// A Collection for Issues
	railsissues.RailsIssuesCollections = Backbone.Collection.extend({
		
		url: railsissues.Constants.issues_api_url,
		
		initialize: function(options) {}, 

		parse: function(response, options) {
			// Truncate body to 140 chars 
			_.each(response, function(issue) {
				issue.body = $.trim(issue.body).substring(0, 140).split(" ").slice(0, -1).join(" ") + " ...";
			});
			return response;
		}

	});

	// View for the Detail View
	railsissues.RailsIssuesDetailView = Backbone.View.extend({
		// Page location to act upon
		el: "#rails-app-target",

		events: {
			"click #close_issue" : function(e) {
				e.preventDefault();
				history.back(1);
			}
		},

		// Template to apply to above page location
		template : _.template($('#template-rails-issue-detail').html()),

		initialize: function(options) {
			this.options = options;
		},

		render: function() {
			this.$el.html(this.template(this.options.model.toJSON()));
			return this; 
		},

	});

	// Model to drive the Detail View
	railsissues.RailsIssuesDetailViewModel = Backbone.Model.extend({
		// URL will be passed in dynamically
		url: function() {
			return this.runtimeUrl;
		},
		initialize: function(options) {
			this.runtimeUrl = options.url;
		}
	
	});

	// Router for Rails Issues application. 
	railsissues.RailsIssuesRouter = Backbone.Router.extend({
		routes: {
			'' : 'default',
        	'issue/:id' : 'goToIssue'
    	},
    	
    	default: function() {
    		// First page of List View is default
    		listView.render()
    	},
    	
    	goToPage: function() {
    		listView.render()
    	},
    	
    	goToIssue: function( issueNum ) {

        	var issueUrl = railsissues.Constants.issues_api_url + "/" + issueNum;

        	var detailModel = new railsissues.RailsIssuesDetailViewModel({
				url: issueUrl
			});

			detailModel.fetch().done(function() {
				new railsissues.RailsIssuesDetailView({
					model: detailModel,
					el: "#rails-app-target"
				}).render();
			});

    	}
	});
	
	// Create the List View, passing it a new Collection of Issues
	var listView = new railsissues.RailsIssuesListView({
				collection: new railsissues.RailsIssuesCollections()
	});

	// Start the Backbone Router
	var router = new railsissues.RailsIssuesRouter();	
	Backbone.history.start();

})(jQuery);