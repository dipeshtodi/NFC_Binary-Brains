document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.group');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('ul').classList.remove('hidden');
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('ul').classList.add('hidden');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const openSidebarButton = document.getElementById("openSidebar");
    const sidebar = document.getElementById("sidebar");

    openSidebarButton.addEventListener("click", function () {
        sidebar.classList.toggle("-translate-x-full");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.relative');
  
    dropdownToggle.addEventListener('click', function() {
      const dropdownMenu = this.querySelector('ul');
      dropdownMenu.classList.toggle('hidden');
    });
  
    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
      const dropdownMenu = dropdownToggle.querySelector('ul');
      if (event.target !== dropdownToggle && !dropdownToggle.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const companyDropdown = document.querySelector('.relative');

    companyDropdown.addEventListener('mouseenter', function () {
      const dropdown = this.querySelector('ul');
      dropdown.classList.remove('hidden');
    });

    companyDropdown.addEventListener('mouseleave', function () {
      const dropdown = this.querySelector('ul');
      dropdown.classList.add('hidden');
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const companyDropdown = document.getElementById('companyDropdown');
    const dropdownList = companyDropdown.querySelector('ul');

    companyDropdown.addEventListener('mouseenter', () => {
      dropdownList.classList.remove('hidden');
    });

    companyDropdown.addEventListener('mouseleave', () => {
      dropdownList.classList.add('hidden');
    });
  });