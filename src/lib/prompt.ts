export function getPrompt(value: {
  myGig: string;
  proposalTone?: string;
  clientNeeds: string;
  lengthPerference: "formal" | "friendly" | "persuasive" | "professional";
  outreachType: string;
  additional: string;
}) {
  const upworkPrompt = `Act as an expert freelance proposal writer for Upwork. Based on the following gig or service I offer, craft a highly personalized, persuasive, and professional proposal tailored to a specific client.

Use a friendly yet confident tone that builds trust and clearly communicates how I can solve the client’s problem.

Input Details:
- My Gig/Service: ${value.myGig}
- Client’s Needs or Project Description: ${value.clientNeeds}
- Proposal Tone (Optional): ${
    value.proposalTone || "Adjust tone based on gig type"
  }
- Length Preference: ${value.lengthPerference || "short"}

Structure the Proposal With:
1. A warm and professional greeting/introduction.
2. A short paragraph showing empathy and understanding of the client’s goals or challenges.
3. A tailored solution with why I’m a strong fit — include relevant technical language only if appropriate to the client's understanding level.
4. (Optional) Mention of similar past work, results, or testimonials.
5. A strong call to action inviting the client to start the project, schedule a call, or respond with questions.

Make sure the proposal is:
- Easy to read and client-focused
- Adapted to the client’s technical knowledge (non-technical explanations for non-tech clients)
- Professional, friendly, and persuasive — designed to stand out in competitive Upwork bids

${value.additional && `Additional: ${value.additional}`}

Output only the proposal content — no explanations or markdown formatting. `;

  const emailProposalPrompt = `Act as a professional freelance email proposal writer. Based on the gig or service I offer, write a personalized, persuasive, and professional cold/warm email to a potential client that builds trust and encourages a response.

Use a friendly and respectful tone — not too formal, but confident — and keep the message concise, clear, and value-driven.

Input Details:
- My Gig/Service: ${value.myGig}
- Client’s Needs or Context (if known): ${value.clientNeeds}
- Email Tone (Optional): ${
    value.proposalTone || "Adjust tone based on service and target client"
  }
- Length Preference: ${value.lengthPerference || "short"}

Structure the Email As:
1. Subject line that sparks curiosity or directly offers value
2. Warm, personalized opening (e.g., based on their business, website, or pain point)
3. Brief section showing understanding of their needs or challenges
4. Clear explanation of how I can help and why I’m a good fit
5. (Optional) Reference to similar work, quick credibility signal
6. Clear, low-friction call to action (e.g., "Would you be open to a quick call?" or "Can I send over a few ideas?")
7. Friendly sign-off with my name

Ensure the email is:
- Easy to read and casual-professional
- Adapted to the recipient’s technical knowledge (avoid jargon unless necessary)
- Focused on the client’s benefit, not just my skills
- Designed to encourage replies or further conversation

Only output the final email body and subject line — no extra explanation or markdown.

If any additional instructions, context, client industry, or personalization data are added later, please use them to enhance the email.`;

  if (value.outreachType === "freelance-proposal") {
    return upworkPrompt;
  } else if (value.outreachType === "email") {
    return emailProposalPrompt;
  }
  return `Act like a professional freelance proposal writer. Based on the following gig or service I offer, generate a personalized and compelling proposal I can send to potential clients. Make sure the tone is professional yet friendly, clearly state how I can solve their problem, and include a call-to-action at the end. Here is my gig description/service: ${
    value.myGig
  } Additional context or client needs: ${value.clientNeeds} Proposal tone: ${
    value.proposalTone
      ? value.proposalTone
      : "Make the tone accroding to freelance work gig"
  } Length preference: ${
    value.lengthPerference ? value.lengthPerference : "short"
  } Please structure the proposal with: A warm introduction A paragraph showing understanding of the client's problem My solution and why I’m a great fit (Optional) Mention relevant past work or results A clear call to action to start the project or schedule a chat. And make the make proposal readable and easy to understand, eg. if the work gig is more technical make the proposal also a bit technical and if the work gig is about tech but is described as a now tech user make it easy to undertand for a non tech user. Make it highly persuiative and convincing`;
}
