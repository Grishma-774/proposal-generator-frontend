
const API_URL = "http://127.0.0.1:8000/api/generate-pdf/";

export const generateProposalPDF = async (proposal, template) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            proposal,
            template,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "PDF generation failed");
    }

    // Convert the response into a PDF file
    const pdfBlob = await response.blob();

    // Create a download link
    const downloadUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "business_proposal.pdf";

    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
};
