'use strict';

var userName = prompt('Hi! What is your name?');
alert('Welcome to my site ' + userName);


//write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE
//examples: YES, yes, YEs, yeS, Y, y,

var liveLocationCity = prompt('Do I live in Seattle?').toLowerCase();
if (liveLocationCity === 'no' || liveLocationCity === 'n') {
  alert('That is actually not the case ' + userName );
  // console.log('you are correct. ');
}

var liveLocationState = prompt('Do I live in Washington State?').toLowerCase();
if (liveLocationState === 'yes' || liveLocationState === 'y') {
  alert('Yes, that is correct! ' + userName );
  // console.log('you are correct. ');
}

var snowboardingParticipant = prompt('What about snowboarding, do you think I do that?').toLowerCase();
if (snowboardingParticipant === 'yes' || snowboardingParticipant === 'y') {
  alert('Yes, that is correct! ' + userName );
  // console.log('you are correct. ');
}

var skateboardParticipant = prompt('How about skateboarding, do you think I do that?').toLowerCase();
if (skateboardParticipant === 'yes' || skateboardParticipant === 'y') {
  alert('Yes! That\'s actually how I became interested in snowboarding');
  // console.log('you are correct. ');
}

var surfParticipant = prompt('You are probably noticing a trend by now, so do you think I surf?').toLowerCase();
if (surfParticipant === 'no' || surfParticipant === 'n') {
  alert('No. Unfortunately it\'s too cold in Washington');
  // console.log('you are correct. ');

  alert('Have a good time,' + userName +'!');
}



