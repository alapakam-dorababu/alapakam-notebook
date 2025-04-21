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
        container.style.marginTop = '8px';
        container.style.marginBottom = '15px';

        // Create button container
        const buttonGroup = document.createElement('div');
        buttonGroup.style.display = 'flex';
        buttonGroup.style.gap = '8px';
        buttonGroup.style.flexWrap = 'wrap';
        buttonGroup.style.marginBottom = '8px';

        // Create run button
        const runButton = createButton('Run', 'py-run-btn', 'var(--md-primary-fg-color)', 'var(--md-primary-bg-color)');

        // Create clear button
        const clearButton = createButton('Clear', 'py-clear-btn', 'var(--md-default-bg-color)', 'var(--md-default-fg-color)', '1px solid var(--md-default-fg-color--lightest)');

        // Create output area
        const output = document.createElement('div');
        output.className = 'py-output';
        output.style.cssText = `
            background: var(--md-code-bg-color);
            border: 1px solid var(--md-default-fg-color--lightest);
            border-radius: 4px;
            padding: 12px;
            margin-top: 8px;
            white-space: pre-wrap;
            font-family: monospace;
            min-height: 20px;
            display: none;
            color: var(--md-code-fg-color);
        `;

        // Button click handlers
        runButton.onclick = async () => {
            runButton.disabled = true;

            const label = runButton.querySelector('span:last-child');
            label.textContent = 'Running...';

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
                label.textContent = 'Run';
            }
        };

        clearButton.onclick = () => {
            output.textContent = '';
            output.style.display = 'none';
        };

        // Assemble elements
        buttonGroup.append(runButton, clearButton);
        container.append(buttonGroup, output);
        pre.parentNode.insertBefore(container, pre.nextSibling);
    });
}

function createButton(text, className, bgColor, textColor, border = 'none') {
    const button = document.createElement('button');
    button.className = className;
    button.style.cssText = `
        padding: 6px 12px;
        background: ${bgColor};
        color: ${textColor};
        border: ${border};
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-width: 80px;
        height: 36px;
        line-height: 1;
    `;

    const iconStyle = `width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;`;

    if (className.includes('run-btn')) {
        button.innerHTML = `
            <span style="${iconStyle}">
                <svg width="100%" height="100%" viewBox="0 0 24 24" style="fill:${textColor}">
                    <path d="M8 5v14l11-7z"></path>
                </svg>
            </span>
            <span>${text}</span>
        `;
    } else if (className.includes('clear-btn')) {
        button.innerHTML = `
            <span style="${iconStyle}">
                <svg width="100%" height="100%" viewBox="0 0 24 24" style="fill:${textColor}">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </span>
            <span>${text}</span>
        `;
    }

    return button;
}

// Start initialization when page loads
window.addEventListener('DOMContentLoaded', initializePyodide);
