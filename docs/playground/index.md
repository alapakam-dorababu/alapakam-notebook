---
hide:
  - footer
---

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <!-- Pyodide -->
    <script src="https://cdn.jsdelivr.net/pyodide/v0.27.1/full/pyodide.js"></script>

    <!-- Monaco Editor -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.47.0/min/vs/loader.min.js"></script>

    <style>
        /* Reset some potential conflicting styles */
        .monaco-playground {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 1em 0;
            border-radius: 0.2rem;
            overflow: hidden;
            box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,.05), 0 0 0.05rem rgba(0,0,0,.1);
            background: #1e1e1e;
            position: relative;
            z-index: 10;
        }

        .monaco-editor-container {
            height: 400px;
            <!-- border: 1px solid #ccc; -->
        }

        .monaco-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px;
            background: #2d2d2d;
            color: white;
            border-bottom: 1px solid #444;
        }

        .monaco-run-button {
            background: teal;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            font-size: 0.8em;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .monaco-status {
            font-size: 0.75em;
        }

        .monaco-output {
            padding: 12px;
            background: #1e1e1e;
            color: #d4d4d4;
            font-family: monospace;
            min-height: 100px;
            max-height: 300px;
            overflow-y: auto;
            white-space: pre-wrap;
            border-top: 1px solid #444;
        }

        .monaco-playground * {
            box-sizing: border-box;
        }
    </style>
</head>
<body>

<div class="monaco-playground">
    <div class="monaco-toolbar">
        <div class="monaco-status" id="monaco-status">Initializing...</div>
        <button class="monaco-run-button" id="monaco-run-button">
            ▶ Run (Ctrl+Enter)
        </button>
    </div>
    <div class="monaco-editor-container" id="monaco-editor"></div>
    <pre class="monaco-output" id="monaco-output"></pre>
</div>

<script>
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.47.0/min/vs' } });

    let monacoEditor;

    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(document.getElementById('monaco-editor'), {
            value: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`,
            language: 'python',
            theme: 'vs-dark',
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: true,
            scrollBeyondLastLine: false,
            renderWhitespace: 'none',
            padding: { top: 10 },
            scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                handleMouseWheel: true
            }
        });

        monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function () {
            evaluatePython();
        });
    });

    const output = document.getElementById("monaco-output");
    const statusElement = document.getElementById("monaco-status");
    const runButton = document.getElementById("monaco-run-button");

    async function initializePyodide() {
        statusElement.textContent = "Loading Python...";
        let pyodide = await loadPyodide({
            stdout: (text) => output.textContent += text + "\n",
            stderr: (text) => output.textContent += text + "\n"
        });
        statusElement.textContent = "Ready";
        return pyodide;
    }

    let pyodideReadyPromise = initializePyodide();

    async function evaluatePython() {
        if (!monacoEditor) return;

        const code = monacoEditor.getValue();
        output.textContent = "";
        statusElement.textContent = "Running...";
        runButton.disabled = true;

        try {
            let pyodide = await pyodideReadyPromise;
            await pyodide.runPythonAsync(code);
            statusElement.textContent = "Execution completed";
        } catch (err) {
            output.textContent = err;
            statusElement.textContent = "Error occurred";
        } finally {
            runButton.disabled = false;
        }
    }

    runButton.addEventListener('click', evaluatePython);
</script>

</body>
</html>
