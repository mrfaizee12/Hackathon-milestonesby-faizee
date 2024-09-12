interface ResumeData {
    name: string;
    phone: string;
    email: string;
    education: string;
    experience: string;
    skills: string;
    profilePic?: string;
}

const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

generateBtn.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    let profilePicUrl = '';

    // Check if a file was selected
    if (profilePicInput.files && profilePicInput.files[0]) {
        const file = profilePicInput.files[0];
        profilePicUrl = URL.createObjectURL(file); // Creates a temporary URL for the selected image
    }

    const resumeData: ResumeData = {
        name,
        phone,
        email,
        education,
        experience,
        skills,
        profilePic: profilePicUrl
    };

    displayEditableResume(resumeData);
});

function displayEditableResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
        <h2><b>Editable Generated Resume</b></h2>
        ${data.profilePic ? `<img src="${data.profilePic}" alt="Profile Picture" style="border-radius: 50%; max-width: 150px;">` : ''}
        <p><strong>Name:</strong> <input type="text" value="${data.name}" id="editName"></p>
        <p><strong>Phone:</strong> <input type="text" value="${data.phone}" id="editPhone"></p>
        <p><strong>Email:</strong> <input type="email" value="${data.email}" id="editEmail"></p>
        <p><strong>Education:</strong> <input type="text" value="${data.education}" id="editEducation"></p>
        <p><strong>Experience:</strong> <textarea id="editExperience">${data.experience}</textarea></p>
        <p><strong>Skills:</strong> <input type="text" value="${data.skills}" id="editSkills"></p>
        <button id="saveBtn">Save Changes</button>
    `;

    // Attach event listener for the "Save Changes" button
    const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
    saveBtn.addEventListener('click', () => {
        saveResume();
    });
}

function saveResume(): void {
    const updatedData: ResumeData = {
        name: (document.getElementById('editName') as HTMLInputElement).value,
        phone: (document.getElementById('editPhone') as HTMLInputElement).value,
        email: (document.getElementById('editEmail') as HTMLInputElement).value,
        education: (document.getElementById('editEducation') as HTMLInputElement).value,
        experience: (document.getElementById('editExperience') as HTMLTextAreaElement).value,
        skills: (document.getElementById('editSkills') as HTMLInputElement).value
    };

    // Display the updated resume data in a non-editable format (optional)
    resumeOutput.innerHTML = `
        <h2><b>Updated Resume</b></h2>
        <p><strong>Name:</strong> ${updatedData.name}</p>
        <p><strong>Phone:</strong> ${updatedData.phone}</p>
        <p><strong>Email:</strong> ${updatedData.email}</p>
        <p><strong>Education:</strong> ${updatedData.education}</p>
        <p><strong>Experience:</strong> ${updatedData.experience}</p>
        <p><strong>Skills:</strong> ${updatedData.skills}</p>
    `;
}
