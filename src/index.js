/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "The term bung, when used as a noun, refers to:": [
            "The stopper in a barrel",
            "A skunky beer",
            "A chipped beer mug",
            "A bartender in Australia"
        ]
    },
    {
        "When discussing beer, nose refers to the": [
            "Aroma of the beer",
            "Head of the beer",
            "Bitterness of the beer"
        ]
    },
    {
        "A Trojan horse is a cocktail of Guinness mixed with.": [
            "Cola",
            "Milk",
            "Honey",
            "Cider"
        ]
    },
    {
        "A bloody brew cocktail consists of beer, tomato juice and what other alcohol?": [
            "Vodka",
            "Tequila",
            "Rum",
            "Gin"
        ]
    },
    {
        "The foamy residue on the inside of a glass of beer is called": [
            "Belgian lace",
            "Long Legs",
            "Grist",
            "Drippings"
        ]
    },
    {
        "Bock beer is ofter described as any of the following except": [
            "Ale",
            "Strong",
            "Springtime beer",
            "German"
        ]
    },
    {
        "If you're in a pub and order a Pilsner, what color of beer will they serve you?": [
            "Golden",
            "Red",
            "Black",
            "Brown"
        ]
    },
    {
        "If you order a snake bite cocktail, you'll get beer and": [
            "Hard cider",
            "Gin",
            "Lemonade",
            "Jack Daniels"
        ]
    },
    {
        "What is a beer can widget?": [
            "A device that makes the beer foam",
            "A tab top opener",
            "A plastic frame that holds a six pack together",
            "A flaw or dimple in the aluminum"
        ]
    },
    {
        "Oktoberfest originally started as a": [
            "Wedding party",
            "Baptismal celebration",
            "Harvest festival",
            "Brewer's holiday"
        ]
    },
    {
        "An ale conner was": [
            "an official beer taster",
            "an ale seller",
            "a large ale mug",
            "a beer theif"
        ]
    },
    {
        "What is the world's oldest style of beer?": [
            "Lambic",
            "Indian Pale Ale",
            "Stout",
            "Belgian Double"
        ]
    },
    {
        "In Australia, a slab of beer is a": [
            "Case of 24 beers",
            "Six pack",
            "Pint",
            "Keg"
        ]
    },
    {
        "Low point beer refers to beer that": [
            "Is 3 point 2 percent alcohol by weight",
            "Receives poor reviews from experts",
            "Is non alcoholic",
            "Comes only in cans"
        ]
    },
    {
        "The word pub refers to a liscensed establishment that serves beer and oftentimes other alcoholic beverages. Pub is short for": [
            "Public house",
            "Public drinking",
            "Gastro pub",
            "Public tavern"
        ]
    },
    {
        "A labeorphilist is someone who": [
            "Collects beer bottle labels",
            "Knows everything about beer",
            "Fears beer",
            "Loves to brew beer"
        ]
    },
    {
        "In terms of beer, the acronym I B U stands for": [
            "International bitterness unit",
            "International beer university",
            "International beer unit",
            "Infused barley units"
        ]
    },
    {
        "Darker beers bet their color from": [
            "Barley",
            "Brown rice",
            "Hops",
            "Yeast"
        ]
    },
    {
        "Beers can get their bubbles in a process called": [
            "Bunging",
            "Racking",
            "Cold filtering",
            "Napping"
        ]
    },
    {
        "Fill in the blank. Grapes are to wine as blank are to beer.": [
            "Grains",
            "Hops",
            "Yeasts",
            "Sugars"
        ]
    },
    {
        "A standard keg is": [
            "A half barrel",
            "A quarter barrel",
            "A full barrel",
            "Two barrels"
        ]
    },
    {
        "Which ingredient comes first when brewing beer?": [
            "Mash",
            "Hops",
            "Yeast",
            "Wort"
        ]
    },
    {
        "What are hops?": [
            "Flowers",
            "Grains",
            "Fruit",
            "Fungi"
        ]
    },
    {
        "Beer cans weren't invented until 1933. It took so long because of.": [
            "Exploding beer",
            "Prohibition",
            "Sour beer",
            "Consumer resistance"
        ]
    },
    {
        "Beer and whiskey are both made in a process using grain and.": [
            "yeast and water",
            "hops and water",
            "yeast and hops",
            "malt"
        ]
    },
    {
        "Which spices are used to brew Belgian wheat beer?": [
            "Orange peel and coriander",
            "Oregano and marjoram",
            "Lemon and mint",
            "Peppercorn and dried apple"
        ]
    },
    {
        "Hops at which characteristic to beer?": [
            "Bitterness",
            "Sweetness",
            "Golden color",
            "Foaminess"
        ]
    },
    {
        "What is the expected shelf life of a bottled or canned beer that has been pasteurized?": [
            "one-hundred twenty days",
            "Ninety",
            "six to nine months",
            "one year"
        ]
    },
    {
        "A scientific study in two thousand nine discovered that beer might help prevent": [
            "Osteoporosis",
            "Glaucoma",
            "Heart disease",
            "Prostate cancer"
        ]
    },
    {
        "Hefe is a German word meaning": [
            "Yeast",
            "Hops",
            "Malt",
            "Fruit"
        ]
    },
    {
        "A mash ton is a": [
            "Vessel used in the brewing process",
            "Unit of measurement used during the brewing process",
            "Large barrel of beer",
            "Process of fermentation"
        ]
    },
    {
        "What is dry hopping?": [
            "Adding hops to the beer after fermentation",
            "Adding hops to the beer before the onset of fermentation",
            "Using less than one ounce of hops in a brew",
            "Using more than three ounces of hops in the brew"
        ]
    },
    {
        "What is the definition of a craft brewer in the United States?": [
            "A small, independent and traditional brewer",
            "A brewer that specializes in unconventional flavored beers",
            "The person who is in charge of a brewery",
            "Any brewer who produces fewer than 100 barrels annually"
        ]
    },
    {
        "Once Prohibition ended, what year was homebrewing beer legalized in the United States?": [
            "Nineteen seventy-eight",
            "Nineteen thiry-eight",
            "Nineteen fifty-eight",
            "Ninteen sixty-eight"
        ]
    },
    {
        "Malting is": [
            "A process that modifies barley",
            "The stage at which hops are added to the brew",
            "The final step in the brewing process",
            "The fermentation stage"
        ]
    },
    {
        "Scientific studies show that the shape of the glassware directly influences what in your beer?": [
            "Head augmentation and retention",
            "Temperature",
            "Taste and smell",
            "Color"
        ]
    },
    {
        "Samuel Adams triple bock has an alchol content of.": [
            "seventeen point five percent",
            "twelve point five percent",
            "eight point five percent",
            "five point five percent"
        ]
    },
    {
        "How many Budweiser Clydesdales are hitched to the company's beer wagon?": [
            "Eight",
            "Six",
            "Seven",
            "Ten"
        ]
    },
    {
        "To be classified as a microbrewery, what is the maximum number of barrels a brewery can produce per year?": [
            "fourteen thousand nine-hundred ninety-nine",
            "four thousand nine-hundred ninety-nine",
            "nine thousand nine-hundred ninety-nine",
            "nineteen thousand nine-hundred ninety-nine"
        ]
    },
    {
        "A B V stands for.": [
            "Alcohol by volume",
            "Alcohol by variance",
            "Alcohol by version",
            "Area by volume"
        ]
    },
    {
        "Which country has the highest consumption of beer per capita?": [
            "The Czech Republic",
            "China",
            "United States",
            "Ireland"
        ]
    },
    {
        "How much is a can of Billy Beer currently worth?": [
            "Less than one dollar",
            "Five dollars",
            "Fifty dollars",
            "One hundred dollars"
        ]
    },
    {
        "What type of beer is generally considered the best complement for a hamburger?": [
            "Amber lager",
            "Lambic",
            "Wheat beer",
            "Barley wine"
        ]
    },
    {
        "Anheuser Bush accounts for what percent of the beer consumed in the United States?": [
            "Fifty percent",
            "Seventy five percent",
            "Twenty percent",
            "Ten percent"
        ]
    },
    {
        "A two thousand four study found that people who drink a beer or two a day are more likely to be": [
            "Smart",
            "Tall",
            "Skinny",
            "Ugly"
        ]
    },
    {
        "Which special interest group lobbied Wisconsin to change the state drink from milk to beer?": [
            "P E T A, people for the ethical treatment of animals ",
            "United brewery association",
            "International fraternity council",
            "Anheuser bush"
        ]
    },
    {
        "Ad Age rated which beer slogan in the top ten of all advertising campaigns?": [
            "Tastes Great. Less filling",
            "This bud's for you",
            "Hey mabel, black label",
            "From the land of sky blue waters"
        ]
    },
    {
        "Beverage can pull tabs were invented in": [
            "Nineteen sixty-two",
            "Nineteen fourty-two",
            "Nineteen fifty-two",
            "Nineteen seventy-two"
        ]
    },
    {
        "Beer stein lids were created to": [
            "Protect against the plague.",
            "Keep out dust.",
            "Make sure no one drinks your beer.",
            "Identify personal mugs."
        ]
    },
    {
        "The Pilgrams landed at Plymouth Rock because.": [
            "their ship ran out of beer.",
            "their beer went sour.",
            "they were hungover.",
            "they needed more hops."
        ]
    },
    {
        "Aurthor Guinness signed a lease on his famed brewery for": [
            "nine thousand years",
            "fifty years",
            "one-hundred fifty years",
            "five-hundred years"
        ]
    },
    {
        "Which is the oldest stil-operating brewery in the United States?": [
            "Yingling",
            "Brooklyn Brewery",
            "Boston Beer Company",
            "Dog fish head Brewery"
        ]
    },
    {
        "After repealing Prohibition, who said. I believe this would be a good time for a beer!": [
            "President Franklin Roosevelt.",
            "President Woodrow Wilson.",
            " John D. Rockefeller Junior.",
            "Al Capone."
        ]
    },
    {
        "Which famous person said, Beer is proof that God loves us and wants us to be happy?": [
            "Benjamin Franklin",
            "John Belushi",
            "Chevy Chase",
            "Homer Simpson"
        ]
    },
    {
        "Low-calorie, light beer was introduced to consumers in.": [
            "nineteen seventy-seven.",
            "nineteen sixty-seven.",
            "nineteen eighty-seven.",
            "nineteen ninety-seven."
        ]
    },
    {
        "Rising country star Josh Thompson sings the hit song": [
            "Beer on the table",
            "Beer on the fly",
            "Beer on the mind",
            "Beer on the wall"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions about beer. If you get a question wrong, take a drink. Let's go! ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

