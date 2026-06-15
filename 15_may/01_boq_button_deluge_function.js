string button.download_Pdf_Quote(String id)
{
// 	info id;
// 1. Define your template ID
templateId = "670705000002175048";
quoteId = "6707058000002086004";
// 2. Front-end URL structure for Zoho CRM to open the print preview interface
// This allows the browser session to naturally authenticate it
fileUrl = "https://crm.zoho.com/crm/org882800304/tab/Quotes/" + id + "/export-pdf?flag=false&module=Quotes";
// 3. Open it in a new window so the user doesn't lose their current CRM tab
openUrl(fileUrl,"new window");
// templateId = "6707058000002175048";
// quoteId = "6707058000002086004";
// fileUrl = "https://www.zohoapis.com/crm/v2/settings/inventory_templates/" + templateId + "/actions/print_preview?record_id=" + quoteId + "&print_type=pdf";
// pdfFile = invokeurl
// [
// 	url :fileUrl
// 	type :GET
// 	connection:"template_connec"
// ];
// info pdfFile;
// info "test";
return "";
}
