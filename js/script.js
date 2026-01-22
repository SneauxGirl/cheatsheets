// This function is a pencil pusher. No really.
// It does not evaluate, execute, or summon anything.
// It only moves text from one safe place to another.

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".code-container__tab");
    const codeBlocks = document.querySelectorAll(".code-container__code");

    // Load default language ONCE
    loadCode("typescript");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const language = this.getAttribute("data-language");

            // Remove active states
            tabs.forEach(t =>
                t.classList.remove("code-container__tab--active")
            );
            codeBlocks.forEach(c =>
                c.classList.remove("code-container__code--active")
            );

            // Activate selected tab + block
            this.classList.add("code-container__tab--active");
            const activeBlock = document.querySelector(
                `.code-container__code--${language}`
            );
            activeBlock.classList.add("code-container__code--active");

            // Load + highlight (safe to call repeatedly)
            loadCode(language);
        });
    });
});