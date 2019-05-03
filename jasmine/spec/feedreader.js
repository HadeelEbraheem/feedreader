/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against my application.
 */


$(function() {
    /* This is my first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in my application.
    */
    describe('RSS Feeds', function() {
        /* a test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and not empty', function() {
			for(var i = 0 ; i < allFeeds.length ; i++)
			{
			var url= allFeeds[i].url;
	        expect(url).toBeDefined();
            expect(url.length>0).toBe(true);
			}
			
          
        });

        /*  a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 
		  it('name defined and not empty', function() {
			for(var i = 0 ; i < allFeeds.length ; i++)
			{
			var name= allFeeds[i].name;
	        expect(name).toBeDefined();
            expect(name.length>0).toBe(true);
			}
			
          
        });

		        
    });


    /* a  test suite named "The menu" */
  describe('The menu', function() {
 
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
 it('menu element is hidden by default', function() {
	 var body = document.querySelector('body');
	 const found = body.classList.contains('menu-hidden');
            expect(found).toBe(true);
        });
         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
		   it('menu changes visibility when the menu icon is clicked', function() {
			   
			   
	const mymenu = document.getElementsByClassName("menu-icon-link")[0];
	const body = document.querySelector('body');
mymenu.click();
expect(body.classList.contains('menu-hidden')).not.toBe(true);
mymenu.click();
expect(body.classList.contains('menu-hidden')).toBe(true);

        });
		  
 });
    /*  a test suite named "Initial Entries" */
	
 describe('Initial Entries', function() {
  
        /*  a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

		  beforeEach(function(done){
           loadFeed(0, done);
         });
         it('function is called and completes its work', function(){
          const feeds = document.querySelectorAll('.feed .entry');
          expect(feeds.length>0).toBe(true);

         });
         });
		 
		 
    /* a new test suite named "New Feed Selection" */
	
describe('New Feed Selection', function() {
  
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
		
		  var firstFeed;
          var secondFeed;

       
         beforeEach(function(done){
			 
          loadFeed(0, function(){
            firstFeed =  document.querySelector('.header-title').innerText;
			
            loadFeed(1, function(){
              secondFeed =document.querySelector('.header-title').innerText;
              done();

            });

          });

         });

         it('ensures content changes', function(){
             expect(firstFeed).not.toEqual(secondFeed); 


             });

		 
		 
		 });
}());
