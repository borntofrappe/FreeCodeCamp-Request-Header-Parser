# Request Header Parser

> Second of five projects required to earn the **API and Microservices** certification @freeCodeCamp.

<!-- Link to the working glitch right [here]() -->

## Preface

This repository documents and stores the code for the second project necessary to earn the mentioned **API and Microservices** certification. 

The project can be found [here on freeCodeCamp](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice), while the details are provided in the [actual working and reference project](https://dandelion-roar.glitch.me/).

The purpose of the application is not extremely distant from the one of the first project. It is indeed necessary to display on the page a JSON object with information connected to the request. Instead of however returning an instance of the `Date` object, the project at hand needs to return information related to the header connected to the request. Hence the literal title of the project.

- Sample request:

```code
[project_url]/api/whoami
```

- Sample response:

```code
{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
```

All that is required is seemingly relate the information which can be retrieved from the `req` argument of the callback function included in the selected route. Given the (apparent) simplicity of the back-end of the application, I therefore decide to spend a little more time designing the homepage of the service.

