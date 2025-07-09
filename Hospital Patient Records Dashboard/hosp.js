// Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Modal and form elements
    const modalOverlay = document.getElementById('modal-overlay');

    // Patient modal elements
    const patientModal = document.getElementById('patient-modal');
    const addPatientBtn = document.getElementById('add-patient-btn');
    const closePatientModalBtn = document.getElementById('close-patient-modal');
    const cancelPatientBtn = document.getElementById('cancel-patient-btn');
    const patientForm = document.getElementById('patient-form');
    const patientTableBody = document.getElementById('patient-table-body');

    // Doctor modal elements
    const doctorModal = document.getElementById('doctor-modal');
    const addDoctorBtn = document.getElementById('add-doctor-btn');
    const closeDoctorModalBtn = document.getElementById('close-doctor-modal');
    const cancelDoctorBtn = document.getElementById('cancel-doctor-btn');
    const doctorForm = document.getElementById('doctor-form');
    const doctorTableBody = document.getElementById('doctor-table-body');

    // Appointment modal elements
    const appointmentModal = document.getElementById('appointment-modal');
    const addAppointmentBtn = document.getElementById('add-appointment-btn');
    const closeAppointmentModalBtn = document.getElementById('close-appointment-modal');
    const cancelAppointmentBtn = document.getElementById('cancel-appointment-btn');
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentTableBody = document.getElementById('appointment-table-body');

    // Select elements for appointment patient and doctor
    const appointmentPatientSelect = document.getElementById('appointment-patient');
    const appointmentDoctorSelect = document.getElementById('appointment-doctor');

    // Utility function to open modal
    function openModal(modal) {
      modal.classList.remove('hidden');
      modalOverlay.classList.remove('hidden');
    }

    setTimeout(() => {    
      modal.querySelector('input, select, textarea')?.focus(); 
    }, 100);


    // Utility function to close modal
    function closeModal(modal) {
      modal.classList.add('hidden');
      modalOverlay.classList.add('hidden');
    }

    // Generate next ID for Patients, Doctors, Appointments
    function generateNextId(prefix, tableBody) {
      let maxId = 0;
      for (const row of tableBody.rows) {
        const idText = row.cells[0].textContent.trim();
        if (idText.startsWith(prefix)) {
          const num = parseInt(idText.slice(prefix.length));
          if (num > maxId) maxId = num;
        }
      }
      return prefix + String(maxId + 1).padStart(3, '0');
    }

    // Populate appointment selects with current patients and doctors
    function populateAppointmentSelects() {
      // Clear current options
      appointmentPatientSelect.innerHTML = '<option value="">Select patient</option>';
      appointmentDoctorSelect.innerHTML = '<option value="">Select doctor</option>';

      // Patients
      for (const row of patientTableBody.rows) {
        const id = row.cells[0].textContent.trim();
        const name = row.cells[1].textContent.trim();
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${name} (${id})`;
        appointmentPatientSelect.appendChild(option);
      }

      // Doctors
      for (const row of doctorTableBody.rows) {
        const id = row.cells[0].textContent.trim();
        const name = row.cells[1].textContent.trim();
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${name} (${id})`;
        appointmentDoctorSelect.appendChild(option);
      }
    }

    // Add Patient Modal open/close
    addPatientBtn.addEventListener('click', () => {
      patientForm.reset();
      document.getElementById('patient-id').value = generateNextId('P', patientTableBody);
      document.getElementById('patient-id').disabled = true;
      document.getElementById('patient-modal-title').textContent = 'Add Patient';
      openModal(patientModal);
    });
    closePatientModalBtn.addEventListener('click', () => closeModal(patientModal));
    cancelPatientBtn.addEventListener('click', () => closeModal(patientModal));

    // Add Doctor Modal open/close
    addDoctorBtn.addEventListener('click', () => {
      doctorForm.reset();
      document.getElementById('doctor-id').value = generateNextId('D', doctorTableBody);
      document.getElementById('doctor-id').disabled = true;
      document.getElementById('doctor-modal-title').textContent = 'Add Doctor';
      openModal(doctorModal);
    });
    closeDoctorModalBtn.addEventListener('click', () => closeModal(doctorModal));
    cancelDoctorBtn.addEventListener('click', () => closeModal(doctorModal));

    // Add Appointment Modal open/close
    addAppointmentBtn.addEventListener('click', () => {
      appointmentForm.reset();
      document.getElementById('appointment-id').value = generateNextId('A', appointmentTableBody);
      document.getElementById('appointment-id').disabled = true;
      document.getElementById('appointment-modal-title').textContent = 'Add Appointment';
      populateAppointmentSelects();
      openModal(appointmentModal);
    });
    closeAppointmentModalBtn.addEventListener('click', () => closeModal(appointmentModal));
    cancelAppointmentBtn.addEventListener('click', () => closeModal(appointmentModal));

    // Close modal on overlay click
    modalOverlay.addEventListener('click', () => {
      if (!patientModal.classList.contains('hidden')) closeModal(patientModal);
      if (!doctorModal.classList.contains('hidden')) closeModal(doctorModal);
      if (!appointmentModal.classList.contains('hidden')) closeModal(appointmentModal);
    });

    // Add or Edit Patient
  patientForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('patient-id').value.trim();
  const name = document.getElementById('patient-name').value.trim();
  const age = document.getElementById('patient-age').value.trim();
  const gender = document.getElementById('patient-gender').value;
  const contact = document.getElementById('patient-contact').value.trim();

  if (!name || !age || !gender || !contact) {
    alert("All fields are required.");
    return;
  }

  // Send data to PHP backend to save in database
  fetch('patients.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      id,
      name,
      age,
      gender,
      contact,
    }),
  })
  .then(res => res.text())
  .then(response => {
    console.log('Server response:', response);

    // After backend confirms saving, update the table in UI:
    let existingRow = null;
    for (const row of patientTableBody.rows) {
      if (row.cells[0].textContent.trim() === id) {
        existingRow = row;
        break;
      }
    }

    if (existingRow) {
      // Update existing row in the table
      existingRow.cells[1].textContent = name;
      existingRow.cells[2].textContent = age;
      existingRow.cells[3].textContent = gender;
      existingRow.cells[4].textContent = contact;
    } else {
      // Add new row in the table
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-4 py-3 text-sm text-gray-700">${id}</td>
        <td class="px-4 py-3 text-sm text-gray-900 font-medium">${name}</td>
        <td class="px-4 py-3 text-sm text-gray-700">${age}</td>
        <td class="px-4 py-3 text-sm text-gray-700">${gender}</td>
        <td class="px-4 py-3 text-sm text-gray-700">${contact}</td>
        <td class="px-4 py-3 text-sm text-gray-700 space-x-2">
          <button aria-label="Edit patient ${name}" class="text-blue-600 hover:text-blue-800 focus:outline-none edit-patient-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button aria-label="Delete patient ${name}" class="text-red-600 hover:text-red-800 focus:outline-none delete-patient-btn">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      patientTableBody.appendChild(tr);
    }

    closeModal(patientModal);
    populateAppointmentSelects();
  })
  .catch(err => {
    console.error('Error saving patient:', err);
    alert('Failed to save patient data. Please try again.');
  });
});


    // Add or Edit Doctor
    doctorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('doctor-id').value.trim();
      const name = document.getElementById('doctor-name').value.trim();
      const specialty = document.getElementById('doctor-specialty').value.trim();
      const contact = document.getElementById('doctor-contact').value.trim();

      if (!name || !specialty || !contact) return;

      // Check if editing existing doctor
      let existingRow = null;
      for (const row of doctorTableBody.rows) {
        if (row.cells[0].textContent.trim() === id) {
          existingRow = row;
          break;
        }
      }

      if (existingRow) {
        // Update existing row
        existingRow.cells[1].textContent = name;
        existingRow.cells[2].textContent = specialty;
        existingRow.cells[3].textContent = contact;
      } else {
        // Add new row
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="px-4 py-3 text-sm text-gray-700">${id}</td>
          <td class="px-4 py-3 text-sm text-gray-900 font-medium">${name}</td>
          <td class="px-4 py-3 text-sm text-gray-700">${specialty}</td>
          <td class="px-4 py-3 text-sm text-gray-700">${contact}</td>
          <td class="px-4 py-3 text-sm text-gray-700 space-x-2">
            <button aria-label="Edit doctor ${name}" class="text-blue-600 hover:text-blue-800 focus:outline-none edit-doctor-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button aria-label="Delete doctor ${name}" class="text-red-600 hover:text-red-800 focus:outline-none delete-doctor-btn">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        `;
        doctorTableBody.appendChild(tr);
      }

      closeModal(doctorModal);
      populateAppointmentSelects();
    });

    // Add or Edit Appointment
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('appointment-id').value.trim();
      const patientId = appointmentPatientSelect.value;
      const doctorId = appointmentDoctorSelect.value;
      const date = document.getElementById('appointment-date').value;
      const time = document.getElementById('appointment-time').value;

      if (!patientId || !doctorId || !date || !time) return;

      // Get patient and doctor names from tables
      let patientName = '';
      for (const row of patientTableBody.rows) {
        if (row.cells[0].textContent.trim() === patientId) {
          patientName = row.cells[1].textContent.trim();
          break;
        }
      }
      let doctorName = '';
      for (const row of doctorTableBody.rows) {
        if (row.cells[0].textContent.trim() === doctorId) {
          doctorName = row.cells[1].textContent.trim();
          break;
        }
      }

      // Format time to 12-hour with AM/PM
      function formatTime24to12(time24) {
        const [hourStr, minute] = time24.split(':');
        let hour = parseInt(hourStr);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        if (hour === 0) hour = 12;
        return `${hour}:${minute} ${ampm}`;
      }
      const timeFormatted = formatTime24to12(time);

      // Check if editing existing appointment
      let existingRow = null;
      for (const row of appointmentTableBody.rows) {
        if (row.cells[0].textContent.trim() === id) {
          existingRow = row;
          break;
        }
      }

      if (existingRow) {
        // Update existing row
        existingRow.cells[1].textContent = patientName;
        existingRow.cells[2].textContent = doctorName;
        existingRow.cells[3].textContent = date;
        existingRow.cells[4].textContent = timeFormatted;
      } else {
        // Add new row
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="px-4 py-3 text-sm text-gray-700">${id}</td>
          <td class="px-4 py-3 text-sm text-gray-900 font-medium">${patientName}</td>
          <td class="px-4 py-3 text-sm text-gray-700">${doctorName}</td>
          <td class="px-4 py-3 text-sm text-gray-700">${date}</td>
          <td class="px-4 py-3 text-sm text-gray-700">${timeFormatted}</td>
          <td class="px-4 py-3 text-sm text-gray-700 space-x-2">
            <button aria-label="Edit appointment ${id}" class="text-blue-600 hover:text-blue-800 focus:outline-none edit-appointment-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button aria-label="Delete appointment ${id}" class="text-red-600 hover:text-red-800 focus:outline-none delete-appointment-btn">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        `;
        appointmentTableBody.appendChild(tr);
      }

      closeModal(appointmentModal);
    });

    // Delegate edit and delete buttons for patients
    patientTableBody.addEventListener('click', (e) => {
      const editBtn = e.target.closest('.edit-patient-btn');
      const deleteBtn = e.target.closest('.delete-patient-btn');
      if (editBtn) {
        const row = editBtn.closest('tr');
        const id = row.cells[0].textContent.trim();
        const name = row.cells[1].textContent.trim();
        const age = row.cells[2].textContent.trim();
        const gender = row.cells[3].textContent.trim();
        const contact = row.cells[4].textContent.trim();

        document.getElementById('patient-id').value = id;
        document.getElementById('patient-id').disabled = true;
        document.getElementById('patient-name').value = name;
        document.getElementById('patient-age').value = age;
        document.getElementById('patient-gender').value = gender;
        document.getElementById('patient-contact').value = contact;
        document.getElementById('patient-modal-title').textContent = 'Edit Patient';
        openModal(patientModal);
      } else if (deleteBtn) {
        const row = deleteBtn.closest('tr');
        const name = row.cells[1].textContent.trim();
        if (confirm(`Are you sure you want to delete patient "${name}"?`)) {
          row.remove();
          populateAppointmentSelects();
        }
      }
    });

    // Delegate edit and delete buttons for doctors
    doctorTableBody.addEventListener('click', (e) => {
      const editBtn = e.target.closest('.edit-doctor-btn');
      const deleteBtn = e.target.closest('.delete-doctor-btn');
      if (editBtn) {
        const row = editBtn.closest('tr');
        const id = row.cells[0].textContent.trim();
        const name = row.cells[1].textContent.trim();
        const specialty = row.cells[2].textContent.trim();
        const contact = row.cells[3].textContent.trim();

        document.getElementById('doctor-id').value = id;
        document.getElementById('doctor-id').disabled = true;
        document.getElementById('doctor-name').value = name;
        document.getElementById('doctor-specialty').value = specialty;
        document.getElementById('doctor-contact').value = contact;
        document.getElementById('doctor-modal-title').textContent = 'Edit Doctor';
        openModal(doctorModal);
      } else if (deleteBtn) {
        const row = deleteBtn.closest('tr');
        const name = row.cells[1].textContent.trim();
        if (confirm(`Are you sure you want to delete doctor "${name}"?`)) {
          row.remove();
          populateAppointmentSelects();
        }
      }
    });

    // Delegate edit and delete buttons for appointments
    appointmentTableBody.addEventListener('click', (e) => {
      const editBtn = e.target.closest('.edit-appointment-btn');
      const deleteBtn = e.target.closest('.delete-appointment-btn');
      if (editBtn) {
        const row = editBtn.closest('tr');
        const id = row.cells[0].textContent.trim();
        const patientName = row.cells[1].textContent.trim();
        const doctorName = row.cells[2].textContent.trim();
        const date = row.cells[3].textContent.trim();
        const time = row.cells[4].textContent.trim();

        document.getElementById('appointment-id').value = id;
        document.getElementById('appointment-id').disabled = true;

        // Populate selects and set selected options by matching names and IDs
        populateAppointmentSelects();

        // Find patient option by name or id
        let patientOption = Array.from(appointmentPatientSelect.options).find(opt => opt.textContent.startsWith(patientName) || opt.value === id);
        if (patientOption) appointmentPatientSelect.value = patientOption.value;

        // Find doctor option by name or id
        let doctorOption = Array.from(appointmentDoctorSelect.options).find(opt => opt.textContent.startsWith(doctorName));
        if (doctorOption) appointmentDoctorSelect.value = doctorOption.value;

        document.getElementById('appointment-date').value = date;

        // Convert time from 12-hour to 24-hour for input[type=time]
       function formatTime12to24(time12h) {
  const [time, modifier] = time12h.trim().split(' ');
  let [hours, minutes] = time.split(':').map(str => str.padStart(2, '0'));

  hours = parseInt(hours, 10);

  if (modifier === 'AM') {
    if (hours === 12) hours = 0; // 12 AM => 00
  } else if (modifier === 'PM') {
    if (hours !== 12) hours += 12; // 1–11 PM => 13–23
  }

  // Prevent invalid "24:00"
  if (hours >= 24) hours = 0;

  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

        document.getElementById('appointment-time').value = formatTime12to24(time);

        document.getElementById('appointment-modal-title').textContent = 'Edit Appointment';
        openModal(appointmentModal);
      } else if (deleteBtn) {
        const row = deleteBtn.closest('tr');
        const id = row.cells[0].textContent.trim();
        if (confirm(`Are you sure you want to delete appointment "${id}"?`)) {
          row.remove();
        }
      }
    });

    // Initialize appointment selects on page load
    populateAppointmentSelects();
    // Make sure this script runs after DOM content loads
// 1. Fix patientTableBody id inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const patientTableBody = document.getElementById('patient-table-body');  // fixed ID here

  // rest of your code...
});

// 2. Move focus inside openModal()
function openModal(modal) {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');

  setTimeout(() => {    
    modal.querySelector('input, select, textarea')?.focus(); 
  }, 100);
}

// 3. Add alert on empty form fields for doctor and appointment forms:
doctorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('doctor-name').value.trim();
  const specialty = document.getElementById('doctor-specialty').value.trim();
  const contact = document.getElementById('doctor-contact').value.trim();

  if (!name || !specialty || !contact) {
    alert("All fields are required.");
    return;
  }
  // rest of your code...
});

appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const patientId = appointmentPatientSelect.value;
  const doctorId = appointmentDoctorSelect.value;
  const date = document.getElementById('appointment-date').value;
  const time = document.getElementById('appointment-time').value;

  if (!patientId || !doctorId || !date || !time) {
    alert("All fields are required.");
    return;
  }
  // rest of your code...
});
