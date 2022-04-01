## Managing Contact  APP

#### Requirements:

Make a web application for contact management; this app must keep the data in memory.

It must have:

- Managing user Log In.
- Interface (form) to create contacts.
- Views that include CRUDs operations (create, read, update, delete).
- It must have a way to send an email to the contact selected.


## Local Environment
Local variable are be loader from .env.local file \
to generate "auth_key" I recommend to use Python secrets library

```python
import secrets
secrets.token_urlsafe(14)
```

[What Really Happened](https://youtu.be/B2lmOei7qfk)