user flow:
go to site, enter questions, submit
use phantom to check site
server runs through execution script based on answers, returns a status

ideal state

{questions: [
  {
    q: 'What is the url of your login page?',
    type: 'text'
  },
  {
    q: 'What is the selector for your login form?',
    type: 'text',
    help: '<a href="">How do I find this out?</a>'
<!-- Try to guess at this: id='login', only form on page, action=/session,/login

<!-- - check if hidden, if so, try and make it appear by clicking "login" -->
<!-- Try to guess at:
  selector for username/email input
  selector for password input
  selector for submit button -->
  },

  "it looks like you have a username field at, is that correct?..."
      test -> is type=text, id username, user, u, name=login
    if no, manually enter selector
  "it looks like you have a password field at, is that correct?..."
    if no, manually enter selector
    type=password, id=password, pw, 
  {
    q: 'Give me a valid username',
    type: 'text'
  },
  {
    q: 'Give me the password for that user',
    type: 'text'
  },
  {
    q: 'Give me a non-existant username',
    type: 'text',
    prefill with random gook
  },
  {
    q: 'Give me an invalid username (e.g. too short, not an email address)',
    type: 'text',
    prefill with short random gook
  },
phjs -> Check error messages and confirm
  we tried logging in with the wrong creds and saw these error messages, are they correct?
    no-> manually enter them
Search for 'forgot password' link and confirm
  we tried finding a forgot password but couldn't find one...
    "there isn't one"
    no-> manually enter selector
Search for 'register' link and confirm
  search for: Not a member? Sign up now
  we tried finding a registration link but couldn't find one...
    "there isn't one"
    no-> manually enter selector

]}