##Introduction

- The process of making this game was a great experience in that it taught me the necessary process to make native code, the logic of organization and the means to make a basic working game.

- As simple as Tic Tac Toe may seem, it was a learning process. There could have been simpler ways to do this, but I am glad I explored the longer route as it helped me flex and develop coding skills.

##The Wireframe

- Before beginning the actual coding of the project, I wrote down the entire wireframe and plan of attack for the project. I purposefully designed a very simplified HTML/CSS design and intended it to be clean and minimalist considering that as a rookie developer with an arts background, I tend to focus on design over function and often have difficulty linking complex HTML/CSS to clean, functioning Javascript. Images of my notes are attached to this git. (I can attach the physical notes I wrote accordingly if desired; I am fairly proud of my written tactic.)

##The Process

- First, I wrote out my plan of attack including global variables, needed functions and a solid build of the grid with the winning combinations written out. Once I had all of this, I approached my computer and began.

- After building a very basic HTML/CSS setup, leaving room for options for the Advanced buttons and features, I began the Javascript. I initially anticipated building an array for the winning combinations. I originally hardcoded the build but this proved 1) tedious and 2) it just didn't work. With the advice of my colleague, Finn Borge, I set up a for loop for the winning and losing combinations. Unfortunately, the draw combination had to be hardcoded or the for loop would automatically assume there was a Draw every single turn. Frustrating, but valuable.

- From there, I tinkered with random bugs and adjusted my global variables.

##The Good

1. This was a valuable learning experience and built invaluable confidence in my coding skills. I also learned a lot of unique and useful jQuery skills.

2. This is both good and bad but I also learned that there is no shame in restarting a project entirely is the base is not effective. By Saturday, I scrapped my project, moving my then-current work to the basefiller.js file and starting from the bottom up. This allowed me to finish my project without much distress or further butchering any progress I made.

3. Git is a blessing and should be praised as such. I would not have completed this project if I couldn't hop back to my old code and see where I went right and wrong.

##The Bad

1. There are still a few bugs with delays in the player turns.

2. Additionally, I didn't manage to make all of the advanced features I wanted to including sounds, image sprites and the like. I am happy with the way the game operates and appears but I know (based on my own cache of skills I have acquired) that this could be improved. I plan to refine this game for my own personal edification as I love the way it looks and operates.

##What I learned

1. This was a necessary project for me to gain confidence and approach Javascript. As benign and simple as Javascript may seem, it takes a restructuring of mental and tactical approach to properly approach.

2. The first thing after building a VERY basic HTML/CSS base is to step back, assess my functionality then begin Javascript without the visual bells and whistles. Once done with the Javascript, reapproach the the styling and there will be a lot less sorrow.

3. Hardcoding vs. jQuery. Sometimes hardcoding is necessary and will allow your script to run without the distress and Javascript/jQuery gymnastics. Additionally, once I become more comfortable with jQuery, this may not be such a huge issue.

4. If it works, don't push it. I had to put two $(document).ready functions to make the initializing work. There is no shame in not following the normal tactics as long as it works.

5. Knowing the structure and pieces beforehand intimately allows you to approach everything far more confidently.

6. Don't be afraid to ask for help. There's no shame in this.

7. .one() was such an easy way to prevent multiple clicks.

8. I learned how to stop a for loop with what I refer to as a "buster" code. This prevents multiple alerts.

9. Details, details, details. Once you have a base, prevent any potential bugs with the little details and don't be afraid to tinker with code. Git is there to prevent any work that may ultimately damage your code.

10. Javascript and jQuery aren't scary. They follow a hard logic no matter what, regardless of outside factors or your own personal thinking.


11. HTML/CSS styling goes a long way in making your project look a lot cuter. Use it to mask your rookie status :)


Sources:
######Some CSS Help - https://css-tricks.com/examples/hrs/
######Sleepy Totoro .gif - http://media.giphy.com/media/5GEs0boTNSb7y/giphy.gif
######Background - http://www.bianoti.com/pixel-background-gif.html
######Fonts - Google Fonts
######Weekend Survival - Vodka & passive aggressive comments to my friends
