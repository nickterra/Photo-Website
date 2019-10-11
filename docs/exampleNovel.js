/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
  "theresa_smile.png", "theresa_confused.png", "gym.jpeg",
  "trail2.jpeg", "market.jpeg", "mt_trail.jpeg", "view.jpeg"
];

/*
    This section pre-loads your images.
    Don't change it unless you know what you're doing.
*/
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

/* Declare variables for characters, positions, and text blocks here */
var script; // this variable will hold your script
var theresa;
var lucky;
var n; // short for "narrator"
var photo;
var textBlock;

var leftSide;
var rightSide;
var upperCenter;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = "music"; // path to your audio directory
    
    // initialize your characters, positions, and text blocks here
    lucky = new Character("Lucky", {color: "rgb(64, 204, 64)"});
    theresa = new Character("Theresa", {color: "#ffff00"});
    n = new Character("");
    
    leftSide = new Position(0, .75, 0, 1);
    rightSide = new Position(800, 450, 1, 1);
    upperCenter = new Position(0.5, 0.5, 0.5, 0.5);
    
    photo = new Character("");  
    lionText = new TextBlock("myText");
    
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "gym.jpeg",
		
		//play music3
				
        n, "I entered the gym. There was nobody there, except for this one girl who was working on the ab cruncher. She must have seen me walking in, because she stopped working out and motioned me to come over to her.",
        theresa, {image: "theresa_smile.png", position: upperCenter},
        theresa, "Hey dude, could you spot me?",
        lucky, "Sure.",
		n, "I watched her two set 40-lb plates on both sides of the bar. As the two of us worked out, I got to know her a little.",
		theresa, "I'm Theresa, by the way. Theresa Lockhart.",
		lucky, "I'm Lucky. Lucky Shotz.",
		theresa, "Nice to meet you, Lucky. Do you go to school around here?",
		lucky, "I'll be a freshman at Lynchburg High School.",
		theresa, "I'll be a sophomore this year. I'm not looking forward to going back. You?",
		lucky, "Well actually, I just moved here yesterday. So I hope this will be a good year.",
		theresa, "After we get done doing this, I have to show you around town.",
		lucky, "That would be great. How many sets do you plan on doing?",
		theresa, "Three sets of twenty.",
		
		scene, "trail2.jpeg",
		n, "So after lifting, Theresa and I hopped on our bikes and headed for the bike trail. My arms were so soar, I could barely keep hold on my handlebars.",
        
        label, "menu1",
        menu,
		[
            "There's a fork in the road, what path would you like to take?",
            "North", [jump, "north"],
            "East", [jump, "east"],
        ],
        
        label, "north",

		n, "We began to travel north, off the trail and into the streets. I looked over my shoulder for any oncoming traffic, but saw nothing.",
		n, "Theresa showed me this other little shortcut through the baseball field, that would take us into Downtown Lynchburg.",
		theresa, "You wanna stop and get something to drink?",
		lucky, "Yes, please!",
		n, "She wanted to stop at this place called The Fresh Air Market. She explained that with her being a vegan, it can be hard for to find a good place to eat.",
		n, "She pulled up in front of a small building on the corner, but not like a hole-in-the-wall building.",
		n, "I was so exhausted, but I didn't want to sit down. I've been doing that for what felt like an hour.",
		scene, "market.jpeg",		
		//play music7
		n, "I found us a table and got us some napkins while she ordered us two fruit smoothies.",
		theresa, {image: "theresa_smile.png", position: upperCenter},
		theresa,  "You like almond milk smoothies?",
		lucky, "I don't know. I've never had one before.",
		theresa, {image: "theresa_confused.png", position: upperCenter},
		theresa, "Oh, you'll love it! It's so much better than any regular old smoothie.",
		lucky, "Well, down the hatch.",
		n, "You drank the BERRY SMOOTHIE W/ ALMOND MILK!",
		lucky, "Damn, that is good!",
		theresa, {image: "theresa_smile.png", position: upperCenter},
		theresa, "Told ya!",
		lucky, "How much do I owe you?",
		theresa, "This one's on me. It's my own little way of saying: Welcome to Lynchburg!",
        jump, "The End",
		
        
        label, "east",
        scene, "mt_trail.jpeg",
		//play music2
		n, "We begin to head east for about a mile down the trail and for whatever reason, Theresa thought it would be fun to take the path that leads us up the mountains.",
		n, "She made it look so effortless, but the funny thing was: I kept up with her for most of the ride up there. I asked her if she planned on stopping soon...",
		theresa, "We're almost there! Just keep it up!",
		lucky, "Almost where?",
		n, "Just then, Theresa made a hard right turn off the trail and onto a more narrow path. The hard clay below was turning my tire treads red and the mosquitoes began to eat away at my face.",
		n, "Sure enough, Theresa got off her bike and walked it over to the end of the path. She parted the branches on one of the trees and a beam of sunlight caught my eye as I followed her out.",
		scene, "view.jpeg",
		n, "Waiting for me on the other side, much to my amazement was the most breathtaking view of the town below us on the foothills of the mountain.",
		n, "Theresa sat her bike down in the grassy area and sat on top of this large rock. She reached into her bag and pulled out two granola bars. She threw one my way.",
		theresa, {image: "theresa_smile.png", position: upperCenter},
		theresa, "Catch!",
		n, "You obtained GRANOLA BAR!",
		theresa, "You did pretty good back there, man. I didn't know you had it in you!",
		lucky, "Thanks. I'd say this was well worth the hike.",
		theresa, "How are you liking Virginia so far?",
		lucky, "It's awesome! It's even better than I thought it was gonna be!",
		theresa, "I'm glad you feel that way. People around here take these things for granted.",
		theresa, "A beautiful view means nothing to them. That's why I wanted to get a reaction from someone who's never been here before.",
		lucky, "Wow...thanks for showing me this.",
		theresa, "Yup. Thank you for coming along with me.",
		jump, "The End",


        label, "The End",
        scene, "trail2.jpeg",
        n, "To read more, buy the FULL VERSION!"
    ];
}
