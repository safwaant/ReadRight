

![Logo](logo.png)

# Inspiration
Over the past couple of year, COVID has made everyone's lives much more difficult from wearing masks to staying isolated from friends and family. However, students of aged 4 - 8 and students with disabilities had the biggest hit with school systems turning virtual which proved to be inefficient for student learning. Our team thought back on our time as students learning through a virtual school system and began discussing things that worked and things that didn't work for our learning during that time. We specifically focused on how we were all learning a foreign language for school during this time and thought that there could have been a better way of learning a new language. That's where ReadRight comes in.

# What it does
ReadRight is an online web-based service that uses Speech-to-Text APIs, a microphone, and a unique analytical algorithm to show the user a paragraph of text in English and analyzes the way they are speaking in order to provide tips on grammatical or phonetical mistakes as well as improvements on overall diction. In essence given a prompt a user can speak and ReadRight will displays the user's speech with annotations on correctness (i. e. a red crossed out word means incorrect).

# How we built it
This project can be split into 2 parts: the frontend and backend

## Frontend:
The frontend was made using vanilla JavaScript, HTML / CSS and a bit of jQuery. We used a couple of Bootstrap components and styling but most of the core elements were designed from the ground up.
## Backend:
The core aspect of the backend was the analysis algorithm that performs a algorithm to figure out the annotation of a singular word. This was incredibly complex and multilayered but in essence this maps a word to a highlighting (red = incorrect, yellow = out of order, grey = missing words).
The other part of the backend was using Firebases NoSQL RealTime Database to store User authentication info which made the login screen possible.
Challenges we ran into
Some challenges we ran into during our development of ReadRight is that most of the group had NO experience with the technology stack that we were using so in effect we had to learn a significant amount of frontend and backend development on the fly. Another Challenge we ran into was getting the Speech Recognition API to work and especially getting the algorithm to correctly annotate the text. The algorithm took a combined 10 hours to make after multiple attempts and pseudocode

# Accomplishments that we're proud of
One accomplishment we are especially proud of is our analysis algorithm that is able to compare the given paragraph with what the user says and tell which words are out of order, missing, and extra as well as those words specific positions with respect to what the user says.

# What we learned
Using a new tech stack is very hard to adapt to without experience and a simple task such as annotating text a specific color can be extremely challenging

# What's next for ReadRight
Storing relevant analytics for a user, such as accuracy, words per minute etc
Personalizing a home page for a user
Generating random prompts for a user to read, sorting by difficulty level in a fashion similar to TypeRacer prompts.

## Authors

- [@Safwaan Taher](https://www.github.com/safwaant)
- [@Omar Shaban](https://www.github.com/omarshaban0)
- [@Rahul Pil](https://www.github.com/rahulpil)
- [@Ethan Mo](https://www.github.com/Ethanmo)
- [@Guy Hayardeny](https://www.github.com/GuyTron59)


