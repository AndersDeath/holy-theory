#!/bin/bash

generate_pdf_from_md() {
    pandoc content/prepared_all.md -o pdf/output_from_md.pdf -V geometry:margin=1in --highlight-style tango
}

generate_pdf_from_md_algorithms() {
   pandoc content/prepared_all_algorithms.md -o pdf/output_from_md_algorithms.pdf --table-of-contents --metadata-file=meta/handbook_algorithms.yaml -V geometry:margin=1in --highlight-style tango
}

generate_pdf_from_html_algorithms() {
    pandoc static/prepared_all_algorithms.html -o pdf/output_from_html_algorithms.pdf --table-of-contents --metadata-file=meta/handbook_algorithms.yaml -V geometry:margin=1in --highlight-style tango
}

generate_pdf_from_html() {
    pandoc static/prepared_all.html -o pdf/output_from_html.pdf -V geometry:margin=1in --highlight-style tango
}

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc is not installed. Please install pandoc and try again."
    exit 1
fi

# Execute the desired command based on the provided argument
case "$1" in
    "generate:pdf:from:md")
        generate_pdf_from_md
        ;;
    "generate:pdf:from:md:algorithms")
        generate_pdf_from_md_algorithms
        ;;
    "generate:pdf:from:html:algorithms")
        generate_pdf_from_html_algorithms
        ;;
    "generate:pdf:from:html")
        generate_pdf_from_html
        ;;
    *)
        echo "Invalid command. Usage: $0 {generate:pdf:from:md|generate:pdf:from:html}"
        exit 1
        ;;
esac

echo "PDF generation completed successfully."