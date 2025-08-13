// Function to wrap code blocks with copy button
function initializeCodeBlocks() {
    document.querySelectorAll('pre').forEach(pre => {
        // Create wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        
        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        
        // Add click handler
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(pre.textContent);
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copy-success');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copy-success');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                copyButton.textContent = 'Failed';
            }
        });
        
        // Replace pre with wrapper containing pre and button
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);
    });
}

// Initialize code blocks when the page loads
document.addEventListener('DOMContentLoaded', initializeCodeBlocks);
