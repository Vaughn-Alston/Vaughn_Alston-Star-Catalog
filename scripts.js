/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */










// main data array
let shows = [];
// add data using helper function
function addShow(title, image, stars, description) {
  shows.push({ title, image, stars, description });
}


//Star gazing spots will be put here
addShow("Joshua Tree", "images/joshua-tree.jfif", 5, "Joshua Tree is a stunning desert getaway, ideal for camping under the stars. With clear skies, quiet nights, and iconic rock formations, it’s perfect for a peaceful escape or a cozy date outdoors.");

addShow("Griffith Observatory", "images/griffith-park.png", 3, "Griffith Park Observatory, featured in La La Land, is perfect for a date. Enjoy stunning night views for free until 10 PM (closed Mondays), with a small fee for planetarium shows.");

addShow("Mount Wilson Observatory", "images/mount-wilson.jfif", 4, "Mount Wilson Observatory offers breathtaking views and powerful telescopes for stargazing. Just outside LA, it's a peaceful, scenic spot perfect for a date or quiet night under the stars.");

addShow("Garvey Ranch Park", "images/star-party.jpg", 4, "Garvey Ranch Park in Monterey Park is a peaceful spot with public telescope nights at the Garvey Ranch Observatory. It’s perfect for stargazing and makes a cozy, low-key date night under the stars. Located just 10 miles east of downtown Los Angeles, it's a convenient escape from the city lights.");

addShow("Death Valley National Park", "images/death-valley.jfif", 5, "Death Valley National Park is a surreal desert landscape known for its colorful canyons, salt flats, and star-filled skies. Great for adventurous hikes and epic sunset views, it’s a bold date spot for nature lovers. Located about 270 miles from Los Angeles, it’s best as a weekend getaway.");

addShow("Borrego Springs", "images/borrego-springs.jpg", 5, "Borrego Springs is a quiet desert town inside Anza-Borrego Desert State Park, known for stargazing, scenic hikes like Palm Canyon and Slot Canyon, and peaceful vibes. Just 3 hours (150 miles) from LA, it’s a perfect weekend getaway for nature and date adventures.");

addShow("Malibu Creek State Park", "images/malibu-creek.png", 2, "Malibu Creek State Park is a scenic spot just 25 miles from LA, perfect for hiking, picnics, and romantic date strolls. While it's not ideal for stargazing due to light pollution, its natural beauty and peaceful vibes still make for a great evening escape.");

addShow("Big Bear Lake", "images/Big-Bear.jpg", 4, "Big Bear Lake is a mountain getaway 100 miles from LA, perfect for hiking, cozy dates, and stargazing. With scenic trails, lakeside cabins, and clear night skies, it’s ideal for both adventure and romance.");

addShow("Angeles National Forest", "images/angeles-forest.webp", 4, "Angeles National Forest is just 30 miles from LA and perfect for hiking, stargazing, or a peaceful date. With scenic trails and dark skies, it’s a quick escape into nature and romance.");

addShow("Antelope Valley", "images/antelope-valley.jpeg", 4, "Antelope Valley is a desert escape just 65 miles from LA, known for stargazing and spring wildflower hikes. With open skies and peaceful trails, it’s great for a scenic date or outdoor adventure.");

addShow("Red Rock Canyon", "images/red-rock.jpg", 5, "Red Rock Canyon State Park is 2 hours (113 miles) from LA and known for its striking red cliffs, scenic hikes, and dark skies. It’s a great spot for stargazing or a quiet, adventurous desert date.");

addShow("Crystal Lake Rec", "images/crystal-lakes.webp", 4, "Crystal Lake Recreation Area is a peaceful mountain getaway about 26 miles from Azusa. With scenic hikes, cool forest air, and clear night skies, it’s a great spot for stargazing or a quiet outdoor date.");

addShow("Big Bear Solar", "images/big-bear.jpeg", 4, "Big Bear Solar Observatory sits on the edge of Big Bear Lake, about 2 hours from LA. While it's focused on solar research, the surrounding area offers great stargazing, scenic hikes, and cozy date opportunities in the mountains.");

addShow("Torrance Beach", "images/torrance-beach.jpg", 1, "Torrance Beach is a peaceful coastal spot just 20 miles from LA, perfect for sunset walks, casual dates, and scenic ocean views. While not ideal for stargazing, it offers a relaxing beachside escape.");




// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(filtered = shows) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (const show of filtered) {
    const nextCard = templateCard.cloneNode(true); // typo fixed
    editCardContent(nextCard, show);               // variable corrected
    cardContainer.appendChild(nextCard);           // typo fixed
  }
}


function editCardContent(card, show) {
  card.style.display = "block";

  card.querySelector("h2").textContent = show.title;

  const img = card.querySelector("img");
  img.src = show.image;
  img.alt = `${show.title} Poster`;

  const ul = card.querySelector("ul");
  ul.innerHTML = `
  <li><strong>Star Visibility:</strong> ${"⭐".repeat(show.stars)}</li>
  <li><em>${show.description}</em></li>
`;
}

function sortCatalog(criteria) {
  let sorted = [...shows];

  if (criteria === "stars-desc") {
    sorted.sort((a, b) => b.stars - a.stars);
  } else if (criteria === "stars-asc") {
    sorted.sort((a, b) => a.stars - b.stars);
  }

  showCards(sorted);
}









// Quote button
function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

// Remove last card
function removeLastCard() {
  shows.pop();
  showCards();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");

  if (input) {
    input.addEventListener("keyup", () => {
      const term = input.value.toLowerCase();

      const filtered = shows.filter(show =>
        show.title.toLowerCase().includes(term)
      );
      if(filtered.length === 0)  // adding a messege incase search not found
      {
        cardContainer.innerHTML = `
          <p style="text-align: center; color: white; font-size: 1.2em; margin-top: 20px;">
            No results found for "<strong>${term}</strong>".
          </p>
        `;
      } else {

      
      showCards(filtered);
      }
    });
  }

  showCards(); // still display all cards on load
});




