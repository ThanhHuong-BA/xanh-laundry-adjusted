export type Lead = {
  name: string;
  phone: string;
  email: string;
  area: string;
  budget: string;
  hasSpace: string;
};

/**
 * Sends a consultation request.
 *
 * TODO: wire this to the real destination (CRM, Google Apps Script, Zapier/Make webhook…).
 * Set VITE_LEAD_ENDPOINT to a URL that accepts a JSON POST and this will start sending;
 * until then submissions are only logged in the browser console.
 */
export async function submitLead(lead: Lead): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;
  if (!endpoint) {
    console.info('[submitLead] VITE_LEAD_ENDPOINT not set; lead not sent:', lead);
    return;
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...lead, source: 'franchise-landing', submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
}
