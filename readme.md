# Coding task - Audit tool

This is a coding task app created using Vue3, node.js and express. \
This app is hosted and can be tested: \
Frontend here: [atool.nbtb.eu](https://atool.nbtb.eu/engagements/2021_0001/reviewnotes) \
API here: [api.atool.nbtb.eu](https://api.atool.nbtb.eu/get/users?id=001)

## Installation

Clone repo:
```bash
> git clone https://github.com/nodi37/auditiontool
```
To run the backend run the following commands:
```bash
> cd backend
> npm i
> npm run dev
```

To run frontend run the following commands:
```bash
cd frontend
npm i
npm run serve
```
To build run: 
```bash
npm run build
```


## Usage

### Backend/API

API has two endpoints, for users and notes.
Combining parameters will filter results. 
For example, this API request will return notes with type reviewnote and priority 1.
```javascript
fetch('https://api.atool.nbtb.eu/get/reviewnotes?type=reviewnote&priority=1')
```

Review notes endpoint accepts the following parameters: 

* id - returns note with the given id
* keyword - finds notes with given keyword
* type - returns notes with a given type
* priority - returns notes with a given priority

User endpoint accepts the following parameters: 
* id - returns user with the given id
* name - returns users whose name contains the given keyword

Both endpoints accept also skip and limit parameters. Endpoints return max 3 documents. This is defined by maxQueryCount in index.js 
```javascript
const maxQueryCount = 3;
```
To see the next 3, use the skip query parameter with value 3. You can also limit the number of incoming documents by setting the limit query parameter.

Filters are easy to add. 
1.  Create a new filter function with promise.
2.  Destructure new req.query parameter. 
3.  Add the new function to `const filtered = Promise.all([newFunc(newParam)])`.

### Frontend
App is available at `/engagements/2021_0001/reviewnotes` \
Go directly to this route or navigate thru components before.

* Setting filters will fetch filtered data from API. 
* Load more button loads the 3 following results. 

If API returns fewer documents than the app limit is set to(`const limit = ref(3) in src/engagements/ReviewNotesView.vue`) then the load more button below the table will be disabled. \ 


## My comment

This is a task for a full-stack developer position. Prefered technologies to solve this task were Vue, Vuetify, Node.js and express. I used Vue once before, and this was Vue3. Vuetify documentation says that Vue3 is not supported yet so I wrote my CSS style using the SCSS preprocessor. This is just the second time I used Vue so I needed to check one more time how it works. I used data received with the task but as a full stack developer, I would save data to manage it easily in the frontend. For example, the Priority in Review note object has some sortkey but State already does not. Would be easier to create badge components with some sortkey. There are many things to improve but there was no time for it since I almost needed to learn Vue one more time.
