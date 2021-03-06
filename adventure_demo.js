

// All of our questions we will be asking the user
const adventureQuestions = 
[
    'Do you head left or right? (LEFT/RIGHT)',
    'You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path? (FOLLOW/CONTINUE)',
    'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take? (TREASURE/AWAY)',
    'You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. (STAY/ALERT)',
    'You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? (LADDER/STAIRCASE)',
    'The dragon wakes up and sits upright. You only have a moment to respond, to stay or run! (STAY/RUN)',
    'After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? (DRAW/PICK)',
    'You live happily amongst the cats for the rest of your days!',
    'After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.',
    'After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. SHeepish, you return home.',
    'After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.',
    'You and the dragon have an uplifting conversation about local politics and become lifelong friends.',
    'Quickly, you run back to the cave entrance. Sheepish, you return home.',
    'You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with you friends and familt, recounting the story of your days as a sorcerer with the aid of the sketch.',
    'You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.'
];

// All of the valid answers to take from the user. Seperate each by a ';'
const adventureValidAnswers =
[
    'left;right',
    'follow;continue',
    'treasure;away',
    'stay;alert',
    'ladder;staircase',
    'stay;run',
    'draw;pick',
    'END;END',
    'END;END',
    'END;END',
    'END;END',
    'END;END',
    'END;END',
    'END;END',
    'END;END'
];


// All of the valid 'Next Questions'. This will send the user to the index of adventureQuestions[]
// Example: adventureQuestions[0]'s valid answer 'left' will send the user to adventureQuestions[1]
// adventureQuestions[3]'s valid answer 'alert' will send the user to adventureQuestions[8]
const adventureNextQuestion = 
[
    '1;2',
    '3;4',
    '5;6',
    '7;8',
    '9;10',
    '11;12',
    '13;14',
    '-1;-1',
    '-1;-1',
    '-1;-1',
    '-1;-1',
    '-1;-1',
    '-1;-1',
    '-1;-1',
    '-1;-1'
];

function getInput(userPrompt)
{
    // Convert when returning
    return window.prompt(userPrompt).toLowerCase();
}

// param: input => current input of the user
// param: allowedInput[] => array of allowed inputs as lower case
function validateInput(input, allowedInput)
{

    for (let i = 0; i < allowedInput.length; i++)
    {
        // We found a valid input for that question. return index of valid input
        if (allowedInput[i] == input) return i;
    }

    // None found, return error code
    return -1;
}

function getAdventureNextQuestion(currentIndex, quesitonIndex)
{
    return adventureNextQuestion[currentIndex].split(';')[quesitonIndex];
}

function checkForGameEnd(index)
{
    return (getAdventureNextQuestion(index, 0) == -1) ? true : false;
}

var userInput = '';
var i = 0;
do
{

    

    userInput = getInput(adventureQuestions[i]);

    // check for game end
    if (checkForGameEnd(i)) { break; }


    let nextQ = validateInput(userInput, adventureValidAnswers[i].split(';'));

    if (nextQ === -1)
    {
        // User had invalid input. Repeat question.
        continue;
    }

    i = getAdventureNextQuestion(i, nextQ);


// While (pun intended) this may seem dangerous, the user can still throw an exception by pressing cancel and exiting the window prompts / breaking the loop.
} while (true)



