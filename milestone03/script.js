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
    displayResume(resumeData);
});
function displayResume(data) {
    resumeOutput.innerHTML = "\n        <h2>Generated Resume</h2>\n        ".concat(data.profilePic ? "<img src=\"".concat(data.profilePic, "\" alt=\"Profile Picture\">") : '', "\n        <p><strong>Name:</strong> ").concat(data.name, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n    ");
}
