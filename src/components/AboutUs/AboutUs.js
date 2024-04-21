const AboutUs = () => {
    return (
        <p>About Us</p>
    )

}
document.addEventListener('DOMContentLoaded', function() {
    var teamSection = document.getElementById('team');
    
    // An example array of team members
    var teamMembers = [
        { name: 'Tennis Player 1', role: 'Role', description: 'Short Bio: Lorem ipsum' },
        // Add more team member objects here
    ];

    // Loop through team members and create HTML
    for (var i = 0; i < teamMembers.length; i++) {
        var member = teamMembers[i];
        var memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        memberDiv.innerHTML = '<img src="path_to_image.png" alt="' + member.name + '">' +
                              '<h3>' + member.name + '</h3>' +
                              '<p>' + member.role + '</p>' +
                              '<p>' + member.description + '</p>';
        teamSection.appendChild(memberDiv);
    }
});


export default AboutUs;