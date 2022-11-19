========================To run the tests, please use the following commands:======================================
    *To run the add to cart test suite- npx wdio run wdio.conf.js --spec ./test/specs/addItems2Cart.e2e.js
    *To run the auto signup test suite- npx wdio run wdio.conf.js --spec ./test/specs/autoSignup.e2e.js
    *To run the checkout Process test suite- npx wdio run wdio.conf.js --spec ./test/specs/checkoutProcess.e2e.js
    *To run the order History test suite- npx wdio run wdio.conf.js --spec ./test/specs/orderHistoryCheck.e2e.js
    *To run the signup process test suite- npx wdio run wdio.conf.js --spec ./test/specs/signupProcess.e2e.js
===================================================================================================================

========================================The checkoutProcess=========================================================

The test execute on the premise that the user being logged in already exists and has at least one item added to the cart
* The first time this test suite is ran, these conditions will be true
*For any additional tests eg if this test is to run a cross another browser, then please use one of the following logins:
        **email address: leotolstoy@gmail.com      password: War&Peace21
        **email address: marktwain@gmail.com      password: TomSawyer21
========================================================================================================================

==============================================Sign up Process===========================================================
The signupProcess has two tests in the test suite: 
    *Valid new user signup
    *New user signup with an existing email (Unhappy path)

The valid new user signup will fail if ran more than once. If the test needs to be run more than uonce, please change the
arguments of line 10 with any of the following:
    **  ('Kurt', 'Vonnegut', 'kurtvonnegut@gmail.com','CatsCradle21','CatsCradle21')
    **  ('Ian', 'Fleming', 'ianfleming@gmail.com','JamesBond21','JamesBond21')
===============================================================================================================================


============================================AutoSignup Process==============================================================
The Autosignup Process Test Suite is a data-driven test. It uses the data in the signData sheet to feed info to the test.
There are three tests in the suite:
    *Auto sign up valid new users
    *Auto sign up a user with a blank email field (unhappy path)
    *Auto signup a user with mismatched passwords (unhappy path)

------The signupData sheet has 7 user details:
    * 1 user with mismatched passwords
    * 1 user with a blank email field
    * 5 users with valid info

Please run each of the test in the suite individually using the respective user data by commenting out the other users and using
.only on the test case.
====================================================================================================================================


==============================================Cross Browser Testing==================================================================
The test suite are designed to run in three browser:
    *Chrome (by default)
    *firefox
    *Edge
All 3 are located in the wdio.conf.js file. 
Additional files may need to be downloaded or the tests to be run in firefox and Edge:
    * For firefox:  npm install wdio-geckodriver-service --save-dev
    * For Edge: npm install wdio-edgedriver-service --save-dev
======================================================================================================================================

=======================================================================================================================================
                                                        THANK YOU
=======================================================================================================================================
