window.onload = function () {
    // Define LinkedIn Profile URL and Logo Path
    const linkedInURL = 'https://www.linkedin.com/in/siddharth-bhamare-1839a7112';  // Your LinkedIn URL
    const logoSrc = 'linkedin-logo.png';  // Path to your LinkedIn logo image

    // Define the text to display
    const linkText = 'Connect with me on LinkedIn';

    // Create LinkedIn link element
    const linkedInLink = document.createElement('a');
    linkedInLink.href = linkedInURL;
    linkedInLink.target = '_blank'; // Open in new tab
    linkedInLink.classList.add('linkedin-link'); // Add a class for styling

    // Create LinkedIn logo element
    const linkedInLogo = document.createElement('img');
    linkedInLogo.src = logoSrc;
    linkedInLogo.alt = 'LinkedIn Logo';
    linkedInLogo.classList.add('linkedin-logo'); // Add a class for styling

    // Create a text node for the link
    const linkTextNode = document.createTextNode(linkText);

    // Append the logo and text to the link
    linkedInLink.appendChild(linkedInLogo);
    linkedInLink.appendChild(linkTextNode);

    // Append the LinkedIn link to the header and footer
    const headers = document.querySelectorAll('header');
    const footers = document.querySelectorAll('footer');

    headers.forEach(header => {
        header.appendChild(linkedInLink.cloneNode(true)); // Clone the element for each header
    });

    footers.forEach(footer => {
        footer.appendChild(linkedInLink.cloneNode(true)); // Clone the element for each footer
    });
};
