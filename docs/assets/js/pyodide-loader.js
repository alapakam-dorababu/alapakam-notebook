// Initialize Pyodide when page loads
async function initializePyodide() {
    // Loading feedback
    const loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Loading Python runtime...';
    loadingIndicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--md-primary-fg-color);
            color: var(--md-primary-bg-color);
            padding: 10px;
            border-radius: 5px;
            z-index: 1000;
        `;
    document.body.appendChild(loadingIndicator);

    try {
        // Load Pyodide
        window.pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
        });

        // Set up stdout capture
        await pyodide.runPythonAsync(`
            import sys
            from io import StringIO
            sys.stdout = StringIO()
            sys.stderr = StringIO()
        `);

        loadingIndicator.textContent = 'Ready to run Python code!';
        setTimeout(() => loadingIndicator.remove(), 2000);
        addInteractiveControls();
    } catch (error) {
        loadingIndicator.textContent = `Error loading Python: ${error}`;
        loadingIndicator.style.background = 'var(--md-error-fg-color)';
    }
}

function addInteractiveControls() {
    document.querySelectorAll(".md-code__content").forEach((codeBlock) => {
        const pre = codeBlock.parentElement;

        // Skip if already has controls
        if (pre.nextElementSibling?.classList?.contains('py-controls-container')) {
            return;
        }

        // Create container for controls
        const container = document.createElement('div');
        container.className = 'py-controls-container';
        container.style.cssText = `
            background: var(--md-code-bg-color);
            border: 1px solid var(--md-default-fg-color--lightest);
            border-top: none;
            border-radius: 0 0 4px 4px;
            padding: 8px;
            margin-top: 5px;
        `;

        // Create button container with centered alignment
        const buttonGroup = document.createElement('div');
        buttonGroup.style.cssText = `
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-bottom: 4px;
            align-items: center;
        `;

        // Create run button (small rectangular with rounded corners)
        const runButton = createCheckButton('run', 'py-run-btn', 'var(--md-primary-fg-color)', 'var(--md-primary-bg-color)');

        // Create clear button (small rectangular with rounded corners)
        const clearButton = createCheckButton('clear', 'py-clear-btn', 'var(--md-default-bg-color)', 'var(--md-default-fg-color)', '1px solid var(--md-default-fg-color--lightest)');

        // Create output area
        const output = document.createElement('div');
        output.className = 'py-output';
        output.style.cssText = `
            background: var(--md-code-bg-color);
            border-top: 1px solid var(--md-default-fg-color--lightest);
            padding: 8px 0;
            margin-top: 8px;
            white-space: pre-wrap;
            font-family: monospace;
            min-height: 20px;
            display: none;
            color: var(--md-code-fg-color);
            font-size: 0.9em;
        `;

        // Button click handlers
        runButton.onclick = async () => {
            runButton.disabled = true;

            // Show loading state
            const icon = runButton.querySelector('svg');
            const originalIcon = icon.innerHTML;
            icon.innerHTML = `<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                             <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>`;

            output.style.display = 'block';
            output.textContent = 'Running code...';

            try {
                // Reset stdout/stderr buffers
                await pyodide.runPythonAsync(`
                    sys.stdout = StringIO()
                    sys.stderr = StringIO()
                `);

                // Execute the code
                await pyodide.runPythonAsync(codeBlock.textContent);

                // Get output
                const stdout = pyodide.runPython("sys.stdout.getvalue()");
                const stderr = pyodide.runPython("sys.stderr.getvalue()");

                // Display results
                if (stderr) {
                    output.textContent = `Error:\n${stderr}`;
                    output.style.color = 'var(--md-error-fg-color)';
                } else {
                    output.textContent = stdout || "Code executed successfully (no output)";
                    output.style.color = 'var(--md-code-fg-color)';
                }
            } catch (err) {
                output.textContent = `Error: ${err}`;
                output.style.color = 'var(--md-error-fg-color)';
            } finally {
                runButton.disabled = false;
                icon.innerHTML = originalIcon;
            }
        };

        clearButton.onclick = () => {
            output.textContent = '';
            output.style.display = 'none';
        };

        // Assemble elements
        buttonGroup.append(runButton, clearButton);
        container.append(buttonGroup, output);

        // Style the code block to match
        pre.style.cssText = `
            margin-bottom: 0;
            border-radius: 4px 4px 0 0;
            border: 1px solid var(--md-default-fg-color--lightest);
        `;

        pre.parentNode.insertBefore(container, pre.nextSibling);
    });
}

function createCheckButton(type, className, bgColor, textColor, border = 'none') {
    const button = document.createElement('button');
    button.className = className;
    button.style.cssText = `
        padding: 4px 8px;
        background: ${bgColor};
        color: ${textColor};
        border: ${border};
        border-radius: 4px;
        cursor: pointer;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        font-size: 12px;
        gap: 4px;
    `;

    const iconSize = '14px';

    if (type === 'run') {
        button.innerHTML = `
            <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" style="fill:${textColor}">
                <path d="M8 5v14l11-7z"></path>
            </svg>
            <span>Run</span>
        `;
    } else {
        button.innerHTML = `
            <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" style="fill:${textColor}">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
            <span>Clear</span>
        `;
    }

    return button;
}

// Start initialization when page loads
window.addEventListener('DOMContentLoaded', initializePyodide);