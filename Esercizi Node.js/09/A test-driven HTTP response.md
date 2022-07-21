Our integration test in `app.test.js` expects a JSON response.

1. Change the test to expect an HTML response header: Content-Type: text/html

2. Change the test to expect this HTML in response.text:
   `Welcome to the World Wide Web!`

3. Run the test with npm test — it should fail.

4. Update the code in app.js to send the HTTP response the test expects.

5. Run the test with npm test — it should pass.
