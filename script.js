function createGridItem(imageSrc, textContent, buttonText, buttonClass) {
  var gridContainer = document.getElementById("grid-container");
  //Creates the grid function

  // Creates grid items
  var gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  // Creates an image element
  var image = document.createElement("img");
  image.src = imageSrc;
  gridItem.appendChild(image);

  // Creates a text box
  var textBox = document.createElement("div");
  textBox.classList.add("text-box");
  textBox.textContent = textContent;
  gridItem.appendChild(textBox);

  // Creates a button
  var button = document.createElement("button");
  button.classList.add("button", buttonClass);
  button.textContent = buttonText;
  textBox.appendChild(button);


  gridContainer.appendChild(gridItem);
}

// this has all the information for the grid, including the images used, the text in the image and the button details
createGridItem("whopper ad.jpg", "Earn points and get rewarded with every order on the BK App", "Get Rewarded.", "button-white");
createGridItem("delivery ad.jpg", "Get your flame-grilled favourites straight to your door today!", "Order Now", "button-red");
createGridItem("peppercorn ad.jpg", "150g of Aberdeen Angus or Crispy Chicken with a classic Peppercorn mayo", "Discover the Range", "button-red");
createGridItem("Dorito ad.jpg", "Chicken Fries, but make it Tangy. Get your hands on this tasty collaboration!", "Order Now", "button-red");

function createphonepic(){
var PhonePic = document.createElement("img");
PhonePic.src = "phone nobg.png";
PhonePic.alt = "Picture of a phone";
var container = document.getElementById("phone-pic");

// Append the img element to the container
container.appendChild(PhonePic);
}

createphonepic()

function createTextBox1() {
  var paragraphOne = document.createElement("p");

  // Set the text content of the paragraph
  paragraphOne.innerHTML = "Save £££ \nWith offers on \ndemand.";
  paragraphOne.style.position = "absolute";
  paragraphOne.style.top = "140%";
  paragraphOne.style.right = "20%";

  // Find the container element in your HTML where you want to insert the paragraph
  var container = document.getElementById("SaveMoneyTxt");

  // Append the paragraph element to the container
  container.appendChild(paragraphOne);
}

createTextBox1();

function appstorePics() {
  var applePic = document.createElement("img");
  applePic.src = "app store.jpg";
  applePic.alt = "Picture of the apple app store";
  applePic.style.position = "absolute";
  applePic.style.top = "175%";
  applePic.style.bottom = "0px"; //left, right 

  // Create the first anchor element and set its href attribute
  var applePicLink = document.createElement("a");
  applePicLink.href = "#";
  applePicLink.appendChild(applePic);

  var gpPic = document.createElement("img");
  gpPic.src = "gp store.jpg";
  gpPic.style.position = "absolute";
  gpPic.style.top = "175%";
  gpPic.style.right = "10%";
  gpPic.style.bottom = "0px";
  
  var gpStoreLink = document.createElement("a");
  gpStoreLink.href = "#"; 
  gpStoreLink.appendChild(gpPic);

  var container = document.getElementById("links");

  // Append the anchor elements to the container  
  container.appendChild(applePicLink);
  container.appendChild(gpStoreLink);
}

appstorePics();

function createTextBox2() {
  var paragraphTwo = document.createElement("p");
  paragraphTwo.innerHTML = "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.";
  var container = document.getElementById("LegalTxt");
container.appendChild(paragraphTwo);
}

createTextBox2();

function createFooter() {
  // Create footer element
  let footer = document.createElement("footer");
  footer.style.backgroundColor = "brown";
  footer.style.display = "flex";
  footer.style.justifyContent = "space-between"; //pushes the lists apart

  // Create first list
  let list1 = document.createElement("ul");
  list1.style.listStyle = "none"; // Remove default bullet points
  let header1 = document.createElement("h2");
  header1.textContent = "BK INFO";
  list1.appendChild(header1);

  // Add list items to  the first list
  let bkInfoItems = ["About BK®", "FAQs", "Policies", "Get in touch", "Terms & Conditions", "Guest Trac", "Trademarks"];
  bkInfoItems.forEach(item => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.textDecoration = "underline";
    listItem.style.color = "white"
    list1.appendChild(listItem);
  });

  // Create second list with header "BK and You"
  let list2 = document.createElement("ul");
  list2.style.listStyle = "none"; // Remove default bullet points
  let header2 = document.createElement("h2");
  header2.textContent = "BK and You";
  list2.appendChild(header2);

  // Adds list the information into the bkandyou list
  let bkAndYouItems = ["BK® AND YOU", "Careers", "Privacy Policy", "Modern Slavery Statement", "Tax Strategy"];
  bkAndYouItems.forEach(item => {
    let listItem = document.createElement("li");
    listItem.style.color = "white"
    listItem.style.textDecoration = "underline";
    listItem.textContent = item;
    list2.appendChild(listItem);
  });

  // joins lists to footer
  footer.appendChild(list1);
  footer.appendChild(list2);

  document.body.appendChild(footer);
}

// Call the function to create the footer
createFooter();




