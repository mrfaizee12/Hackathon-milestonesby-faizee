var generateBtn = document.getElementById('generateBtn');
var resumeOutput = document.getElementById('resumeOutput');
generateBtn.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePicInput = document.getElementById('profilePic');
    var profilePicUrl = '';
    // Check if a file was selected
    if (profilePicInput.files && profilePicInput.files[0]) {
        var file = profilePicInput.files[0];
        profilePicUrl = URL.createObjectURL(file); // Creates a temporary URL for the selected image
    }
    var resumeData = {
        name: name,
        phone: phone,
        email: email,
        education: education,
        experience: experience,
        skills: skills,
        profilePic: profilePicUrl
    };
    displayEditableResume(resumeData);
});
function displayEditableResume(data) {
    resumeOutput.innerHTML = "\n        <h2><b>Editable Generated Resume</b></h2>\n        ".concat(data.profilePic ? "<img src=\"".concat(data.profilePic, "\" alt=\"Profile Picture\" style=\"border-radius: 50%; max-width: 150px;\">") : '', "\n        <p><strong>Name:</strong> <input type=\"text\" value=\"").concat(data.name, "\" id=\"editName\"></p>\n        <p><strong>Phone:</strong> <input type=\"text\" value=\"").concat(data.phone, "\" id=\"editPhone\"></p>\n        <p><strong>Email:</strong> <input type=\"email\" value=\"").concat(data.email, "\" id=\"editEmail\"></p>\n        <p><strong>Education:</strong> <input type=\"text\" value=\"").concat(data.education, "\" id=\"editEducation\"></p>\n        <p><strong>Experience:</strong> <textarea id=\"editExperience\">").concat(data.experience, "</textarea></p>\n        <p><strong>Skills:</strong> <input type=\"text\" value=\"").concat(data.skills, "\" id=\"editSkills\"></p>\n        <button id=\"saveBtn\">Save Changes</button>\n    ");
    // Attach event listener for the "Save Changes" button
    var saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', function () {
        saveResume();
    });
}
function saveResume() {
    var updatedData = {
        name: document.getElementById('editName').value,
        phone: document.getElementById('editPhone').value,
        email: document.getElementById('editEmail').value,
        education: document.getElementById('editEducation').value,
        experience: document.getElementById('editExperience').value,
        skills: document.getElementById('editSkills').value
    };
    // Display the updated resume data in a non-editable format (optional)
    resumeOutput.innerHTML = "\n        <h2><b>Updated Resume</b></h2>\n        <p><strong>Name:</strong> ".concat(updatedData.name, "</p>\n        <p><strong>Phone:</strong> ").concat(updatedData.phone, "</p>\n        <p><strong>Email:</strong> ").concat(updatedData.email, "</p>\n        <p><strong>Education:</strong> ").concat(updatedData.education, "</p>\n        <p><strong>Experience:</strong> ").concat(updatedData.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(updatedData.skills, "</p>\n    ");
}
