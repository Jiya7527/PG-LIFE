const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const sidebar=document.querySelector('.nav-list');


const showMenu=()=>{
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active")

}
    // Function to open the modal
    function openSearchModal() {
        document.getElementById("searchModal").style.display = "flex";
    }

    // Function to close the modal
    function closeSearchModal() {
        document.getElementById("searchModal").style.display = "none";
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
        const modal = document.getElementById("searchModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Function to filter properties
    function filterProperties(event) {
        event.preventDefault(); // Prevent form submission

        const locationInput = document.getElementById("location").value.toLowerCase();
        const maxCostInput = parseInt(document.getElementById("max-cost").value, 10);

        // Select all product cards
        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {
            const locationName = card.querySelector(".location-name").textContent.toLowerCase();
            const price = parseInt(card.querySelector(".price p").textContent.replace('/-', ''), 10);

            // Check if the card matches the filter criteria
            const matchesLocation = locationInput ? locationName.includes(locationInput) : true;
            const matchesCost = maxCostInput ? price <= maxCostInput : true;

            if (matchesLocation && matchesCost) {
                card.style.display = "block"; // Show matching cards
            } else {
                card.style.display = "none"; // Hide non-matching cards
            }
        });

        // Close the modal after filtering
        closeSearchModal();
    }

    // Function to reset filters and show all properties
    function resetFilters() {
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(card => {
            card.style.display = "block"; // Show all cards
        });

        // Clear input fields
        document.getElementById("location").value = "";
        document.getElementById("max-cost").value = "";
    }

    // Attach event listeners
    document.querySelector(".search-btn").addEventListener("click", filterProperties);
    document.querySelector(".product-btn").addEventListener("click", resetFilters);
TweenMax.from('.navbar',1,{
    delay:.3,
    x:-40,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-headline',2,{
    delay:.5,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-subtitle',3,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.cta',4,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('form',5,{
    delay:0.3,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-info',6,{
    delay:0.5,
    x:-100,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-card',7,{
    delay:0.5,
    y:200,
    opacity:0,
    ease:Expo.easeInOut
    })
// Open modal function
function openSearchModal() {
    document.getElementById("searchModal").style.display = "flex";
}

// Close modal function
function closeSearchModal() {
    document.getElementById("searchModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("searchModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
