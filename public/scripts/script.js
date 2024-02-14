/** Adds line numbers the provided code block. */
const addLineNumbers = function (codeElement) {
  const lines = codeElement.getElementsByClassName("line")

  for (const [index, line] of [...lines].entries()) {
    const lineNumber = document.createElement("span")
    lineNumber.classList.add("line-number")
    lineNumber.textContent = `${index + 1}`
    line.prepend(lineNumber)
  }
}

const initialize = function () {
  const codeElements = document.querySelectorAll("pre code")

  for (const element of codeElements) {
    addLineNumbers(element)
  }
}

addEventListener("load", () => initialize())
