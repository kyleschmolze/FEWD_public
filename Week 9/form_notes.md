## Forms!

### Concepts

- Review front-end vs. back-end
- We often collect input from the user
- Yes, we can process it on the front-end, but often we want to send it to a backend!
- Forms send data to back-ends via parameters. They're kind of like `<a>` tags, but instead of just redirecting, they send data, too!

Example:

	<form action='http://github.com' method='GET'>
		<input type='text' name='firstName' placeholder='Enter your first name...'>
		<input type='text' name='lastName' placeholder='Enter your last name...'>
		<input type='submit' value='Send my name to github!'>
	</form>
	
What happens when we fill out this form?

- What are these attributes doing?- 
	- `form` tag
		- `action`: Where to send the data
		- `method`: How to send it
	- `input` tag
		- `name`: What is this parameter called?
		- `type`: What other types are there?
			- text, checkbox, radio, number, date, month
			- `<select>` tags aren't inputs, but they work the same

**Methods** tell the server what type of action you're trying to accomplish. Generally speaking, GET requests are for forms that are *asking* for information, while POST requests are for *saving* information. Most forms use either GET or POST, but there are others.

Other methods you'll probably never use:

- PATCH: update existing data
- DELETE: delete data
- PUT: A variation on POST

Yes, they're capitalized, and I don't know why. They just are.

- So what's with all of our submit handlers using `return false` and `event.preventDefault();`?
	- Oooohhhhhhhhh
	
- For our purposes, the actual form tag hasn't mattered really at all. When you're submiting to a back-end, however, it matters a lot!
	- Only `input`s and `select`s inside of the form get sent!
