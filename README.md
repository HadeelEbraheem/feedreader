# Project Overview

In this project we have a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where we come in.


# How to run project

1) Open index.html and see the specs at the bottom of the page .
2)  If all the tests succeeded , you will see 0 failures .





# steps required to successfully run the application : 

1. Explore the Jasmine spec file in `feedreader.js`.
2. Edit the `allFeeds` variable in `app.js` to make the provided test fail.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not .
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. Write a new test suite named `"The menu"`.
6. Write a test that ensures the menu element is hidden by default.
7. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
8. Write a test suite named `"Initial Entries"`.
9. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. Write a test suite named `"New Feed Selection"`.
11. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

