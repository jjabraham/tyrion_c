# tyrion_c
course site with flux+react+express+node+sequelize

Gameplan:
---------

**Finalize basic concepts**
- test PUT routes
- test DELETE routes
- Secure api calls - authorization
  - add role model
  - n-m relation with user model
- DONE: Develop multi-table models (eg get course+chapters)
- DONE: Ensure proper responses when no data found
- DONE: JSON error responses for api calls only. Normal HTML responses for others.
- DONE: Secure api calls - authentication (jwt )
  - add user model
  - n-m relation with chapter model
- LATER: JWT works. Is there a more robust security method? OAUTH?
- LATER: Specify parameter validation centrally - is this possible? custom middleware.
- LATER: centralize error JSON object creation
- LATER: node-config to handle configuration ??? current system seems fine. consider if more functionality required

**Flesh out the API**
- Try TDD (mocha + chai) http://code.tutsplus.com/tutorials/testing-in-nodejs--net-35018
- Complete all models & routes for the API
- Specify validations for all models

**Develop front end**
- react + fulxxor (or any other flux implementation)
- ember
- aurelia (wait for stable release)
- angular 2.0
