

   // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Data storage (simulate backend)
   let books = [];

async function fetchBooks() {
  const res = await fetch('http://localhost/api/books.php');
  books = await res.json();
  renderBooks();
}

async function addBook(newBook) {
  const res = await fetch('http://localhost/api/books.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBook)
  });
  const savedBook = await res.json();
  books.push(savedBook);
  renderBooks();
}



    let students = [
     
    ];

    // Utility to generate unique IDs
    function generateId(collection) {
      return collection.length ? Math.max(...collection.map(item => item.id)) + 1 : 1;
    }

    // Render books in Books section and Admin Books table
    function renderBooks(filter = {}) {
      const tbody = document.getElementById('books-tbody');
      const adminTbody = document.getElementById('admin-books-tbody');
      tbody.innerHTML = '';
      adminTbody.innerHTML = '';

      // Filter books by search, category, availability
      let filteredBooks = books;

      if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        filteredBooks = filteredBooks.filter(book =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          (book.isbn && book.isbn.toLowerCase().includes(searchLower))
        );
      }
      if (filter.category) {
        filteredBooks = filteredBooks.filter(book => book.category === filter.category);
      }
      if (filter.availability) {
        filteredBooks = filteredBooks.filter(book => book.availability === filter.availability);
      }

      filteredBooks.forEach(book => {
        // Books section row
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-indigo-50';
        tr.innerHTML = `
          <td class="border border-indigo-200 px-3 py-2">
            <img alt="Book cover of ${book.title}, cover image" class="w-12 h-16 object-cover rounded" src="${book.cover || 'https://placehold.co/50x70?text=No+Image'}" width="50" height="70"/>
          </td>
          <td class="border border-indigo-200 px-3 py-2 font-medium text-gray-900">${book.title}</td>
          <td class="border border-indigo-200 px-3 py-2">${book.author}</td>
          <td class="border border-indigo-200 px-3 py-2">${book.category}</td>
          <td class="border border-indigo-200 px-3 py-2 text-center">
            <span class="inline-block px-2 py-1 text-xs font-semibold rounded-full ${book.availability === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
              ${book.availability.charAt(0).toUpperCase() + book.availability.slice(1)}
            </span>
          </td>
          <td class="border border-indigo-200 px-3 py-2 text-center space-x-2">
            <button aria-label="View details of ${book.title}" class="text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded view-book-btn" data-id="${book.id}">
              <i class="fas fa-eye"></i>
            </button>
            <button aria-label="${book.availability === 'available' ? 'Issue' : 'Return'} ${book.title}" class="${book.availability === 'available' ? 'text-green-600 hover:text-green-800 focus:ring-green-500' : 'text-red-600 hover:text-red-800 focus:ring-red-500'} focus:outline-none focus:ring-2 rounded issue-return-btn" data-id="${book.id}">
              <i class="${book.availability === 'available' ? 'fas fa-book-reader' : 'fas fa-undo'}"></i>
            </button>
          </td>
        `;
        tbody.appendChild(tr);

        // Admin books table row
        const adminTr = document.createElement('tr');
        adminTr.className = 'hover:bg-indigo-50';
        adminTr.innerHTML = `
          <td class="border border-indigo-200 px-3 py-2 font-medium text-gray-900">${book.title}</td>
          <td class="border border-indigo-200 px-3 py-2">${book.author}</td>
          <td class="border border-indigo-200 px-3 py-2">${book.category}</td>
          <td class="border border-indigo-200 px-3 py-2 text-center space-x-2">
            <button aria-label="Edit ${book.title}" class="text-yellow-600 hover:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded edit-book-btn" data-id="${book.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button aria-label="Remove ${book.title}" class="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded delete-book-btn" data-id="${book.id}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        `;
        adminTbody.appendChild(adminTr);
      });

      // Update total books count
      document.getElementById('total-books-count').textContent = books.length.toLocaleString();
    }

    // Render students in Admin Students table
    function renderStudents() {
      const tbody = document.getElementById('admin-students-tbody');
      tbody.innerHTML = '';

      students.forEach(student => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-indigo-50';
        tr.innerHTML = `
          <td class="border border-indigo-200 px-3 py-2 font-medium text-gray-900">${student.name}</td>
          <td class="border border-indigo-200 px-3 py-2">${student.email}</td>
          <td class="border border-indigo-200 px-3 py-2">${student.enrollment}</td>
          <td class="border border-indigo-200 px-3 py-2 text-center space-x-2">
            <button aria-label="Edit ${student.name}" class="text-yellow-600 hover:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded edit-student-btn" data-id="${student.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button aria-label="Remove ${student.name}" class="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded delete-student-btn" data-id="${student.id}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });

      // Update total students count
      document.getElementById('total-students-count').textContent = students.length.toLocaleString();
    }

    // Initial render
    renderBooks();
    renderStudents();

    // Book Modal Elements
    const bookModal = document.getElementById('book-modal');
    const bookForm = document.getElementById('book-form');
    const bookModalTitle = document.getElementById('book-modal-title');
    const bookModalCancel = document.getElementById('book-modal-cancel');
    const bookModalSubmit = document.getElementById('book-modal-submit');

    // Student Modal Elements
    const studentModal = document.getElementById('student-modal');
    const studentForm = document.getElementById('student-form');
    const studentModalTitle = document.getElementById('student-modal-title');
    const studentModalCancel = document.getElementById('student-modal-cancel');
    const studentModalSubmit = document.getElementById('student-modal-submit');

    // Current editing IDs
    let editingBookId = null;
    let editingStudentId = null;

    // Open Book Modal for Add or Edit
    function openBookModal(edit = false, book = null) {
      bookModal.classList.remove('hidden');
      if (edit && book) {
        bookModalTitle.textContent = 'Edit Book';
        bookForm.title.value = book.title;
        bookForm.author.value = book.author;
        bookForm.category.value = book.category;
        bookForm.availability.value = book.availability;
        bookForm.cover.value = book.cover || '';
        editingBookId = book.id;
      } else {
        bookModalTitle.textContent = 'Add New Book';
        bookForm.reset();
        editingBookId = null;
      }
      bookForm.title.focus();
    }

    // Close Book Modal
    function closeBookModal() {
      bookModal.classList.add('hidden');
      editingBookId = null;
      bookForm.reset();
    }

    // Open Student Modal for Add or Edit
    function openStudentModal(edit = false, student = null) {
      studentModal.classList.remove('hidden');
      if (edit && student) {
        studentModalTitle.textContent = 'Edit Student';
        studentForm.name.value = student.name;
        studentForm.email.value = student.email;
        studentForm.enrollment.value = student.enrollment;
        editingStudentId = student.id;
      } else {
        studentModalTitle.textContent = 'Add New Student';
        studentForm.reset();
        editingStudentId = null;
      }
      studentForm.name.focus();
    }

    // Close Student Modal
    function closeStudentModal() {
      studentModal.classList.add('hidden');
      editingStudentId = null;
      studentForm.reset();
    }

    // Add Book button click
    document.getElementById('add-book-button').addEventListener('click', () => {
      openBookModal(false);
    });

    // Add Student button click
    document.getElementById('add-student-button').addEventListener('click', () => {
      openStudentModal(false);
    });

    // Cancel buttons for modals
    bookModalCancel.addEventListener('click', closeBookModal);
    studentModalCancel.addEventListener('click', closeStudentModal);

    // Close modals on outside click
    window.addEventListener('click', (e) => {
      if (e.target === bookModal) closeBookModal();
      if (e.target === studentModal) closeStudentModal();
    });

    // Book form submit (Add or Edit)
  bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(bookForm);
  const newBook = {
    title: formData.get('title').trim(),
    author: formData.get('author').trim(),
    category: formData.get('category'),
    availability: formData.get('availability'),
    cover: formData.get('cover').trim() || 'https://placehold.co/50x70?text=No+Image'
  };

  if (editingBookId) {
    // Edit existing book
    const index = books.findIndex(b => b.id === editingBookId);
    if (index !== -1) {
      books[index] = { id: editingBookId, ...newBook };
    }
  } else {
    // Add new book
    newBook.id = generateId(books);
    books.push(newBook);
  }
  renderBooks();
  renderStudents(); // in case counts change
  closeBookModal();
});


    // Student form submit (Add or Edit)
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(studentForm);
      const newStudent = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        enrollment: formData.get('enrollment').trim()
      };

      if (editingStudentId) {
        // Edit existing student
        const index = students.findIndex(s => s.id === editingStudentId);
        if (index !== -1) {
          students[index] = { id: editingStudentId, ...newStudent };
        }
      } else {
        // Add new student
        newStudent.id = generateId(students);
        students.push(newStudent);
      }
      renderStudents();
      closeStudentModal();
    });

    // Delegate clicks for edit/delete books and students, issue/return books
    document.body.addEventListener('click', (e) => {
      // Edit book
      if (e.target.closest('.edit-book-btn')) {
        const id = parseInt(e.target.closest('.edit-book-btn').dataset.id);
        const book = books.find(b => b.id === id);
        if (book) openBookModal(true, book);
      }
      // Delete book
      if (e.target.closest('.delete-book-btn')) {
        const id = parseInt(e.target.closest('.delete-book-btn').dataset.id);
        if (confirm('Are you sure you want to delete this book?')) {
          books = books.filter(b => b.id !== id);
          renderBooks();
        }
      }
      // Edit student
      if (e.target.closest('.edit-student-btn')) {
        const id = parseInt(e.target.closest('.edit-student-btn').dataset.id);
        const student = students.find(s => s.id === id);
        if (student) openStudentModal(true, student);
      }
      // Delete student
      if (e.target.closest('.delete-student-btn')) {
        const id = parseInt(e.target.closest('.delete-student-btn').dataset.id);
        if (confirm('Are you sure you want to delete this student?')) {
          students = students.filter(s => s.id !== id);
          renderStudents();
        }
      }
      // Issue or Return book from Books section
      if (e.target.closest('.issue-return-btn')) {
        const id = parseInt(e.target.closest('.issue-return-btn').dataset.id);
        const book = books.find(b => b.id === id);
        if (!book) return;
        if (book.availability === 'available') {
          // Issue book
          if (confirm(`Issue "${book.title}"?`)) {
            book.availability = 'issued';
            renderBooks();
          }
        } else {
          // Return book
          if (confirm(`Return "${book.title}"?`)) {
            book.availability = 'available';
            renderBooks();
          }
        }
      }
    });

    // Book search form submit
    document.getElementById('book-search-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const search = document.getElementById('book-search-input').value.trim();
      const category = document.getElementById('book-category-filter').value;
      const availability = document.getElementById('book-availability-filter').value;
      renderBooks({ search, category, availability });
    });

    // Report generation
    document.getElementById('report-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('report-type').value;
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;
      const output = document.getElementById('report-output');

      if (startDate > endDate) {
        output.innerHTML = `<p class="text-red-600 font-semibold">Start date cannot be after end date.</p>`;
        return;
      }

      // Simulated report data (since no real issue/return data)
      // We'll generate a dummy report based on books and their availability
      let reportHtml = `<h4 class="text-lg font-semibold mb-2">Report: ${type.charAt(0).toUpperCase() + type.slice(1)} from ${startDate} to ${endDate}</h4>`;

      if (type === 'issue') {
        // List books issued (availability = issued)
        const issuedBooks = books.filter(b => b.availability === 'issued');
        if (issuedBooks.length === 0) {
          reportHtml += `<p>No books issued in this period.</p>`;
        } else {
          reportHtml += `<ul class="list-disc pl-5 space-y-1">`;
          issuedBooks.forEach(book => {
            reportHtml += `<li><strong>${book.title}</strong> by ${book.author} (Category: ${book.category})</li>`;
          });
          reportHtml += `</ul>`;
        }
      } else if (type === 'return') {
        // List books available (availability = available)
        const returnedBooks = books.filter(b => b.availability === 'available');
        if (returnedBooks.length === 0) {
          reportHtml += `<p>No books returned in this period.</p>`;
        } else {
          reportHtml += `<ul class="list-disc pl-5 space-y-1">`;
          returnedBooks.forEach(book => {
            reportHtml += `<li><strong>${book.title}</strong> by ${book.author} (Category: ${book.category})</li>`;
          });
          reportHtml += `</ul>`;
        }
      } else if (type === 'overdue') {
        // Simulate overdue books (none in data, so show message)
        reportHtml += `<p>No overdue books in this period.</p>`;
      }

      output.innerHTML = reportHtml;
    });
 