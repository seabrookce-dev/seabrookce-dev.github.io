/**
 * Handles single-page navigation without refreshing the browser.
 * Keeps the sidebar intact while switching main content pages.
 */
function showPage(pageId) {
    // Hide all page sections
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove active status from all navigation buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Display selected page
    const selectedPage = document.getElementById('page-' + pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Highlight selected button in sidebar
    const selectedBtn = document.getElementById('btn-' + pageId);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}