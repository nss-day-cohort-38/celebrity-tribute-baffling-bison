var collaborators = [["Alexandra Grant", "https://image.insider.com/5dc18c9744b1c4334c3f78d8?width=1900&format=jpeg&auto=webp", "Illustrator, 'Ode to Happiness (2011)'", "Illustrator, 'Shadows' (2016)"], ["Chad Stahelski", "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/06/1486748866-chad-keanu.jpg", "Stunt Double / Stunt Coordinator, 'Matrix Trilogy' (1999-2003)", "Director, 'John Wick' films (2014-2020)"], ["Alex Winter", "https://www.nme.com/wp-content/uploads/2019/07/Webp.net-resizeimage-3.jpg", "Actor/Co-Star, 'Bill & Ted's Excellent Adventure' (1989)", "Actor/Co-Star, 'Bill & Ted's Bogus Journey' (1991)"]];

var collabHtml;

for (i=0; i<collaborators.length; i++) {
collabHtml = `<div class="collab"><img src="${collaborators[i][2]}" alt="${collaborators[i][1]}" /><h2 class="collabTitle">${collaborators[i][1]}</h2><p class="collabProject">${collaborators[i][3]}</p><p class="collabProject">${collaborators[i][4]}</p></div>`
};