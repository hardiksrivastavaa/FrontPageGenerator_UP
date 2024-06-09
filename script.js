
        // Get references to the district and college dropdowns
        const districtDropdown = document.getElementById('districts');
        const collegeDropdown = document.getElementById('colleges');

        // Function to populate the colleges dropdown based on the selected district
        function populateCollegesDropdown() {
            // Get the selected district
            const selectedDistrict = districtDropdown.value;

            // Clear previous options in the colleges dropdown
            collegeDropdown.innerHTML = '';

            // Populate the colleges dropdown with options based on the selected district
            if (selectedDistrict !== '') {
                const colleges = districtData[selectedDistrict];
                colleges.forEach(college => {
                    const option = document.createElement('option');
                    option.text = college;
                    option.value = college;
                    collegeDropdown.appendChild(option);
                });
            } else {
                // If no district is selected, display a default option
                const option = document.createElement('option');
                option.text = 'Select College';
                option.value = '';
                collegeDropdown.appendChild(option);
            }
        }

        // Add an event listener to the district dropdown
        districtDropdown.addEventListener('change', populateCollegesDropdown);


        function submitForm() {
            var college = document.getElementById("colleges").value;
            var logo = document.getElementById("logoInput").files[0];
            var session = document.getElementById("session").value;
            var yearSem = document.getElementById("yearSem").value;
            var subject = document.getElementById("subject").value;
            var teacher = document.getElementById("teacher").value;
            var branch = document.getElementById("branch").value;
            var name = document.getElementById("name").value;

            var enrollment = document.getElementById("enrollment").value;

        // Check if any field is empty
    if (!college || !session || !yearSem || !subject || !teacher || !name || !branch) {
        alert("Please fill in all fields!!");
        return; 
        // Stop further execution
    }

            sessionStorage.setItem("college", college);
            sessionStorage.setItem("session", session);
            sessionStorage.setItem("yearSem", yearSem);
            sessionStorage.setItem("subject", subject);
            sessionStorage.setItem("teacher", teacher);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("enrollment", enrollment);
            sessionStorage.setItem("branch", branch);

            if (logo) {
                var reader = new FileReader();
                reader.onloadend = function() {
                    sessionStorage.setItem("logo", reader.result);
                    window.location.href = "format.html";
                }
                reader.readAsDataURL(logo);
            } else {
                window.location.href = "format.html";
            }
        }

