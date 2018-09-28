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

## Front End

For the UI of the home page, I wanted to re-iterate on the theme I introduced with the UI of the first project for the back-end certification, with a simple design promoting a single purpose: helping the user discover and learn about the API, the microservice.

The [previous project](https://zest-hoe.glitch.me) achieved this through a simple button, prompting a card on top of the page and describing the purpose through multiple, self-answered queries.

With this project, I instead decided to bring the FAQ-like design directly in the page as it first loads. Inspired by the often-obnoxious chat button a few websites display, the idea is to pick the "messages on a phone" pattern and implement it as follows:

- as the page loads, an iconic character is introduced at the very bottom, perhaps in the horizontal center of the page;

- after a brief delay, a series of messages, in a "bubble" layout are introduced, progressively instructing on the microservice.

The text ought to be snappy, but not exaggerated. Above at all it ought to be concise: it should first of all welcome the user (perhaps with a greeting chosen at random among a few possibilities) and follow up with the particular endpoint and a sample response. Brevity over cleverness.

### Update

The UI making up the homepage of the application, as briefly prefaced in this section, is found in the **Front-End** folder.