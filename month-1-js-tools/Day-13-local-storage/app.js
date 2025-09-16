// app.js
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- LOGIN (index.html) ---------- */
  const loginForm = document.querySelector("#login");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#username");
      const userName = input.value.trim();

      if (!userName) {
        alert("🚫 Please enter your name!");
        input.focus();
        return;
      }

      // Save username and redirect to booklist
      localStorage.setItem("username", userName);
      window.location.href = "booklist.html";
    });

    // Optional: if you prefer auto-redirect when already logged in:
    // if (localStorage.getItem("username")) window.location.href = "booklist.html";
  }

  /* ---------- BOOKLIST (booklist.html) ---------- */
  const userSpan = document.querySelector("#user");
  if (userSpan) {
    const loggedInUser = localStorage.getItem("username");
    if (!loggedInUser) {
      // Not logged in → go back to login page
      window.location.href = "index.html";
      return; // stop running the rest
    }

    // Show username
    userSpan.textContent = loggedInUser;

    // ELEMENTS (guarded)
    const openModalBtn = document.querySelector("#add-book");
    const modalWrapper = document.querySelector("#modal-wrapper");
    const closeModalBtn = document.querySelector("#close-modal");
    const logoutBtn = document.querySelector("#logout-btn");
    const placeholder = document.querySelector(".placeholder-body");
    const addBookForm = document.querySelector("#add-book-form");

    // Modal show/hide (only if elements exist)
    if (openModalBtn && modalWrapper) {
      openModalBtn.addEventListener("click", () => modalWrapper.classList.add("show-modal"));
    }
    if (closeModalBtn && modalWrapper) {
      closeModalBtn.addEventListener("click", () => modalWrapper.classList.remove("show-modal"));
    }
    window.addEventListener("click", (event) => {
      if (event.target === modalWrapper) modalWrapper.classList.remove("show-modal");
    });

    // Logout
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("username");
        // optionally keep wishlist in storage but remove current session:
        // localStorage.removeItem(`wishlist_${loggedInUser}`);
        window.location.href = "index.html";
      });
    }

    /* ---------- Wishlist storage + rendering ---------- */
    const wishlistKey = `wishlist_${loggedInUser}`;
    const container = document.querySelector(".container"); // where to append list
    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    function renderWishlist() {
      // remove existing rendered list if present
      const existing = document.querySelector(".wishlist-container");
      if (existing) existing.remove();

      if (!wishlist.length) {
        if (placeholder) placeholder.style.display = "block";
        return;
      } else {
        if (placeholder) placeholder.style.display = "none";
      }

      const wrapper = document.createElement("div");
      wrapper.className = "wishlist-container";

      wishlist.forEach((book, i) => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
          <div class="book-card-inner">
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-year">${book.year || ""}</p>
            <div class="book-actions">
              <button class="remove-btn" data-i="${i}">Remove</button>
            </div>
          </div>
        `;
        wrapper.appendChild(card);
      });

      if (container) container.appendChild(wrapper);

      // attach remove handlers
      wrapper.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const idx = Number(e.target.dataset.i);
          wishlist.splice(idx, 1);
          localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
          renderWishlist();
        });
      });
    }

    // simple escape helper to avoid injecting HTML from input
    function escapeHtml(str = "") {
      return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    }

    renderWishlist();

    // Add-book form handling (inside modal). Make sure your form has a submit button.
    if (addBookForm && modalWrapper) {
      addBookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#book-title").value.trim();
        const year = document.querySelector("#pub-year").value.trim();
        const cover = document.querySelector("#cover-url").value.trim();

        if (!title) {
          alert("Please enter a book title");
          return;
        }

        wishlist.push({ title, year, cover });
        localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
        addBookForm.reset();
        modalWrapper.classList.remove("show-modal");
        renderWishlist();
      });
    }
  } // end if userSpan
}); // end DOMContentLoaded
