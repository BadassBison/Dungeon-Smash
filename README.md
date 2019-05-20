# Dungeon Smash

## Background & Overview

Dungeon smash was a project I worked on over a 4 day period as one of my projects finishing the App Academy bootcamp. Oddly enough this game was inspired by having a friend ask me about sprite sheets and deciding to learn more myself. As growing up with games like Zelda and Earthbound, this was an amazing project to work on. This game gave me an opportunity to explore 2D game mechanics in a whole new light;

## Technologies 

`HTML` / `CSS` / `JavaScript`

## Features

### Sprite animation

There are 4 main sprite sheets used in this project,

* Main Character
* Skeleton
* Fireball
* Explosion

These sprites are being rendered by using one sprite sheet image and looping over the sections that make the animation. Each character has four face positions. The fireballs have animations for 8 positions (includes the diagonals). The explosion looks the cleanest with having 42 different frames to make the animation.

### Main Character Movements

The main characters movements are controled with either the arrow keys or the wasd keys. This was an interested challenge, using event handlers in Javascript you lose the previous key value if another was pressed. This means if you are moving left and tap the space, the movement would stop. Also if you held a key for too long, it would start to autofire either creating a staggering action or a rapid action. 

My technique to solve these problems was to store the information on the key press event handler and to remove that information on the key release event handler. There are x & y speeds applied to these to make this possible. This also enabled diagonal movement.

### Computer Movements

Each computer is using the main characters position as a guide to where to move next. Using this distance calculation;
```javascript
    let dx = computer.x - mainCharacter.x;
    let dy = computer.y - mainCharacter.y;
    let dist = Math.sqrt( dx*dx + dy*dy);
    computer.move({ x: (dx/dist), y: (dy/dist) })
```
I was able to proportionally move the computers fluidly.

### Shooting Fireballs

Fireballs are shoot in the direction of the mouse. They can be fired by click, shift, or space. Using the click was slightly easier to implement, the `click` event handler was able to give me the mouse position information in order to calculate direction. The the key presses, I made another `mouseOver` event handler that consistently updated a mousePos variable that I then would pass to the `keyDown` event handler. 

The fireballs themselfs would store the data of the direction at click and would travel in that direction. Based off that position, I was able to create an algorithm that could determine which sprite animation to render that would most closesly resemble the direction of travel.

There is also sound effects that play with each shot. If the sound is turned on in the game, a new sound object is created with each shot. Only lasting the duration of the sound and then being detached for garbage collection.

### Explosions

When a fireball hits a skeleton, the explosion sprite animation triggers, both the fireball and skeleton are removed, and the explosion sound is triggered. This was one of the most satisfying parts of the project, and if you're curious why, go give my game a try. You will not be disappointed. 

The explosion happens at the exact position of the skeleton it hit, giving the appearance that the skeleton just exploded.

The collision detection is done by checking the fireballs distance from computers computers against the sum of their to radii. If at any point the sum is less then their dist, the explosion would occur.

### Layering Sprites

Layering the sprites in canvas was an essential part to give the appearance of natural distance between sprites. Without this the sprites would overlap in unnatural ways having some sprites appear to be over lapping others even though they are higher on the screen.

To fix this I would sort the characters array based on y position each time before rendering. This would order them accordingly and make it seem as if they were in the correct position at all times

### Bounce Effect

Each character has awareness of every other character, and if they touch, they will slightly bounce apart. If a skeleton touches the main character, the bounce sound will trigger and the main character will take some damage.

### Regenerating Health

When the main character is not being touched, he will be recovering a small amount of health over time.

### Screen Wrap

When the main character leaves the screen, he will appear on the opposite side in a pacman like manner.

### Random Infinite Computer Generation

Computer sprites are randomly generated off screen around the edge of the canvas. This gives the appeal that they are just consistently marching in from all types of distances.

### Healthbar

The healthbar is tied to the main characters health. It decreases each time a skeleton bounces off the main character. Once the main characters health reaches 0, the game is over.

### Kill tracking

Kills are incremented on each skeleton death. This value is shown for players but also used to increment the difficulty.

### Difficulty increment

The generation of skeletons speeds up after every 4 kills. There is no limit to the number of skeletons that can appear, so before you know it you will be staring at an entire army marching to kill you.

### Start Screen Computers Tracking Mouse

The computers here will consistently pursue the mouse for a nice visual of what the game entails. The main character is looping over its run down animation as well.

Upon clicking the play button, all the computers will vanish and you will be left with full control over the main character.