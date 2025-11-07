// Sample data
let listings = [
  {
    title: "Data Structures Book",
    category: "Book",
    price: "₹200",
    description: "Good condition, available for lending.",
  },
  {
    title: "Operating System Notes",
    category: "Notes",
    price: "Free",
    description: "Detailed handwritten notes for Semester 3.",
  },
  {
    title: "Physics Lab Kit",
    category: "Equipment",
    price: "₹100/day",
    description: "For physics experiments, in great shape.",
  },
];

// Display listings
function displayListings(data, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No listings found.</p>";
    return;
  }

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "listing";
    div.innerHTML = `
      <img src="https://via.placeholder.com/100" alt="Item Image">
      <div class="listing-details">
        <h3>${item.title}</h3>
        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

// Search listings
function searchListings() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = listings.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
  );
  displayListings(filtered, "listings");
}

// Add new listing
document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  const newItem = { title, category, price, description };
  listings.push(newItem);

  alert("✅ Listing added successfully!");
  e.target.reset();

  displayListings(listings, "listings");
  displayListings(listings, "myListings");
  showSection("browse");
});

// Navigation between sections
function showSection(section) {
  document.getElementById("browse-section").classList.add("hidden");
  document.getElementById("add-section").classList.add("hidden");
  document.getElementById("my-section").classList.add("hidden");

  document.getElementById(section + "-section").classList.remove("hidden");
}

// Initial setup
displayListings(listings, "listings");
displayListings(listings, "myListings");
