# tyrion_c
course site with flux+react+express+node+sequelize

Gameplan:
---------

**Finalize basic concepts**
- Secure api calls - authentication
- Secure api calls - authorization
- DONE: Develop multi-table models (eg get course+chapters)
- DONE: Ensure proper responses when no data found
- DONE: JSON error respnses for api calls only. Normal HTML responses for others.
- LATER: Specify parameter validation centrally - is this possible?
- LATER: centralise error JSON object creation
- LATER: node-config to handle configuration ??? current system seems fine. consider if more functionality required

**Flesh out the API**
- Try TDD (mocha + chai) http://code.tutsplus.com/tutorials/testing-in-nodejs--net-35018
- Complete all models & routes for the API
- Specify validations for all models

**Develop front end**
- react + fulxxor (or any other flux implementation)
