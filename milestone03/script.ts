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

    displayResume(resumeData);
});

function displayResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        ${data.profilePic ? `<img src="${data.profilePic}" alt="Profile Picture">` : ''}
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
    `;
}
