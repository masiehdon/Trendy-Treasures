Hi Masieh!

Well done! You did more than was required - the filter is really nice - and the end result works well. You've also ticked off most of the requirements....

BUT...

As it is the assignmmnt isn't working for me without changing a few things. JS modules require a web server to be available on the page, or else the browser fires a CORS error. ON page load, I see a blank page and in the console I get this error:

    Access to script at 'file:///Users/rob/class-assignments/ASSIGNMENT4/masieh-assignment4/script.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

Without a server you cannot export JS modules to other files and running a webserver is outside the scope of this assignment.

The good news is you don't need to make your JS a module for this assignment. If you remove the "export" at line 188 in the JS, and remove the "module" from the html it works. 

If you do that you'll have a Godkänt grade and be very, very close to a VG.

The other thing I'd like you to do is to pass in some argument to the API. It's clear you know what you are doing but I have to assess everyone by the same requirements, so in order to get a VG you'll need to have some extra parameter added to the API. The easiest thing might be to get the user to chose a category and only show the prodducts for that category. They should be able to change categories and a new set of products should load. 

So if you are happy with a G, just change the JS form a module to a normall script, if you want the VG add some user defined parameter to the url and enable them to fire the event multiple times. Let me know what you want to do.

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Connect to an API ✅

User fired event to launch the fetch ✅

Data is returned and handled efficiently ✅
   Complex, but very well done

Display more than one property of the returned data ✅

RWD
  Desktop ✅
  Mobile ✅ ❌
     Technically it works on mobile but the header is very small

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Error handling when fetching the data ✅
  Great way to handle any errors

Append arguments to the request ❌
   The documentation suggests you can, as an example, attachh a selected category to the url. You could let the user chose a category, then fire another fetch instead of filtering: https://fakestoreapi.com/docs

Multiple calls to the API ❌
   User should be able to click the button multiple times and et different results. Perhaps you could use the "limit" function and show say 10 products each time the user clicks the button - this will cover the previous requirement aswell.

Code style ✅
  A few empty lines but well done!