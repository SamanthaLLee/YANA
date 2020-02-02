## Y.A.N.A.: You Are Not Alone

TechTogether Boston 2020 Submission -- Health Category

# Inspiration
Mental health is a topic often undiscussed -- despite the millions of people combating mental illnesses every day, there exists a stigma against it. As a result, many feel ashamed of their afflictions and choose to keep them hidden.

Y.A.N.A. is a Chrome extension that directs people need resources in the right direction.

(Thank you to Shambhavi Ramaswamy for being a driving force of the brainstorming process!)

# What it does
Y.A.N.A. scans text typed in real time and searches for certain words and phrases indicative of mental health crises. When one is detected, a notification appears on the screen informing the user of available resources.

There are some phrases that obviously warrant action -- "suicidal," "depression," "kill myself" -- but many are subtle. Phrases like "[I] feel worthless," "nothing matters," and other more common expressions may not invoke the same reaction as the others, but are still worth addressing. Y.A.N.A. accounts for such nuances.

Moreover, Y.A.N.A. offers the option to search a block of text for such words and phrases in the case that the user wishes to scan a message from, say, a friend. If the user is concerned about a person, they can automatically paste and send a hotline number.

# How I built it
In a content script, I set up listeners to detect when a user starts typing, and then access and review their input in real time. If a word is detected, Chrome sends a message to the background script, which creates a notification.

Also in the background script, I created a context menu to assist concerned users. Once the context menu is clicked, it either informs the user of whether the text warrants action or pastes a hotline number (based on the click data).

# What's next for Y.A.N.A.
In the future, I hope to implement an interactive popup that allows the user to modify and personalize messages. In addition, I would like it to categorize and detect various mental illnesses and direct users to resources relevant to their specific needs.
