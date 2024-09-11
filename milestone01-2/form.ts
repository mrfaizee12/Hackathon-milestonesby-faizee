const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills Section';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills Section';
    }
});
